import {Flex, Image} from '@chakra-ui/react';
import {BrandText, TEXT_TYPE} from './../../../shared/BrandText';
import {useTranslation} from 'react-i18next';
import {Logo} from './../../../../assets';

const EmptyState = () => {
  const {t} = useTranslation();

  return (
    <Flex direction={'column'} alignItems={'center'} justifyContent={'center'}>
      <Image mb={4} objectFit="cover" src={Logo} alt="Logo" />
      <BrandText type={TEXT_TYPE.H1} mb={1}>
        {t('task.empty.title')}
      </BrandText>
      <BrandText type={TEXT_TYPE.BASE} color={'text-secondary'} mb={6}>
        {t('task.empty.text')}
      </BrandText>
    </Flex>
  );
};

export default EmptyState;
