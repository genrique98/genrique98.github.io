import { useRouter } from 'next/router';
import NextLink from 'next/link';
import cn from 'classnames';
import { Inter } from '@next/font/google'
import { ReactNode } from 'react';
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

function NavItem(prop : { href: String | String, text: ReactNode }) {
  const router = useRouter();
  const isActive = router.asPath === prop.href;

  return (
    <NextLink legacyBehavior href={prop.href as unknown as URL}>
      <a
        className={cn(
          isActive
            ? 'font-bold  border-t-2 border-purple-100'
            : 'font-normal',
          'inline-block text-purple-50 px-3 py-1 rounded-lg hover:bg-purple-100/50 transition-all'
        )}
      >
        <span className="capsize">{prop.text}</span>
      </a>
    </NextLink>
  );
}

export default function Nav(props : any) {
  const { children, ...customMeta } = props;
  const router = useRouter();
  const meta = {
    title: 'Gabriel Ramirez: Developer & writer',
    description: `Developer, Analysy, Writer.`,
    type: 'website',
    ...customMeta
  }; 

  return (
    <>
      <div className="flex flex-col justify-center px-8">
        <nav className="flex items-center justify-center w-full relative max-w-2xl border-gray-200 mx-auto pt-6 pb-6 text-gray-900 ">
          <div className={`${inter.variable} font-sans text-purple-50 `}>
            <NavItem href="/" text="Home" />
            <NavItem href="/experience" text="Experience" />
            <NavItem href="/work" text="Work" />
          </div>
          {/* <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="w-9 h-9 bg-gray-200 rounded-lg dark:bg-gray-600 flex items-center justify-center  hover:ring-2 ring-gray-300  transition-all"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5 text-gray-800 dark:text-gray-200"
              >
                 <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
              </svg>
          </button> */}
        </nav>
      </div>
    </>
  );
}