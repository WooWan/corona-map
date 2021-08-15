/*global kakao*/
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, {useState} from 'react';
import SearchBar from "./search_bar";
import KakaoMap from "./kakao-map";
import PatientList from "./patient_list";

const mapStyle =css`
    display: flex;
`

const Map = ({rest}) => {
    const [keyword, setKeyword] = useState();
    const onSearch = (keyword) =>{
        setKeyword(keyword)
    }


    return(
        <div className="Map" css={mapStyle}>
            <SearchBar onSearch={onSearch}/>
            <KakaoMap  keyword={keyword}/>
            <PatientList keyword ={keyword} />
        </div>
    )
}

export default Map;