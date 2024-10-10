import { useContext, useEffect, useState } from "react"
import ButtomSection from "./components/ButtomSection"
import TopSection from "./components/TopSection"
import { myContext } from "./store/Context";

function App() {
  const currentDate = new Date();
  const year = String(currentDate.getFullYear());
  const month = String((currentDate.getMonth()+1) <10 ? '0' + (currentDate.getMonth() +1) : (currentDate.getMonth() + 1));
  const day = (currentDate.getDate()) <10 ? '0' + currentDate.getDate() : currentDate.getDate();
  const today = `${day}-${month}-${year}`;
   const ctx = useContext(myContext);
  const [date , setDate] = useState('');
  const [timings , setTimings] = useState({});
  const [error , setError] = useState(null);
  const [isLoading , setIsLoading] = useState(false);
  const [success , setSuccess] = useState(false);
  async function fetchingData () {
    setIsLoading(true);
    try {
      const response = await fetch(`https://api.aladhan.com/v1/timingsByCity/${today}?city=Eg&country=${ctx.city}`);
      if(!response.ok) {
        throw new Error ('fetch failed!');
      }
      const data = await response.json();
      setDate(data.data.date.gregorian.date);
      setTimings(data.data.timings);
      setSuccess(true);
      console.log(data.data.timings);
    }
    catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }
  useEffect(() => {
    fetchingData();
  },[ctx.city]);
  let content = '';
  if(error) 
    content = <p className="text-center">!something wrong please try again</p>;
    if(isLoading) 
      content = <p className="text-center">Loading...</p>;
      if(!isLoading && success) 
        content = <>
        <p className="text-center">By Eng.Mohammad Wahid Albadawi</p>
          <TopSection date={date}/>
          <ButtomSection timings={timings}/>
        </>
  return (
    <section>
      <div className="my-container flex items-center text-white">
        <div className="main-dev mr-10 lg:mr-40 p-6 rounded w-3/4 md:w-1/2 border-2 border-solid border-slate-400">
        {content}
        </div>
      </div>
    </section>
  )
}

export default App
