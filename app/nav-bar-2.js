import Link from "next/link";

export default function NavBar() {
  return (
    <>
      <nav className="navbar bg-base-100">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost btn-square">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 stroke-secondary fill-secondary"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52"
          >
            <li>
              <Link href="/week2">Week 2</Link>
            </li>
            <li>
              <Link href="/week3">Week 3</Link>
            </li>
            <li>
              <Link href="/week4">Week 4</Link>
            </li>
            <li>
              <Link href="/week5">Week 5</Link>
            </li>
            <li>
              <Link href="/week6">Week 6</Link>
            </li>
          </ul>
        </div>

        <div className="flex-1">
          <Link
            href="/"
            className="btn btn-ghost normal-case text-xl hidden md:inline-flex"
          >
            CPRG 306: Web Development 2 - Assignments
          </Link>
          <Link
            href="/"
            className="btn btn-ghost normal-case text-xl md:hidden"
          >
            CPRG 306
          </Link>
        </div>
        <div className="flex-none">
          <Link
            href="https://github.com/James-Sundby"
            className="btn btn-square btn-ghost"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 480 512"
              className="inline-block w-5 h-5 stroke-current fill-secondary"
            >
              <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z" />
            </svg>
          </Link>
        </div>
      </nav>
    </>
  );
}
//
