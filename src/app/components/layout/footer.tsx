"use client"
import Link from "next/link";
import ContentfulImage from "../lib/contentful-image";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

export default function Footer() {

  return (
    <footer className="p-4 bg-gray-900 sm:p-6">
        <div className="mx-auto max-w-screen-xl">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <Link href="/">
                        <ContentfulImage
                            src="https://images.ctfassets.net/cnurwx923vw4/5dxphrJropCp0V2A86j1bQ/72a2707baa96d8ddd8ea7a09d83a30be/logo-white.svg"
                            alt="Protopace's logo"
                            width={180}
                            height={50}
                        />
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-white uppercase">Resources</h2>
                        <ul className="text-gray-600">
                            <li className="mb-4">
                                <Link href="/blog" className="font-medium text-white hover:underline hover:font-bold">Blog</Link>
                            </li>
                            <li>
                                <Link href="/blog" className="font-medium text-white hover:underline hover:font-bold">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-white uppercase">Properties</h2>
                        <ul className="text-gray-600">
                            <li className="mb-4">
                                <Link href="/contact-us" className="font-medium text-white hover:underline hover:font-bold">Book Now</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-white uppercase">Legal</h2>
                        <ul className="text-gray-600">
                            <li className="mb-4">
                                <Link href="/privacy-policy" className="font-medium text-white hover:underline hover:font-bold">Privacy Policy</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-white sm:text-center dark:text-gray-400">© 2024 <a href="/" className="hover:underline hover:text-secondary">Protopace™</a>. All Rights Reserved.
                </span>
                <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                    <Link href="https://www.facebook.com/protopace/" className="text-white hover:text-secondary">
                        <FacebookIcon>
						</FacebookIcon>
					</Link>
                    <Link href="https://www.instagram.com/protopace/" className="text-white hover:text-secondary">
                        <InstagramIcon>
						</InstagramIcon>
                    </Link>
                    <Link href="https://www.x.com/protopace/" className="text-white hover:text-secondary">
                        <XIcon>
						</XIcon>
                    </Link>
                </div>
            </div>
        </div>
    </footer>
  );
}
