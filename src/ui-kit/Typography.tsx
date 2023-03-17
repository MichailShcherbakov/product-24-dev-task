import clsx from "clsx";

export type UiTypographyVariant = "h1" | "body1";
export type UiTypographyComponent = "h1" | "p" | "span";

export interface UiTypographyProps extends React.HTMLAttributes<HTMLElement> {
  /**
   * @default "p"
   */
  is?: UiTypographyComponent;
  /**
   * @default "body1"
   */
  variant?: UiTypographyVariant;
}

const TYPOGRAPHY_VARIANTS: Record<UiTypographyVariant, string> = {
  h1: "text-4xl text-slate-400",
  body1: "text-base text-slate-400",
};

export function UiTypography({
  is: Component = "p",
  variant = "body1",
  className,
  ...props
}: UiTypographyProps) {
  return (
    <Component
      {...props}
      className={clsx(TYPOGRAPHY_VARIANTS[variant], className)}
    />
  );
}
