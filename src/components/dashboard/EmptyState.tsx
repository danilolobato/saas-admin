import { LucideIcon } from "lucide-react";

type Props = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export function EmptyState({ icon: Icon, title, description }: Props) {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16 text-center">
      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-muted">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-sm text-ink">{title}</p>
        <p className="mt-1 max-w-xs text-xs text-muted">{description}</p>
      </div>
    </div>
  );
}