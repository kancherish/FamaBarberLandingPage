import { Scissors, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <div className="bg-gray-900 text-gray-100 px-4 pt-16 mx-auto md:max-w-full max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-16 row-gap-10 mb-8 lg:grid-cols-6">
        <div className="md:max-w-md lg:col-span-2">
          <a
            href="/"
            aria-label="Go home"
            title="Company"
            className="inline-flex items-center"
          >
            <Scissors className="w-8 h-8 text-amber-500" />
            <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
              FAMA BARBER
            </span>
          </a>
          <div className="mt-4 lg:max-w-sm">
            <p className="text-sm text-gray-400">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam.
            </p>
            <p className="mt-4 text-sm text-gray-400">
              Eaque ipsa quae ab illo inventore veritatis et quasi architecto
              beatae vitae dicta sunt explicabo.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 row-gap-8 lg:col-span-4 md:grid-cols-4">
          <div>
            <p className="font-semibold tracking-wide text-amber-500">
              Quick Links
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-400 transition-colors duration-300 hover:text-amber-500"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 transition-colors duration-300 hover:text-amber-500"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 transition-colors duration-300 hover:text-amber-500"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 transition-colors duration-300 hover:text-amber-500"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 transition-colors duration-300 hover:text-amber-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold tracking-wide text-amber-500">
              Services
            </p>
            <ul className="mt-2 space-y-2">
              <li>
                <a
                  href="/"
                  className="text-gray-400 transition-colors duration-300 hover:text-amber-500"
                >
                  Haircuts
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 transition-colors duration-300 hover:text-amber-500"
                >
                  Beard Grooming
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 transition-colors duration-300 hover:text-amber-500"
                >
                  Hot Towel Shaves
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 transition-colors duration-300 hover:text-amber-500"
                >
                  Hair Styling
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-400 transition-colors duration-300 hover:text-amber-500"
                >
                  Kid's Cuts
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold tracking-wide text-amber-500">
              Hours
            </p>
            <ul className="mt-2 space-y-2">
              <li className="text-gray-400">
                Mon - Fri: 9am - 8pm
              </li>
              <li className="text-gray-400">
                Saturday: 10am - 6pm
              </li>
              <li className="text-gray-400">
                Sunday: Closed
              </li>
            </ul>
          </div>

          <div>
            <p className="font-semibold tracking-wide text-amber-500">
              Contact
            </p>
         
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row">
        <p className="text-sm text-gray-500">
          © Copyright 2025 FAMA BARBER. All rights reserved.
        </p>
        <div className="flex items-center mt-4 space-x-4 sm:mt-0">
          <a
            href="/"
            className="text-gray-500 transition-colors duration-300 hover:text-amber-500"
            aria-label="Twitter"
          >
            <Twitter className="h-5 w-5" />
          </a>
          <a
            href="/"
            className="text-gray-500 transition-colors duration-300 hover:text-amber-500"
            aria-label="Instagram"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="/"
            className="text-gray-500 transition-colors duration-300 hover:text-amber-500"
            aria-label="Facebook"
          >
            <Facebook className="h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}