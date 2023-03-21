import clsx from "clsx";

export type UiTypographyVariant = "h1" | "h2" | "body1" | "body2";
export type UiTypographyComponent = "h1" | "h2" | "p" | "span";

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
  h1: "text-2xl uppercase font-bold text-slate-400 text-center sm:text-3xl lg:text-4xl",
  h2: "text-2xl font-bold text-slate-400 text-center sm:text-3xl lg:text-4xl",
  body1: "text-base text-slate-400 leading-6",
  body2: "text-base font-bold text-slate-400",
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
