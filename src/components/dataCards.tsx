import { singleData } from "@/redux/reducer";
import Image from "next/image";
import { useState } from "react";
import PopUp from "./popUp";

export default function DataCard({ props }: { props: singleData }) {
  const [popUpState, setPopUp] = useState(false);
  return (
    <>
      <PopUp props={props} popUp={popUpState} changeState={setPopUp} />
      <div
        className="cardContainer relative flex w-full h-250 mb-8"
        key={props.id}
        onClick={() => {
          setPopUp(true);
        }}
      >
        <div className="imageDiv relative">
          <img className="image" src={`${props.photo}`} alt="" />
        </div>
        <div className="detailsDiv">
          <h2 className="title">{props?.title}</h2>
          <p className="subTitle">{props?.subtitle}</p>
          <div className="clientDate">
            <div className="client lastData">
              <span className="label">Client</span>
              <span className="value">{props?.clients}</span>
            </div>
            <div className="date lastData">
              <span className="label">Date</span>
              <span className="value">
                {props?.start_date} - {props.end_date}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
