import { Skeleton } from "@/components/dashboard/Skeleton";

export default function AnalyticsLoading() {
  return (
    <div className="space-y-8">
      <div>
        <Skeleton className="h-7 w-32" />
        <Skeleton className="mt-2 h-4 w-64" />
      </div>

      <div className="rounded-xl border border-line bg-surface p-6">
        <Skeleton className="mb-4 h-4 w-48" />
        <Skeleton className="h-72 w-full" />
      </div>

      <div className="overflow-hidden rounded-xl border border-line bg-surface">
        <div className="space-y-4 p-6">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="space-y-2">
                <Skeleton className="h-4 w-40" />
                <Skeleton className="h-3 w-24" />
              </div>
              <Skeleton className="h-6 w-16 rounded-full" />
              <Skeleton className="h-4 w-12" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}