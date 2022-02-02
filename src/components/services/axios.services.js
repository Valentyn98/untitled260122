import axios from "axios";

import baseURL from "../../constans/urls";

export const  AxiosServices =axios.create({baseURL})