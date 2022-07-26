import axios from "axios"

export default async function fetchLesson(slug){
    const targetUrl = `${process.env.NEXT_PUBLIC_API_BASE_URL}/${slug}`
    return await axios.get(targetUrl)
}