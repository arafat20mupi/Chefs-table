
import { useEffect, useState } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import Header from './Components/Header/Header'
function App() {

  const [carts , setCarts] = useState([]);
  const [cook , setCook] = useState([]);
  const [currently , setCurrently] = useState([]);
  useEffect( ()=>{
    fetch('Chefs.json')
   .then(res => res.json())
   .then(data =>setCarts(data));
  },[])
  const handleCooking = (c) =>{
    const isExit = cook.find(item => item.id === c.id);
    if(!isExit){
      setCook([...cook, c])
      setCurrently([...currently, c])
    }
    else{
      
    }
    // setCook([c])
  }

  const handleDelete =(id)=>{
    setCook(cook.filter(item => item.id!== id))
  };
  return (
    <>
      <Header></Header>
      
      <main className='container mx-auto'>
        <Banner></Banner>
        <div className='text-center '>
            <h2 className='text-4xl font-extrabold'>Our Recipes</h2>
            <p className=''>Dietary decisions are at all times necessary to general well being, however when <br /> you have arthritis, the meals you select can have a stunning influence in your joint well being.</p>
          </div>
        <div className='flex mt-12'>
          
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 w-2/3 gap-10 '>
          {
            carts.map((cart ,index) => ( 
              <div key={index} className=" rounded-2xl bg-base-100 shadow-xl">
                  <div className='p-4 '>
                    <img className='w-full ' src={cart.image} alt="" />
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
                        <img className='h-6' src="https://i.ibb.co/Kb4NMxH/Frame-6.png
https://i.ibb.co/93PhCL0/Frame-5.png" alt="" />
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
          <div className='ml-8 p-10 shadow-xl w-1/3 rounded-xl'>
            <h2 className='text-2xl font-semibold text-black text-center'>Want to cook: {cook.length}</h2>
            <div>
              <div className='flex text-black font-semibold justify-evenly'>
                <p className='-mr-10'></p>
                <p>Name</p>
                <p>Time</p>
                <p>Calories</p>
                <p></p>
              </div>
              <div>
                {
                  cook.map( (c, index) => (
                      <div key={c.id} className='flex justify-between'>
                        <div className="overflow-x-auto">
                          <table className="table table-zebra">
                            <tbody>
                              <tr>
                                <th>{index+1}</th>
                                <td>{c.name}</td>
                                <td>{c.preparing_time}</td>
                                <td className=''>{c.calories}</td>
                                <td>
                                  <button onClick={()=> handleDelete(c.id)} className=" text-lg text-black font-medium btn bg-[#0BE58A] rounded-3xl">Preparing</button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    
                  ))
                }
              </div>
            </div>
            <h2 className='text-2xl font-semibold text-black text-center'>Currently cooking: {currently.length} </h2>

          </div>
        </div>
        
      </main>
    </>
  )
}

export default App
