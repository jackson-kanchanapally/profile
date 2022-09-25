
import { ChakraProvider } from '@chakra-ui/react';
import Footer from './components/Footer';
import Header from './components/Header'
import Profile from './components/Profile'
function App() {
  return (
    <ChakraProvider>
      <Header/>
      <Profile/>
      <Footer/>
    </ChakraProvider>
  );
}

export default App;
