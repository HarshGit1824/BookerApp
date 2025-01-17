import { Crown } from "lucide-react";
import ToggleMode from "@/components/ToggleMode";
function Header() {
  return (
    <header className="flex items-center justify-between border-b border-foreground px-4 py-2 text-center">
      <Crown />
      <h1>Booker &mdash; rank books to read.</h1>
      <ToggleMode />
    </header>
  );
}
export default Header;