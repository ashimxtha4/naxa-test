import { singleData } from "@/redux/reducer";
import { RootState } from "@/redux/rootReducer";
import { useState } from "react";
import PopUp from "./popUp";

export default function KeyHiglights({
  props,
  index,
}: {
  props: singleData;
  index: number;
}) {
  const [popUpState, setPopUp] = useState(false);

  return (
    <>
      <PopUp props={props} popUp={popUpState} changeState={setPopUp} />
      <div
        onClick={() => {
          setPopUp(true);
        }}
        className="keyCard"
        key={index}
        style={{ order: props.project_order }}
      >
        <div className="content">
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
          <div className="imageDiv">
            <img className="image" src={`${props.photo}`} alt="no image" />
          </div>
        </div>
      </div>
    </>
  );
}

{
  /* <div dangerouslySetInnerHTML={{ __html: htmlString }} /> */
}
