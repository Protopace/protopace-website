"use client"
import Link from "next/link";
import ContentfulImage from "../lib/contentful-image";

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

export default function Footer() {

  return (
    <footer className="p-4 bg-white sm:p-6 dark:bg-gray-200">
        <div className="mx-auto max-w-screen-xl">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <Link href="/">
                        <ContentfulImage
                            src="https://images.ctfassets.net/cnurwx923vw4/6NjpkxInHsigcB9Fyc8esk/9f71b6facea35558d7e72e3a5115659c/logo.png"
                            alt="Protopace's logo"
                            width={220}
                            height={57}
                        />
                    </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-primary uppercase">Resources</h2>
                        <ul className="text-gray-600">
                            <li className="mb-4">
                                <Link href="/blog" className="font-medium hover:underline hover:text-secondary">Blog</Link>
                            </li>
                            <li>
                                <Link href="/blog" className="font-medium hover:underline hover:text-secondary">Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-primary uppercase">Industries</h2>
                        <ul className="text-gray-600">
                            <li className="mb-4">
                                <Link href="https://github.com/themesberg/flowbite" className="font-medium hover:underline hover:text-secondary">Moving Services</Link>
                            </li>
                            <li>
                                <a href="https://discord.gg/4eeurUVvTy" className="font-medium hover:underline hover:text-secondary">Healthcare</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold text-primary uppercase">Legal</h2>
                        <ul className="text-gray-600">
                            <li className="mb-4">
                                <Link href="/privacy-policy" className="font-medium hover:underline hover:text-secondary">Privacy Policy</Link>
                            </li>
                            <li>
                                <Link href="#" className="font-medium hover:underline hover:text-secondary">Terms &amp; Conditions</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div className="sm:flex sm:items-center sm:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" className="hover:underline hover:text-secondary">Protopace™</a>. All Rights Reserved.
                </span>
                <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                    <Link href="https://www.facebook.com/protopace/" className="text-gray-500 hover:text-secondary">
                        <FacebookIcon>
						</FacebookIcon>
					</Link>
                    <Link href="https://www.instagram.com/protopace/" className="text-gray-500 hover:text-secondary">
                        <InstagramIcon>
						</InstagramIcon>
                    </Link>
                    <Link href="https://www.x.com/protopace/" className="text-gray-500 hover:text-secondary">
                        <XIcon>
						</XIcon>
                    </Link>
                </div>
            </div>
        </div>
    </footer>
  );
}
