import { useState } from 'react';
import { useCreateTask } from './ReactQueryCustomHooks';

const Form = () => {
  const [newItemName, setNewItemName] = useState('');
  const { createTask, creating } = useCreateTask();
  const handleSubmit = e => {
    e.preventDefault();
    createTask(newItemName, {
      onSuccess: () => {
        setNewItemName('');
      }
    }); //passing the initial state input as a parameter to the mutate function
  };
  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className='form-control'>
        <input type='text ' className='form-input' value={newItemName} onChange={event => setNewItemName(event.target.value)} />
        <button type='submit' className='btn' disabled={creating}>
          add task
        </button>
      </div>
    </form>
  );
};
export default Form;
