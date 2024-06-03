import categories from "./db/categories.json"
import Sidebar from './sidebar/Sidebar.js';
import VideoList from './videoList/VideoList.js';
import CategoryNavbar from './category/CategoryNavbar.js';
import './Homepage.css'

function Homepage({matchedVideos}) {
    return (
    //     <div>
    //     <div className="row">
    //     <div className="col-md-2">
    //     <Sidebar />
    //     </div>
    //     <div className="col-md-10">
    //     <div className="row">
    //     <CategoryNavbar categories={categories}/>
    //     </div>
    //         <VideoList matchedVideos={matchedVideos}/></div>
    //         </div>
    //   </div>
    <div class="row">
    <div class="col-2"><Sidebar /></div>
    <div class="col-10"><CategoryNavbar categories={categories}/>
    <VideoList matchedVideos={matchedVideos}/>
    </div>
    <div class="w-100"></div>
    </div>
    )
}
export default Homepage;