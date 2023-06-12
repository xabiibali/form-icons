import React from "react"

import PostsLists from "./fetures/posts/PostsLists"
import AddPostForm from "./fetures/posts/AddPostForm"

function App() {
 
  return (
     <main className="App">
      <AddPostForm/>
      <PostsLists/>
    </main>
  )
}

export default App
