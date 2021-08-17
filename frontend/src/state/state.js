import {atom} from "recoil";

export const placeState = atom({
    key: 'placeState',
    default: {
        "placeName" : "",
        "jibun" : "",
        "coordinateX" : 0.0,
        "coordinateY" : 0.0,
        "phoneNumber" : "",
    },
})