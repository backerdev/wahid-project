import React from "react";
import Card from "../components/Card";
import bp from "../assets/big_prawn.png";
import veg from "../assets/veg_fl.png";
import sp from "../assets/small_prawn.png";
import cn from "../assets/coconut_fl.png";
import plain from "../assets/plain_fl.png";
import rojak from "../assets/Rojak_01.png";
export default function Cards() {
  return (
    <div className=" mx-auto grid md:grid-cols-3 grid-cols-2 gap-2 uppercase  my-2 ">
      <Card
        image={bp}
        tags={["Spicy", "Prawn", "Crunchy"]}
        title={"Big Prawn"}
      />
      <Card image={veg} tags={["Vegitable", "spongy", "soft"]} title={"Sayo"} />
      <Card
        image={sp}
        tags={["Spicy", "Prawn", "Crunchy"]}
        title={"Small Prawn + tauhu"}
      />
      <Card image={cn} tags={["Texture", "Crunchy"]} title={"Coconut Roll"} />
      <Card image={plain} tags={["Plain", "soft"]} title={"Plain flour"} />
      <Card
        image={rojak}
        tags={["SGLocalEats", "MakanTime", "RojakLove"]}
        title={"ROJAK"}
      />
    </div>
  );
}
