import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-3">
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <button className="border border-[#A0A0A0] bg-primary-portfolio hover:bg-accent hover:text-accent-foreground p-2 rounded-lg">
        <Link className="w-full h-full" href="/">
          Return Home
        </Link>
      </button>
    </div>
  );
}
