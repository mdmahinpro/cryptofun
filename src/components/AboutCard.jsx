import React from "react";

function AboutCard(props) {
  return (
    <div>
      <div className="flex flex-col border py-8 px-12  rounded-2xl">
        <div className="space-y-8">
          <div className="bg-[#00d8ff] inline-flex p-2 rounded-full">
            {props.icon}
          </div>
          <h3 className="text-xl font-bold">{props.heading}</h3>
          <p>
            {props.details}
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
