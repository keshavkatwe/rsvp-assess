import { useCallback, useEffect, useState } from 'react';
import { getUsersList } from '../../services/mockarooService/mockarooService';
import { useUserData } from '../../store/userStore/userStore';

function Home() {
  const [userList, setUserList] = useUserData();
  const [isFirstTime, setIsFirstTime] = useState(true);

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
