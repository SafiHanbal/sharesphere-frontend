import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { INPUT_TYPES } from '../../components/form-input/form-input.types';
import FormInput from '../../components/form-input/form-input.component';
import Button from '../../components/button/button.component';
import UsersList from '../../components/users-list/users-list.component';

import { getUsersListAsync } from '../../store/users/usersAction';
import { selectUsersList } from '../../store/users/usersSelector';
import { selectToken } from '../../store/user/userSelector';

import { Container, Form, Heading } from './search-user.styles';

const SearchUser = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);
  const usersList = useSelector(selectUsersList);

  const formik = useFormik({
    initialValues: {
      searchStr: '',
    },
    onSubmit: () => {
      if (!formik.values.searchStr) return;
      dispatch(getUsersListAsync(formik.values.searchStr, token));
    },
  });

  return (
    <Container>
      <Form onSubmit={formik.handleSubmit}>
        <FormInput
          inputType={INPUT_TYPES.SEARCH}
          type="search"
          name="searchStr"
          value={formik.values.searchStr}
          placeholder="Search User"
          onChangeHandler={formik.handleChange}
        />
        <Button type="submit">Search</Button>
      </Form>

      {usersList.length > 0 && (
        <>
          <Heading>Results</Heading>
          <UsersList usersList={usersList} />
        </>
      )}
    </Container>
  );
};

export default SearchUser;
