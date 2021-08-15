/** @jsxImportSource @emotion/react */
import React, {useState} from 'react';
import Preview from "./preview";
import {css} from "@emotion/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"

const patient_list = css`
    flex:1.7;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top: 40px;
`

const buttonStyle = css`
    width: 200px;
    background-color:white;
    box-shadow: 0 1px 3px 0;
`
const onSubmit = (event) =>{
    // event.preventDefault();
}
const PatientList = ({keyword}) =>{

    const [date, setDate] = useState(new Date());
    const getDate = () => {
        const year = date.getFullYear()
        const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth()
        const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
    }
    return(
        <div className ="PatientList" css = {patient_list}>
            <DatePicker
                inline
                dateFormat = "yyyy-MM-dd"
                selected={date}
                onChange={(date) => setDate(date)}
            />
            <Preview  keyword={keyword} />
            <button onClick={onSubmit} css={buttonStyle}>동선 추가하기</button>
        </div>
    )
}

export default PatientList;