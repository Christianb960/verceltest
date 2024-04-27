import Link from "next/link";

const Nav = () => {
  return (
    <nav className="bg-black border-gray-200 dark:bg-gray-900 ">
      <h1 className="text-sky-500">Navbar</h1>
      <div>
        <Link href="/" className="text-gray-50 hover:text-sky-500">
          Home
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
