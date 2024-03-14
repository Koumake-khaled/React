import './Home.css'
import { Hero,MostPopular,Login} from '../../sections/index'

const Home = () => {
  return (
   <> 
      <Hero/>
      <MostPopular/>
      {/* <div className="home">
            {posts.map(post=>(
                <Card key={post.id} post={post}/>
            ))}
        </div> */}
      </>
  )
}

export default Home
