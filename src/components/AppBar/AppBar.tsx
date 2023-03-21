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
    <div className="flex flex-row items-center justify-between w-full h-40 px-21 overflow-hidden">
      <div className="flex flex-row items-center justify-center w-full xl:justify-start xl:mr-16 xl:w-auto">
        <LogoIcon />
        <NavBar
          items={NAVBAR_ITEMS}
          className="flex-row items-center hidden xl:flex"
        />
      </div>
      <div className="flex-row items-center hidden xl:flex">
        <UiButton>Button</UiButton>
      </div>
    </div>
  );
}
