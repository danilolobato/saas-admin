import { Skeleton } from "@/components/dashboard/Skeleton";

export default function DashboardLoading() {
  return (
    <div className="space-y-8">
      <div>
        <Skeleton className="h-7 w-48" />
        <Skeleton className="mt-2 h-4 w-72" />
      </div>

      <div className="grid grid-cols-1 divide-y divide-line rounded-xl border border-line bg-surface sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="space-y-2 p-5">
            <Skeleton className="h-4 w-28" />
            <Skeleton className="h-7 w-20" />
          </div>
        ))}
      </div>

      <div className="rounded-xl border border-line bg-surface p-6">
        <Skeleton className="mb-4 h-4 w-32" />
        <Skeleton className="h-72 w-full" />
      </div>
    </div>
  );
}