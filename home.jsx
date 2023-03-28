import Categories from "./categories";
import Videos from "./videos";

const Home = () => {


    return (
        <div className="home" style={{position:"relative" }}>

          <div className="class"></div>
          <Categories/>
         <Videos/>
        </div>
      );
}
 
export default Home;

