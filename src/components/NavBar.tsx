import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex gap-4 px-2 py-3">
      <Link href="/"><span className="bg-black p-2 rounded-lg text-white">Livcheers</span></Link>
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}