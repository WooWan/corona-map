import axios from "axios";

class Rest{
    async savePatient({placeName,addressName, coordinateX, coordinateY, phoneNumber, date}){
        const response =await axios.post("/places", {
            placeName: placeName,
            addressName : addressName,
            coordinateX : coordinateX,
            coordinateY : coordinateY,
            phoneNumber : phoneNumber,
            date : date,
        })
        return response;
    }
    async getPatients(){
        // return
        const response = await axios.get("/places")
        console.log(response)
        return response.data;
    }
}

export default Rest;