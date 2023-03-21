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
    <div className="flex flex-row items-center justify-between w-full h-40 sm:px-21 overflow-hidden">
      <div className="flex flex-row items-center justify-center w-full xl:justify-start xl:mr-16 xl:w-auto">
        <LogoIcon className="w-52 h-16 mr-0 sm:w-80 sm:w-24 xl:mr-20" />
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
