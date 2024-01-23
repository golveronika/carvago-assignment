import {FC} from 'react';
import {Checkbox, Flex, Image, MenuItem} from '@chakra-ui/react';
import {BrandText, TEXT_TYPE} from '../../../shared/BrandText';
import {useTranslation} from 'react-i18next';
import {iDeleteRed, iEdit} from '../../../../assets';
import {BrandMenu} from '../../../shared/BrandMenu';

import {ITodo} from './../../../../../@types/api';

interface TodoItemProps {
  todo: ITodo;
  onChange: (todo: ITodo, completed: boolean) => void;
  onDelete: (todoId: number) => void;
  onEdit: (todo: ITodo) => void;
}

const TodoItem: FC<TodoItemProps> = ({todo, onChange, onDelete, onEdit}) => {
  const {t} = useTranslation();

  return (
    <Flex justifyContent={'space-between'} alignItems={'flex-start'}>
      <Flex flexDirection={'column'}>
        <Checkbox
          mb={4}
          value={todo.id}
          isChecked={todo.completed}
          onChange={() => onChange(todo, !todo.completed)}
        >
          {todo.todo}
        </Checkbox>

        {todo.description && (
          <BrandText type={TEXT_TYPE.BASE} color={'text-tertiary'} mb={4} mt={-3}>
            {todo.description}
          </BrandText>
        )}
      </Flex>

      <BrandMenu>
        <MenuItem onClick={() => onEdit(todo)}>
          <Image objectFit="cover" src={iEdit} alt="edit" />
          <BrandText type={TEXT_TYPE.SMALL} ml={2}>
            {t('task.edit')}
          </BrandText>
        </MenuItem>

        <MenuItem onClick={() => onDelete(todo.id)}>
          <Image objectFit="cover" src={iDeleteRed} alt="delete" />
          <BrandText type={TEXT_TYPE.SMALL} ml={2} color={'border-danger'}>
            {t('task.delete')}
          </BrandText>
        </MenuItem>
      </BrandMenu>
    </Flex>
  );
};

export default TodoItem;
