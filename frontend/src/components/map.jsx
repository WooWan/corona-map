/*global kakao*/
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'
import React, {useState} from 'react';
import SearchBar from "./search_bar";
import KakaoMap from "./kakao-map";
import Sidebar from "./sidebar";

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
            <Sidebar keyword ={keyword} rest ={rest}/>
        </div>
    )
}

export default Map;