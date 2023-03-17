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
}

export const FEEDBACK_CARD_VARIANTS: Record<
  FeedBackCardVariant,
  {
    avatar: string;
  }
> = {
  default: {
    avatar: "w-24 h-24",
  },
  primary: {
    avatar: "w-46 h-46",
  },
};

export function FeedBackCard({
  comment,
  avatarURL,
  authorName,
  variant = "default",
  className,
  ...props
}: FeedBackCardProps) {
  const isPrimary = variant === "primary";
  return (
    <div {...props} className={clsx("flex flex-row w-full", className)}>
      <picture
        className={clsx(
          "flex flex-row flex-shrink-0 flex-grow-0 mr-6",
          FEEDBACK_CARD_VARIANTS[variant].avatar,
        )}
      >
        <img
          src={avatarURL}
          alt="feedback author"
          className="rounded-full shadow-base"
        />
      </picture>
      {isPrimary && (
        <QuotesIcon className="flex flex-shrink-0  w-10 h-6.5 text-green-400 mr-4" />
      )}
      <div className="flex flex-col">
        <UiTypography
          is="span"
          variant="body1"
          className="w-full h-fit text-ellipsis overflow-hidden mb-5"
        >
          {comment}
        </UiTypography>
        <UiTypography
          is="span"
          variant="body2"
          className="w-full h-fit text-ellipsis overflow-hidden"
        >
          {authorName}
        </UiTypography>
      </div>
      {isPrimary && (
        <QuotesIcon className="flex flex-shrink-0 w-10 h-6.5 text-green-400 self-end rotate-180 ml-4" />
      )}
    </div>
  );
}
