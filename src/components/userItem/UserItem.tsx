import Typography from '../typography/Typography';
import Container from '../container/Container';

interface IUserItemProps {
  firstName: string;
  lastName: string;
  locality: string;
}
function UserItem({ firstName, lastName, locality }: IUserItemProps) {
  return (
    <Container
      backgroundColor="secondaryBackground2"
      padding="16px"
      borderRadius={[10]}
      margin={[20, 0, 0, 0]}
    >
      <Typography variant="h2" data-testid={`nameTest_${firstName}`}>
        {`${firstName} ${lastName}`}
      </Typography>
      <Typography variant="h3" margin={[10, 0, 0, 0]} color="textColor2">
        {locality}
      </Typography>
    </Container>
  );
}
export default UserItem;
