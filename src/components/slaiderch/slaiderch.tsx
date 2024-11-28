"use client";
import styles from "./slaiderch.module.css";

import Card from "../card/card";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";
import { Dispatch, SetStateAction } from "react";
type Tprops = {
  list: { ru: string; port: string }[];
  calc: Dispatch<SetStateAction<number>>;
  ok: number;
};

const SimpleCH = (props: Tprops) => {
  const list = props.list;

  return (
    <div className={styles.main}>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        {list.map((item, index) => {
          return (
            <SwiperSlide key={index}>
              <Card
                rus={item.ru}
                port={item.port}
                calc={props.calc}
                ok={props.ok}
              ></Card>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default SimpleCH;

/*{list.map((item, index) => {
  return (
    <div key={index}>
      <SwiperSlide>
        <Card rus={item.ru} port={item.port}></Card>
      </SwiperSlide>
    </div>
  );
})}*/
