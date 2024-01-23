import {Flex} from '@chakra-ui/react';
import {BrandText, TEXT_TYPE} from './../../../shared/BrandText';
import {useTranslation} from 'react-i18next';
import {BUTTON_VARIANT, BrandButton, ICON} from '../../../shared/BrandButton';

import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import * as z from 'zod';
import {BrandInput, INPUT_TYPE} from '../../../shared/BrandInput';
import {FC} from 'react';
import {INewTodo, ITodo} from '../../../../../@types/api';

const schema = z.object({
  todo: z.string().min(1, {message: 'Taskname is required'}),
  description: z.string().optional(),
});

type Schema = z.infer<typeof schema>;

interface TaskFormProps {
  onCancel: () => void;
  onCreate?: (data: INewTodo) => void;
  onUpdate?: (todo: ITodo) => void;
  isNewTask?: boolean;
  editedTask?: ITodo | null;
}

const TaskForm: FC<TaskFormProps> = ({onCancel, onCreate, onUpdate, isNewTask, editedTask}) => {
  const {t} = useTranslation();

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<Schema>({
    defaultValues: {
      todo: editedTask?.todo || '',
      description: editedTask?.description || '',
    },
    resolver: zodResolver(schema),
    mode: 'onSubmit',
  });

  const onSubmit = async (data: Schema) => {
    if (isNewTask && onCreate) {
      onCreate(data);
      onCancel();
    } else if (!isNewTask && onUpdate && editedTask) {
       onUpdate({
        ...editedTask,
        ...data,
      });
      onCancel();
    }
  };

  return (
    <Flex direction={'column'} alignItems={'center'} justifyContent={'center'} w={'100%'}>
      <Flex alignItems={'center'} justifyContent={'flex-start'} w={'100%'} mb={6}>
        <BrandButton
          icon={ICON.backward}
          variant={BUTTON_VARIANT.outline}
          mr={4}
          onClick={onCancel}
        />
        <BrandText type={TEXT_TYPE.H1}>
            {isNewTask ? t('task.new') : editedTask?.todo}
        </BrandText>
      </Flex>

      <form onSubmit={handleSubmit(onSubmit)} style={{width: '100%'}}>
        <BrandInput
          mb={4}
          labelText={t('task.taskname')}
          isRequired
          register={{...register('todo')}}
          isInvalid={!!errors.todo}
          helperText={errors.todo?.message}
        />
        <BrandInput
          type={INPUT_TYPE.texarea}
          mb={4}
          labelText={t('task.description')}
          register={{...register('description')}}
          isInvalid={!!errors.description}
          helperText={errors.description?.message}
        />

        <Flex justifyContent={'space-between'} w={'100%'} mt={8}>
          <BrandButton variant={BUTTON_VARIANT.outline} onClick={onCancel}>
            {isNewTask ? t('task.discard') : t('task.discardChanges')}
          </BrandButton>
          <BrandButton isSubmit={true} icon={ICON.checkWhite}>
          {isNewTask ? t('task.create') : t('task.save')}
          </BrandButton>
        </Flex>
      </form>
    </Flex>
  );
};

export default TaskForm;
