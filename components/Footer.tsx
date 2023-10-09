import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-full min-w-fit w-full h-fit bg-[#272922] px-3 py-5 mt-18 md:mt-36 ">
      <div className="font-primary md:max-w-7xl md:mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-20">
        <div className="flex flex-col justify-start items-center md:items-start">
          {/* Logo */}
          <Link
            href="/"
            className="font-serif font-bold text-[1.8rem] text-white/90 hover:scale-95 duration-150"
          >
            Milk.
          </Link>
          {/* Copyright text */}
          <p className="text-white/80">© 2023 Milk, Inc.</p>
        </div>

        {/* Newsletter */}
        <div className="space-y-3">
          <p className="text-white/80 text-lg text-center md:text-left">
            Newsletter
          </p>
          <form>
            <input
              type="email"
              placeholder="Enter your email"
              className="outline-none rounded-l-md py-2 px-3 w-72"
            />
            <button
              type="submit"
              className="rounded-r-md py-2 px-3 bg-primary duration-150 hover:bg-secondary font-semibold"
            >
              Subscribe
            </button>
          </form>
        </div>

        {/* Links */}
        <div className="text-white/80 font-normal">
          <p className="text-lg text-center md:text-left mb-2">Links</p>
          <div className="flex gap-2 md:flex-col text-white/70 font-light items-start justify-between">
            <p>Operations</p>
            <p>About</p>
            <p>Contact</p>
            <p>Docs</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
