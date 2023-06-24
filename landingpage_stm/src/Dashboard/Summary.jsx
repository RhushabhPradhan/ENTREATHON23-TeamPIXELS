import React, { useState } from "react";
import editBtn from "../assets/editBtn.svg";
import styles from "../style";
import { summaryData } from "./constants";
import jsPDf from "jspdf";
import ActionWords from "./ActionWords";

const Summary = (props) => {
  const [editMode, setEditMode] = useState(false);
  const summaryDataState = {
    sid: 1,
    title: "New Meeting",
    desc: props.summary,
  };

  function downloadPDF() {
    // Create a new instance of jsPDF
    const doc = new jsPDf();

    // Set the font size and style
    doc.setFontSize(12);

    // Set the maximum width for the text
    const maxWidth = 180;

    // Add the title to the PDF
    doc.setFontSize(18);
    doc.text(
      "Summary",
      doc.internal.pageSize.getWidth() / 2,
      20,
      null,
      null,
      "center"
    );

    // Reset the font size and style
    doc.setFontSize(12);

    // Split the text into an array of lines based on the maximum width
    const lines = doc.splitTextToSize(props.summary, maxWidth);

    // Add the lines to the PDF
    doc.text(lines, 10, 40);

    // Add the date and time to the PDF
    const date = new Date();
    const formattedDate = `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    doc.text(
      `Downloaded on ${formattedDate}`,
      doc.internal.pageSize.getWidth() - 20,
      doc.internal.pageSize.getHeight() - 10,
      null,
      null,
      "right"
    );

    // Save the PDF to a file and download it
    // doc.save("summary.pdf");
    doc.save(`${date.toLocaleDateString()}.pdf`);
  }
  // Function to toggle edit mode
  const toggleEditMode = () => {
    setEditMode(!editMode);
  };
  const updatesummary = (event) => {
    props.updatefinalsummary(event.target.value);
  };

  return (
    <div className={` font-[Poppins] ${styles.flexCenter} flex-col mx-2 gap-3`}>
      <span className={`w-full flex items-center justify-end`}>
        <button
          className="hover:bg-pri-60 cursor-pointer my-3 py-3 px-3 rounded-lg border-0 bg-pri-50 text-neu-50 mr-3"
          onClick={downloadPDF}
        >
          Download
        </button>
        {editMode ? (
          <button
            className={`hover:bg-pri-10 cursor-pointer border-none rounded-lg ${styles.flexCenter} gap-3 p-3 bg-white`}
            onClick={toggleEditMode}
          >
            Save
          </button>
        ) : (
          <button
            className={`hover:bg-pri-10 cursor-pointer border-none rounded-lg ${styles.flexCenter} gap-3  p-3 bg-white`}
            onClick={toggleEditMode}
          >
            <img src={editBtn} alt="Edit Button" className={`w-1/4`} /> Edit
          </button>
        )}
      </span>


      {/* each summary person div */}
      <div className=" w-full ">
        <div className={`  bg-pri-10 rounded-xl p-3  h-screen drop-shadow-md `}>
          <div className={`${styles.flexStart} flex-col  h-full `}>
            {editMode ? (
              <>
                {/* <input
                  type="text"
                  className="font-[Poppins] bg-neu-50  rounded-md border-solid  py-2 px-3 w-80"
                  value="New Meeting"
                  onChange={(e) =>
                    handleUpdateSummaryData(data.sid, {
                      title: e.target.value,
                    })
                  }
                /> */}
                <textarea
                  className="h-full w-full  font-[Poppins] border-2 rounded-md border-gray-300 mt-2 bg-neu-50"
                  value={summaryDataState.desc}
                  id="summarydesc"
                  onChange={updatesummary}
                />
              </>
            ) : (
              <>
                <span className={`text-mh-3 font-semibold py-3`}>Summary</span>
                <span className={`text-mb-2 text-neu-10 text-start`}>
                  {summaryDataState.desc}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
