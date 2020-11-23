import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Para from './Para';
import Heading from './Heading';
import Mylinks from './Mylinks';
import Para2 from './Para2';
import SideBar from './components/SideBar';
import BlockClass from './components/BlockClass';
import Show from './components/Show';


function App() {
  return (<div>
    <Header />
    <h1>My First App</h1>
    <p>hello world
    <Para />
<Heading />
<Para />
<Mylinks />
<Para2 />
<SideBar />
<BlockClass color='red' />
<BlockClass color='yellow' />
<BlockClass color='pink' />
<BlockClass color='blue' />
<Show />

    </p>
  </div>
  );
}

export default App;
