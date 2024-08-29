import './App.css';
import OffcanvasExample from './components/header/header'
import 'bootstrap/dist/css/bootstrap.min.css';
import Presentation from './components/firstPart/firstPart'
import Brands from './components/allBrands/allBrands';
import CustomCarousel from './components/carousel/carousel';
import Publicity from './components/new/new';
import FakeFoot from './components/footer/foot';

function App() {
  return (
    <div className="App">
      <OffcanvasExample></OffcanvasExample>
      <Presentation></Presentation>
      <Brands></Brands>
      <CustomCarousel></CustomCarousel>
      <Publicity></Publicity>
      <FakeFoot></FakeFoot>
    </div>
  );
}

export default App;
