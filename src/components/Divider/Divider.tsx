import clsx from "clsx";

export interface DividerProps extends React.HTMLAttributes<HTMLElement> {}

export function Divider({ className, ...props }: DividerProps) {
  return (
    <hr
      {...props}
      className={clsx("h-0 border-t-4 border-green-400 w-46", className)}
    />
  );
}
