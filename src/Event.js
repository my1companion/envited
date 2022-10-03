import './App.css';
import { ImCalendar } from "react-icons/im";
import { ImLocation } from "react-icons/im";
function Event() {
  return (
    <div className="App">
      <div className="container App-header">
       
        <div className="right-section">
          <div>
          <img alt="caption" className="event-img" src="https://s3.us-west-2.amazonaws.com/secure.notion-static.com/17d6299f-f287-469c-a403-b8ab9d75aa62/Birthday_cake.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221003%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221003T113544Z&X-Amz-Expires=86400&X-Amz-Signature=012312011675924890b8a597e6110e3fc29527af6bda8f2c64e30d83d3f63099&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22Birthday%2520cake.png%22&x-id=GetObject"/>
          </div>
          <div className="event-description-area">
            <h2 className="event-title">Birthday Bash</h2>
            <p className="event-description">Hosted by Helysia</p>
            
            <div className="event-details">
              <div className="event-detail">
                <div className="event-detail1">
                  <ImCalendar/>
                </div>
                <div className="event-detail2">
                  <strong>18 August 6:00PM</strong><br/>
                  <span>to <b>19 August 1:00PM</b> UTC +10</span>
                </div>
              </div>

              <div className="event-detail">
                <div className="event-detail1">
                  <ImLocation/>
                </div>
                <div className="event-detail2">
                  <strong>18 August 6:00PM</strong><br/>
                  <span>to <b>19 August 1:00PM</b> UTC +10</span>
                </div>
              </div>

            </div>
          </div>

          
      
       
        </div>
      </div>
    </div>
  );
}

export default Event;
