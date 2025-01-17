import { Link } from "react-router-dom";

export default function Header() {
  const isSignupPage = window.location.pathname === "/signup";

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link to="/" className="flex items-center justify-center">
        <PenIcon className="h-6 w-6" />
        <span className="ml-2 font-bold text-lg">rewritey</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          to="/create"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Create
        </Link>

        <Link
          to="/blogs"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          Blogs
        </Link>
        <Link
          to="/about"
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          About
        </Link>
        <Link
          to={isSignupPage ? "/signin" : "/signup"}
          className="text-sm font-medium hover:underline underline-offset-4"
        >
          {isSignupPage ? "Sign In" : "Sign Up"}
        </Link>
      </nav>
    </header>
  );
}

function PenIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
    </svg>
  );
}
