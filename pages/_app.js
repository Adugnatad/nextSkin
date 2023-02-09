import { createContext, useState } from 'react';
import Header from '../src/components/Header';
import Footer from '../src/components/footer';
import '../styles/globals.css';


export const Context = createContext();
function MyApp({ Component, pageProps }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [page, setPage] = useState("Home");
  return (
    <Context.Provider value={{
      menuOpen, setMenuOpen,
      page, setPage
    }}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Context.Provider>
  );
}

export default MyApp;
