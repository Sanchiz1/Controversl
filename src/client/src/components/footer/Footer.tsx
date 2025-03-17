import { Link } from "react-router";

function Footer() {
  return (
    <footer
      className="mt-auto flex w-full flex-col items-center justify-center gap-y-2 pt-20 pb-4 text-center align-top font-semibold text-gray-400 sm:flex-row sm:justify-between sm:text-xs"
    >
      <div className="me-0 sm:me-4">
        &copy; Controversl {new Date().getFullYear()}.
      </div>
      <nav
        aria-labelledby="footer_links"
        className="flex gap-x-2 sm:gap-x-0 sm:divide-x sm:divide-gray-500"
      >
        <p id="footer_links" className="sr-only">More on this site</p>
        <Link to="/" className="px-4 py-4 underline-offset-2 hover:underline sm:py-0">
          Home
        </Link>
        <Link to="/" className="px-4 py-4 underline-offset-2 hover:underline sm:py-0">
          About
        </Link>
        <Link to="/privacy-policy" className="px-4 py-4 underline-offset-2 hover:underline sm:py-0">
          Privacy Policy
        </Link>
      </nav>
    </footer>
  );
}

export default Footer;