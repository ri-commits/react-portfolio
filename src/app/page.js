import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import deved from "../../public/dev-ed-wave.png";
import design from "../../public/design.png";
import code from "../../public/code.png";
import consulting from "../../public/consulting.png";

export default function Home() {
  return (
    <main className="bg-white px-10">
      <section className=" min-h-screen">
        <nav className="py-10 mb-12 flex justify-between">
          <h1 className=" text-xl font-burtons">developbyry</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <div className="text-center p-10">
          <h2 className="text-5xl py-2 text-teal-600 font-medium">
            Richard Kartashou
          </h2>
          <h3 className="text-2xl py-2">Developer and designer.</h3>
          <p className="text-md py-5 leading-8 text-gray-800 ">
            Are you in search of top-notch programming and design services for
            your project? Look no further! I'm a skilled freelance developer and
            designer, ready to bring your vision to life. Join me on this
            exciting journey, and let's get cracking!
          </p>
        </div>

        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillYoutube />
        </div>
        <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
          <Image src={deved} fill objectFit="cover" />
        </div>
      </section>

      {/* Second Page */}

      <section>
        <div>
          <h3 className="text-3xl py-1">Services I offer</h3>
          <p className="text-md py-2 leading-8 text-gray-800">
            Since the beginning of my journey as freelancer developer, I've done
            remote work for
            <span className="text-teal-500"> agences </span>
            consulted for <span className="text-teal-500"> startaps </span> and
            collaborated with talanted people to create digital products for
            both buisness and consumer use.
          </p>
          <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
            I offer from a wide range of services, including brand design,
            programming and teaching.
          </p>
        </div>
        <div>
          <div>
            <Image src={design} width={100} height={100} />
            <h3>Beautiful Design</h3>
            <p>Creating elegant designs suited for your needs design theory</p>
            <h4>Design tools I use</h4>
            <p>Photoshop</p>
            <p>Illustrator</p>
            <p>Figma</p>
          </div>
        </div>
      </section>
    </main>
  );
}
