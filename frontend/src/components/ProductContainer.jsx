import { createContext, useState, useEffect, useContext } from 'react';

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

  return (
    <HeartContext.Provider value={{ hearts, setHearts }}>
      {children}
    </HeartContext.Provider>
  );
}