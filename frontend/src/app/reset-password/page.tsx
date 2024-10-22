"use client";
import Image from "next/image";
import HeaderComponent from "@/components/HeaderComponent";

const reset = () => {
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
        <div className=" flex justify-center">
          <div
            className="my-[3rem] w-full max-w-sm p-4 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 "
            style={{
              boxShadow: `0px 216px 60px 0px rgba(0, 0, 0, 0%),
            0px 138px 55px 0px rgba(0, 0, 0, 1%),
            0px 78px 47px 0px rgba(0, 0, 0, 5%),
            0px 35px 35px 0px rgba(0, 0, 0, 9%),
            0px 9px 19px 0px rgba(0, 0, 0, 10%)`,
              borderRadius: `20px`,
              border: "1px solid #ccc",
            }}
          >
            <form className="space-y-6" action="#">
              <div className="md:flex justify-center">
                <article className="grid justify-items-center text-center lg:my-6">
                  <Image
                    src={"/images/logos_icons/padlock icon.svg"}
                    width={100}
                    height={100}
                    alt="Feature Image"
                    className="justify-center"
                  />
                </article>
              </div>

              <h4 className="text-3xl text-center font-medium text-eestec">
                Forgot Password?
              </h4>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  New password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-150 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-150 dark:border-gray-400 dark:placeholder-gray-400 dark:text-white"
                  required
                />
              </div>

              <button
                type="submit"
                className="link-login w-full text-white font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Save
              </button>
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
            className="mt-[6.68rem]"
          />
        </article>
      </div>
    </div>
  );
};
export default reset;
