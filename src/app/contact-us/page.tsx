import Link from "next/link";
import Button from "@mui/material/Button";
import ContentfulImage from "@/app/components/lib/contentful-image";

function ContactForm() {
  return (
    <section className="center-contents bg-gray-50">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <Link href="/">
            <ContentfulImage
                src="https://images.ctfassets.net/cnurwx923vw4/6NjpkxInHsigcB9Fyc8esk/9f71b6facea35558d7e72e3a5115659c/logo.png"
                alt="Protopace's logo"
                width={220}
                height={57}
            />
        </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
              <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                  <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                      Coming Soon
                  </h1>
              </div>
          </div>
      </div>
    </section>
  );
}


export default async function Page() {

  return (
    <>
      <ContactForm></ContactForm>
    </>
  );
}
