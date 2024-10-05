"use client";
import Image from "next/image";
import HeaderComponent from "@/components/HeaderComponent";

const forgot = () => {
  return (
    <div>
      <HeaderComponent/>
      <div
        className="w-full p-10"
        style={{
          backgroundPosition: `center`,
          backgroundSize: `cover`,
          backgroundRepeat: `no-repeat`,
        }}
      >
        <div className=" flex justify-center">
          <div className="my-[3rem] w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700 ">
            <form className="space-y-6" action="#">
              <div className="md:flex justify-center">
                <article className="grid justify-items-center text-center lg:my-6">
                  <Image
                    src={"/images/logos_icons/penguin_icon.svg"}
                    width={100}
                    height={100}
                    alt="Feature Image"
                    className="justify-center"
                  />
                </article>
              </div>

              <h4 className="text-3xl text-center font-medium text-gray-900 dark:text-white">
                Forgot Password?
              </h4>
              <p className="text-sm">
                We will email you a link to reset your password
              </p>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Enter your email adress
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@eestec.com"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Send reset link
              </button>
              <div className="text-sm text-center font-medium text-gray-500 dark:text-gray-300">
                <a
                  href="/login"
                  className="text-blue-700 text-center hover:underline dark:text-blue-500"
                >
                  Continue
                </a>
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
            className="mt-[5.77rem]"
          />
        </article>
      </div>
    </div>
  );
};
export default forgot;
