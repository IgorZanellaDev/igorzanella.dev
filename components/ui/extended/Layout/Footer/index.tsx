import React, { FunctionComponent } from "react";
import { SOCIAL_LINKS } from "constants/navbar";
import FooterLink from "components/ui/extended/Layout/Footer/FooterLink";

const Footer: FunctionComponent = () => {
  return (
    <footer className="mx-auto container px-6 lg:px-14 xl:px-2 mt-8">
      <div className="py-12 md:flex md:items-center md:justify-between">
        <div className="flex justify-center space-x-6 md:order-2">
          {SOCIAL_LINKS.map((socialLink) => (
            <FooterLink {...socialLink} />
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-500">
            &copy; {new Date().getFullYear()} Made with &hearts;️ by Igor
            Zanella. All rights reserved. VAT: IT05104380265
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
