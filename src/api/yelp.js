import axios from "axios";

const API_KEY =
  "ENTER_YOUR_API_KEY_HERE";

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: `Bearer ${API_KEY}`,
    "Content-type": "application/json",
  },
})