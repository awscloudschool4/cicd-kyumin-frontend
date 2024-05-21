import React from "react";
import { format } from "date-fns";

const Footer = () => {
  const currentYear = format(new Date(), "yyyy");
  return (
    <div className="container flex flex-row">
      <footer className="w-full bg-gray-800 text-white text-center py-8 bottom-0 absolute">
        <p className="text-sm sm:text-base">
          ©{currentYear} AWS Cloud Schol 4기 CI/CD팀 3조. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Footer;
