import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import customFetch from './utils';
import { toast } from 'react-toastify';
export const usegetTasks = () => {
  const result = useQuery({
    queryKey: ['tasks'],
    queryFn: async () => customFetch.get('/')
  });
  return { result };
};

export const useCreateTask = () => {
  const queryClient = useQueryClient();
  const { mutate: createTask, isLoading: creating } = useMutation({
    mutationFn: taskTitle => customFetch.post('/', { title: taskTitle }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      toast.success('added!!!!!!!!!!!!');
    },
    onError: error => {
      toast.error(error?.message);
    }
  });
  return { createTask, creating };
};
export const useEditTask = () => {
  const queryClient = useQueryClient();
  const { mutate: editTask } = useMutation({
    mutationFn: ({ taskId, isDone }) => customFetch.patch(`/${taskId}`, { isDone }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      toast.success('success edited');
    },
    onError: error => {
      toast.error(error?.message);
    }
  });
  return { editTask };
};
export const useDeleteTask = () => {
  const queryClient = useQueryClient(); // in the single folder we should give this  queryClient once on the top but in this custom component we should give this in each seperate component where ever  it is used
  const { mutate: deleteTask, isLoading } = useMutation({
    mutationFn: taskId => customFetch.delete(`${taskId}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] });
      toast.success('deleted!!!!!!!!!!!!');
    }
  });
  return { deleteTask, isLoading };
};
