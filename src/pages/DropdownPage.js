import Dropdown from './components/Dropdown'
import { useState } from 'react';

function DropdownPage () {
  const options = [
    { label: 'Red', value: 'red'},
    { label: 'Green', value: 'green'},
    { label: 'Blue', value: 'blue'}
  ]
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option)
  }

  return (
    <Dropdown options={options} onChange={handleSelect} value={selection}/>
  )
}

export default DropdownPage;
