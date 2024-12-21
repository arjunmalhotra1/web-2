import axios from "axios"

export default async function({params}: any) {
    const postId = (await params).postId
    // const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    // const data = response.data
    // return <div>
    //     Blog Page {postId}
    //     <br></br>
    //     title - {data.title}
    //     body - {data.body}
    // [...] – Catch-All Segment
    return <div>
        Blog Page {JSON.stringify(postId)}
    </div>
}