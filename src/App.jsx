// Import data

// Import components
import './App.css';
import SearchBar from './SearchBar.jsx';
import Gallery from './Gallery.jsx';
import Directory from './Directory.jsx';
import SideBar from './SideBar.jsx';

function App() {
  return (
    <div style={{ display: 'flex', FlexDirection: 'row', justifyContent: 'space-around' }}>
      <SearchBar />
      <Gallery />
      <Directory />
      <SideBar />
    </div>
  )
}

//Export App Component
export default App;
