import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-[#201c1c] py-5">
      <div className="footer-container grid justify-between gap-y-5 sm:grid-cols-2 md:grid-cols-3">
        <div className="flex flex-col space-y-3">
          <p className="text-lg font-bold">PROFESSIONAL LEAGUES</p>
          <Link href="#" className="relative font-bold text-bfs_secondary hover:text-red-500">
            <span className="absolute -left-7">🔴</span>
            Supreme League
          </Link>
          <Link
            href="#"
            className="relative font-bold text-bfs_primary hover:text-red-500"
          >
            <span className="absolute -left-7">🔵</span>
            Super League
          </Link>
          <Link
            href="#"
            className="font-bold text-bfs_dark-gray hover:text-red-500"
          >
            Crypto League
          </Link>
          <Link
            href="#"
            className="font-bold text-bfs_dark-gray hover:text-red-500"
          >
            Softdrink League
          </Link>
          <Link
            href="#"
            className="font-bold text-bfs_dark-gray hover:text-red-500"
          >
            Chocolate League
          </Link>
          <Link
            href="#"
            className="font-bold text-bfs_dark-gray hover:text-red-500"
          >
            Snacks League
          </Link>
          <Link
            href="#"
            className="font-bold text-bfs_dark-gray hover:text-red-500"
          >
            Gadget League
          </Link>
          <Link
            href="#"
            className="font-bold text-bfs_dark-gray hover:text-red-500"
          >
            PC League
          </Link>
          <Link
            href="#"
            className="font-bold text-bfs_dark-gray hover:text-red-500"
          >
            Console League
          </Link>
          <Link
            href="#"
            className="font-bold text-bfs_dark-gray hover:text-red-500"
          >
            Military League
          </Link>
          <Link
            href="#"
            className="relative text-bfs font-bold text-green-500 hover:text-red-500"
          >
            <span className="absolute -left-7">🟢</span>
            Standard League
          </Link>
        </div>

        <div className="flex flex-col space-y-3">
          <p className="text-lg font-bold">CONTACT</p>

          <Link href="#" className="font-bold text-bfs_dark-gray">
            GM@BattleForSupremacy.TV
          </Link>
        </div>

        <div className="flex flex-col space-y-3">
          <p className="text-lg font-bold">FOLLOW US</p>

          <div className="flex gap-2">
            <Link
              href="https://www.youtube.com/@BattleForSupremacyTV"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-gray-600 text-bfs_secondary hover:bg-bfs_secondary hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
              </svg>
            </Link>

            <Link
              href="https://www.twitch.tv/battleforsupremacytv"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-gray-600 text-bfs_secondary hover:bg-bfs_secondary hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M3.857 0 1 2.857v10.286h3.429V16l2.857-2.857H9.57L14.714 8V0zm9.714 7.429-2.285 2.285H9l-2 2v-2H4.429V1.143h9.142z" />
                <path d="M11.857 3.143h-1.143V6.57h1.143zm-3.143 0H7.571V6.57h1.143z" />
              </svg>
            </Link>

            <Link
              href="https://discord.gg/KmmkAMAK"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-gray-600 text-bfs_secondary hover:bg-bfs_secondary hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M13.545 2.907a13.2 13.2 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.2 12.2 0 0 0-3.658 0 8 8 0 0 0-.412-.833.05.05 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.04.04 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032q.003.022.021.037a13.3 13.3 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019q.463-.63.818-1.329a.05.05 0 0 0-.01-.059l-.018-.011a9 9 0 0 1-1.248-.595.05.05 0 0 1-.02-.066l.015-.019q.127-.095.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.05.05 0 0 1 .053.007q.121.1.248.195a.05.05 0 0 1-.004.085 8 8 0 0 1-1.249.594.05.05 0 0 0-.03.03.05.05 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.2 13.2 0 0 0 4.001-2.02.05.05 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.03.03 0 0 0-.02-.019m-8.198 7.307c-.789 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612s.637-1.613 1.438-1.613c.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612" />
              </svg>
            </Link>

            <Link
              href="https://www.tiktok.com/@battleforsupremacy.tv"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-gray-600 text-bfs_secondary hover:bg-bfs_secondary hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
              </svg>
            </Link>

            <Link
              href="https://kick.com/battleforsupremacytv"
              className="group flex h-10 w-10 items-center justify-center rounded-full bg-gray-600 text-bfs_secondary hover:bg-bfs_secondary hover:text-black"
            >
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fab"
                data-icon="kickstarter"
                className="h-10 w-5"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 448 512"
              >
                <path
                  fill="currentColor"
                  d="M400 480H48c-26.4 0-48-21.6-48-48V80c0-26.4 21.6-48 48-48h352c26.4 0 48 21.6 48 48v352c0 26.4-21.6 48-48 48zM199.6 178.5c0-30.7-17.6-45.1-39.7-45.1-25.8 0-40 19.8-40 44.5v154.8c0 25.8 13.7 45.6 40.5 45.6 21.5 0 39.2-14 39.2-45.6v-41.8l60.6 75.7c12.3 14.9 39 16.8 55.8 0 14.6-15.1 14.8-36.8 4-50.4l-49.1-62.8 40.5-58.7c9.4-13.5 9.5-34.5-5.6-49.1-16.4-15.9-44.6-17.3-61.4 7l-44.8 64.7v-38.8z"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
