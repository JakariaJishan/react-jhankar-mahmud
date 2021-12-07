import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import { useState } from 'react';
import './App.css';

function App() {
  const [icon, setIcon] = useState('');
  let handleLike = () => {
    let colorIcon = icon? '': 'primary';
    setIcon(colorIcon);
  }
  return (
    <div className="App">
     <ThumbUpIcon onClick={handleLike} color={icon}></ThumbUpIcon>
    </div>
  );
}

export default App;
