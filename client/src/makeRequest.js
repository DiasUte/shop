import axios from "axios";
const REACT_APP_API_TOKEN = "4cc31aef95a3cff3791f49af907bcb7684294ad9b86ab88763c677c41aa9f7532d7b77f4565cc2a529a3faaaf8003600f641dfe9d2c054cb4c4786b920b21a6fc4b311b6c2fe58d1dd971b2c8ccc3a24043ada0e642d8e9344e320a39af1034c0f52eb8a478fd023bb160715f0e5ee3c8a0f681e9b58c36b8fa14666c44228dc";
const REACT_APP_API_URL = "http://localhost:1337/api";
export const makeRequest = axios.create({
    baseURL: REACT_APP_API_URL,
    headers: {
        Authorization: "bearer " + REACT_APP_API_TOKEN,
    },
});