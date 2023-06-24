import React from "react";

const ActionWords = (props) => {
  var actionwords = props.summary[0].actionwords;
  console.log("act words: ", actionwords);
  return (
    <div>
      {/* {actionwords.map((data) => (
        <div>data.actionwords</div>
      ))} */}
      {props.actionwords}
    </div>
  );
};

export default ActionWords;
