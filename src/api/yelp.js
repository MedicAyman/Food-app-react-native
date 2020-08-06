import axios from "axios";

const API_KEY =
  "FLpDnVg4J-4SpNDfdKEwPWfPNXK9sJZYbe76c_Cg67Xw79go5UWwFrCv6fPs7RGKtPBuCtfvduCU801cZs_aecF7lalxs_03EetZeUI6c1kgghIGDtXjq0XUa84qX3Yx";

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    "Content-type": "application/json",
  },
})