import React from 'react';
import logo from './logo.svg';
import './styles/App.scss';
import Selector from './components/Selector';
import { useState } from 'react';
import IOption from './interfaces/IOption';




function App(): JSX.Element {
  const [options, setOptions] = useState<IOption[]>([])
  const addOption = (option: IOption) => setOptions([...options])

  
  return (
    <Selector addOptions={addOption}/>
  );
}

export default App;
