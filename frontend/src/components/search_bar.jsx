/** @jsxImportSource @emotion/react */
import React, {useRef} from 'react';
import {css} from "@emotion/react";

const searchBarStyle =css`
    position: absolute;
`

const SearchBar = ({onSearch}) => {

    const placeRef = useRef();
    const formRef = useRef();

    const onSubmit =()=>{
        const place = placeRef.current.value;
        onSearch(place);
        formRef.current.reset();
    }
    const onClick =(event) =>{
        event.preventDefault();
        onSubmit();
    }
    const onEnter =(event) =>{
        if (event.key=='Enter'){
            onSubmit();
        }
    }

    return(
        <div className="SearchBar" css ={searchBarStyle}>
            <form ref={formRef}  className="searchForm">
                <div className="searchContainer">
                    <input ref = {placeRef} type="text" className="searchInput" />
                    <button className="searchButton" onClick={onClick} onKeyDown={onEnter}></button>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;