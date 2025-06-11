export default function Loaders() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div
        className="h-8 w-8 animate-spin rounded-full border-2 border-solid border-slate-300 dark:border-slate-600 border-t-slate-800 dark:border-t-slate-200"
        aria-label="Loading..."
      />
    </div>
  );
}
