import homeWhite from 'assets/homeWhite.svg';
import reportWhite from 'assets/pieWhite.svg';
import homeActive from 'assets/homeActive.svg';
import reportActive from 'assets/pieActive.svg';
import { StyledButton, StyledContainer, StyledContent } from './NavTabs.styles';
import Icon from '../icon/Icon';

const tabs = [
  {
    page: 'home',
    icon: homeWhite,
    active: homeActive,
  },
  {
    page: 'reports',
    icon: reportWhite,
    active: reportActive,
  },
];

interface INavTabsProps {
  onClick: (page: string) => void;
  activePage: 'home' | 'reports';
}
function NavTabs({ onClick, activePage }: INavTabsProps) {
  return (
    <StyledContainer>
      <StyledContent>
        {tabs.map(({ page, active, icon }) => (
          <StyledButton
            onClick={() => onClick(page)}
            key={page}
            data-testid={`button_test_${page}`}
          >
            <Icon src={activePage === page ? active : icon} />
          </StyledButton>
        ))}
      </StyledContent>
    </StyledContainer>
  );
}
export default NavTabs;
