import { Link } from "react-router-dom";
import {
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

const Home = () => {
  return (
    <div className="bg-white min-h-screen">
      <main>
        <div className="relative isolate">
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-12 sm:pt-20 lg:px-4 lg:pt-10">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    Your Trusted Legal Partners
                  </h1>
                  <p className="relative mt-4 text-lg leading-8 text-gray-600 sm:max-w-md lg:max-w-none">
                    At Pearson Specter Litt Law Firm, we combine expertise,
                    dedication, and a client-focused approach to deliver
                    exceptional legal services. Our team of skilled lawyers is
                    committed to protecting your rights and interests across a
                    wide range of practice areas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative isolate mt-2 px-6 py-20 sm:mt-4 sm:py-1 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Ready to get started?
              <br />
              Book an appointment today.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Take the first step towards resolving your legal matters. Our
              experienced lawyers are here to help you navigate through any
              legal challenges you may face.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/book"
                className="rounded-md bg-azure-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-azure-blue transition duration-150 ease-in-out"
              >
                Book an Appointment
              </Link>
              <Link
                to="/history"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-azure-blue transition duration-150 ease-in-out flex items-center"
              >
                View Appointment History
                <ArrowRightIcon className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
