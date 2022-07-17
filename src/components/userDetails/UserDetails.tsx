import Typography from '../typography/Typography';
import Container from '../container/Container';
import FlexBox from '../flexbox/FlexBox';

interface IUserDetailsProps {
  firstName: string;
  lastName: string;
  dob: string;
  age: number;
  profession: string;
  noOfGuests: number;
  locality: string;
  address: string;
}

function UserDetails({
  firstName,
  lastName,
  dob,
  age,
  noOfGuests,
  profession,
  locality,
  address,
}: IUserDetailsProps) {
  return (
    <>
      <Typography variant="h2">{`${firstName} ${lastName}`}</Typography>

      <Container
        padding="10px"
        backgroundColor="secondaryBackground2"
        borderRadius={[10]}
        margin={[20, 0]}
      >
        <FlexBox display="flex" justifyContent="space-between">
          <Container padding="0">
            <Typography variant="h4" color="textColor2">
              Dob
            </Typography>
            <Typography variant="h3" margin={[5, 0, 0, 0]}>
              {dob}
            </Typography>
          </Container>
          <Container padding="0">
            <Typography variant="h4" color="textColor2">
              Age
            </Typography>
            <Typography variant="h3" margin={[5, 0, 0, 0]}>
              {age}
            </Typography>
          </Container>
        </FlexBox>
      </Container>

      <Container
        padding="10px"
        backgroundColor="secondaryBackground2"
        borderRadius={[10]}
        margin={[20, 0]}
      >
        <FlexBox display="flex" justifyContent="space-between">
          <Container padding="0">
            <Typography variant="h4" color="textColor2">
              Profession
            </Typography>
            <Typography variant="h3" margin={[5, 0, 0, 0]}>
              {profession}
            </Typography>
          </Container>
          <Container padding="0">
            <Typography variant="h4" color="textColor2">
              Number of guests
            </Typography>
            <Typography variant="h3" margin={[5, 0, 0, 0]}>
              {noOfGuests}
            </Typography>
          </Container>
        </FlexBox>
      </Container>

      <Container
        padding="10px"
        backgroundColor="secondaryBackground2"
        borderRadius={[10]}
        margin={[20, 0]}
      >
        <Container padding="0">
          <Typography variant="h4" color="textColor2">
            Locality
          </Typography>
          <Typography variant="h3" margin={[5, 0, 0, 0]}>
            {locality}
          </Typography>
        </Container>
        <Container padding="0" margin={[10, 0, 0, 0]}>
          <Typography variant="h4" color="textColor2">
            Address
          </Typography>
          <Typography variant="h3" margin={[5, 0, 0, 0]}>
            {address}
          </Typography>
        </Container>
      </Container>
    </>
  );
}
export default UserDetails;
