/*global kakao*/
/** @jsxImportSource @emotion/react */
import React, {useEffect, useState} from 'react';
import {css} from "@emotion/react";


const mapStyle =css`
    width : 100vh;
    height : 100vh;
    z-index : -1;
    flex: 8.5;
`
const KakaoMap = ({keyword}) => {
    const [lat, setLat] = useState(33.450701)
    const [lng, setLng] = useState(126.570667)
    useEffect(()=>{
        const container = document.getElementById('kakao_map'); //지도를 담을 영역의 DOM 레퍼런스
        let options = { //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(lat, lng), //지도의 중심좌표.
            level: 4 //지도의 레벨(확대, 축소 정도)
        };
        let map = new kakao.maps.Map(container, options);
        // var infowindow = new kakao.maps.InfoWindow({zIndex:1});
        const ps = new kakao.maps.services.Places();
        // 키워드로 장소를 검색합니다
        ps.keywordSearch(keyword, placesSearchCB);

        function placesSearchCB(data, status) {
            console.log(data);
            console.log(`map: ${map.getCenter()}`)
            if (status === kakao.maps.services.Status.OK) {
                const markers =data.map((place) => {
                    return new kakao.maps.Marker({
                        map:map,
                        position: new kakao.maps.LatLng(place.y, place.x)
                    })
                })
                const distanceList = new Array();
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
                const {marker, distance} = sorted[0];
                map.setCenter(marker.getPosition());
                setLat(marker.getPosition().getLat())
                setLng(marker.getPosition().getLng())
                // map.setCenter(marker.Pc.x , marker.Pc.y)
                map.setLevel(4)
                // console.log(sorted)
                // console.log(distance[0])
                // const {, }
                // markers.forEach((m) =>{
                //     let c1 = map.getCenter();
                //     let c2 = m.getPosition();
                //     let poly = new kakao.maps.Polyline({
                //         // map: map, 을 하지 않아도 거리는 구할 수 있다.
                //         path: [c1, c2]
                //     });
                //     const dist = poly.getLength(); // m 단위로 리턴
                //     if (dist < radius) {
                //         console.log("worker");
                //         m.setMap(map);
                //         map.setLevel(4);
                //
                //     } else {
                //         m.setMap(null);
                //     }
                // })


                // let bounds = new kakao.maps.LatLngBounds();
                // for (let i=0; i<data.length; i++) {
                //     displayMarker(data[i]);
                //     bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
                // }
                // // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
                // map.setBounds(bounds);
                // displayMarker(data[0]);
                // map.setLevel(4);
            }
        }

        // function displayMarker(place) {
        //     // 마커를 생성하고 지도에 표시합니다
        //     var marker = new kakao.maps.Marker({
        //         map: map,
        //         position: new kakao.maps.LatLng(place.y, place.x)
        //     });
        //
        //     // map.setCenter(new kakao.maps.LatLng(place.y, place.x));
        //     // var markerPosition = new kakao.maps.LatLng(place.y, place.x);
        //     // var marker = new kakao.maps.Marker({
        //     //     position: markerPosition
        //     // });
        //     // marker.setMap(map);
        // }
    }, [keyword])

    return(
        <div id="kakao_map" css={mapStyle}>
        </div>
    )

}

export default KakaoMap;