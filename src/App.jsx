import { useEffect, useState } from 'react';
import { filterData, apiUrl } from './data';
import { toast } from 'react-toastify';
import Cards from './Components/Cards';
import Filter from './Components/Filter';
import NavBar from './Components/NavBar';
import Spinner from './Components/Spinner';
import './App.css';

function App() {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  const [showFilter, setFilter] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    try {
      const result = await fetch(apiUrl);
      const data = await result.json();
      setCourses(data.data);
    } catch (error) {
      toast.error("Check Your Internet Connection");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className='min-h-screen'>

      <div className="">
        <NavBar showFilter={showFilter} setFilter={setFilter} />
      </div>
      <div className="">
        {showFilter ? <Filter filterData={filterData} category={category} setCategory={setCategory} showFilter={showFilter} /> : <></>}
      </div>

      <div className="">
        {loading ? <Spinner /> : <Cards courses={courses} category={category} />}
      </div>
    </div>
  )
}

export default App;