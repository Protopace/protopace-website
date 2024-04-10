import Link from "next/link";
import { draftMode } from "next/headers";

import MoreStories from "@/app/components/more-stories";
// import Avatar from "@/app/components/avatar";
import Avatar from "@mui/material/Avatar";
import Date from "@/app/components/date";
import CoverImage from "@/app/components/cover-image";

import { Markdown } from "@/app/components/lib/markdown";
import { getAllPosts, getPostAndMorePosts } from "@/lib/api";

export async function generateStaticParams() {
  const allPosts = await getAllPosts(false);

  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  const { isEnabled } = draftMode();
  const { post, morePosts } = await getPostAndMorePosts(params.slug, isEnabled);

  return (
    <div className="container mx-auto px-5">
      <article>
        <div className="mx-auto max-w-4xl mt-10">
          <h1 className="text-center text-4xl leading-tight tracking-tighter md:text-left md:text-5xl md:leading-none lg:text-6xl">
            {post.title}
          </h1>
        </div>

        <div className="mx-auto max-w-4xl">

          <div className="hidden mt-8 md:block md:max-w-4xl md:mx-auto">
            <div className="flex items-center">

              <div className="grid grid-cols-8 gap-x-4">

                <div className="row-span-2 flex justify-center items-center">
                  <Avatar alt={post.author.name} src={post.author.picture.url} />
                </div>

                <div className="col-span-7 text-md">
                  {post.author.name}
                </div>

                <div className="col-span-7 text-md">
                  <Date dateString={post.date} />
                </div>

              </div>



            </div>
          </div>

          <div className="my-8 sm:mx-0">
            <CoverImage title={post.title} url={post.coverImage.url} />
          </div>

        </div>

        <div className="mx-auto max-w-2xl">
          <div className="prose text-lg">
            <Markdown content={post.content} />
          </div>

          <div className="mt-8 md:hidden md:block md:max-w-4xl md:mx-auto">
            <div className="flex items-center">

              <div className="grid grid-cols-8 gap-x-4">

                <div className="row-span-2 flex justify-center items-center">
                  <Avatar alt={post.author.name} src={post.author.picture.url} />
                </div>

                <div className="col-span-7 text-md">
                  {post.author.name}
                </div>

                <div className="col-span-7 text-md">
                  <Date dateString={post.date} />
                </div>

              </div>



            </div>
          </div>

        </div>


        
        
      </article>
      <hr className="border-accent-2 mt-12 mb-24" />
      <MoreStories morePosts={morePosts} />
    </div>
  );
}
