import { useState } from "react";


export default function useLayoutHooks() {
  const [readingQuestionObj,setReadingQuestionObj]=useState([
    {qn:1,value:undefined,optionsList:[{value:'true',label:'True'},{value:'false',label:'False'},{value:'ng',label:'Not Given'}],type:'radio',question:'Hello what is your Fname?'},
    {qn:2,value:undefined,optionsList:[{value:'true',label:'True'},{value:'false',label:'False'},{value:'ng',label:'Not Given'}],type:'radio',question:'Hello what is your Mname?'},
    {qn:3,value:undefined,optionsList:[{value:'true',label:'True'},{value:'false',label:'False'},{value:'ng',label:'Not Given'}],type:'radio',question:'Hello what is your Lname?'},
  ])
  return {
    readingQuestionObj,
    setReadingQuestionObj
  };
}
