import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface CalloutProps {
  icon?: string;
  children?: React.ReactNode;
  type?: "default" | "warning" | "danger";
}

export default function Callout({
  children,
  icon,
  type = "default",
  ...props
}: CalloutProps) {
  return (
    <div
      className={twMerge(
        clsx("my-6 flex items-start rounded-md border border-l-4 p-4", {
          "border-red-900 bg-red-50 dark:bg-red-800": type === "danger",
          "border-yellow-900 bg-yellow-50 dark:bg-yellow-800":
            type === "warning",
        })
      )}
      {...props}
    >
      {icon && <span className="mr-4 text-2xl">{icon}</span>}
      <div>{children}</div>
    </div>
  );
}
