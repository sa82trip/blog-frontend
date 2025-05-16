export function PostSkeleton() {
  return (
    <div className="bg-gray-100 rounded-lg animate-pulse">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="h-4 w-16 bg-gray-200 rounded-full"></div>
          <div className="h-4 w-16 bg-gray-200 rounded-full"></div>
        </div>
        <div className="h-4 w-3/4 bg-gray-200 rounded-full mb-2"></div>
        <div className="h-4 w-2/3 bg-gray-200 rounded-full mb-4"></div>
        <div className="flex flex-wrap gap-2">
          <div className="h-4 w-12 bg-gray-200 rounded-full"></div>
          <div className="h-4 w-12 bg-gray-200 rounded-full"></div>
          <div className="h-4 w-12 bg-gray-200 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
