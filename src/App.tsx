
import './styles/App.scss';
import Selector from './components/Selector';
import { useState } from 'react';
import IOption from './interfaces/IOption';
import OptionsList from './components/OptionsList';

function App(): JSX.Element {
  const [options, setOptions] = useState<IOption[]>([]);
  const getCurrentTimestamp = () => new Date().getTime();
  const addOption = (option: IOption) => setOptions([...options, {...option, id:getCurrentTimestamp()}]);


  return (
    <div className='container'>
      <h2>¡Selector de Opciones!</h2>
      <Selector addOptions={addOption}/>
      <OptionsList options={options}/>
    </div>
  );
}

export default App;
