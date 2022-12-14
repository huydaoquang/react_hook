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
//         "title": "H???c React.JS C?? B???n Trong 30 Ph??t (Update v???i React 18 n??m 2022) | React Si??u D??? Cho Beginner",
//         "description": "Trong video n??y, ch??ng ta s??? c??ng setup v?? th???c h??nh d??? ??n React & th???c h??nh ???ng d???ng Todo List ???????c x??y d???ng t??? ?????u.",
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
//         "channelTitle": "H???i D??n IT",
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
//         "title": "#0 Kh??a H???c &quot;L??m Th???t&quot; B??i Test Fresher React | H???C &amp; TH???C H??NH REACT.JS",
//         "description": "Link Udemy: https://www.udemy.com/course/hoidanit-test-fresher-react/ Gi??o ??n kh??a h???c n??y: ...",
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
//         "channelTitle": "H???i D??n IT",
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
//         "title": "#3.1 Hello World v???i React.JS - C??i ?????t Project Local | React C?? B???n  Cho Beginners T??? A ?????n Z",
//         "description": "Ch????ng tr??nh ?????u ti??n, v?? kh??ng th??? thi???u khi h???c b???t c??? ng??n ng??? l???p tr??nh, th?? vi???n, frameworks n??o ch??nh l?? 'hello world'.",
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
//         "channelTitle": "H???i D??n IT",
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
//         "title": "Gi???i Thi???u Kh??a H???c React Pro Max - Nh???ng Ki???n Th???c Fresher React S??? Ph???i Bi???t",
//         "description": "Link Kh??a H???c N??y tr??n Udemy: https://www.udemy.com/course/hoidanit-react-basic-ultimate T???t c??? kh??a h???c c???a H???i D??n IT: ...",
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
//         "channelTitle": "H???i D??n IT",
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
//         "title": "#01 React Super Fast V???i Vite | Kh??a H???c React Advanced Guides",
//         "description": "Trong video n??y, ch??ng ta s??? c??ng nhau: ??? T???o ???ng D???ng React.JS V???i Vite (c??ng c??? d???ch code si??u nhanh, ?????i th??? c???nh tranh ...",
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
//         "channelTitle": "H???i D??n IT",
//         "liveBroadcastContent": "none",
//         "publishTime": "2022-02-20T12:30:12Z"
//       }
//     }
//   ]
// }
