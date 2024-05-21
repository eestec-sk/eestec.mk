import React from "react";

import { NextSeo } from "next-seo";

export default function ResetPasswordForm(): JSX.Element {

  const SEO = {
    title: "Reset Password",
    description: "EESTEC MK Reset Password",
    openGraph: {
      url: "https://eestec.mk/reset-password",
      type: "website",
      locale: "mk_MK",
      site_name: "EESTEC MK Reset Password",
    },
  };

  return (
    <>
      <NextSeo {...SEO} />

      <div>reset password here plz</div>
    </>
  );
}
