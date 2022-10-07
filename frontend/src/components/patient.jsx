/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";

const patientStyle = css`
    width : 200px;
    height: 100px;
`
const Patient = ({patient, onDelete}) => {

    const onButton =() =>{
        console.log(patient)
        onDelete(patient)
    }
    const {placeName, addressName, phoneNumber} = patient
    return(
        <div className="patient" css={patientStyle}>
            <div className="placeName">{placeName}</div>
            <div className="addressName">{addressName}</div>
            <div className="phoneNumber">{phoneNumber}</div>
            <input onClick={onButton} type="button" value="동선 삭제하기" />
        </div>
    )
}

export default Patient;