import React from 'react';
import { useForm } from 'react-hook-form';
import { push, ref, set } from 'firebase/database';
import { useNavigate } from 'react-router-dom';
import db from '../../../firebase';


const CreateForm = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();

    const submitData = (data) => {
        const newDocRef = push(ref(db, "Blog"));
        set(newDocRef, data)
            .then(() => {
              console.log(data);
                alert("Data saved successfully");
                navigate('/View'); // Use navigate instead of redirect
            })
            .catch((error) => {
                alert("Error: " + error.message);
            });


        // console.log(data);
    };

    return (
        <div className='col-6 mx-auto my-5 p-5 shadow'>
            <form onSubmit={handleSubmit(submitData)}>
                <div className="head d-flex">
                    <h1 className='text-center mt-5 mx-5'>Writer Blog</h1>
                    <img src="public/img/bg-from.png" alt="" className='w-25 h-25 mx-5' />
                </div>
                <select
                    required
                    className="form-select "
                    style={{ width: "42rem", marginTop: "15px" }}
                    {...register("b_category")}
                >
                    <option disabled selected value="">Select Blog Category</option>
                    <option value="Travel">Travel</option>
                    <option value="Eat">Eat</option>
                    <option value="Relax">Relax</option>

                  
                </select>
                <div className="mt-4">
                    <input type="text" {...register('b_title')} className='form-control text-black' placeholder='Enter Blog title' />
                </div>
                <div className="mt-4">
                    <input type="text" {...register('b_desc')} className='form-control text-black' placeholder='Enter Blog description' />
                </div>
                <div className="mt-4">
                    <input type="text" {...register('b_image')} className='form-control text-black' placeholder='Enter Blog image URL' />
                </div>
                <div className="mt-4">
                    <input type="text" {...register('b_writer')} className='form-control' placeholder='Enter Writer name' />
                </div>
                <div className="mt-4">
                    <button className='btn btn-info'>Submit Blog</button>
                </div>
            </form>
        </div>
    );
};

export default CreateForm;
