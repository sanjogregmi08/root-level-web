"use client";
import React, { createContext } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// import required modules
import { FreeMode, Pagination } from "swiper/modules";
import DefaultImage1 from "@/assets/images/carousel1.png"
import DefaultImage2 from "@/assets/images/carousel2.png"
import DefaultImage3 from "@/assets/images/carousel3.png"
import Image from 'next/image';

const ValueSection = () => {
  return (
    <div className="flex flex-col px-12">
        <div className="flex gap-12">
          <div className='flex pl-20'>
            <h1 className="text-3xl font-semibold text-gray-900">What we value and how <br /> we act</h1>
          </div>
          <div className='flex flex-1 pr-16'>
            <p>
              {`Every day, we make critical decisions that inform our ability to
              achieve our mission. Shaping the future of AI and, in turn, the
              future of our world is a responsibility and a privilege. Our
              values guide how we work together, the decisions we make, and
              ultimately how we show up for each other and work toward our
              mission.`}
              <br />
              <br />
              <strong>{`Take action for the benefit of the world`}.</strong>{`We try
              to make choices that will ultimately benefit humanity as much as
              possible. This indicates that we are prepared to take extremely
              risky measures to guarantee that our technology is a powerfully
              constructive force for good. We are dedicated to making this
              transition successful because we take seriously the responsibility
              of responsibly leading the globe through a technology revolution
              that could alter the path of human history.`}
              <br />
              <br />
              <strong>{`Hold shade and light.`}</strong>{`If things go wrong, AI might
              present humanity with hitherto unheard-of dangers. If all goes
              according to plan, it could also bring about hitherto unheard-of
              advantages for humans. To comprehend and guard against the
              possibility of negative consequences, we require shade. Light is
              necessary for us to see the positive results.`}
              <br />
              <br />
              <strong>{`Take the easy route that yields results.`}</strong>{`We tackle
              issues empirically, and we are more concerned with the magnitude
              of our influence than the complexity of our techniques. This does
              not imply that we come up with random fixes. It indicates that we
              iterate after attempting to find the most straightforward
              solution. If we only need a bicycle, we don't create a spacecraft.`}
              <br />
              <br />
              <strong>{`Treat our users well.`}</strong>{`We define "users" broadly at
              Root Level. Customers, legislators, ants, and anybody else
              affected by the technology we develop or the decisions we make are
              examples of users. We strive to be kind and giving in all of our
              dealings with one another, our users, and the wider community.
              Meeting expectations means going above and above for one another,
              our clients, and everyone impacted by our technology.`}
              <br />
              <br />
              <strong>{`Be helpful, truthful, and innocuous.`}</strong>{`Root Level is
              a low-ego, high-trust organization. Even when we disagree, we
              assume good intentions and communicate politely and directly. We
              respond with consideration, preventing injury and mending
              relationships where necessary. Regardless of role, everyone
              contributes. You're probably the best person to complete
              everything that needs to be done immediately!`}
              <br />
              <br />
              <strong>{`Put the mission first.`}</strong>{`At the end of the day, the
              mission is what we’re all here for. It gives us a shared purpose
              and allows us to act swiftly together, rather than being pulled in
              multiple directions by competing goals. It engenders trust and
              collaboration and is the final arbiter in our decisions. When it
              comes to our mission, none of us are bystanders. We each take
              personal ownership over making our mission successful.`}
            </p>
          </div>
        </div>
        <div className="w-full h-auto my-12">
      <Swiper
        className="w-full max-w-[100vw] h-full"
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[FreeMode, Pagination]}
      >
        <SwiperSlide>
          <Image
            src={DefaultImage1}
            alt="Slide 1"
            width="1000"
            height="1000"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={DefaultImage2}
            alt="Slide 1"
            width="1000"
            height="1000"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={DefaultImage3}
            alt="Slide 1"
            width="1000"
            height="1000"
          />
        </SwiperSlide>
      </Swiper>
    </div>
      </div>
  )
}

export default ValueSection
