import { useDispatch, useSelector } from 'react-redux';

import { selectToken } from '../../store/user/userSelector';
import { logoutUserAsync } from '../../store/user/userAction';

const Profile = () => {
  const dispatch = useDispatch();
  const token = useSelector(selectToken);

  return (
    <div>
      <button onClick={() => dispatch(logoutUserAsync(token))}>Logout</button>
    </div>
  );
};

export default Profile;
