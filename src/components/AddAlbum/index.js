import React from 'react';
import { useForm } from "react-hook-form";

const AddAlbum = ({onAddAlbum}) =>{
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => onAddAlbum(data);
    
    return (
        <div>
            <h2>Thêm Sp</h2>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <input  type="text"
                    name="name"
                    placeholder="Tên Sản Phẩm"
                    ref={register({ required: true })} 
                    />
                    {errors.name && <span>This field is required</span>}
      
                </div>
                <div>
                    <input  type="text"
                    name="price"
                    placeholder="Giá Sản Phẩm"
                    ref={register({ required: true })} 
                    />
                    {errors.price && <span>This field is required</span>}
      
                </div>
                <input type="Submit" value="Thêm Sp "/>
            </form>
        </div>
    )

}
export default AddAlbum;
