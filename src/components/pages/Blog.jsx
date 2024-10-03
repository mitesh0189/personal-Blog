import { get, ref, remove } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import db from '../../../firebase';

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    async function show() {
        const dbRef = ref(db, "Blog");
        const blogSnapshot = await get(dbRef);
        if (blogSnapshot.exists()) {
            const bExist = blogSnapshot.val();
            const arr = [];
            for (const key in bExist) {
                const data = bExist[key];
                const newData = { ...data, id: key };
                arr.push(newData);
            }
            setBlogs(arr);
        } else {
            alert("No blogs found");
        }
    }

    useEffect(() => {
        show();
    }, []);

    const handleDel= async(id)=>{
        if(confirm('Are you sure you want to delete this blog?')){
            const dbRef=ref(db,`Blog/${id}`)
            await remove(dbRef);
            show();
        }
        
    }
    return (
        <>
            <div className="container my-5">
                <div className="row">
                    {blogs.map((blog) => (
                        <div className="col-lg-4 mt-4" key={blog.id}>
                            <NavLink className="card shadow border-0"  to={`/view/${blog.id}`}>
                                <img src={blog.b_image} alt="dummy"  height={300} />
                                <div className="card-body bg-black text-white ">
                                    <h3>{blog.b_title}</h3>
                                  <div className='data d-flex'>  
                                     <div className="auth bg-secondary  rounded-pill"> <img src="public/img/writer.png" alt="" width={'25px'}/></div><br />
                                      <span  className='mx-2 '> {blog.b_writer}</span>
                                  
                                    <span className='mx-2 '>{blog.b_category}</span>
                                     </div>
                                    
                              
                                <div className="Crud mb-3 mt-2 ">
                                    <NavLink
                                        to={`/update/${blog.id}`}
                                        className="btn btn-outline-warning w-25 mx-2 mt-2"
                                    >
                                        Update
                                    </NavLink>
                                    <button
                                         onClick={()=>handleDel(blog.id)}
                                        className="btn btn-outline-danger w-25 mx-2 mt-2"
                                    >
                                        Delete
                                    </button>
                                    <NavLink  className=' text-white h-5  mx-4  mt-1  btn btn-outline-secondary ' to={`/Read/${blog.id}`}>Read More..
                                         <img src="public/img/read.png" alt="" width={'25px'}/></NavLink>
                                </div>  </div>
                                
                            </NavLink>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Blog;