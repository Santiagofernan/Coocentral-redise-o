export function RoutePending() {
  return (
    <main
      aria-busy="true"
      className="flex min-h-[calc(100svh-5rem)] items-center justify-center bg-background px-5"
    >
      <div role="status" aria-live="polite" className="flex items-center gap-3 text-foreground">
        <span
          aria-hidden="true"
          className="size-5 animate-spin rounded-full border-2 border-brand/25 border-t-brand"
        />
        <span className="text-base font-medium">Cargando página…</span>
      </div>
    </main>
  );
}
