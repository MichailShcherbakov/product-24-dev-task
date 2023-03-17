import { FeedBackCard } from "~/components/cards/FeedBackCard";
import { Divider } from "~/components/Divider";
import { UiTypography } from "~/ui-kit/Typography";

export interface FeedBackProps extends React.HTMLAttributes<HTMLDivElement> {}

export function FeedBackSection(props: FeedBackProps) {
  return (
    <div className="flex flex-col bg-gray-100 px-16 py-20">
      <div className="flex flex-col items-center mb-12">
        <Divider className="mb-6" />
        <UiTypography is="h2" variant="h1" className="text-center">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </UiTypography>
      </div>
      <FeedBackCard
        variant="primary"
        authorName="Jane Doe"
        comment="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur animi  autem aliquid consequuntur suscipit exercitationem laborum cupiditate magnam eaque quae deleniti, iste nisi expedita, provident excepturi officia! Porro ab rerum omnis magnam eligendi error nobis dolore? Porro ab rerum omnis magnam eligendi error nobis dolore? Porro ab rerum omnis magnam eligendi error nobis dolore?"
        avatarURL="/illustrations/woman.png"
        className="mb-32"
      />
      <div className="flex flex-row">
        <FeedBackCard
          authorName="Jane Doe"
          comment="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur animi  autem aliquid"
          avatarURL="/illustrations/woman.png"
          className="mr-8 last:mr-0 flex-row-reverse"
        />
        <FeedBackCard
          authorName="Jane Doe"
          comment="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam quas, aut consectetur animi  autem aliquid"
          avatarURL="/illustrations/woman.png"
          className="mr-8 last:mr-0"
        />
      </div>
    </div>
  );
}
