import axios from "axios"
const KEY = "AIzaSyBaG3D2iwykujo-1jArUgB5TCd3czweCZc";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
})

