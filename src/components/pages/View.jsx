


import { get, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import db from "../../../firebase";

const View = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState([]);

  async function show() {
    const dbRef = ref(db, "Blog");
    const blogSnapshot = await get(dbRef);
    if (blogSnapshot.exists()) {
      const BExist = blogSnapshot.val();
      const arr = [];
      for (const key in BExist) {
        const data = BExist[key];
        const newData = { ...data, id: key };
        arr.push(newData) ;
      }
      // console.log("arr............");
      // console.log(arr);
      const newArr = arr.filter((ele) => {
        return ele.b_category == id;
      });
      // console.log("newArr.............");
      // console.log(newArr);
      setBlogs(newArr);
    } else {
      alert("No blogs found");
    }
  }

  useEffect(() => {
    show();
  }, []);

  const handleDel = async (id) => {
    if (confirm("do you want to delete this product")) {
      const dbRef = ref(db, `Blog/${id}`);
      await remove(dbRef);
        show();
       
    }
}  


  return (
    <>
      <div className="container my-5">
           <h2>{id}</h2>
        <div className="row">
          {blogs.map((blog) => (
            <div className="col-lg-4 mt-4" key={blog.id}>
              <div className="card shadow border-0">
                <img src={blog.b_image} alt="dummy" height={300}   />
                <div className="card-body">
                  <h3>{blog.b_title}</h3>
                  <span>{blog.b_category}</span>
                  <p>{blog.b_writer}</p>
                  {/* console.log({blog.b_writer}); */}
                </div>
                <div className="Crud mb-3">
                   <NavLink
                     to={`/update/${blog.id}`}
                     className="btn  btn-warning w-25 mx-2"
                   >
                     Update
                   </NavLink>
                   <button
                  onClick={()=>handleDel(blog.id)}
                    className="btn btn-outline-danger w-25 mx-2 mt-2"
                       >
                      Delete
                   </button>
                 </div>
               </div>
             </div>
           ))}
         </div>
       </div>
     </>
   );
 };
export default View;  



