import Link from "next/link";
import Button from "@mui/material/Button";
import ContentfulImage from "@/app/components/lib/contentful-image";

import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

function Hero() {
  return (
    <section className="center-contents">
        <div className="grid max-w-screen-xl px-4 py-8 mx-auto text-center lg:text-left lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl my-4 text-4xl font-medium tracking-tight leading-none md:text-5xl xl:text-6xl">
                The last marketing and sales agency you will need
              </h1>
              <p className="max-w-2xl my-8 font-regular lg:mb-8 md:text-lg lg:text-xl">
                From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.
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

export default async function Page() {

  return (
    <Hero></Hero>
  );
}
