/** @jsxImportSource @emotion/react */
import React, {useEffect, useState} from 'react';
import Preview from "./preview";
import {css} from "@emotion/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import {placeState} from "../state/state";
import {useRecoilState} from "recoil";
import PatientList from "./patient_list";

const sidebarStyle = css`
    flex:1.7;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-top: 40px;
`

const buttonStyle = css`
    margin-top: 20px;
    width: 200px;
    height: 20px;
    background-color:white;
    box-shadow: 0 1px 3px 0;
`

const Sidebar = ({keyword, rest}) =>{
    const [place, setPlace] = useRecoilState(placeState);
    const [date, setDate] = useState(new Date());

    const [patients, setPatients] = useState({});

    // useEffect(()=>{
    //     const sync = rest.getPatients()
    //         .then(result  => {
    //             console.log(result);
    //             return setPatients(result)
    //         })
    // }, [rest,place])
    const onSubmit =() =>{
        const placeDate = {
            ...place,
            "date": getDate()
            }
        rest.savePatient(placeDate)
            .then(response =>response.data.id)
            .then(id => {
                placeDate.id= id
                const updated = {...patients}
                updated[id]= placeDate
                setPatients(updated)
            })
        console.log(patients)

    }
    const onDelete = (patient)=>{
        rest.deletePatient(patient)
            .then(setPatients(patients =>{
                const updated= {...patients}
                const id = patient.id
                delete updated[id]
                console.log(updated);
                return updated
            }))
        // setPatients(patients =>{
        //     const updated= {...patients}
        //     delete updated[patient.id]
        //     return updated
        // })

    }

    const getDate = () => {
        const year = date.getFullYear()
        const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth()
        const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
    }
    return(
        <div className ="Sidebar" css = {sidebarStyle}>
            <DatePicker
                inline
                dateFormat = "yyyy-MM-dd"
                selected={date}
                onChange={(date) => setDate(date)}
            />
            <Preview keyword={keyword} />
            <input type="button" onClick={onSubmit} value="?????? ????????????" css={buttonStyle} />
            <PatientList patients={patients} onDelete={onDelete}/>
        </div>
    )
}

export default Sidebar;