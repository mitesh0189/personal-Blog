import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { onValue, ref } from "firebase/database";
import db from "../../../firebase";

const ReadData = () => {
  const { BlogId } = useParams();
  const [Blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchData = () => {
      const blogRef = ref(db, `Blog/${BlogId}`);
      onValue(blogRef, (snapshot) => {
        const blogData = snapshot.val();
        if (blogData) {
          setBlog(blogData);
        } else {
          console.log("No such document!");
        }
      });
    };

    fetchData();

    // Clean up listener when component unmounts
    return () => {
      // Unsubscribe from the onValue listener
      const blogRef = ref(db, `Blog/${BlogId}`);
      onValue(blogRef, null);
    };
  }, [BlogId]);

  return (
    <div className="container-sm">
    <div className="col-12 mx-auto my-3 shadow">
      {Blog && (
        <div className="card shadow" key={BlogId}>
          
          {/* <img src={Blog.b_image} alt="dummy" height={300}  className="card-img-top" width={500}/> */}
          <div className="card-title bg-black text-white">
            <h3 className="mt-2 text-center h1">{Blog.b_title}</h3>
            {/* <div className="data d-flex">
              <div className="auth bg-secondary rounded-pill">
              <img src="public/img/writer.png" alt="" width={"25px"} />
              </div>
              <span className="mx-2">{Blog.b_writer}</span>
              <span className="mx-2">{Blog.b_category}</span>
              </div> */}
              <hr class="border border-danger border-2 opacity-50"/>
          </div>
          <p className="mt-5 card-body para_desc ">{Blog.b_desc}</p>
        </div>
      )}
    </div>
    </div>
  );
};

export default ReadData;