import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Shipment.css'
const Shipment = () => {
    const [logInUser, setLogInUser] = useContext(UserContext)
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log('form submitted',data);
    console.log(watch("example")); 
    return (
      <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
        
        <input placeholder='Enter your Name' name="name" defaultValue={logInUser.Name} ref={register({ required: true })} />
        {errors.name && <span className='error'>Name is required</span>}

        <input placeholder='Enter Your Email' name="email" defaultValue={logInUser.email} ref={register({ required: true })} />
        {errors.email && <span className='error'>Email is required</span>}

        <input placeholder='Enter Your Phone' name="phone" ref={register({ required: true })} />
        {errors.phone && <span className='error'>Phone is required</span>}

        <input placeholder='Enter Your Address' name="address" ref={register({ required: true })} />
        {errors.address && <span className='error'>Address is required</span>}

        <input type="submit" />
      </form>
    );
};

export default Shipment;