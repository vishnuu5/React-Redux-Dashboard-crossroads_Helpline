function LoadingSpinner() {
  return (
    <div className="card p-12">
      <div className="flex flex-col items-center justify-center">
        <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4"></div>
        <p className="text-muted-foreground font-medium">Loading users...</p>
      </div>
    </div>
  );
}

export default LoadingSpinner;
