import clsx from "clsx";
import { UiTypography } from "~/ui-kit/Typography";

export interface CategoryCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  label: string;
  icon: React.ReactNode;
}

export function CategoryCard({
  label,
  icon,
  className,
  ...props
}: CategoryCardProps) {
  return (
    <div
      {...props}
      className={clsx(
        "flex flex-col items-center w-46 overflow-hidden",
        className,
      )}
    >
      <picture className="mb-5.5">{icon}</picture>
      <UiTypography
        is="span"
        variant="body1"
        className="text-center w-full h-fit text-ellipsis overflow-hidden"
      >
        {label}
      </UiTypography>
    </div>
  );
}
