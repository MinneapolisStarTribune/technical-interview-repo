import { notFound } from "next/navigation";
import { authors } from "../../../hardcoded-data/authors";
import AuthorClient from "./AuthorClient";

interface Props {
  params: { slug: string };
}

export default async function AuthorPage({ params }: Props) {
  const author = authors.find((a) => a.slug === params.slug);

  if (!author) {
    notFound();
  }

  return <AuthorClient author={author} />;
}
