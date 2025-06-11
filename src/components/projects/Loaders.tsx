export default function Loaders() {
  return (
    <div className="flex h-screen items-center justify-center bg-backgroundPrimary dark:bg-darkBackgroundPrimary">
      <div
        className="h-12 w-12 animate-spin rounded-full border-4 border-solid border-buttons border-t-transparent"
        aria-label="Loading..."
      />
    </div>
  );
}
