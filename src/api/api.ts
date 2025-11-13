import axios from "axios"

export const api = axios.create({
   baseURL: "https://naruto-br-api.site",
   headers: {
      "Content-Type": "application/json",
   },
})
