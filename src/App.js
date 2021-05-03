import React, { useState, useEffect } from 'react'
import './App.css';
import Header from './components/ui/Header'
import axios from 'axios';
import CharacterGrid from './components/characters/CharacterGrid'

const App = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // we use axios here, axios returns a promise, dont want to use .then syntax, so we use async await
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://breakingbadapi.com/api/characters`)


      console.log(result.data)
      setItems(result.data)
      setIsLoading(false);
    }
    fetchItems()
  }, [])

  return (
    <div className="container">
      <Header />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
