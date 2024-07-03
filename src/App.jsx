import React from 'react'
import {useState} from 'react'
import toast, { Toaster } from 'react-hot-toast';



function App() {
  const [data,setData]=useState("");
  const[listdata,setListdata]=useState([]);
  
  function addwork(){
   
    setListdata((listdata)=>{
      const updatedlist=[...listdata,data]
      
      setData('');
      return updatedlist
    })

  }
  function removework(i){
    const updatedlistData=listdata.filter((elem,id)=>{
      return i !=id;
    })
    setListdata(updatedlistData);

  }
  function removeall(){
    if(listdata==[]){
      toast.error("First, add some work")
    }
    setListdata('')
  }
 
  return (

    <>
     
    <div className=' flex  justify-center items-center mt-10'> 
      <div className=" text-xl font-sans text-white  bg-blue-500 p-10 text-center rounded-md  " >
        <h2 className='text-2xl font-sans underline'>Todo-App</h2>
        <input
        className=' rounded-sm p-x-7 mt-4  text-black text-lg'
        name="name"
        value={data}
        type="text"
        placeholder='Enter your work'
        onChange={(e)=>setData(e.target.value)}

        />
        <button onClick={addwork} className='bg-blue-400 px-3.5 rounded-sm text-lg'>Add+</button>
        <br/>
    
  
  
     {listdata!=[] && listdata.map((data,i)=>{
      return (
        <>
        <br/>
        <p key={i}>
          <div className='flex'>
        <div className='bg-orange-500 font-sans p-1 rounded-sm px-10'>{data}</div>
        <div className='bg-green-500 px-3 rounded-sm '>
   <button  onClick={()=>removework(i)}>-</button>
   </div>
        </div>

        </p>
     
        
        

        </>
      
      )
     })}
     <div className='flex justify-end'>

     <button  className='rounded-full bg-red-500 mt-4 shadow-lg  px-3'
     onClick={removeall}>Remove all</button>
     </div>
     
    </div>
    </div>
   
    <Toaster/>
    </>
  )
}

export default App