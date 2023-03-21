import clsx from "clsx";
import { UiTypography } from "~/ui-kit/Typography";
import { ReactComponent as QuotesIcon } from "~/assets/icons/quotes.svg";

export type FeedBackCardVariant = "primary" | "default";

export interface FeedBackCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  authorName: string;
  comment: string;
  avatarURL: string;
  /**
   * @default "default"
   */
  variant?: FeedBackCardVariant;
  reverse?: boolean;
}

export const FEEDBACK_CARD_VARIANTS: Record<
  FeedBackCardVariant,
  {
    main: string;
    avatar: string;
    text: string;
  }
> = {
  default: {
    main: "",
    avatar: "w-15 h-15 md:w-24 md:h-24",
    text: "",
  },
  primary: {
    main: "relative flex-col px-4 pt-20 pb-4 rounded-4xl shadow-md md:shadow-none md:flex-row md:p-4",
    avatar:
      "absolute top-0 -translate-y-1/2 w-24 h-24 md:w-46 md:h-46 md:relative md:translate-y-0",
    text: "text-center text-shadow md:text-left md:text-shadow-none ",
  },
};

export function FeedBackCard({
  comment,
  avatarURL,
  authorName,
  variant = "default",
  className,
  reverse,
  ...props
}: FeedBackCardProps) {
  const isPrimary = variant === "primary";
  return (
    <div
      {...props}
      className={clsx(
        "flex w-full p-4 items-center md:items-start ",
        FEEDBACK_CARD_VARIANTS[variant].main,
        reverse ? "flex-row-reverse" : "flex-row",
        className,
      )}
    >
      <picture
        className={clsx(
          "flex flex-row flex-shrink-0 flex-grow-0 ",
          FEEDBACK_CARD_VARIANTS[variant].avatar,
          reverse ? "ml-6" : "mr-6",
        )}
      >
        <img
          src={avatarURL}
          alt="feedback author"
          className="rounded-full shadow-base"
        />
      </picture>
      {isPrimary && (
        <QuotesIcon className="absolute top-6 left-4 flex flex-shrink-0 w-10 h-6.5 text-gray-200 mr-4 md:relative md:text-green-400 md:top-0 md:left-0" />
      )}
      <div className="flex flex-col">
        <UiTypography
          is="span"
          variant="body1"
          className={clsx(
            "w-full h-fit text-left text-ellipsis overflow-hidden mb-5",
            FEEDBACK_CARD_VARIANTS[variant].text,
          )}
        >
          {comment}
        </UiTypography>
        <UiTypography
          is="span"
          variant="body2"
          className={clsx(
            "w-full h-fit text-left text-ellipsis overflow-hidden",
            FEEDBACK_CARD_VARIANTS[variant].text,
          )}
        >
          {authorName}
        </UiTypography>
      </div>
      {isPrimary && (
        <QuotesIcon className="absolute top-6 right-4 flex flex-shrink-0 w-10 h-6.5 text-gray-200 self-end rotate-180 ml-4 md:relative md:text-green-400 md:top-0 md:left-0" />
      )}
    </div>
  );
}
