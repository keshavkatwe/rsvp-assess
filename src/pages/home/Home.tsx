import { useCallback, useEffect, useMemo, useState } from 'react';
import employeeIcon from 'assets/employee.svg';
import studentIcon from 'assets/student-thin.svg';
import { getUsersList } from '../../services/mockarooService/mockarooService';
import { useUserData } from '../../store/userStore/userStore';
import Typography from '../../components/typography/Typography';
import InputBox from '../../components/inputBox/InputBox';
import Container from '../../components/container/Container';
import UserItem from '../../components/userItem/UserItem';
import BottomSheet from '../../components/bottomSheet/bottomSheet';
import UserDetails from '../../components/userDetails/UserDetails';
import { IUserInfo } from '../../types/IUserInfo';

function Home() {
  const [userList, setUserList] = useUserData();
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [keyword, setKeyword] = useState('');
  const [selectedUser, setSelectedUser] = useState<IUserInfo>();
  const [isShowBottomSheet, setIsShowBottomSheet] = useState(false);

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

  const filteredList = useMemo(() => {
    if (keyword) {
      return userList.users.filter(
        (value) =>
          value.firstName.toLowerCase().includes(keyword.toLowerCase()) ||
          value.lastName.toLowerCase().includes(keyword.toLowerCase()) ||
          value.locality.toLowerCase().includes(keyword.toLowerCase())
      );
    }
    return userList.users;
  }, [keyword, userList]);

  return (
    <>
      <Typography variant="h1" align="center" margin={[30, 0, 10, 0]}>
        Home
      </Typography>
      <Container>
        <InputBox
          color="dark"
          placeholder="Search users"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          data-testid="input-search"
        />
        {filteredList.map((value) => (
          <UserItem
            key={value.id}
            firstName={value.firstName}
            lastName={value.lastName}
            locality={value.locality}
            icon={value.profession === 'Student' ? studentIcon : employeeIcon}
            onClick={() => {
              setSelectedUser(value);
              setIsShowBottomSheet(true);
            }}
          />
        ))}
        {filteredList.length === 0 && (
          <Typography align="center" margin={[30, 0, 0, 0]} color="textColor2">
            No users found
          </Typography>
        )}
      </Container>
      <BottomSheet
        isShow={isShowBottomSheet}
        onClose={() => setIsShowBottomSheet(false)}
      >
        {selectedUser && (
          <UserDetails
            firstName={selectedUser.firstName}
            lastName={selectedUser.lastName}
            locality={selectedUser.locality}
            address={selectedUser.address}
            age={selectedUser.age}
            dob={selectedUser.dob.toString()}
            profession={selectedUser.profession}
            noOfGuests={selectedUser.noOfGuest}
          />
        )}
      </BottomSheet>
    </>
  );
}

export default Home;
