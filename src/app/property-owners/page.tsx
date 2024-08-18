import Link from "next/link";
import Button from "@mui/material/Button";
import ContentfulImage from "@/app/components/lib/contentful-image";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

function Header() {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-2 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-regular tracking-tight leading-none text-primary md:text-5xl lg:text-6xl">
          We will be the best tenant you will ever have
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">
          We will rent your units long-term, taking care of your property as if it were our own. We pay rent on time, require minimal support, and perform proactive light maintenance.        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link className="flex justify-center mx-auto " href="/contact-us">
            <Button variant="outlined" color="primary" size="large">
              <p className="font-bold text-xl capitalize py-1">
                Contact Us
              </p>
              <ArrowForwardOutlinedIcon fontSize="medium" className="ml-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section className="bg-white pb-12 dark:bg-gray-900">
      <div className="py-2 px-4 mx-auto max-w-screen-lg lg:px-6">
        <div className="space-y-8 md:grid md:grid-cols-2 3 md:gap-12 md:space-y-0">
          <div>
            <div className="flex mx-auto justify-center items-center mb-4 w-20 h-20 rounded-full bg-primary-100">
              <ContentfulImage
                alt={`Camera illustration`}
                priority
                width={200}
                height={200}
                src="https://images.ctfassets.net/cnurwx923vw4/doQlwE7MArUwxALuTVpCN/9bb386bb476c58c6e760523785393cae/Camera.svg"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold text-center text-secondary">
              Properties kept in pristine condition
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              We will take care of your properties, ensuring they are always maintained and kept in picture-perfect condition.
            </p>
          </div>
          <div>
            <div className="flex mx-auto justify-center items-center mb-4 w-20 h-20 rounded-full bg-primary-100">
              <ContentfulImage
                alt={`Check illustration`}
                priority
                width={200}
                height={200}
                src="https://images.ctfassets.net/cnurwx923vw4/4JErKEIycDx9bNBQffhoTZ/84c8985114cc92959a710af42cdfcf8b/Check.svg"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold text-center text-secondary">
              Guest screening and background checks
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              We implement thorough processes for vetting guests and conduct extensive background checks to our guests.
            </p>
          </div>
          <div>
            <div className="flex mx-auto justify-center items-center mb-4 w-20 h-20 rounded-full bg-primary-100">
              <ContentfulImage
                alt={`Cover Image for`}
                priority
                width={150}
                height={150}
                src="https://images.ctfassets.net/cnurwx923vw4/rdIJNgilCg1y3A6q2ra0e/558fabca9b5e7dc0a107012fb2391bf7/Pointing.svg"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold text-center text-secondary">
              Multiple units rented at once
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              We will rent multiple units on a single property, significantly reducing vacancy and providing stable cash flow.
            </p>
          </div>
          <div>
            <div className="flex mx-auto justify-center items-center mb-4 w-20 h-20 rounded-full bg-primary-100">
              <ContentfulImage
                alt={`Cover Image for`}
                priority
                width={200}
                height={200}
                src="https://images.ctfassets.net/cnurwx923vw4/3CPxs7dS4Iae6iw95EERGg/38f499ca96557d2df244f0427f96b026/Bonfire.svg"
              />
            </div>
            <h3 className="mb-2 text-xl font-bold text-center text-secondary">
              Liability and valuable insurance
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              We have strong during-stay policies and comprehensive insurance to provide peace of mind for owners.
            </p>
          </div>
        </div>
      </div>
    </section>
  )

}

function ImpactRight() {
  return (
    <section className="bg-gray-200">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="flex justify-center mx-auto max-w-32 md:max-w-none">
          <ContentfulImage
            src="https://images.ctfassets.net/cnurwx923vw4/4V7J4Rs4B8iQVBRnkMdg4u/964d61cacdb135223eeeb90e894c2730/Rocket.svg"
            alt="Rocket Illustration"
            width={400}
            height={400}
          />
        </div>
        <div className="mt-4 md:mt-0">
          <h2 className="mb-4 text-4xl tracking-tight font-regular text-primary">
            Reduce Property Turnover
          </h2>
          <p className="mb-6 md:text-lg">
            We will rent your properties on a long-term basis, helping you reduce turnover and improve your return on investment.
          </p>
          <h2 className="mb-4 text-4xl tracking-tight font-regular text-primary">
            Guarantee Monthly Rent
          </h2>
          <p className="mb-6 md:text-lg">
            Stop chasing multiple tenants for payments. We will pay rent on time, every time, and partner with you for the long haul.
          </p>
          <Link href="/contact-us">
            <Button variant="outlined" size="large">
              <p className="font-bold text-lg capitalize py-1">
                Contact Us
              </p>
              <ArrowForwardOutlinedIcon fontSize="medium" className="ml-4" />
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
      <Header />
      <Features />
      <ImpactRight />
    </>
  );
}
