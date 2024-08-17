import Link from "next/link";
import Button from "@mui/material/Button";
import ContentfulImage from "@/app/components/lib/contentful-image";
import ArrowForwardOutlinedIcon from '@mui/icons-material/ArrowForwardOutlined';

function Hero() {
  return (
    <section className="center-contents bg-gray-50">
        <div className="grid flex justify-center max-w-screen-xl px-4 py-10 mx-auto text-center lg:text-left lg:gap-8 xl:gap-0 lg:py-24 lg:grid-cols-12">
            <div className="mx-auto place-self-center lg:col-span-7">
              <h1 className="max-w-2xl text-primary my-4 text-4xl font-medium tracking-tight leading-none md:text-5xl xl:text-6xl">
                Maximize bookings and rent without the hassle.
              </h1>
              <p className="max-w-2xl my-8 font-regular lg:mb-8 md:text-lg lg:text-xl">
                Enjoy long-term rental income without worrying about tenants. We provide full-service management to keep your property in pristine condition, as if it were our own.
              </p>
              <div className="mt-12">
                <Link href="/contact-us">
                  <Button variant="outlined" size="large">
                    <p className="font-bold text-lg capitalize py-1">
                      Contact Us
                    </p>
                    <ArrowForwardOutlinedIcon fontSize="medium" className="ml-4"/>
                  </Button>
                </Link>
              </div>
            </div>
            <div className="mx-auto justify-center lg:mt-0 lg:col-span-5 sm:max-w-xl">
              <ContentfulImage
                alt={`Cover Image for`}
                priority
                width={2000}
                height={1000}
                src="https://images.ctfassets.net/cnurwx923vw4/7GwK3GpNLpqYzoyAE0j4cx/5a001adbc68907779106c72cb384c52d/House_of_Provence_with_Pool.svg"               
              />
            </div>   
        </div>
    </section>
  );
}

function Features() {
  return (
    <section className="py-8 bg-blue-200">
      <div className="px-4 mx-auto max-w-screen-xl sm:py-20 lg:px-6">
        <div className="md:block max-w-screen-md mb-8 lg:mb-16">
          <h2 className="text-center mb-4 text-4xl tracking-tight font-extrabold text-primary md:text-left">
            Our value proposal to you
          </h2>
          <p className="hidden md:block sm:text-xl">
          We offer full-service vacation rental property management for busy owners. We believe that partnering with property owners is the key to delivering a premium guest experience.
          </p>
        </div>
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
            <div>
                <div className="flex justify-center items-center mb-4 lg:h-12 lg:w-12">
                  <h3 className="hidden md:block text-7xl font-medium text-secondary">
                    1
                  </h3>
                </div>
                <h3 className="mb-2 text-xl font-bold text-primary">
                  Property care and respect.
                </h3>
                <p className="">
                  First and foremost, the properties we care for are the foundation of everything we do.
                </p>
            </div>
              <div>
                  <div className="flex justify-center items-center mb-4 lg:h-12 lg:w-12">
                    <h3 className="hidden md:block text-7xl font-medium text-secondary">
                      2
                    </h3>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-primary">
                    Timely payouts and service.
                  </h3>
                  <p className="">
                    We’ll be a dependable partner you can count on, both for your finances and exceptional service.
                  </p>
              </div>
              <div>
                  <div className="flex justify-center items-center mb-4 lg:h-12 lg:w-12">
                    <h3 className="hidden md:block text-7xl font-medium text-secondary">
                      3
                    </h3>
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-primary">
                    Clarity, kidness and proactiveness.
                  </h3>
                  <p className="">
                    We believe in building long-term relationships based on solid values.
                  </p>
              </div>
          </div>
      </div>
    </section>
  );
}

function ImpactRight() {
  return (
    <section className="bg-gray-50">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
        <div className="flex justify-center mx-auto max-w-32 md:max-w-none">
          <ContentfulImage
            src="https://images.ctfassets.net/cnurwx923vw4/4mQYuEKrwh7ml9ZrtBCWSQ/b06d5e596d8c0757226d367f75d18022/Coffee_3D_Icon_Set.svg"
            alt="Protopace's logo"
            width={400}
            height={400}
          />
        </div>
      <div className="mt-4 md:mt-0">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-secondary">
          Your property is in great hands
        </h2>
        <p className="mb-6 md:text-lg">
          We are the ideal tenants, creating a proactive experience te keep your property in great shape, this includes preventive maintenance alerts, proactive handyman services, professional cleaning, among others.
        </p>
        <Link className="flex justify-center mx-auto " href="/contact-us">
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

function ImpactLeft() {
  return (
    <section className="bg-gray-50">
      <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
      <div className="mt-4 md:mt-0">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-primary">
          Get paid on time, every time
        </h2>
        <p className="mb-6 md:text-lg">
          Stop struggling with late or incomplete payments. Our staff ensures you receive your money on time and supports you with any inquiries about your property.
        </p>
        <Link className="flex justify-center mx-auto " href="/contact-us">
          <Button variant="outlined" color="primary" size="large">
            <p className="font-bold text-xl capitalize py-1">
              Contact Us
            </p>
            <ArrowForwardOutlinedIcon fontSize="medium" className="ml-4"/>
          </Button>
        </Link>
      </div>
      <div className="flex justify-center mx-auto max-w-32 md:max-w-none">
           <ContentfulImage
            src="https://images.ctfassets.net/cnurwx923vw4/6b4N5McFEglxjYC5ka674w/6a667f6fc7a8c7ebf5ddcb6f06764174/Saly-45.webp"
            alt="Protopace's logo"
            width={400}
            height={400}
          />
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
      <ImpactRight />
      <ImpactLeft  />
    </>
  );
}
