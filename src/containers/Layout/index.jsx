import React, { useState } from "react";
import { RadioTypeQuestion } from "../../components/views/RadioTypeQuestion";
import useLayoutHooks from "./useLayoutHooks";

export const Layout = () => {
  const { readingQuestionObj, setReadingQuestionObj } = useLayoutHooks();

  const hanleChange = (v, id) => {
    const newTempObj = [...readingQuestionObj];
    const findObj = newTempObj?.find((o) => o?.qn === id);
    const findObjIndex = newTempObj?.findIndex((o) => o?.qn === id);
    newTempObj[findObjIndex].value = v;
    setReadingQuestionObj([...newTempObj]);
  };
  const getMyQuestions = (type, values) => {
    switch (type) {
      case "radio":
        return (
          <RadioTypeQuestion
            values={values}
            onChangeValue={(v, id) => hanleChange(v, id)}
          />
        );

      case "paragraph":
        return <div>PPPPP</div>;
      default:
        break;
    }
  };
  console.log("AAA", readingQuestionObj);
  return (
    <div>
      {readingQuestionObj?.map((one) => (
        <div>{getMyQuestions(one?.type, one)}</div>
      ))}
    </div>
  );
};
