import axios from "axios";

export default async function fetchList(){
    return await axios.get(process.env.NEXT_PUBLIC_API_BASE_URL)
}