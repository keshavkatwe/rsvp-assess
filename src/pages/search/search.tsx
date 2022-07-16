import { Fragment, useMemo, useState } from 'react';
import { useUserData } from '../../store/userStore/userStore';
import InputBox from '../../components/inputBox/InputBox';

function Search() {
  const [userList] = useUserData();
  const [keyword, setKeyword] = useState('');

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
      <InputBox
        placeholder="Search"
        value={keyword}
        onChange={(event) => setKeyword(event.target.value)}
        data-testid="input-search"
      />
      {filteredList.map((value, index) => (
        <Fragment key={value.firstName}>
          <h1
            data-testid={`nameTest_${value.firstName}`}
          >{`${value.firstName} ${value.lastName}`}</h1>
          <h2>{value.locality}</h2>
        </Fragment>
      ))}
    </>
  );
}
export default Search;
