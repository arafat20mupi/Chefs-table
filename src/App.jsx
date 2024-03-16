import { useEffect, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Header from './Components/Header/Header'
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Recipes from './Components/Recipes/Recipes';
function App() {
  const [carts , setCarts] = useState([]);
  const [cook , setCook] = useState([]);
  const [currently , setCurrently] = useState([]);
  useEffect( ()=>{
    fetch('Chefs.json')
   .then(res => res.json())
   .then(data =>setCarts(data));
  },[]);
  const handleCooking = (c) =>{
    const isExit = cook.find(item => item.id === c.id);
    if(!isExit){
      setCook([...cook, c])
      
      toast.success('Cook start', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }
    else{
      toast.error('Already cook start', {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
        });
    }
  }
  const handleDelete =(id)=>{
    setCook(cook.filter(item => item.id!== id.id))
    setCurrently([...currently, id])
  };
  return (
    <>
      <Header></Header>
      <main className='container mx-auto'>
        <Banner></Banner>
        <Recipes></Recipes>
        <div className='lg:flex mt-12'>

          {/* cart section */}
          <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-full lg:w-2/3 gap-10 '>
          {
            carts.map((cart ,index) => ( 
              <div key={index} className=" rounded-2xl bg-base-100 shadow-xl">
                  <div className='p-4 '>
                    <img className='w-full h-56 rounded-xl' src={cart.image} alt="" />
                  </div>
                  <div className="p-10 pt-1 ">
                    <h2 className=" text-xl font-semibold">{cart.name}</h2>
                    <p>{cart.description}</p>
                    <h3 className='text-lg mt-3 font-medium'> 
                      Ingredients: 6
                    </h3>
                    <ul>
                       {cart.ingredients.map( (li , index) => (<li key={index}>{li.ingredient_name}</li>))}
                    </ul>
                    <div className='flex justify-between'>
                      <div className='flex text-center items-center'>
                        <img className='h-6' src="https://i.ibb.co/1ZZz9mQ/Frame-5.png" alt="" />
                        <p>{cart.preparing_time} minutes </p>
                      </div>
                      <div className='flex text-center items-center'>
                        <img className='h-6'
                         src="https://i.ibb.co/Kb4NMxH/Frame-6.png
  https://i.ibb.co/93PhCL0/Frame-5.png" alt="" />
                        <p>{cart.calories} calories</p>
                      </div>
                      
                    </div>
                    <button onClick={() =>handleCooking(cart)} className=" text-lg text-black font-bold btn bg-[#0BE58A]   rounded-3xl">Want to Cook</button>
                  </div>
              </div>
            ))
          }
          </div>

          {/* side bar */}
          <div className='  shadow-xl lg:p-8 w-full lg:w-1/3 rounded-xl'>
            <div>
              <h2 className='text-2xl font-semibold text-black text-center'>Want to cook: {cook.length}</h2>
              <div className='flex text-black font-semibold justify-evenly'>
                
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
              </div>
              <div className='space-y-4'>
                  {
                  cook.map( (c, index) => (
                      <div key={index} className=''>
                        <div className="overflow-x-auto w-full">
                          <table className="bg-slate-200  table relative table-zebra">
                            <tbody>
                              <tr >
                                <th>{index+1}</th>
                                <td className='flex-wrap lg:w-16 flex '>{c.name}</td>
                                <td>{c.preparing_time}</td>
                                <td>{c.calories}</td>
                                <td>
                                  <button onClick={()=> handleDelete(c)} className="lg:text-lg text-black lg:font-bold btn bg-[#0BE58A] rounded-3xl">Preparing</button>
                                </td>
                                {/* <td></td> */}
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    
                  ))
                }
              </div>
            </div>

            <div>
              <h2 className='text-2xl font-semibold text-black text-center'>Currently cooking: {currently.length} </h2>
              <div className='flex text-black font-semibold justify-evenly'>
                  {/* <p></p> */}
                  <p>Name</p>
                  <p>Time</p>
                  <p>Calories</p>
                  <p></p>
              </div>
              <div className='space-y-5'>
                    {
                    currently.map( (c, index) => (
                        <div key={index} className='flex justify-between'>
                          <div className="overflow-x-auto">
                            <table className="bg-slate-200  table table-zebra">
                              <tbody  className='lg:space-y-3'>
                                <tr>
                                  <th className=''>{index+1}</th>
                                  <td className=' lg:w-20'>{c.name}</td>
                                  <td className=''>{c.preparing_time}</td>
                                  <td className='text-center w-20'>{c.calories}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                    ))
                  }
              </div>
            </div> 
            <div className='lg:flex justify-between mt-8 text-lg font-medium'>
              <p>
              Total Time = {
                currently.reduce((acc, c) => acc + c.preparing_time, 0)
              } minutes
              </p>
              <p>
              Total Calories = {
                currently.reduce((acc, c) => acc + c.calories, 0)
              } calories
              </p>
            </div> 
          </div>
        </div>
      </main>
      <ToastContainer />
    </>
  )
}

export default App
