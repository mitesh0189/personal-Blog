import { get, ref, remove } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import db from '../../../firebase';


const Table = () => {
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

    const handleDelete = async (id) => {
      if (confirm("do you want to delete this product")) {
        const dbRef = ref(db, `Blog/${id}`);
        await remove(dbRef);
          show();
         
      }
  }

    return (
        <>
           

  <h1 className='text-center  fw-bolder'>Blog Information  </h1>
<table className='table table-bordered  table-striped  table-hover  mt-5 py-3 text-center'>

 
                <thead className='table'>
                    <tr>
                        {/* <th>Id</th> */}
                        <th>Title</th>
                        <th>Category</th>
                        <th>Image</th>
                        <th>Writer</th>
                        <th>Action</th>
                       

                    </tr>
                </thead>
                <tbody>
                {blogs.map((blog) => (
                        
                            <tr  key={blog.id}>
                                {/* <td>{items.id}</td> */}
                                <td>{blog.b_title}</td>
                                <td>{blog.b_category}</td>
                                <td><img src={blog.b_image} alt="IMG" className=' rounded-4' style={{width:"50px"}}/></td>
                                <td> {blog.b_writer}</td>
                                {/* <td>{items.price}</td> */}
                                
                                <td>
                                    <button className='btn btn-danger ms-3' onClick={() => handleDelete(blog.id)}>Delete</button>
                                    <NavLink to={`/Update/${blog.id}`} className='btn btn-warning ms-3' >Update</NavLink>

                                </td>
                            </tr>
                        ))}
                    
                </tbody>
            </table>
        </>
    );
};

export default Table;
