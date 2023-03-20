import { Divider } from "~/components/Divider";
import { UiAccordion } from "~/ui-kit/Accordion";
import { UiTypography } from "~/ui-kit/Typography";
import { ReactComponent as Q1Icon } from "~/assets/icons/icon1.svg";
import { ReactComponent as Q2Icon } from "~/assets/icons/icon2.svg";
import { ReactComponent as Q3Icon } from "~/assets/icons/icon3.svg";
import { ReactComponent as Q4Icon } from "~/assets/icons/icon4.svg";
import { ReactComponent as Q5Icon } from "~/assets/icons/icon5.svg";
import React from "react";

const QUESTIONS = [
  {
    id: "1",
    icon: <Q1Icon />,
    label: "Lorem ipsum, dolor sit amet adipisicing elit.",
  },
  {
    id: "2",
    icon: <Q2Icon />,
    label: "Lorem ipsum, dolor sit amet adipisicing elit.",
  },
  {
    id: "3",
    icon: <Q3Icon />,
    label: "Lorem ipsum, dolor sit amet adipisicing elit.",
  },
  {
    id: "4",
    icon: <Q4Icon />,
    label: "Lorem ipsum, dolor sit amet adipisicing elit.",
  },
  {
    id: "5",
    icon: <Q5Icon />,
    label: "Lorem ipsum, dolor sit amet adipisicing elit.",
  },
];

export interface BlitzListSectionProps
  extends React.HTMLAttributes<HTMLElement> {}

export function BlitzListSection(props: BlitzListSectionProps) {
  const [expandedId, setExpandedId] = React.useState<string | null>(null);

  const changeHandler = React.useCallback((id: string, isExpanded: boolean) => {
    setExpandedId(isExpanded ? id : null);
  }, []);

  return (
    <div {...props} className="flex flex-col flex-1 bg-blue-100 px-16 py-20">
      <div className="flex flex-col items-center mb-12">
        <Divider className="mb-6" />
        <UiTypography is="h2" variant="h1" className="text-center mb-5.5">
          Lorem ipsum, dolor sit <br />
          adipisicing elit.
        </UiTypography>
        <UiTypography is="p" variant="body1" className="text-center mb-5">
          Porro ab rerum omnis magnam eligendi error nobis dolore?
        </UiTypography>
        {QUESTIONS.map(q => (
          <UiAccordion
            key={q.id}
            id={q.id}
            icon={q.icon}
            label={q.label}
            isExpanded={q.id === expandedId}
            onChange={changeHandler}
          >
            Laboriosam quas, aut consectetur animi autem aliquid consequuntur
            suscipit exercitationem laborum cupiditate magnam eaque quae delenit
          </UiAccordion>
        ))}
      </div>
    </div>
  );
}
