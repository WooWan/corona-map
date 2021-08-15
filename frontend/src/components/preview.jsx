/** @jsxImportSource @emotion/react */
import React from 'react';
import {css} from "@emotion/react";

const listStyle =css`
    display: flex;
    flex-direction: column;
    list-style :none;
`

const Preview = ({keyword}) =>{
    return(
        <ul className="Preview" css ={listStyle}>
            <li>
                <span>환자코드 : </span>
                <input type="text"/>
            </li>
            <li>
                <span>장소 :</span>
                <span> {keyword}</span>
            </li>

        </ul>

    )
}

export default Preview;