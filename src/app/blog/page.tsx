import Link from "next/link";

export default function BlogPage() {
  return (
    <main className="border-4 border-black">
      <h1>I am from the blog blog/ page.tsx</h1>
      <p>I am a blog</p>
      {/* Here are some blog posts */}
      <ul>
        <li><Link href="/blog/1">Blog post 1</Link></li>
        <li><Link href="/blog/2">Blog post 2</Link></li>
        <li><Link href="/blog/3">Blog post 3</Link></li>
      </ul>
    </main>
  );
}