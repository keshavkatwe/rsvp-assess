import { useMemo } from 'react';
// import list from 'list.json';
import { useUserData } from '../../store/userStore/userStore';

function useReports() {
  const [usersList] = useUserData();
  const { users } = usersList;
  // const [users] = useState(list.data);

  const ageRange = useMemo(
    () => [
      ['Age Range', 'Count'],
      ['13-18', users.filter((item) => item.age >= 13 && item.age < 18).length],
      ['18-25', users.filter((item) => item.age >= 18 && item.age < 25).length],
      ['25+', users.filter((item) => item.age > 25).length],
    ],
    [users]
  );

  const numberByLocalities = useMemo(() => {
    const localitiesMap: Record<string, number> = {};

    users.forEach(({ locality }) => {
      localitiesMap[locality] = localitiesMap[locality] || 0;
      localitiesMap[locality] += 1;
    });

    const localityList = Object.keys(localitiesMap).map((value) => [
      value,
      localitiesMap[value],
    ]);
    localityList.unshift(['Locality', 'Count']);
    return localityList;
  }, [users]);

  const avgGroupSize = useMemo(() => {
    const totalCount = users.reduce(
      (prev, nextItem) => prev + nextItem.noOfGuest,
      0
    );
    return Math.round(totalCount / users.length);
  }, [users]);

  const professions = useMemo(() => {
    const professionsMap: Record<string, number> = {};

    users.forEach(({ profession }) => {
      professionsMap[profession] = professionsMap[profession] || 0;
      professionsMap[profession] += 1;
    });

    const professionList = Object.keys(professionsMap).map((value) => [
      value,
      professionsMap[value],
    ]);
    professionList.unshift(['Profession', 'Count']);
    return professionList;
  }, [users]);

  return {
    ageRange,
    numberByLocalities,
    avgGroupSize,
    professions,
  };
}
export default useReports;
