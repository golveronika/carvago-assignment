import {useEffect, useState} from 'react';
import {Box, Card, Divider, Flex, Fade} from '@chakra-ui/react';

import {useTranslation} from 'react-i18next';
import {format} from 'date-fns';

import {useAppContext} from '../../../context';
import {BrandText, TEXT_TYPE} from '../../shared/BrandText';
import {BrandButton, ICON} from '../../shared/BrandButton';

import useUserTodos from '../../../api/query/useUserTodos';
import useUserTodosUpdate from '../../../api/query/useUserTodosUpdate';
import useUserTodosDelete from '../../../api/query/useUserTodosDelete';
import useUserTodosCreate from '../../../api/query/useUserTodosCreate';

import {INewTodo, ITodo, TTodos} from '../../../../@types/api';

import EmptyState from './partials/EmptyState';
import TodoItem from './partials/TodoItem';
import TaskForm from './partials/TaskForm';

const HomePage = () => {
  const {t} = useTranslation();

  const {state} = useAppContext();

  const {data, isLoading} = useUserTodos(state.user?.id);

  const [userTodos, setUserTodos] = useState<TTodos>([]);
  const [isTaskFormShow, setIsTaskFormShow] = useState<boolean>(false);

  const [editedTask, setEditedTask] = useState<ITodo | null>(null);

  const {mutate: updateTodo} = useUserTodosUpdate();
  const {mutate: deleteTodo} = useUserTodosDelete();
  const {mutate: createTodo} = useUserTodosCreate();

  useEffect(() => {
    if (!isLoading) {
      setUserTodos(data || []);
    }
  }, [data, isLoading]);

  const completedTodos = userTodos?.filter((todo) => todo.completed);
  const newTodos = userTodos?.filter((todo) => !todo.completed);

  const onTodoChanged = (todo: ITodo, value: boolean | undefined = undefined) => {
    updateTodo(
      {
        todos: userTodos,
        todo: {...todo, completed: value !== undefined ? value : todo.completed},
      },
      {
        onSuccess: (result) => {
          setUserTodos(result);
        },
      }
    );
  };

  const onTodoDelete = (todoId: number) => {
    deleteTodo(
      {
        todos: userTodos,
        todoId,
      },
      {
        onSuccess: (result) => {
          setUserTodos(result);
        },
      }
    );
  };

  const onCreateTodo = (todo: INewTodo) => {
    createTodo(
      {
        todos: userTodos,
        todo,
        userId: state.user?.id as number,
      },
      {
        onSuccess: (result) => {
          setUserTodos(result);
        },
      }
    );
  };

  if (isTaskFormShow)
    return (
      <Box display="flex" flexDirection="column" w={'100%'} alignItems={'center'}>
        <Card p={'40px'} borderRadius={'15px'} w={'100%'} maxW={'1280px'}>
          <TaskForm
            onCreate={onCreateTodo}
            onUpdate={onTodoChanged}
            isNewTask={!!!editedTask}
            editedTask={editedTask}
            onCancel={() => {
              setEditedTask(null);
              setIsTaskFormShow(!isTaskFormShow);
            }}
          />
        </Card>
      </Box>
    );

  return (
    <Fade in={!isLoading} style={{width: '100%'}}>
      <Box display="flex" flexDirection="column" w={'100%'} alignItems={'center'}>
        <Card p={'40px'} borderRadius={'15px'} w={'100%'} maxW={'1280px'}>
          <Flex justifyContent="space-between" alignItems={'center'} mb={10}>
            <Flex flexDirection="column">
              <BrandText type={TEXT_TYPE.H1}>
                {t('home.hello', {name: state.user?.firstName})}
              </BrandText>
              <BrandText type={TEXT_TYPE.BASE} color={'text-tertiary'}>
                {format(new Date(), 'dd. MMMM yyyy')}
              </BrandText>
            </Flex>

            <BrandButton
              isSubmit={true}
              icon={ICON.addWhite}
              onClick={() => setIsTaskFormShow(!isTaskFormShow)}
            >
              {t('task.add')}
            </BrandButton>
          </Flex>

          {newTodos?.length ? (
            <Flex flexDirection={'column'} mb={4}>
              <BrandText type={TEXT_TYPE.H2} mr={10}>
                {t('task.todo')}
              </BrandText>
              <Divider orientation="horizontal" color={'border-gray'} my={4} />
              {newTodos?.map((todo) => (
                <TodoItem
                  todo={todo}
                  key={`newTodos-${todo.id}`}
                  onChange={onTodoChanged}
                  onDelete={onTodoDelete}
                  onEdit={(todoToEdit) => {
                    setEditedTask(todoToEdit);
                    setIsTaskFormShow(!isTaskFormShow);
                  }}
                />
              ))}
            </Flex>
          ) : (
            <EmptyState />
          )}

          {!!completedTodos?.length && (
            <Flex flexDirection={'column'}>
              <BrandText type={TEXT_TYPE.H2} mr={10}>
                {t('task.completed')}
              </BrandText>
              <Divider orientation="horizontal" color={'border-gray'} my={4} />
              {completedTodos?.map((todo) => (
                <TodoItem
                  todo={todo}
                  key={`completedTodos-${todo.id}`}
                  onChange={onTodoChanged}
                  onDelete={onTodoDelete}
                  onEdit={(todoToEdit) => {
                    setEditedTask(todoToEdit);
                    setIsTaskFormShow(!isTaskFormShow);
                  }}
                />
              ))}
            </Flex>
          )}
        </Card>
      </Box>
    </Fade>
  );
};

export default HomePage;
