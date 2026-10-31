import { useEffect, useState } from "react";

export function useCurrentTime() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    let timeoutId: number | undefined;

    const scheduleNextUpdate = () => {
      window.clearTimeout(timeoutId);

      if (document.visibilityState !== "visible") return;

      const delay = 60_000 - (Date.now() % 60_000) + 50;
      timeoutId = window.setTimeout(() => {
        setNow(new Date());
        scheduleNextUpdate();
      }, delay);
    };

    const updateClock = () => {
      setNow(new Date());
      scheduleNextUpdate();
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        updateClock();
      } else {
        window.clearTimeout(timeoutId);
      }
    };

    updateClock();
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("focus", updateClock);
    window.addEventListener("pageshow", updateClock);

    return () => {
      window.clearTimeout(timeoutId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("focus", updateClock);
      window.removeEventListener("pageshow", updateClock);
    };
  }, []);

  return now;
}
