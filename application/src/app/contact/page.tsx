"use client";
import Image from "next/image";
import HeaderComponent from "@/components/HeaderComponent";

const events = () => {
  return (
    <div>
      <div
        className="w-full p-10"
        style={{
          backgroundPosition: `center`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
        }}
      >
        <div className="">
          <div
            className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md bg-white shadow-lg rounded-lg"
            style={{
              boxShadow: `0px 216px 60px 0px rgba(0, 0, 0, 0%),
              0px 138px 55px 0px rgba(0, 0, 0, 1%),
              0px 78px 47px 0px rgba(0, 0, 0, 5%),
              0px 35px 35px 0px rgba(0, 0, 0, 9%),
              0px 9px 19px 0px rgba(0, 0, 0, 10%)`,
              borderRadius: `20px`,
              border: "1px solid #ccc"
            }}
          >
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-eestec">
              Contact Us
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-black sm:text-xl">
              Got a technical issue? Want to send feedback about a beta feature?
              Need details about our Students Life? Let us know.
            </p>
            <form action="#" className="space-y-8">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-150 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@example.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-150 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  className=" bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-150 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <div className="justify-center text-center">
                <button
                  type="submit"
                  className="link-blog py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 justify-center text-black"
                >
                  Send message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="md:flex justify-center">
        <article className="grid justify-items-center text-center lg:my-6">
          <Image
            src={"/images/logos_icons/lightning.svg"}
            width={40}
            height={40}
            alt="Feature Image"
            className="my-[1.25rem]"
          />
        </article>
      </div>
    </div>
  );
};
export default events;
