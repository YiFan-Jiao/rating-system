import './style/reset.css';
import './style/index.css';
import StarRating from "./components/StarRating";
import Dialog from './components/Dialog';
import { useState } from 'react';

function App() {
  const [num,setNum] = useState();

  return (
    <>
    <StarRating />
    <Dialog num={num} ></Dialog>
    </>
  );
}

export default App;
