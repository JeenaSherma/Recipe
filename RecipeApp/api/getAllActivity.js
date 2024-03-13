import api from "./instance";

export const getAllActivity =async()=> {
    const response = await api.get("/activity");
    return response;
}
