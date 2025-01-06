import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [array, setArray] = useState([]);

  const fetchAPI = async () => {
    try {
      const response = await axios.get('http://localhost:8081/');
      console.log(response.data);
      
      setArray(response.data.fruit);
    } catch (error) {
      console.log('Error fetching data from the backend:', error);
    }
  };

  useEffect(() => {

    fetchAPI();
  }, []);

  return (
    <div>
    <div><h1>in Home Page</h1>
    <h2>Fetching data from backend</h2>
    </div>
    
    {console.log(array)}
    {array.map((fruit, index) => (
      <div key={index}><p>{fruit}</p></div>
    ))} 
    </div>
  );
}

export default App;
