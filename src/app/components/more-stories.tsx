import Link from "next/link";
import Date from "@/app/components/lib/date";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";

function PostPreview({
  title,
  coverImage,
  date,
  author,
  slug,
}: {
  title: string;
  coverImage: any;
  date: string;
  author: any;
  slug: string;
}) {

  return (
    
    <div className="">
      <Link href={`/blog/${slug}`}>
        <Card sx={{ maxWidth: 480, height:470 }}>
            <CardActionArea sx={{ maxWidth: 480, height:470 }}>
              <CardMedia sx={{ width:480, height: 250}}
                image={coverImage.url}
                title={coverImage.alt}
              />
              <CardContent>
              <h3 className="text-2xl font-medium mt-3 md:mt-5">
                {title}
              </h3>
              <div className="hidden md:block b-0 mt-3">
                <p className="font-medium">
                  {"By " + author.name + " - "}
                  <Date dateString={date}></Date>
                  
                </p>
              </div>
              <div className="md:hidden b-0 mt-2">
                <p className="font-medium">
                  <Date dateString={date}></Date>
                </p>
              </div>
             
              </CardContent>
            </CardActionArea>

        </Card>
      </Link>
    </div>
  );
}

export default function MoreStories({ morePosts }: { morePosts: any[] }) {
  return (
    <section>
      <div className="mb-32 grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-2 lg:grid-cols-3 lg:gap-x-6">
        {morePosts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
            slug={post.slug}
          />
        ))}
      </div>
    </section>
  );
}
