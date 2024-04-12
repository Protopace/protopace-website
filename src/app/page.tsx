import Link from "next/link";
import Button from "@mui/material/Button";
import ContentfulImage from "@/app/components/lib/contentful-image";

import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

function Hero() {
  return (
    <section className="center-contents">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto text-center lg:text-left lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl text-gray-700 my-4 text-4xl font-medium tracking-tight leading-none md:text-5xl xl:text-6xl">
                The last marketing and sales agency you will need
              </h1>
              <p className="max-w-2xl my-8 text-gray-700 font-regular lg:mb-8 md:text-lg lg:text-xl">
                Our mission is to facilitate the emergence of great services and make the world a better place by providing the tools needed to market and sell them from scratch to a global scale.
              </p>
              <div className="mt-12">
                <Link href="/blog">
                  <Button variant="outlined" size="large">
                    <p className="font-bold text-xl capitalize py-1">
                      Contact Us
                    </p>
                    <ArrowForwardOutlinedIcon fontSize="medium" className="ml-4"/>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
              <ContentfulImage
                alt={`Cover Image for`}
                priority
                width={2000}
                height={1000}
                src="https://images.ctfassets.net/cnurwx923vw4/4d9AqONKDZyORrSB9TYeVX/5c84c0f322b501880803e7c4b789ee08/Hero.webp"
              />
            </div>                
        </div>
    </section>
  );
}

function Features() {
  return (
    <section className="bg-gray-800">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
                Grow your small or medium business
              </h2>
              <p className="text-gray-500 hidden md:block sm:text-xl dark:text-gray-400">
                We believe that in order to scale any business, we need to have a cohesive system that generates leads and consistently closes them. That's why we focus on three areas to drive revenue.
              </p>
          </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
              <div>
                  <div className="flex justify-center items-center mb-4 lg:h-12 lg:w-12">
                    <h3 className="text-7xl font-medium text-secondary">
                      1
                    </h3>
                  </div>
                  <h3 className="mb-2 text-xl font-bold dark:text-white">
                    Search Engine Marketing<br />&#40;SEO, SEM &#38; PPC&#41;
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    We'll first aim to drive qualified traffic to your site, attracting potential buyers and nurturing those not yet ready to purchase.
                  </p>
              </div>
              <div>
                  <div className="flex justify-center items-center mb-4 lg:h-12 lg:w-12">
                    <h3 className="text-7xl font-medium text-secondary">
                      2
                    </h3>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    Conversion Rate Optimization<br />&#40;CRO&#41;
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                  Secondly, we review your website to increase the percentage of visitors who convert into leads, and thus achieve more sales.
                  </p>
              </div>
              <div>
                  <div className="flex justify-center items-center mb-4 lg:h-12 lg:w-12">
                    <h3 className="text-7xl font-medium text-secondary">
                      3
                    </h3>
                  </div>
                  <h3 className="mb-2 text-xl font-bold dark:text-white">
                    Consultative Sales Discipline<br />&#40;Qualifying, Closing &#38; Management &#41;
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Thirdly, we'll provide the playbook and guide you developing a consistent sales process to drive predictable revenue.
                  </p>
              </div>
          </div>
      </div>
    </section>
  );
}

export default async function Page() {

  return (
    <>
      <Hero />
      <Features />
    </>
  );
}
