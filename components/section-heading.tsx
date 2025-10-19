import { cn } from "@/lib/utils";

export function SectionHeading({
                                 children,
                                 className
                               }: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h2
      className={cn(
        "text-3xl font-bold tracking-tight sm:text-4xl",
        className
      )}
    >
      {children}
    </h2>
  );
}