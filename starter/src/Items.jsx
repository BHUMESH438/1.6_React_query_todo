import SingleItem from './SingleItem';
import { usegetTasks } from './ReactQueryCustomHooks';
const Items = () => {
  const { result } = usegetTasks();
  //reactQuery

  console.log('items page result>>>>>>>>>>>>>', result);
  // console.log('array inside the data query client', result.data.data.taskList);
  // console.log('error', result.isError, result.error);
  // console.log('error', result.error?.message);

  //is loading from query
  if (result.isLoading) {
    return <p>loading.............</p>;
  }
  if (result.isError) {
    return <p>error........{result.error?.message}.</p>;
  }
  return (
    <div className='items'>
      {result.data.data.taskList.map(item => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
};
export default Items;
