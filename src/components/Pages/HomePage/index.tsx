import {Box, Card, Divider, Flex, Fade} from '@chakra-ui/react';

import {BrandText, TEXT_TYPE} from '../../shared/BrandText';
import {useTranslation} from 'react-i18next';
import {format} from 'date-fns';

import {useAppContext} from '../../../context';
import {BrandButton, ICON} from '../../shared/BrandButton';

import EmptyState from './partials/EmptyState';

import useUserTodos from '../../../api/query/useUserTodos';
import useUserTodosUpdate from '../../../api/query/useUserTodosUpdate';
import useUserTodosDelete from '../../../api/query/useUserTodosDelete';

import {useEffect, useState} from 'react';
import {ITodo, TTodos} from '../../../../@types/api';

import TodoItem from './partials/TodoItem';

const HomePage = () => {
  const {t} = useTranslation();

  const {actions, state} = useAppContext();

  const {data, isLoading} = useUserTodos(state.user?.id);

  const [userTodos, setUserTodos] = useState<TTodos>([]);

  const {mutate: updateTodo} = useUserTodosUpdate();
  const {mutate: deleteTodo} = useUserTodosDelete();

  useEffect(() => {
    if (!isLoading) {
      setUserTodos(data || []);
    }
  }, [data, isLoading]);

  const completedTodos = userTodos?.filter((todo) => todo.completed);
  const newTodos = userTodos?.filter((todo) => !todo.completed);

  const onTodoChanged = async (todo: ITodo, value: boolean) => {
    await updateTodo(
      {
        todos: userTodos,
        todo: {...todo, completed: value},
      },
      {
        onSuccess: (result) => {
          setUserTodos(result);
        },
      }
    );
  };

  const onTodoDelete = async (todoId: number) => {
    await deleteTodo(
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

            <BrandButton isSubmit={true} icon={ICON.addWhite}>
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
                  key={todo.id}
                  onChange={onTodoChanged}
                  onDelete={onTodoDelete}
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
                  key={todo.id}
                  onChange={onTodoChanged}
                  onDelete={onTodoDelete}
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
