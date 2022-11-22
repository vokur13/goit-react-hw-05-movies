import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { SearchForm, Input, SearchFormButton } from './Searchbar.styled';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { ImSearch } from 'react-icons/im';

const schema = yup.object().shape({
  query: yup.string(),
});

export function Searchbar({ onFormSubmit }) {
  const {
    register,
    handleSubmit,
    // watch,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = data => {
    onFormSubmit(data);
  };

  // console.log(watch('query'));

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ query: '' });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <>
      <SearchForm onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Search your movie"
          autoComplete="off"
          autoFocus
          defaultValue=""
          {...register('query')}
        />
        <SearchFormButton type="submit">
          <ImSearch style={{ marginRight: 0 }} />
        </SearchFormButton>
        <p>{errors.query?.message}</p>
      </SearchForm>
    </>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func,
};
