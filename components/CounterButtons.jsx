import { useDispatch } from "react-redux";


export default function CounterButtons(){

    const counterUpdate = useDispatch();

    /*  
    
    useEffect(() => {
       alert("Sayfa yüklendi");
     }, []);
   
     useEffect(() => {
       alert("Counter değişti");
     }, [counter]); 
     
     */
   
    return(
        <div className='w-full m-5 flex gap-5'>
             <button
        className="bg-red-500 text-white px-4 py-2 rounded"
        onClick={() => {
          counterUpdate({type: 'INCREMENT'})
        }}
      >
        Artır
      </button>

      <button
        className="bg-blue-500 text-white px-4 py-2 rounded"
        onClick={() => {
          counterUpdate({type: 'DECREMENT'})
        }}
      >
        Azalt
      </button>
        </div>
    )
}