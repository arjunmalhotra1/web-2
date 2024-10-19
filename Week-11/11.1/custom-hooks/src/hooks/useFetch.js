
import { useState, useEffect } from 'react'

export function usePostTile() {



const [post, setPost] = useState({})
  
  async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1")
    const json = await response.json();
    setPost(json)
  }


// In react function to useEffect cannot be async hence we take that function out.
  useEffect(() => {
    getPosts();
  },[])

  return post.title;
}