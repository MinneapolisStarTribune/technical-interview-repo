import { notFound } from "next/navigation";
import { articles } from "../../../hardcoded-data/articles";

interface Props {
  params: { slug: string };
}

export default async function ArticlePage({ params }: Props) {
  const resolvedParams = await params;
  const article = articles.find((a) => a.slug === resolvedParams.slug);
  
  if (!article) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-4xl font-bold mb-4 text-primary-emerald-green">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-6">
        By {article.author} · {article.date}
      </p>
      {article.image && (
        <img
          src={article.image}
          alt={article.title}
          className="w-full rounded-md mb-6"
        />
      )}
      <article className="prose prose-green">
        <p>{article.content}</p>
      </article>
    </main>
  );
}
