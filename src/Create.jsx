import React, { useState } from 'react';
import axios from 'axios';

function Create() {
  const [task, setTask] = useState('');

  const handleAdd = () => {
    console.log('Sending task:', task);
    axios
      .post('http://localhost:3001/add', { task }, {
        headers: { 'Content-Type': 'application/json' }, // Set the content type explicitly
      })
      .then((result) => {
          location.reload()
      })
      .catch((err) => console.log(err));
  };
  
  return (
    <div className="create_form">
        <input type="text" placeholder='Enter Task' onChange={(e) => setTask(e.target.value)} />
        <button type="button" onClick={handleAdd}>Add</button>
    </div>
  );
}

export default Create;

