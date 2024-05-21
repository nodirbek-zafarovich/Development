import React from "react";

const Footer = () => {
  return (
    <div className="border-l bg-gray-900">
      <div className="grid grid-cols-[7fr_3fr] pl-[40px] border-b ">
        <div className="border-r pt-[40px] ">
          <p className="text-[28px] mb-[15px] text-white">
            Subscribe to our newsletter for industry <br /> insights and company
            news!
          </p>
          <span className="border-b block w-[300px] pb-[10px] mb-[15px] ">
            <input
              className="bg-inherit text-[#b4b4b5] outline-none "
              type="email"
              placeholder="Enter email"
            />
          </span>
          <span className="flex gap-2">
            <input type="checkbox" />
            <p className="text-[14px] text-[#b4b4b5] ">
              {" "}
              I agree to the{" "}
              <span className=" underline text-[14px] text-[#b4b4b5]">
                {" "}
                Privacy Policy{" "}
              </span>{" "}
              and give my <br /> permission to process my personal data for the
              purposes specified in the Privacy Policy.
            </p>
          </span>
        </div>

        <div className="grid grid-cols-2 pt-[40px] pl-[30px] pb-[50px] justify-between">
          <ul className=" flex flex-col gap-2 ">
            <li className="mb-[10px] text-[#b4b4b5] ">About</li>
            <li className=" hover:text-[#fe977e] cursor-pointer text-white ">
              Company
            </li>
            <li className=" hover:text-[#fe977e] cursor-pointer text-white ">
              Portfolio
            </li>
            <li className=" hover:text-[#fe977e] cursor-pointer text-white ">
              Partnership
            </li>
            <li className=" hover:text-[#fe977e] cursor-pointer text-white ">
              Newsroom
            </li>
            <li className=" hover:text-[#fe977e] cursor-pointer text-white ">
              Media kit
            </li>
            <li className=" hover:text-[#fe977e] cursor-pointer text-white ">
              Careers
            </li>
            <li className=" hover:text-[#fe977e] cursor-pointer text-white ">
              Contact
            </li>
          </ul>

          <ul className=" flex flex-col gap-2 ">
            <li className="mb-[10px] text-[#b4b4b5] ">Delivery Models</li>
            <li className=" hover:text-[#fe977e] cursor-pointer text-white">
              DEdicated development terms
            </li>
            <li className=" hover:text-[#fe977e] cursor-pointer text-white ">
              Project-based delivery
            </li>
          </ul>
        </div>
      </div>

      <div className="grid grid-cols-[7fr_3fr] pl-[40px]">
        <div className="pb-[50px] ">
          <div className="grid grid-cols-2 justify-between pt-[40px] pl-[30px] pb-[50px]">
            <ul>
              <li className=" hover:text-[#fe977e] cursor-pointer text-white ">
                Linkedin
              </li>
              <li className=" hover:text-[#fe977e] cursor-pointer text-white ">
                Instagram
              </li>
              <li className=" hover:text-[#fe977e] cursor-pointer text-white ">
                X
              </li>
              <li className=" hover:text-[#fe977e] cursor-pointer text-white ">
                YouTube
              </li>
            </ul>
            <ul>
              <li className=" hover:text-[#fe977e] cursor-pointer text-white ">
                +998 45039485-92{" "}
              </li>
              <li className=" hover:text-[#fe977e] cursor-pointer text-white ">
                Lorem ipsum dolor sit amet.
              </li>
              <li className=" hover:text-[#fe977e] cursor-pointer text-white ">
                USA new york
              </li>
            </ul>
          </div>

          <p className=" text-[14px] px-[30px] text-white ">
            © 2002 - 2024. Vention All Rights Reserved{" "}
            <span className=" underline">Privacy Policy</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
