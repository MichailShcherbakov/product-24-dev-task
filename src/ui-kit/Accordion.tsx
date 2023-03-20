import React from "react";
import clsx from "clsx";
import { UiTypography } from "./Typography";
import { ReactComponent as ArrowIcon } from "~/assets/icons/vector.svg";
import "./Accordion.scss";

export interface AccordionProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  /**
   * @default false
   */
  isExpanded?: boolean;
  id: string;
  icon: React.ReactNode;
  label: string;
  onChange?: (id: string, isExpanded: boolean) => void;
}

function _UiAccordion({
  isExpanded = false,
  id,
  icon,
  label,
  className,
  children,
  onChange,
  ...props
}: AccordionProps) {
  function clickHandler() {
    onChange?.(id, !isExpanded);
  }

  return (
    <div
      {...props}
      className={clsx("border-b border-gray-200 w-full", className)}
    >
      <div
        className="flex flex-row w-full h-15.5 items-center justify-between select-none"
        role="button"
        aria-expanded={isExpanded}
        onClick={clickHandler}
        tabIndex={0}
      >
        <div className="flex flex-row items-center">
          <picture className="flex flex-row items-center justify-center w-10 h-10 mr-6 rounded-full bg-gray-200">
            {icon}
          </picture>
          <UiTypography
            variant="body2"
            className={clsx({
              "!text-green-400": isExpanded,
            })}
          >
            {label}
          </UiTypography>
        </div>
        <span
          className={clsx(
            "flex flex-row items-center justify-center w-5 h-5 text-slate-200",
            {
              "rotate-180": isExpanded,
            },
          )}
        >
          <ArrowIcon />
        </span>
      </div>
      <div
        className={clsx("ui-accordion__content", {
          "ui-accordion--expand": isExpanded,
          "ui-accordion--collapse": !isExpanded,
        })}
      >
        <div className="ml-16 mb-4">
          <UiTypography variant="body1">{children}</UiTypography>
        </div>
      </div>
    </div>
  );
}

export const UiAccordion = React.memo(_UiAccordion);
