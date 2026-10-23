import { describe, expect, it } from "vitest";

import { getGoogleMapsDirectionsUrl } from "@/lib/google-maps";

describe("Google Maps directions", () => {
  it("opens directions to the destination without overriding the user's origin", () => {
    const url = new URL(getGoogleMapsDirectionsUrl("Cra. 12 Sur #2 55, Garzón, Huila"));

    expect(url.origin + url.pathname).toBe("https://www.google.com/maps/dir/");
    expect(url.searchParams.get("api")).toBe("1");
    expect(url.searchParams.get("destination")).toBe("Cra. 12 Sur #2 55, Garzón, Huila");
    expect(url.searchParams.has("origin")).toBe(false);
  });
});
