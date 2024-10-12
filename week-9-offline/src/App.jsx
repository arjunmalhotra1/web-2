// import { useState  } from "react";
import { PostComponent } from "./Post";
function App() {
  

  const posts = [{
    name: "chelsea",
    subtitle: "23,888 followers",
    time: "2m ago",
    image: "https://www.shutterstock.com/image-vector/chelsea-football-club-fc-icon-600nw-2276198713.jpg",
    description: "Next match is vs Liverpool"
  }]

  const postComponents = posts.map(post => <PostComponent 
    name={post.name}
    subtitle={post.subtitle}
    time={post.time}
    image={post.image}
    description={post.description}
    />
  )

  function addPost() {
    posts.push({
    name: "chelsea",
    subtitle: "23,888 followers",
    time: "2m ago",
    image: "https://www.shutterstock.com/image-vector/chelsea-football-club-fc-icon-600nw-2276198713.jpg",
    description: "Next match is vs Liverpool"
    })

  }

  return (
    <div style={{background: "#dfe6e9",height: "100vh" }}>
      <button onClick={addPost}>Add Post </button>
      <div style={{display:"flex", justifyContent: "center"}}>
          <div>
            {postComponents}
          </div>
      </div>
    </div>
  )
}




// Structuring you app into components
// Defining a state of your application
export default App
