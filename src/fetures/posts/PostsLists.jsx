import { useSelector } from "react-redux";
import { selectAllPosts } from "./postSlices";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
function PostsLists() {
    const posts = useSelector(selectAllPosts)
    
    const orderedposts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))

    const renderedPosts = orderedposts.map(post => (
        <article key={post.id}>
         <h3>{post.title}</h3>
         <p>{post.content.substring(0, 100)}</p>



        <p className="PostCredit">
            <PostAuthor userId={post.userId}/>
            <TimeAgo timestamp={post.date}/>
            
        </p>
        <ReactionButtons post={post}/>
        </article>
    ))
  return (
    <section >
     <h2>Posts</h2>
      {renderedPosts}
    </section>
  )
}

export default PostsLists