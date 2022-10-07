import axios from "axios";

class Rest {
    async savePatient({placeName, addressName, coordinateX, coordinateY, phoneNumber, date}) {
        return await axios.post("/places", {
            placeName: placeName,
            addressName: addressName,
            coordinateX: coordinateX,
            coordinateY: coordinateY,
            phoneNumber: phoneNumber,
            date: date,
        })
    }

    async deletePatient(patient) {
        console.log(patient)
        console.log(patient.id)
        const id = patient.id
        await axios.delete(`/places/${id}`)
    }
}

export default Rest;