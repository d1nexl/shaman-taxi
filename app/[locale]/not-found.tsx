import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="text-center">
        <p className="eyebrow justify-center">404</p>
        <h1 className="mt-4 font-display text-4xl font-semibold tracking-tightest sm:text-6xl">
          Stránka nenalezena
        </h1>
        <p className="mt-4 text-muted">Page not found.</p>
        <Link
          href="/cs"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm text-paper transition-colors hover:bg-brass-dark"
        >
          Domů / Home
        </Link>
      </div>
    </main>
  );
}
