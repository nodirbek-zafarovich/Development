import React, { useEffect, useState } from "react";
import { FaCcPaypal } from "react-icons/fa";
import { SiCocacola } from "react-icons/si";
import { FaVimeoSquare } from "react-icons/fa";
import { SiIbm } from "react-icons/si";
import { SiPostman } from "react-icons/si";
import { FaIdeal } from "react-icons/fa";
import { FcWikipedia } from "react-icons/fc";
import { FcSignature } from "react-icons/fc";
import { FcCommandLine } from "react-icons/fc";
import Inc from "../../public/assets/inc5000.svg";
import Gptw from "../../public/assets/gptw.svg";
import Financial from "../../public/assets/financial_times.svg";
import Aws from "../../public/assets/aws.svg";
import GBE from "../../public/assets/GBE.svg";
import Staive from "../../public/assets/Stevie.svg";
import Image1 from "../../public/assets/image1.jpg";
import Image2 from "../../public/assets/image2.jpg";
import Image3 from "../../public/assets/image3.jpg";
import Image4 from "../../public/assets/image4.jpg";
import Slide from "./Slide";

const Hero = () => {
  const [slide, setSlide] = useState(1);
  const slideTitles = {
    1: "Engineering peace of mind",
    2: "International Invention Day",
    3: "AI innovation",
    4: "Expert software development",
  };

  const slideBtn = {
    1: "Get an setimate",
    2: "Enter the contest",
    3: "Read the repot",
    4: "Schedule a call",
  };
  const slideImg = [Image1, Image1, Image2, Image3, Image4];

  const slideContent = {
    1: "Vention developers partner with innovative companies from startups to Fortune 500s, lending the AI engineering expertise to propel them to new heights and the edge to outpace the competition.",
    2: "On May 16, Vention kicks off International Invention Day, celebrating human creativity and game-changing inventions. Until June 30, you’ll also have a chance to join the In:Vention Incubator and win 12 weeks of our top-tier services worth $150K USD in in-house software development.",
    3: "As pioneers in AI engineering, we view it as more than a shiny tool: it's a pillar of the new business normal. Those companies that embrace and leverage AI will set the standard and lead in their category. In our new State of AI report, we look at funding, investment, and valuation trends across the AI market.",
    4: "Get it done right — the first time. Our proven software expertise and engagement flexibility mean you don’t have to worry about timelines, processes, or outcomes. Proficient in web, mobile, cloud, and advanced tech like AI and VR, we empower you to innovate and grow your business at the scale and speed of future trends.",
  };

  const slideBg = {
    1: "bg-[#ff6a47]",
    2: "bg-[#ff6fff]",
    3: "bg-[#ff6a47]",
    4: "bg-[#3155ff]",
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSlide((prevSlide) => (prevSlide % 4) + 1);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="container mx-auto">
      <div className=" px-[30px] container mx-auto mt-[20px]  pb-[60px] border-b ">
        <div className="grid grid-cols-2 h-[200px] ">
          <div className={` ${slideBg[slide]} grid items-center dropDown  `}>
            <h1 className=" text-[70px] leading-[90%] pl-[30px] dropDown ">
              {slideTitles[slide]}
            </h1>
          </div>
          <div className="flex items-end justify-end pb-[20px] ">
            <ul className="flex w-[400px] justify-between gap-5 ">
              <li
                onClick={() => setSlide(1)}
                className={`text-[22px] cursor-pointer dropDown ${
                  slide == 1
                    ? " border-[#39175b] text-[#39175b] grow"
                    : "border-[#d2d2d5] text-[#d2d2d5]"
                }  font-semibold p-2   border-t-[3px] `}
              >
                01
              </li>
              <li
                onClick={() => setSlide(2)}
                className={`text-[22px] cursor-pointer dropDown ${
                  slide == 2
                    ? " border-[#39175b] text-[#39175b] grow"
                    : "border-[#d2d2d5] text-[#d2d2d5]"
                }  font-semibold p-2  border-t-[3px] `}
              >
                02
              </li>
              <li
                onClick={() => setSlide(3)}
                className={`text-[22px] cursor-pointer dropDown ${
                  slide == 3
                    ? " border-[#39175b] text-[#39175b] grow"
                    : "border-[#d2d2d5] text-[#d2d2d5]"
                }  font-semibold p-2  border-t-[3px] `}
              >
                03
              </li>
              <li
                onClick={() => setSlide(4)}
                className={`text-[22px] cursor-pointer dropDown ${
                  slide == 4
                    ? " border-[#39175b] text-[#39175b] grow"
                    : "border-[#d2d2d5] text-[#d2d2d5]"
                }   font-semibold p-2  border-t-[3px] `}
              >
                04
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 h-[520px] ">
          <div className="flex flex-col justify-end items-end pr-[20px] pb-[30px] ">
            <div className=" max-w-[400px] ">
              <p className="mb-[50px] text-[22px] leading-7 font-thin ">
                {slideContent[slide]}
              </p>
              <button
                className={`w-full flex p-[20px] justify-between items-center h-[70px] ${slideBg[slide]} hover:bg-[#52002d] hover:text-white dropDown `}
              >
                <span className="text-[28px] font-medium ">
                  {slideBtn[slide]}
                </span>
              </button>
            </div>
          </div>

          <div className="pb-[30px] relative overflow-hidden ">
            <Slide slide={slide} setSlide={setSlide}>
              {slideImg.map((item) => (
                <img
                  src={item}
                  alt="image"
                  className=" max-h-[500px] w-full min-h-[500px] relative z-0 "
                />
              ))}
            </Slide>

            <div className="w-[450px] h-[200px] skew-x-[-45deg] bg-white bottom-0 right-[-100px]  absolute">
              {" "}
            </div>
          </div>
        </div>
      </div>
      <div className="border-l border-b py-[30px]">
        <hr class="h-px  my-8 bg-gray-200 border-0 dark:bg-gray-300"></hr>
        <h1 className="text-4xl font-semibold mt-[180px] mx-[100px]">
          With 20+ years of providing software development services for
          technological enterprises, successful startups, and AI-empowered
          companies worldwide, our developers demonstrate exceptional efficiency
          and expertise.
        </h1>
        <p className="ml-[890px] mt-[20px] text-lg mb-[40px]">
          On average, Vention clients benefit $600,000+ from annual savings as a
          result of <br /> our collaboration.
        </p>
        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-300"></hr>
      </div>
      <div className="border-l border-b py-[30px]">
        <div className="mx-[110px] flex gap-[650px] items-center">
          <h1 className="text-3xl font-semibold text-pink-900">Key Stats</h1>
          <div className="flex gap-[150px]">
            <span className="text-pink-900 text-8xl font-sans">500+</span>
            <span className="text-pink-900 text-8xl font-sans">$15B+</span>
          </div>
        </div>
        <div className="flex ml-[830px] mt-[20px] mb-[40px] ">
          <h1 className="text-xl">award-winning clients</h1>
          <h1 className="ml-[190px] text-xl">in client acquisitions</h1>
        </div>
      </div>
      <div className="border-l border-b py-[30px]">
        <div className="flex gap-[260px] mx-[100px] w-full  ">
          <span className="text-7xl text-pink-900 font-sans">36</span>
          <span className="text-7xl text-pink-900 font-sans">20+</span>
          <div className="flex gap-[250px]">
            <span className="text-7xl text-pink-900 font-sans">20+</span>
            <span className="text-7xl text-pink-900 font-sans">3K+</span>
          </div>
        </div>
        <div className="flex gap-[90px] mx-[100px] my-[40px]">
          <span className="text-xl font-sans">month average engagement</span>
          <span className="text-xl font-sans">client IPOs supported</span>
          <div className="ml-[110px] flex gap-[200px]">
            <span className="text-xl font-sans">years of experience</span>
            <span className="text-xl font-sans">world-class engineers</span>
          </div>
        </div>
      </div>
     
      <div className="border-l border-b py-[30px]">
        <div className="my-[60px] mx-[100px]">
          <h1 className="text-6xl font-semibold">Trusted by the best</h1>
          <p className="mt-[50px] text-xl ">
            Companies ranging from early-stage startups to Fortune 500
            enterprises partner with us to develop game-changing growth
            solutions.
          </p>
        </div>
      </div>
        <div className="border-l border-b py-[30px] ">
        <marquee direction="left">
          <div className="flex w-full justify-between items-center gap-[100px] ">
            <img
              src="https://ventionteams.com/media/documents/inc5000.svg"
              alt="1"
            />
            <img
              src="https://ventionteams.com/media/documents/financial_times.svg"
              alt="2"
            />
            <img
              src="https://ventionteams.com/media/documents/award_aws_kWAIyp0.svg"
              alt="3"
            />
            <img
              src="https://ventionteams.com/media/documents/The_Stevie_RgdSHUS.svg"
              alt="4"
            />
            <img
              src="https://ventionteams.com/media/documents/Global_Business_Excellence_Awards.svg"
              alt="5"
            />
            <img
              src="https://ventionteams.com/media/documents/iaop.svg"
              alt="6"
            />
            <img
              src="https://ventionteams.com/media/documents/gptw_greyscale.svg"
              alt="7"
            />
          </div>
        </marquee>
      </div>
      <div className="border-l border-b py-[30px]  ">
        <div className="text-6xl font-bold my-5 text-center ">
          <h1>How we work</h1>
        </div>
        <hr class="h-px  my-8 bg-gray-200 border-0 dark:bg-gray-300"></hr>
        <div class="grid grid-cols-2 pl-[30px] pr-[60px] pt-[100px] pb-[30px] border-b ">
          <div>
            <p class=" text-[22px] text-[#52002d] mb-[30px] font-semibold ">
              We speak your language
            </p>
            <p class=" text-[45px] leading-[55px] font-medium mb-[30px] ">
              Wondering how well we know your industry? Curious which tech
              stacks we support?
            </p>
            <p class="text-[18px] ">
              Spanning 30+ verticals and 25+ technologies, our team has designed
              and implemented innovative solutions to suit even the most unique
              needs.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-2 pl-[30px] py-[40px] border-b ">
          <p class=" text-[28px] font-medium text-[#52002d] ">Expertise</p>
          <div class="grid grid-cols-2 gap-3 justify-between min-w-[50%] ">
            <div class="flex flex-col gap-2 pl-[-30px] ">
              <p class="text-[22px] font-medium underline ">
                Software development
              </p>
              <p class="text-[22px] font-medium underline ">Web development</p>
              <p class="text-[22px] font-medium underline ">
                Mobile development
              </p>
              <p class="text-[22px] font-medium underline ">Startup services</p>
              <p class="text-[22px] font-medium underline ">Cloud services</p>
            </div>
            <div class="flex flex-col gap-2">
              <p class="text-[22px] font-medium underline ">Blockchain</p>
              <p class="text-[22px] font-medium underline ">AR/VR</p>
              <p class="text-[22px] font-medium underline ">Salesforce</p>
              <p class="text-[22px] font-medium underline ">
                Artificial intelligence
              </p>
              <p class="text-[22px] font-medium underline ">
                Internet of things
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="grid grid-cols-2 pl-[30px] py-[40px] ">
            <p class=" text-[28px] font-medium text-[#52002d] ">Industries</p>
            <div class="grid grid-cols-2 gap-3 justify-between min-w-[50%] ">
              <div class="flex flex-col gap-2 pl-[-30px] ">
                <p class="text-[22px] font-medium underline ">Fintech</p>
                <p class="text-[22px] font-medium underline ">Healthtech</p>
                <p class="text-[22px] font-medium underline ">Edtech</p>
              </div>
              <div class="flex flex-col gap-2">
                <p class="text-[22px] font-medium underline ">Blockchain</p>
                <p class="text-[22px] font-medium underline ">Real estate</p>
                <p class="text-[22px] font-medium underline ">
                  Marketing/Adtech
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div class="grid grid-cols-2 pt-[150px] pb-[40px] border-b  pr-[30px] ">
            <p></p>
            <div>
              <p class=" text-[40px] font-bold mb-[20px] ">
                Discover Vention in action
              </p>
              <p class=" font-thin text-[18px] ">
                See firsthand what sets us apart — and how our approach has
                translated into exponential growth for our clients worldwide.
                Hit play to begin your journey with us.
              </p>
            </div>
          </div>
          <div className=" grid place-content-center py-[40px] border-b ">
            <div className="w-[1200px] h-[650px]">
              <div className="w-[100%] h-[100%]">
                <iframe
                  frameborder="0"
                  allowfullscreen=""
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  title="2023 State of AI report"
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/CpO-2w7KjpE?autoplay=0&amp;mute=0&amp;controls=1&amp;origin=http%3A%2F%2Flocalhost%3A5174&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;iv_load_policy=3&amp;modestbranding=1&amp;enablejsapi=1&amp;widgetid=1"
                  id="widget2"
                ></iframe>
              </div>
            </div>
          </div>
          <div>
            <div class="pt-[150px] px-[40px] pb-[40px] border-b">
              <p class=" text-[40px] font-bold mb-[20px] ">Partnerships</p>
              <p class=" font-thin text-[18px] ">
                Our network includes the world’s top tech leaders, ensuring that
                our developers always have access to cutting-edge technologies
                and products.
              </p>
            </div>
          </div>
          <div className="border-l border-b py-[30px] ">
            <marquee direction="left">
              <div className="flex w-full justify-between items-center gap-[100px] ">
                <img
                  src="https://ventionteams.com/media/documents/inc5000.svg"
                  alt="1"
                />
                <img
                  src="https://ventionteams.com/media/documents/financial_times.svg"
                  alt="2"
                />
                <img
                  src="https://ventionteams.com/media/documents/award_aws_kWAIyp0.svg"
                  alt="3"
                />
                <img
                  src="https://ventionteams.com/media/documents/The_Stevie_RgdSHUS.svg"
                  alt="4"
                />
                <img
                  src="https://ventionteams.com/media/documents/Global_Business_Excellence_Awards.svg"
                  alt="5"
                />
                <img
                  src="https://ventionteams.com/media/documents/iaop.svg"
                  alt="6"
                />
                <img
                  src="https://ventionteams.com/media/documents/gptw_greyscale.svg"
                  alt="7"
                />
              </div>
            </marquee>
          </div>
          <div class="grid grid-cols-2 pt-[150px] px-[30px] border-b ">
            <p></p>
            <p class=" text-[40px] font-bold mb-[40px] ">Our Work</p>
          </div>
        </div>
        <div class=" pt-[150px] pl-[40px] pb-[40px] border-b ">
          <p class=" text-[45px] font-bold mb-[20px]  ">
            Recognized as a leader by those in the know
          </p>
          <p class="text-[22px] font-thin ">
            Year after year, Vention has been counted among best-in-class
            companies by the industry’s most respected institutions.
          </p>
        </div>
        <div className="py-[40px] px-[70px] border-b flex items-center justify-between ">
          <img src={Inc} alt="Inc" />
          <img src={Gptw} alt="Gptw" />
          <img src={Financial} alt="Financial" />
          <img src={Aws} alt="Aws" />
          <img src={GBE} alt="GBE" />
          <img src={Staive} alt="Staive" />
        </div>
        <div className="border-l bg-transparent">
          <div className="grid grid-cols-[8fr_3fr]">
            <div className="border-r">
              <p className="border-b pl-[40px] text-[45px] pt-[150px] font-bold pb-[40px] ">
                Contact
              </p>

              <div className="grid grid-cols-2">
                <input
                  className="border outline-none py-4 px-[40px] text-[#b4b4b5] bg-transparent "
                  placeholder="Full Name"
                  type="text"
                />
                <input
                  className="border outline-none py-4 px-[40px] text-[#b4b4b5] bg-transparent "
                  placeholder="Work Email"
                  type="text"
                />
                <input
                  className="border outline-none py-4 px-[40px] text-[#b4b4b5] bg-transparent "
                  placeholder="Phone (Optional)"
                  type="text"
                />
                <span className="px-[40px] py-4 border flex items-center justify-between">
                  <input
                    className="outline-none text-[#b4b4b5] w-[80%]  bg-transparent "
                    placeholder="Upload File (max file size is 30MB) "
                    type="text"
                  />
                </span>
              </div>
            </div>
            <div></div>
          </div>

          <div className="grid grid-cols-[8fr_3fr] border-b">
            <textarea
              className=" outline-none resize-none px-[40px]  py-[30px] text-[#b4b4b5]  bg-transparent  "
              placeholder="How can we help you? "
            ></textarea>
            <button className=" hover:bg-[#101c57] transition-all bg-[#3155ff] text-white text-[22px] font-medium ">
              Send
            </button>
          </div>

          <div className="grid grid-cols-[8fr_3fr]  ">
            <div className="border-r flex justify-between gap-6 items-center h-[60px] pl-[40px] ">
              <span className=" flex gap-1 items-center ">
                <input type="checkbox" />
                <p className="text-[14px] text-[#b4b4b5] ">
                  {" "}
                  I agree to the{" "}
                  <span className=" underline text-[14px] text-[#b4b4b5]">
                    {" "}
                    Privacy Policy{" "}
                  </span>{" "}
                  and give my permission to process my personal data for the
                  purposes specified in the Privacy Policy.
                </p>
              </span>

              <div className="bg-[#3155ff] w-[60px] h-full grow "></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
