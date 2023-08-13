import { createContext, useState, useEffect, useContext } from 'react';
import axios from 'axios';

const HeartContext = createContext();

export function useHeartContext(productId) {
  const context = useContext(HeartContext);
  if (!context) {
    throw new Error(`useHeartContext должен использоваться внутри HeartProvider`);
  }
  const { hearts, setHearts } = context;
  
  const heart = hearts[productId] || false;

  return { heart, setHeart: (value) => setHearts({ ...hearts, [productId]: value }) };
}

export function HeartProvider({ children }) {
  const [hearts, setHearts] = useState(() => {
    const storedHearts = localStorage.getItem('hearts');
    return storedHearts ? JSON.parse(storedHearts) : {};
  });

  useEffect(() => {
    localStorage.setItem('hearts', JSON.stringify(hearts));
  }, [hearts]);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const res = await axios.get('https://tyteda.ru/api/goods/?is_favorited=true', {
          headers: {
            'content-type': 'application/json',
            authorization: `Token ${localStorage.getItem('token')}`,
          },
        });
        const favoriteIds = res.data.results.map((item) => item.id);
        setHearts((prevHearts) => {
          const updatedHearts = { ...prevHearts };
          favoriteIds.forEach((id) => {
            if (!updatedHearts[id]) {
              updatedHearts[id] = true;
            }
          });
          return updatedHearts;
        });
      } catch (err) {
        // Обработка ошибки
      }
    };
  
    fetchFavorites();
  }, []);

  return (
    <HeartContext.Provider value={{ hearts, setHearts }}>
      {children}
    </HeartContext.Provider>
  );
}