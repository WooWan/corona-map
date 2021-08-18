/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";

const patientStyle = css`
    width : 200px;
    height: 100px;
`

const Patient = ({patient}) => {
    console.log(patient)
    const {placeName, addressName, coordinateX, coordinateY, phoneNumber} = patient
    return(
        <div className="patient" css={patientStyle}>
            <div className="placeName">{placeName}</div>
            <div className="addressName">{addressName}</div>
            <div className="phoneNumber">{phoneNumber}</div>
        </div>
    )
}

export default Patient;