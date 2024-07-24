import Filter from "./filter";
import Search from "./search";
import TestCase from "./testCase";


const Home = ()=>{
    return(
        <div className="mt-20 w-3/5 flex flex-col ">
            <hr className="border-gray-500 w-full mb-20" />
            <Search/>
            <Filter/>
            <TestCase/>
        </div>
    )
}
export default Home;