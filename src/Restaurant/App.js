import './Styles/App.css';
import { React, useState, useEffect, useContext} from 'react';
import Places from './Utils/Places.js';
import Map from './Utils/Map.js';
import Search from './Components/Search.js';
import Sort from './Components/Sort.js';
import Collection from './Components/Collection.js';
import {LocationContext} from '../Components/LocationProvider.js';



function App() {
  const {location} = useContext(LocationContext);
  const [options, setOptions] = useState([]);
  const [images, setImages] = useState([]);
  const [distances, setDistances] = useState([]);
  const [map, setMap] = useState(null);
  const [markers, setMarkers] = useState([]);
  const [nextPage, setNextPage] = useState("");

  const showDirections = (e) => {
    map.showDirections(JSON.parse(e.detail.poly));
  }
  
  useEffect(() => {
    let map = new Map();
    if(location !== "") {
      map.createMap(38.0293, -78.4767, 13, 8046.7);
      Places.searchByAddress(location, 5, "restaurant", "", [0, 4], setOptions, setImages, map, setNextPage, setDistances)
    }
    else {
      map.createMap(38.0293, -78.4767, 13, 8046.7);
      Places.search(38.0293, -78.4767, 5, "restaurant", "", [0, 4], setOptions, setImages, map, setNextPage, setDistances)
    }
    setMap(map);
    
  }, []);

  useEffect(() => {
    document.addEventListener('showDirections', showDirections);
    return () => {
      document.removeEventListener('showDirections', showDirections);
    }
  }, [map])

  let cur = 0;
  const joined = options.map(obj => ({...obj, "imgURL":images[cur], "distVal":distances[cur] !== undefined && distances[cur].value, "distText":distances[cur] !== undefined && distances[cur].text, "poly":distances[cur] !== undefined && distances[cur].poly, "marker":markers[cur++]}));

  useEffect(() => {
    if(options.length !== 0 && map !== null && distances.length === options.length) {
      setMarkers(map.setMarkers(joined, markers));
    }
  }, [map, options, distances]);

  
  return (
    <div>
      <div id="map"></div>
      <div>
        <Search map={map} Places={Places} setOptions={setOptions} setImages={setImages} setNextPage={setNextPage} setDistances={setDistances} />
        <Sort nextPage={nextPage} setNextPage={setNextPage} loadMore={Places.loadMore} lat={map !== null && map.lat} lng={map !== null && map.lng} options={options} images={images} setOptions={setOptions} setImages={setImages} distances={distances} setDistances={setDistances} joined={joined} />
        <Collection data={joined} />
      </div>
    </div>
  );
}

export default App;
