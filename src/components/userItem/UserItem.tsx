import FlexBox from 'components/flexbox/FlexBox';
import Typography from '../typography/Typography';
import Container from '../container/Container';
import Icon from '../icon/Icon';

interface IUserItemProps {
  firstName: string;
  lastName: string;
  locality: string;
  icon?: string;
  onClick?: () => void;
}
function UserItem({
  firstName,
  lastName,
  locality,
  icon,
  onClick,
}: IUserItemProps) {
  return (
    <Container
      backgroundColor="secondaryBackground2"
      padding="16px"
      borderRadius={[10]}
      margin={[20, 0, 0, 0]}
      onClick={onClick}
    >
      <FlexBox display="flex" justifyContent="space-between">
        <Container padding="0">
          <Typography variant="h2" data-testid={`nameTest_${firstName}`}>
            {`${firstName} ${lastName}`}
          </Typography>
          <Typography variant="h3" margin={[10, 0, 0, 0]} color="textColor2">
            {locality}
          </Typography>
        </Container>
        <Icon alt="employee" src={icon} />
      </FlexBox>
    </Container>
  );
}
export default UserItem;
