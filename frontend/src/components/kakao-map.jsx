/*global kakao*/
/** @jsxImportSource @emotion/react */
import React, {useEffect, useState} from 'react';
import {css} from "@emotion/react";
import {useRecoilState} from "recoil";
import {placeState} from "../state/state";

const mapStyle =css`
    width : 100vh;
    height : 100vh;
    flex: 8.5;
`
const KakaoMap = ({keyword}) => {
    const [place, setPlace] = useRecoilState(placeState);

    const [lat, setLat] = useState(33.450701)
    const [lng, setLng] = useState(126.570667)

    useEffect(()=>{
        const container = document.getElementById('kakao_map'); //지도를 담을 영역의 DOM 레퍼런스
        let options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(lat, lng), //지도의 중심좌표.
            level: 4 //지도의 레벨(확대, 축소 정도)
        };
        let map = new kakao.maps.Map(container, options);

        const ps = new kakao.maps.services.Places();
        // 키워드로 장소를 검색합니다
        ps.keywordSearch(keyword, placesSearchCB);

        function placesSearchCB(data, status) {
            console.log(data[0])
            const {place_name, address_name, x, y, phone } = data[0];

            setPlace(() =>{
                return  {
                    "placeName" : place_name,
                    "addressName" :address_name,
                    "coordinateX" : x,
                    "coordinateY" : y,
                    "phoneNumber" : phone,
                }
            })

            if (status === kakao.maps.services.Status.OK) {
                const markers =data.map((place) => {
                    return new kakao.maps.Marker({
                        map:map,
                        position: new kakao.maps.LatLng(place.y, place.x)
                    })
                })
                const distanceList = [];
                markers.forEach((m) => {
                    let c1 = map.getCenter();
                    let c2 = m.getPosition();
                    let poly = new kakao.maps.Polyline({
                        // map: map, 을 하지 않아도 거리는 구할 수 있다.
                        path: [c1, c2]
                    });
                    const dist = poly.getLength(); // m 단위로 리턴
                    distanceList.push({
                        distance : dist,
                        marker : m
                    })
                })
                const sorted =distanceList.sort((a, b) => {
                    return a.distance-b.distance;
                })
                const {marker} = sorted[0];

                map.setCenter(marker.getPosition());
                setLat(marker.getPosition().getLat())
                setLng(marker.getPosition().getLng())
                // map.setCenter(marker.Pc.x , marker.Pc.y)
                map.setLevel(4)
            }
        }
    }, [keyword])

    return(
        <div id="kakao_map" css={mapStyle}/>
    )

}

export default KakaoMap;