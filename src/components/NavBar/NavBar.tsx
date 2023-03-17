import { UiButton } from "~/ui-kit";

export type NavBarItem = {
  id: string;
  label: string;
};

export interface NavBarProps extends React.HTMLAttributes<HTMLElement> {
  items: NavBarItem[];
}

export function NavBar({ items, ...props }: NavBarProps) {
  return (
    <nav {...props}>
      <ul className="flex flex-row items-center justify-start">
        {items.map(item => (
          <li key={item.id} className="mr-11.5 last:mr-0">
            <UiButton>{item.label}</UiButton>
          </li>
        ))}
      </ul>
    </nav>
  );
}
