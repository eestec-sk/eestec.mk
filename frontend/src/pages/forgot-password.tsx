import React, { useState } from "react";

import { NextSeo } from "next-seo";

const ForgotPassword = () => {

  const SEO = {
    title: "Forgot Password",
    description: "EESTEC MK Forgot Password",
    openGraph: {
      url: "https://eestec.mk/forgot-password",
      type: "website",
      locale: "mk_MK",
      site_name: "EESTEC MK Forgot Password",
    }
  }

  const [email, setEmail] = useState("");
  const registerHandler = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };


  return (
    <>
      <NextSeo {...SEO} />

      <div>forgot password plz</div>
    </>
  );
};

export default ForgotPassword;
