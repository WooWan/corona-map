/** @jsxImportSource @emotion/react */
import React from 'react';
import Patient from "./patient";
import {css} from "@emotion/react";

const patientListStyle = css`
    display: flex;
    flex-direction : column;
    margin-top:20px;
`
const PatientList = ({patients, onDelete}) => {

    return(
        <div className="patient_list" css={patientListStyle}>
            {Object.keys(patients).map((key) =>
                <Patient key={key} patient ={patients[key]} onDelete = {onDelete} />
            )}
        </div>
    )
}

export default PatientList;