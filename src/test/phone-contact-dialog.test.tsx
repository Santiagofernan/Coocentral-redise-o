import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { PhoneContactDialog } from "@/components/site/phone-contact-dialog";

const phone = "318 612 8444";
const clipboardDescriptor = Object.getOwnPropertyDescriptor(navigator, "clipboard");
const execCommandDescriptor = Object.getOwnPropertyDescriptor(document, "execCommand");

function setClipboard(value: Pick<Clipboard, "writeText"> | undefined) {
  Object.defineProperty(navigator, "clipboard", {
    configurable: true,
    value,
  });
}

function setExecCommand(execCommand: (command: string) => boolean) {
  Object.defineProperty(document, "execCommand", {
    configurable: true,
    value: vi.fn(execCommand),
  });
}

afterEach(() => {
  if (clipboardDescriptor) {
    Object.defineProperty(navigator, "clipboard", clipboardDescriptor);
  } else {
    Reflect.deleteProperty(navigator, "clipboard");
  }

  if (execCommandDescriptor) {
    Object.defineProperty(document, "execCommand", execCommandDescriptor);
  } else {
    Reflect.deleteProperty(document, "execCommand");
  }
});

describe("PhoneContactDialog", () => {
  it("uses the selection-based fallback when the Clipboard API is unavailable", async () => {
    setClipboard(undefined);
    setExecCommand(() => {
      expect(document.querySelector("textarea")).toHaveValue(phone);
      return true;
    });

    render(<PhoneContactDialog phone={phone} className="" />);
    fireEvent.click(screen.getByRole("button", { name: phone }));
    fireEvent.click(screen.getByRole("button", { name: "Copiar número" }));

    expect(await screen.findByText("Número copiado al portapapeles.")).toBeInTheDocument();
  });

  it("falls back when the Clipboard API rejects the copy request", async () => {
    setClipboard({
      writeText: vi.fn().mockRejectedValue(new Error("Clipboard access denied")),
    });
    const execCommand = vi.fn(() => true);
    setExecCommand(execCommand);

    render(<PhoneContactDialog phone={phone} className="" />);
    fireEvent.click(screen.getByRole("button", { name: phone }));
    fireEvent.click(screen.getByRole("button", { name: "Copiar número" }));

    expect(await screen.findByText("Número copiado al portapapeles.")).toBeInTheDocument();
    expect(execCommand).toHaveBeenCalledWith("copy");
  });

  it("leaves the number easy to select manually if both copy methods fail", async () => {
    setClipboard(undefined);
    setExecCommand(() => false);

    render(<PhoneContactDialog phone={phone} className="" />);
    fireEvent.click(screen.getByRole("button", { name: phone }));
    fireEvent.click(screen.getByRole("button", { name: "Copiar número" }));

    expect(
      await screen.findByText(/Selecciona el número para copiarlo manualmente/),
    ).toBeInTheDocument();
    const phoneInput = screen.getByRole("textbox", { name: "Número de teléfono" });
    fireEvent.focus(phoneInput);
    expect(phoneInput).toHaveAttribute("readonly");
  });
});
