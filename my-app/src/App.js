import ButtonAppBar from './navbar';
import Testimonials from './Testimonials';
import Hero from './Hero';
import Whoami from './Whoami';
import Services from './Services';
import Price from './Price';
import Footer from './Footer';
import Processcomponent from './Processcomponent'

function App() {
  return (
    <>
        <ButtonAppBar/>
        <Hero />
        <Whoami />
        <Processcomponent></Processcomponent>
        <Services />
        <Price />
        <Testimonials />
        <Footer/>
    </>
  );
}

export default App;