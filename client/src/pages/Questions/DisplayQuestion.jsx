import React from "react";
import QuestionsDetails from "./QuestionDetails";
import LeftSidebar from "../../component/LeftSidebar/LeftSidebar";
import RightSidebar from "../../component/RightSidebar/RightSidebar";

const DisplayQuestion = () => {
  return (
    <div className="home-container-1">
      <LeftSidebar />
      <div className="home-container-2">
        <QuestionsDetails />
        <RightSidebar />
      </div>
    </div>
  );
};

export default DisplayQuestion;