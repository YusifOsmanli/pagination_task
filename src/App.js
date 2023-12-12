import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import List from './components/List';
import Pagination from './components/Pagination';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)
  const [currentPage, setCurrentPage] = useState(1)
  const [perPage, setPerPage] = useState(50)
  const [original, setOriginal] = useState([])

  const getData = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/comments")
    console.log(res.data)
    setData(res.data)
    setLoading(false)
  }

  useEffect(() => {
    getData()
  }, [])


  const handleSearch = (e) => {
    let search = e.target.value.trim().toLowerCase();
    if(search == ""){
      setData([...data]);
    }else{
      let searchItems = data.filter((item)=>
        item.name.trim().toLowerCase().includes(search)
      );
      setData([...searchItems]);
    }
  }


  const lastItemIndex = currentPage * perPage
  const firstItemIndex = lastItemIndex - perPage
  const pagination = data.slice(firstItemIndex, lastItemIndex)

  return (
    <div className="App">
      <Header handleSearch={handleSearch} />
      {
        loading ? <div className="spinner-border spinner" role="status">
          <span className="sr-only"></span>
        </div> : <List data={pagination} />
      }
      <Pagination data={data} perPage={perPage} currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <select className='select' onChange={(e)=>{
        setPerPage(e.target.value)
      }} name='perPage' id=''>
        <option value='50'>50</option>
        <option value='52'>52</option>
        <option value='54'>54</option>
      </select>
      <Footer />
    </div>
  );
}

export default App;
