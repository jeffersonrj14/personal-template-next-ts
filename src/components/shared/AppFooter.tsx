import Link from "next/link";

const TechStack = [
  { name: "Next.js", href: "https://nextjs.org/" },
  { name: "TypeScript", href: "https://www.typescriptlang.org/" },
  { name: "Tailwind", href: "https://tailwindcss.com/" },
];

function AppFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mx-auto my-8 max-w-[872px] px-4 text-stone-300 md:px-0">
      <p>
        &copy; {year} {""}
        <Link
          href="https://github.com/jeffersonrj14"
          className="text-jefferson-light hover:text-jefferson-light"
        >
          RJ Jefferson
        </Link>
      </p>
      <nav role="navigation">
        <ul role="list" className="flex flex-row justify-center gap-2">
          <li>
            {TechStack.map((tech, index) => (
              <span key={tech.name}>
                <Link href={tech.href}>{tech.name}</Link>
                {index < TechStack.length - 1 && ", "}
              </span>
            ))}{" "}
            Template
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default AppFooter;
