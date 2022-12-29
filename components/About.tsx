import React from "react";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex flex-col relative h-screen text-center 
    md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
        }}
        src="https://scontent-dfw5-2.xx.fbcdn.net/v/t39.30808-6/320227332_887157708987487_3575660106575101604_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7zPc1_J4FtMAX-eBwK1&_nc_ht=scontent-dfw5-2.xx&oh=00_AfBGqmUVKuceGihTKvHl9TJGwlIIymC2JNPcePwDRm9ZOw&oe=63B24747"
        className="mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px]"
      />

      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-[#f7ab0a]/50">little</span>{" "}
          background
        </h4>
        <p className="text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus a
          alias repudiandae, incidunt ipsam rem! Ducimus tempore consequatur
          quasi. Quisquam, odio totam? Aspernatur totam fugiat temporibus illo
          maxime quod odio quis, architecto voluptas unde rem inventore culpa
          itaque placeat non deleniti beatae rerum reiciendis omnis perferendis!
          Asperiores modi tempora consequuntur?
        </p>
      </div>
    </motion.div>
  );
};

export default About;
