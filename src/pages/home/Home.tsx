import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getUsersList } from '../../services/mockarooService/mockarooService';
import { useUserData } from '../../store/userStore/userStore';
import Button from '../../components/button/Button';

function Home() {
  const [userList, setUserList] = useUserData();
  const [isFirstTime, setIsFirstTime] = useState(true);
  const navigate = useNavigate();

  const fetchUserList = useCallback(async () => {
    const { data } = await getUsersList();
    setUserList({
      type: 'setList',
      data,
    });
  }, [setUserList]);

  useEffect(() => {
    if (isFirstTime) {
      setIsFirstTime(false);
      fetchUserList().catch();
    }
  }, [fetchUserList, isFirstTime]);

  return (
    <>
      <Button
        onClick={() => {
          navigate('/search');
        }}
      >
        Search
      </Button>
      {userList.users.map((value) => (
        <>
          <h1
            data-testid={`nameTest_${value.firstName}`}
          >{`${value.firstName} ${value.lastName}`}</h1>
          <h2>{value.locality}</h2>
        </>
      ))}
    </>
  );
}
export default Home;
