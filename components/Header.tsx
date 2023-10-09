import Link from "next/link";
import "@/app/globals.css";

export default function Header() {
  const nameInitials = (name: string): string => {
    let words = name.split(" ");

    let firstInitial = words[0].charAt(0).toUpperCase();
    let lastInitial = words[words.length - 1].charAt(0).toUpperCase();

    return firstInitial + lastInitial;
  };

  return (
    <header className="max-w-full min-w-fit rounded-b-lg shadow-sm bg-[#f5f6f8]/80 backdrop-blur-md sticky top-0 z-10">
      {/* Header-Content section */}
      <div className="md:max-w-7xl md:mx-auto md:h-16 md:px-3 h-fit p-4 md:p-0 flex items-center justify-center md:justify-between flex-col md:flex-row flex-wrap">
        <Link
          href="/"
          className="space-y-5 font-serif font-bold text-[2rem] hover:scale-95 duration-150"
        >
          Milk.
        </Link>

        <div className="flex items-center">
          {/* Navbar section */}
          <nav className="flex space-x-8">
            {[
              ["Operations", "#operations"],
              ["About", "#about"],
              ["Contact", "#contact"],
              ["Docs", "#docs"],
            ].map(([title, url]) => (
              <Link
                key={title}
                href={url}
                className="scroll-smooth text-xl text-zinc-500 font-primary font-medium px-2 py-1 rounded-md hover:bg-primary hover:scale-95 duration-150"
              >
                {title}
              </Link>
            ))}
          </nav>

          {/* Profile Button */}
          <Link
            href="/"
            className="w-11 h-11 bg-white ml-8 rounded-full cursor-pointer border-2 border-secondary/30 duration-150 hover:scale-95 flex items-center justify-center"
          >
            <p className="text-lg font-primary text-secondary font-semibold">
              {nameInitials("swapnodeep Biswas")}
            </p>
          </Link>
        </div>
      </div>
    </header>
  );
}
