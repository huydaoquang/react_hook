import "./Blog.scss";
import axios from "axios";
import { useState } from "react";
import moment from "moment";

const YoutubeSearch = () => {
  const [videos, setVideos] = useState([]);
  const [query, setQuery] = useState("");
  const handleSearchYoutube = async () => {
    let res = await axios({
      method: "GET",
      url: "https://www.googleapis.com/youtube/v3/search",
      params: {
        part: "snippet",
        maxResults: "10",
        key: "AIzaSyAe2PDAJ9EjbFtXfFPMsml1CQpN49MGFaw",
        // key: "AIzaSyD2IG6fe2ecZgJivqYiExFU988Ve6H4Chg",
        type: "video",
        q: query,
      },
    });
    // console.log(">> check res", res);
    if (res && res.data && res.data.items) {
      let raw = res.data.items;
      let result = [];
      if (raw && raw.length > 0) {
        raw.map((item) => {
          let object = {};
          object.id = item.id.videoId;
          object.title = item.snippet.title;
          object.createdAt = item.snippet.publishedAt;
          object.author = item.snippet.channelTitle;
          object.description = item.snippet.description;

          result.push(object);
        });
      }
      // console.log(">>> check result", result);
      setVideos(result);
    }
  };
  return (
    <div className="youtube-search-container">
      <div className="yt-search">
        <input
          type="text"
          placeholder="Search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="button" onClick={handleSearchYoutube}>
          Search
        </button>
      </div>

      {videos &&
        videos.length > 0 &&
        videos.map((item) => {
          return (
            <div className="yt-result" key={item.id}>
              <div className="left">
                <iframe
                  className="iframe-yt"
                  src={`https://www.youtube.com/embed/${item.id}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="right">
                <div className="title">{item.title}</div>
                <div className="created-at">
                  Created At:{" "}
                  {moment(item.createdAt).format("DD-MM-YYYY HH:mm:ss A")}
                </div>
                <div className="author">Author: {item.author}</div>
                <div className="description">{item.description}</div>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default YoutubeSearch;

// import "./Blog.scss";
// import axios from "axios";
// import { useState, useEffect } from "react";
// import moment from "moment";

// const YoutubeSearch = () => {
//   const [videos, setVideos] = useState([]);
//   const [query, setQuery] = useState("");

//   const handleSearchYoutube = async () => {
//     let res = await axios({
//       method: "GET",
//       url: "https://www.googleapis.com/youtube/v3/search",
//       params: {
//         part: "snippet",
//         maxResults: "20",
//         key: "AIzaSyAe2PDAJ9EjbFtXfFPMsml1CQpN49MGFaw",
//         type: "video",
//         q: query,
//       },
//     });

//     if (res && res.data && res.data.items) {
//       let raw = res.data.items;
//       let result = [];
//       if (raw && raw.length > 0) {
//         raw.map((item) => {
//           let object = {};
//           object.id = item.id.videoId;
//           object.title = item.snippet.title;
//           object.createdAt = item.snippet.publishedAt;
//           object.author = item.snippet.channelTitle;
//           object.description = item.snippet.description;

//           result.push(object);
//         });
//       }

//       setVideos(result);
//     }
//   };

//   return (
//     <div className="youtube-search-container">
//       <div className="yt-search">
//         <input
//           type="text"
//           placeholder="Search"
//           value={query}
//           onChange={(event) => setQuery(event.target.value)}
//         />
//         <button type="button" onClick={handleSearchYoutube}>
//           Search
//         </button>
//       </div>

//       {videos &&
//         videos.length > 0 &&
//         videos.map((item) => {
//           return (
//             <div className="yt-result" key={item.id}>
//               <div className="left">
//                 <iframe
//                   className="iframe-yt"
//                   src={`https://www.youtube.com/embed/${item.id}`}
//                   title="YouTube video player"
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                 ></iframe>
//               </div>
//               <div className="right">
//                 <div className="title">{item.title}</div>
//                 <div className="created-at">
//                   Created At:{" "}
//                   {moment(item.createdAt).format("DD-MM-YYYY HH:mm:ss A")}
//                 </div>
//                 <div className="author">Author: {item.author}</div>
//                 <div className="description">{item.description}</div>
//               </div>
//             </div>
//           );
//         })}
//     </div>
//   );
// };

// export default YoutubeSearch;

// {
//   "kind": "youtube#searchListResponse",
//   "etag": "zOORKptMxUnjsEng1qqp5sKZ9IY",
//   "nextPageToken": "CAUQAA",
//   "regionCode": "VN",
//   "pageInfo": {
//     "totalResults": 518,
//     "resultsPerPage": 5
//   },
//   "items": [
//     {
//       "kind": "youtube#searchResult",
//       "etag": "-Zeqyv0nQa0hKYxdVFgb3bXLP0I",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "8JkHV2GZL0M"
//       },
//       "snippet": {
//         "publishedAt": "2022-07-26T11:15:14Z",
//         "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//         "title": "Học React.JS Cơ Bản Trong 30 Phút (Update với React 18 năm 2022) | React Siêu Dễ Cho Beginner",
//         "description": "Trong video này, chúng ta sẽ cùng setup và thực hành dự án React & thực hành ứng dụng Todo List được xây dựng từ đầu.",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/8JkHV2GZL0M/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/8JkHV2GZL0M/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/8JkHV2GZL0M/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "Hỏi Dân IT",
//         "liveBroadcastContent": "none",
//         "publishTime": "2022-07-26T11:15:14Z"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "6CMXIIMcsnQAwt6_5XzmFIoMro0",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "cCNAueqo9Kw"
//       },
//       "snippet": {
//         "publishedAt": "2022-05-02T11:00:43Z",
//         "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//         "title": "#0 Khóa Học &quot;Làm Thịt&quot; Bài Test Fresher React | HỌC &amp; THỰC HÀNH REACT.JS",
//         "description": "Link Udemy: https://www.udemy.com/course/hoidanit-test-fresher-react/ Giáo án khóa học này: ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/cCNAueqo9Kw/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/cCNAueqo9Kw/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/cCNAueqo9Kw/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "Hỏi Dân IT",
//         "liveBroadcastContent": "none",
//         "publishTime": "2022-05-02T11:00:43Z"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "lH4Zu4bDGbTjajTetyBcnhTQ3rI",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "EDjWoDKDPtQ"
//       },
//       "snippet": {
//         "publishedAt": "2021-09-03T13:20:05Z",
//         "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//         "title": "#3.1 Hello World với React.JS - Cài đặt Project Local | React Cơ Bản  Cho Beginners Từ A đến Z",
//         "description": "Chương trình đầu tiên, và không thể thiếu khi học bất cứ ngôn ngữ lập trình, thư viện, frameworks nào chính là 'hello world'.",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/EDjWoDKDPtQ/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/EDjWoDKDPtQ/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/EDjWoDKDPtQ/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "Hỏi Dân IT",
//         "liveBroadcastContent": "none",
//         "publishTime": "2021-09-03T13:20:05Z"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "IYvVAtlA2a9lTNZC7vFJXrerKHs",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "jUOwicA-IQ0"
//       },
//       "snippet": {
//         "publishedAt": "2022-08-17T11:15:14Z",
//         "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//         "title": "Giới Thiệu Khóa Học React Pro Max - Những Kiến Thức Fresher React Sẽ Phải Biết",
//         "description": "Link Khóa Học Này trên Udemy: https://www.udemy.com/course/hoidanit-react-basic-ultimate Tất cả khóa học của Hỏi Dân IT: ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/jUOwicA-IQ0/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/jUOwicA-IQ0/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/jUOwicA-IQ0/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "Hỏi Dân IT",
//         "liveBroadcastContent": "none",
//         "publishTime": "2022-08-17T11:15:14Z"
//       }
//     },
//     {
//       "kind": "youtube#searchResult",
//       "etag": "w7OMeBD2KeTtLf5NHizECkWmgmE",
//       "id": {
//         "kind": "youtube#video",
//         "videoId": "V1JONxue4fA"
//       },
//       "snippet": {
//         "publishedAt": "2022-02-20T12:30:12Z",
//         "channelId": "UCVkBcokjObNZiXavfAE1-fA",
//         "title": "#01 React Super Fast Với Vite | Khóa Học React Advanced Guides",
//         "description": "Trong video này, chúng ta sẽ cùng nhau: ✓ Tạo Ứng Dụng React.JS Với Vite (công cụ dịch code siêu nhanh, đối thủ cạnh tranh ...",
//         "thumbnails": {
//           "default": {
//             "url": "https://i.ytimg.com/vi/V1JONxue4fA/default.jpg",
//             "width": 120,
//             "height": 90
//           },
//           "medium": {
//             "url": "https://i.ytimg.com/vi/V1JONxue4fA/mqdefault.jpg",
//             "width": 320,
//             "height": 180
//           },
//           "high": {
//             "url": "https://i.ytimg.com/vi/V1JONxue4fA/hqdefault.jpg",
//             "width": 480,
//             "height": 360
//           }
//         },
//         "channelTitle": "Hỏi Dân IT",
//         "liveBroadcastContent": "none",
//         "publishTime": "2022-02-20T12:30:12Z"
//       }
//     }
//   ]
// }
