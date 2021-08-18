/** @jsxImportSource @emotion/react */
import React from 'react';
import Patient from "./patient";
import {css} from "@emotion/react";

const patientListStyle = css`
    display: flex;
    flex-direction : column;
    margin-top:20px;
`
const PatientList = ({patients}) => {
    console.log(patients)
    return(
        <div className="patient_list" css={patientListStyle}>
            {Object.keys(patients).map((key) =>
                <Patient key={key} patient ={patients[key]} />
            )}
        </div>
    )
}

export default PatientList;