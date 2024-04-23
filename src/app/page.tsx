import Link from "next/link";
import Button from "@mui/material/Button";
import ContentfulImage from "@/app/components/lib/contentful-image";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

function Hero() {
  return (
    <section className="center-contents bg-gray-50">
        <div className="grid max-w-screen-xl px-4 py-10 mx-auto text-center lg:text-left lg:gap-8 xl:gap-0 lg:py-24 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl text-primary my-4 text-4xl font-medium tracking-tight leading-none md:text-5xl xl:text-6xl">
                The newsletter to improve your sales game.
              </h1>
              <p className="max-w-2xl my-8 font-regular lg:mb-8 md:text-lg lg:text-xl">
                Our mission is to facilitate the emergence of great products by providing the knowledge needed to scale their revenue from startup to global enterprise.
              </p>
              <div className="mt-12">
                <Link href="/contact-us">
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
    <section className="py-8 bg-gray-900">
      <div className="px-4 mx-auto max-w-screen-xl sm:py-20 lg:px-6">
        <div className="hidden md:block max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-white">
            Learn how to grow your business for free
          </h2>
          <p className="text-gray-400 hidden md:block sm:text-xl">
            We believe that in order to scale any business, we need to have a cohesive system that generates deals and consistently closes them. That's why we focus on three areas to drive revenue.
          </p>
        </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
                <div className="flex justify-center items-center mb-4 lg:h-12 lg:w-12">
                  <h3 className="text-7xl font-medium text-secondary">
                    1
                  </h3>
                </div>
                <h3 className="mb-2 text-xl font-bold text-white">
                  Business Development & Value Selling
                </h3>
                <p className="text-gray-400">
                  Build a strong sales playbook, from lead generation to closing and everything in between.
                </p>
            </div>
              <div>
                  <div className="flex justify-center items-center mb-4 lg:h-12 lg:w-12">
                    <h3 className="text-7xl font-medium text-secondary">
                      2
                    </h3>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    Sales Operations & Enablement
                  </h3>
                  <p className="text-gray-400">
                    Create strong training and data processes to find blindspots and improve them.
                  </p>
              </div>
              <div>
                  <div className="flex justify-center items-center mb-4 lg:h-12 lg:w-12">
                    <h3 className="text-7xl font-medium text-secondary">
                      3
                    </h3>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-white">
                    Sales Management & Strategy
                  </h3>
                  <p className="text-gray-400">
                    Create, update, report and keep track of your your go-to-market strategy.
                  </p>
              </div>
          </div>
      </div>
    </section>
  );
}

function Impact() {
  return (
    <section className="py-8 bg-gray-50">
        <div className="gap-8 items-center px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
          <div className="w-full flex justify-center hidden md:block">
            <ContentfulImage
              src="https://images.ctfassets.net/cnurwx923vw4/6b4N5McFEglxjYC5ka674w/6a667f6fc7a8c7ebf5ddcb6f06764174/Saly-45.webp"
              alt="Protopace's logo"
              width={400}
              height={400}
            />
          </div>
          <div className="mt-4 md:mt-0">
              <h2 className="mb-4 text-4xl font-extrabold text-secondary">
                The playbook for your playbook.
              </h2>
              <p className="mb-6 md:text-lg">
                Although creating a product and getting product-market fit is a challenge, one of the hardest parts for startups and companies in general to figure out, is distribution. So tough in fact that great companies many times die because of this reason. <br />We will change that.
              </p>
                <Link href="/contact-us">
                  <Button variant="outlined" color="secondary" size="large">
                    <p className="font-bold text-xl capitalize py-1">
                      Contact Us
                    </p>
                    <ArrowForwardOutlinedIcon fontSize="medium" className="ml-4"/>
                  </Button>
                </Link>
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
      <Impact />
    </>
  );
}
