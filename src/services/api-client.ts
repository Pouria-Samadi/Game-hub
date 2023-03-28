import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "8c5e2b82fe2b4170bcac87f816d5343f"
    }
})