import { Skeleton } from "@/components/dashboard/Skeleton";

export default function SettingsLoading() {
  return (
    <div className="max-w-2xl space-y-8">
      <div>
        <Skeleton className="h-7 w-32" />
        <Skeleton className="mt-2 h-4 w-64" />
      </div>

      <div className="rounded-xl border border-line bg-surface p-6">
        <Skeleton className="mb-4 h-4 w-32" />
        <div className="flex items-center gap-4">
          <Skeleton className="h-14 w-14 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-4 w-32" />
            <Skeleton className="h-3 w-40" />
          </div>
        </div>
      </div>

      <div className="rounded-xl border border-line bg-surface p-6">
        <Skeleton className="mb-4 h-4 w-28" />
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
}