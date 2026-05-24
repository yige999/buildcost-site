import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { cn } from "@/lib/utils";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  return (
    <nav aria-label="Breadcrumb" className={cn("flex items-center", className)}>
      <ol className="flex items-center gap-1 text-sm">
        {allItems.map((item, index) => {
          const isLast = index === allItems.length - 1;

          return (
            <li key={index} className="flex items-center gap-1">
              {index > 0 && (
                <ChevronRight className="w-4 h-4 text-secondary-400 flex-shrink-0" />
              )}
              {item.href ? (
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1",
                    isLast
                      ? "text-secondary-900 font-medium"
                      : "text-secondary-600 hover:text-primary transition-colors"
                  )}
                >
                  {index === 0 && <Home className="w-4 h-4" />}
                  {item.label}
                </Link>
              ) : (
                <span
                  className={cn(
                    "flex items-center gap-1",
                    isLast ? "text-secondary-900 font-medium" : "text-secondary-600"
                  )}
                >
                  {index === 0 && <Home className="w-4 h-4" />}
                  {item.label}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
