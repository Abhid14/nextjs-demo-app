import Link from "next/link";

interface Params {
  params: {
    slug: string;
  };
}

export default async function BlogArticlePage({ params }: Params) {
  const { slug } = await params
  return (
    <main className="border-4 border-black">
      <h1>I am blog article page</h1>
      <p>I am a blog article number {slug}</p>

      <ul>
        <li><Link href="/blog/1">Blog post 1</Link></li>
        <li><Link href="/blog/2">Blog post 2</Link></li>
        <li><Link href="/blog/3">Blog post 3</Link></li>
      </ul>
    </main>
  );
}