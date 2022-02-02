import {AxiosServices} from "./axios.services";
import {urls} from "../../constans";

export const carServices = {
    getAll:()=>AxiosServices.get(urls.cars).then(value => value.data),
    create:(car)=>AxiosServices.post(urls.cars).then(value => value.data),
    deleteByID:(id)=>AxiosServices.delete(`${urls.cars}/${id}`)
}