import React from 'react'
import { FaFacebook, FaInstagramSquare } from 'react-icons/fa';
import { useState } from 'react';

const Trackdetails = () => {
    const [state,setstate] = useState()
    const data=(e)=>{
        e.preventDefault();
        
        setstate({
            ...state,
            Orderid:e.target.value
        })
    }
    const validate=()=>{
        if((state.Orderid)==103906){
            window.location.href='Trackingdetails'
        }
        else{
            document.getElementById('image').src='assets/emoji.png'
            document.getElementById('demo').innerHTML="Tracking Id/Order Id not registered with us"
        }
    }
    return (
        <div>
            <div className='md:h-16 w-screen bg-white'>

                <div className='text-center flex justify-center  text-white'>
                    <h1 className='bg-black text-xl w-32 h-10 md:text-2xl '>TRACKING</h1>
                </div>
                <div className='flex -mt-8 gap-2 md:flex float-right md:pr-10 md:gap-12 md:-mt-8  '>
                <a href='https://www.facebook.com/'  ><FaFacebook size={24}  /></a>
                      <a href='https://www.instagram.com/accounts/login/' > <FaInstagramSquare size={24}/> </a>
                </div>


                <div className='flex flex-col gap-4  bg-gray-100  w-screen h-screen' >
                    <div className='text-black font-bold text-center mt-10'>
                        Enter your Order ID/tracking ID
                    </div>
                    {/* <div className='flex mr-20 justify-center'>
                        <div className='flex flex-row'> <input type='radio' name='name1' className='h-6 w-5' /><span className='text-black font-xl'>Tracking ID/Order ID</span></div>
                        
                    </div> */}
                    <div className='flex flex-row gap-2 justify-center md:ml-32 '>
                        <div><input className='sm:w-44 md:w-72 h-10 bg-white rounded-md' type='text' placeholder=' Eg. 1234 5678 3456'Orderid='id' onChange={data} ></input></div>
                        <div><button className='w-24 h-10 bg-sky-700 rounded-md text-white text-sm font-semibold' onClick={validate} >Submit</button></div>
                    </div>
                    <div className=' flex items-center flex-col p-4'>
                        <img className='w-12' id='image'/>
                        <p className='text-sm font-lg ml-24 sm:text-left md:text-lg lg:text-xl   ' id='demo'/>
                    </div>
                </div>
                <div className="text-xs font-medium flex justify-end flex-col float-right -mt-10 md:-mt-24 mr-10 ">
                    <h6>Powered By</h6>
                    <img src="assets/blogo1x.png" alt="Logo" />
                </div>


            </div>
        </div>

    )
}

export default Trackdetails
