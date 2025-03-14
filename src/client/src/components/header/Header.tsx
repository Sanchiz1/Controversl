import { Link } from "react-router";

function Header() {
  return (
    <header className="mb-14 flex items-center" id="main-header">
      <div className="flex sm:flex-col">
        <Link to="/">
          <span className="text-xl font-bold sm:text-2xl">Controversl</span>
        </Link>
        <nav
          aria-label="Main menu"
          className="bg-global-bg/85 text-accent sm:divide-accent absolute -inset-x-4 top-14 hidden flex-col items-end gap-y-4 rounded-md py-4 shadow backdrop-blur-sm group-[.menu-open]:z-50 group-[.menu-open]:flex sm:static sm:z-auto sm:-ms-4 sm:mt-1 sm:flex sm:flex-row sm:items-center sm:divide-x sm:rounded-none sm:bg-transparent sm:py-0 sm:shadow-none sm:backdrop-blur-none"
          id="navigation-menu"
        >
          <Link to="/" className="px-4 py-4 underline-offset-2 hover:underline sm:py-0">
            Home
          </Link>
          <Link to="/" className="px-4 py-4 underline-offset-2 hover:underline sm:py-0">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;