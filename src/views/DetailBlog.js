import { useParams, useHistory } from "react-router-dom";
import useFetch from "../customize/fetch";
import "./Blog.scss";
const DetailBlog = () => {
  let { id } = useParams();
  let history = useHistory();
  const { data: dataBlogDetail, isLoading } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    false
  );
  console.log(">>> check data detail", dataBlogDetail);
  const handleBackData = () => {
    history.push("/blogs");
  };
  return (
    <>
      <div>
        <button onClick={handleBackData}>&lt; -- Back</button>
      </div>
      <div className="blog-detail">
        {dataBlogDetail && (
          <>
            <div className="title">
              Blog ID: {id}--
              {isLoading === true ? " Loading data" : dataBlogDetail.title}
            </div>
            <div className="content">{dataBlogDetail.body}</div>
          </>
        )}
      </div>
    </>
  );
};
export default DetailBlog;
