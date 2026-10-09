
import Link from "next/link";

export const metadata = {
  title: "About Us | Northline Freight Solutions",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="bg-[#102e3e] px-6 py-24 text-center text-white">
        <h1 className="text-5xl font-black">
          About Us
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/70">
          Learn more about Northline Freight Solutions LLC,
          our freight coordination services, and our
          commitment to reliable transportation support.
        </p>

        <Link
          href="/#about"
          className="mt-8 inline-block bg-[#f5a000] px-8 py-4 text-sm font-bold text-[#102e3e]"
        >
          Explore Our Company
        </Link>
      </section>
    </main>
  );
}
