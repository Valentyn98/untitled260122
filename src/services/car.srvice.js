import {axiosService} from "./axios.service";
import {urls} from "../constans";

export const carSrvice = {
    getAll:()=> axiosService.get("urls.cars").then(value => value.data),
    create:(car)=>axiosService.post(urls.cars,car).then(value => value.data),
    deleteById:(id)=>axiosService.delete(`${urls.cars}/${id}`)
}