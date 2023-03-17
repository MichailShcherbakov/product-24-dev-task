import { ReactComponent as LogoIcon } from "~/assets/icons/logo.svg";
import { UiButton } from "~/ui-kit";
import { NavBar, NavBarItem } from "../NavBar";

const NAVBAR_ITEMS: NavBarItem[] = [
  { id: "1", label: "NavItem1" },
  { id: "2", label: "NavItem2" },
  { id: "3", label: "NavItem3" },
];

export function AppBar() {
  return (
    <div className="flex flex-row items-center justify-between w-full h-40 px-21">
      <div className="flex flex-row items-center">
        <LogoIcon className="mr-16" />
        <NavBar items={NAVBAR_ITEMS} />
      </div>
      <div className="flex flex-row items-center">
        <UiButton>Button</UiButton>
      </div>
    </div>
  );
}
