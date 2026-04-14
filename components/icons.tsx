export function AppleIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.543 12.724c-.02-2.013 1.646-2.986 1.72-3.034-.937-1.37-2.396-1.558-2.914-1.58-1.24-.124-2.422.73-3.053.73-.63 0-1.602-.712-2.637-.693-1.355.02-2.605.788-3.302 2.003-1.408 2.444-.36 6.06 1.01 8.04.67.968 1.466 2.056 2.506 2.018 1.007-.04 1.388-.653 2.602-.653 1.215 0 1.56.653 2.62.634 1.082-.02 1.767-.988 2.428-1.962.764-1.128 1.08-2.222 1.098-2.28-.024-.01-2.105-.81-2.127-3.212M15.57 6.84c.55-.67.921-1.598.819-2.524-.79.033-1.749.527-2.316 1.195-.509.593-.954 1.54-.834 2.448.88.068 1.78-.448 2.332-1.118" />
    </svg>
  );
}

export function ArrowRightIcon({
  className = "h-4 w-4",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.25"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

export function DownloadIcon({
  className = "h-4 w-4",
}: {
  className?: string;
}) {
  return (
    <svg
      className={className}
      viewBox="0 0 256 256"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M224,144v64a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V144a8,8,0,0,1,16,0v56H208V144a8,8,0,0,1,16,0Zm-101.66,5.66a8,8,0,0,0,11.32,0l40-40a8,8,0,0,0-11.32-11.32L136,124.69V32a8,8,0,0,0-16,0v92.69L93.66,98.34a8,8,0,0,0-11.32,11.32Z" />
    </svg>
  );
}
