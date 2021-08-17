/** @jsxImportSource @emotion/react */
import React, {useState} from 'react';
import Preview from "./preview";
import {css} from "@emotion/react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import {placeState} from "../state/state";
import {useRecoilState} from "recoil";

const sidebarStyle = css`
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

const Sidebar = ({keyword,rest}) =>{
    const [place, setPlace] = useRecoilState(placeState);
    const [number, setNumber] = useState({
        count : 0
    })
    const [date, setDate] = useState(new Date());
    const placeDate = { ...place, ...date}
    const onSubmit =() =>{
        rest.savePatient(placeDate).then(r => console.log(r));
    }
    const onTest =()=>{
        setNumber((state) => ({
            count: state.count+1
        }))
        setNumber((state) => ({
            count: state.count+1
        }))
        console.log(number.count)
    }
    const getDate = () => {
        const year = date.getFullYear()
        const month = date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth()
        const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
        const formattedDate = `${year}-${month}-${day}`;
        return formattedDate;
    }
    return(
        <div className ="PatientList" css = {sidebarStyle}>
            <DatePicker
                inline
                dateFormat = "yyyy-MM-dd"
                selected={date}
                onChange={(date) => setDate(date)}
            />
            <Preview keyword={keyword} />
            <button onClick={onTest} css={buttonStyle}>{number.count}</button>
        </div>
    )
}

export default Sidebar;