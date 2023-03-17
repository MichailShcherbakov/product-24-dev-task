import clsx from "clsx";

export interface UiButtonProps
  extends React.HTMLAttributes<HTMLButtonElement> {}

export function UiButton({ className, ...props }: UiButtonProps) {
  return (
    <button
      {...props}
      className={clsx(
        "px-6 py-1 w-min h-8 rounded-lg font-normal text-base text-slate-200 hover:text-white hover:bg-green-400 hover:shadow-md shadow-green-400",
        className,
      )}
    />
  );
}
