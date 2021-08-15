import axios from "axios";

class Rest{
    async savePatient({restaurantName, coordinateX, coordinateY, phoneNumber}){
        const response =await axios.post("/places", {
            restaurantName :restaurantName,
            coordinateX : coordinateX,
            coordinateY : coordinateY,
            phoneNumber : phoneNumber
        })
        return response;
    }
}

export default Rest;