import './App.css';
import {Link } from "react-router-dom";
function Landing() {
  return (
    <div className="App">
      <div className="container App-header">
       
        <div className="right-section">
          <div className="description-area">
            <div className="discription-text">
              <h1 className="big-title">Imagine if <br/><span className="title-line2">Snapchat</span> <br/>had events.</h1>
              <p className="title-description">Easily host and share events with your friends<br/> across any social media</p>
            </div>
            <div className="left-section">
              <img alt="caption" className="landing-img" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/ea95af2d-7f06-4f25-859c-9069519053a7/Landing_page_image.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221003%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221003T130326Z&X-Amz-Expires=86400&X-Amz-Signature=ef245543f08f2706fc844d5768e30158c68ffe1e49e78130eb0acca84133f2f5&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Landing%2520page%2520image.svg%22&x-id=GetObject"/>
            </div>

            <Link to="/create">
            	<button className="create-button">Create my event</button>
            </Link>
          </div>

          
      
       
        </div>
      </div>
    </div>
  );
}

export default Landing;
