import React from "react";
import brandRecognition from "../images/icon-brand-recognition.svg";
import detailedRecords from "../images/icon-detailed-records.svg";
import fullyCustomizable from "../images/icon-fully-customizable.svg";

const Stats = () => {
  return (
    <div className="stats-section">
      <h2 className="stats-heading">Advanced Statistics</h2>
      <p className="stats-para">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>
      <div className="stats-dataflow-section">
        <div className="stat-point brand-recognition">
          <div className="stat-icon-img">
            <img src={brandRecognition} alt="" />
          </div>
          <h3>Brand Recognition</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut odit
            iste nesciunt cupiditate rem impedit id, sint veritatis perspiciatis
            exercitationem.
          </p>
        </div>
        <div className="stat-point detailed-records">
          <div className="stat-icon-img">
            <img src={detailedRecords} alt="" />
          </div>
          <h3>Detailed Records</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut odit
            iste nesciunt cupiditate rem impedit id, sint veritatis perspiciatis
            exercitationem.
          </p>
        </div>
        <div className="stat-point fully-customizable">
          <div className="stat-icon-img">
            <img src={fullyCustomizable} alt="" />
          </div>
          <h3>Fully Customizable</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut odit
            iste nesciunt cupiditate rem impedit id, sint veritatis perspiciatis
            exercitationem.
          </p>
        </div>
      </div>
      <div className="through-border"></div>
    </div>
  );
};

export default Stats;
