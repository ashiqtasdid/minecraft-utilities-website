import React, { Children, useRef } from "react";
import { motion as m, useScroll, useTransform } from "framer-motion";
import Link from "next/link";

const HeroMid = () => {
  return (
    <m.div className="flex h-screen text-center justify-center items-center mx-auto">
      <m.div
        initial={{
          opacity: 0,
          x: -100,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="mx-10 space-y-5"
      >
        <h1 className="text-5xl font-black">
          We are an Open Source Discord Bot
        </h1>
        <div className="text-justify">
          <p>
            Your privacy and protection are our top priorities. That&apos;s why
            we are an open-source Discord bot. We understand the value of
            open-source communities for fostering collaboration, trust, and
            security. You can check out our code on our Github Repository, learn
            more about our project, and even contribute to help us grow! We
            welcome developers of all skill levels - join the community and make
            a difference!
          </p>
        </div>
        <div className="space-x-3">
          <Link href={'https://github.com/ashiqtasdid/minecraft-utilities'} target="_blank">
          <button className="rounded-sm border-2 border-black bg-white px-3 py-1.5 font-normal text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-xl active:shadow-none">
            Github Repo
          </button>
          </Link>
          <button className="rounded-sm border-2 border-zinc-800 bg-zinc-800 px-3 py-1.5 font-normal text-white transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-xl active:shadow-none">
            Learn more
          </button>
        </div>
      </m.div>
      <div className="mx-10">
        <m.div
          whileHover={{
            scale: 1.01,
            transition: { duration: 0.5 },
          }}
          className="w-[560px] font-mono bg-gray-100 dark:bg-zinc-800 px-5 py-5 rounded-md text-left"
        >
          <m.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ margin: "-150px" }}
          >
            <m.div>
              <span className="dark:text-emerald-300 text-purple-400">
                const
              </span>{" "}
              <span className="text-purple-400">&#123;</span>{" "}
              <span className="text-blue-400">Client</span>
              <span className="text-purple-400">,</span>{" "}
              <span className="text-blue-400">Collection</span>{" "}
              <span className="text-purple-400">&#125;</span>{" "}
              <span className="text-purple-400"> = </span>
              <span className="dark:text-emerald-300 text-purple-400">
                require{" "}
              </span>
              <span className="text-purple-400">(</span>
              <span className="dark:text-lime-300 text-cyan-500">
                &apos;discord.js&apos;
              </span>
              <span className="text-purple-400">)</span>;
            </m.div>
            <m.div>
              <span className="dark:text-emerald-300 text-purple-400">
                const
              </span>{" "}
              <span className="text-blue-400">client</span>{" "}
              <span className="text-purple-400">=</span>{" "}
              <span className="dark:text-emerald-300 text-purple-400">new</span>{" "}
              <span className="text-blue-400">Client</span>
              <span className="text-purple-400">()</span>;
            </m.div>
            <div className="invisible">.</div>
            <div>
              <span className="text-blue-400">client</span>
              <span className="text-purple-400">.</span>
              <span className="dark:text-blue-300 text-blue-400">on</span>
              <span className="text-purple-400">{"("}</span>{" "}
              <span className="dark:text-lime-300 text-cyan-500">
                &apos;ready&apos;
              </span>{" "}
              <span className="text-purple-400">,</span>{" "}
              <span className="text-purple-400">()={">"}</span>{" "}
              <span className="text-purple-400">{"{"}</span>
            </div>
            <div>
              <span className="text-blue-400">console</span>
              <span className="text-purple-400">.</span>
              <span className="dark:text-blue-300 text-blue-400">log</span>
              <span className="text-purple-400">{"("}</span>{" "}
              <span className="dark:text-lime-300 text-cyan-500">
                &quot;We&apos;re an Open Source Discord Bot&quot;
              </span>{" "}
              <span className="text-purple-400">{")"}</span>;
            </div>
            <div>
              <span className="text-purple-400">{"})"}</span>
            </div>
            <div className="invisible">.</div>
            <div>
              <span className="text-gray-400">
                # Do you really think we&apos;d show the token?
              </span>
            </div>
            <div>
              <span className="text-blue-400">client</span>
              <span className="text-purple-400">.</span>
              <span className="dark:text-blue-300 text-blue-400">login</span>
              <span className="text-purple-400">{"("}</span>
              <span className="text-blue-400">token</span>
              <span className="text-purple-400">{")"}</span>;
            </div>
          </m.div>
        </m.div>
      </div>
    </m.div>
  );
};

export default HeroMid;
