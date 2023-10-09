import { singleData } from "@/redux/reducer";
import { useState } from "react";

export default function PopUp({
  props,
  popUp,
  changeState,
}: {
  props: singleData;
  popUp?: boolean;
  changeState: any;
}) {
  return (
    <div
      className={popUp === true ? "backGround activeBackGround" : "backGround"}
    >
      <span className="crossButton" onClick={()=>changeState(false)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 16 16"
        >
          <path
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.5"
            d="m11.25 4.75l-6.5 6.5m0-6.5l6.5 6.5"
          />
        </svg>
      </span>
      <div className="popUpContainer">
        <div className="topDiv">
          <div className="imageDiv">
            <img className="image" src={`${props.photo}`} alt="no image" />
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
            <div className="lastData focusArea">
              <span className="label">Focus Area</span>
              <div className="focusAreaValue">
                {props.focus_area?.map((value: string) => (
                  <span className="value">{value}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className="descDiv"
          dangerouslySetInnerHTML={{ __html: props.description }}
        />
      </div>
    </div>
  );
}
