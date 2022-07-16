import Chart from 'react-google-charts';
import FlexBox from 'components/flexbox/FlexBox';
import useReports from '../../hooks/useReports/useReports';
import Typography from '../../components/typography/Typography';
import Container from '../../components/container/Container';
import { BigNumber } from './reports.styles';

function Reports() {
  const { ageRange, numberByLocalities, professions, avgGroupSize } =
    useReports();

  return (
    <>
      <Typography variant="h1" align="center" margin={[30, 0, 10, 0]}>
        Reports
      </Typography>
      <Container>
        <Container
          backgroundColor="secondaryBackground"
          padding="0"
          borderRadius={[10]}
        >
          <Chart
            chartType="PieChart"
            options={{
              backgroundColor: '',
              legend: {
                textStyle: {
                  color: '#FFF',
                },
              },
            }}
            data={ageRange}
            width="100%"
          />
          <Typography
            align="center"
            variant="h3"
            margin={[0, 0, 16, 0]}
            color="textColor2"
          >
            {'Age range groups'.toUpperCase()}
          </Typography>
        </Container>

        <Container
          backgroundColor="secondaryBackground"
          padding="0"
          borderRadius={[10]}
          margin={[20, 0]}
        >
          <Chart
            chartType="BarChart"
            options={{
              hAxis: {
                textStyle: { color: '#FFF' },
              },
              vAxis: {
                textStyle: { color: '#FFF' },
                titleTextStyle: { color: 'red' },
              },
              backgroundColor: '',
              legend: {
                position: 'none',
              },
            }}
            data={numberByLocalities}
            width="100%"
          />
          <Typography
            align="center"
            variant="h3"
            margin={[0, 0, 16, 0]}
            color="textColor2"
          >
            {'Localities'.toUpperCase()}
          </Typography>
        </Container>
        <Container
          backgroundColor="secondaryBackground"
          borderRadius={[10]}
          margin={[20, 0]}
        >
          <FlexBox display="flex">
            <FlexBox display="flex" flexGrow={2}>
              <Typography variant="h1" color="textColor2">
                Average group size of the guests
              </Typography>
            </FlexBox>
            <FlexBox display="flex" flexGrow={1} width="80px">
              <BigNumber variant="h1">{`${avgGroupSize}`}</BigNumber>
            </FlexBox>
          </FlexBox>
        </Container>
        <Container
          backgroundColor="secondaryBackground"
          padding="0"
          borderRadius={[10]}
          margin={[20, 0]}
        >
          <Chart
            chartType="ColumnChart"
            options={{
              hAxis: {
                textStyle: { color: '#FFF' },
              },
              vAxis: {
                textStyle: { color: '#FFF' },
              },
              backgroundColor: '',
              legend: {
                position: 'none',
              },
            }}
            data={professions}
            width="100%"
          />
          <Typography
            align="center"
            variant="h3"
            margin={[0, 0, 16, 0]}
            color="textColor2"
          >
            {'professions'.toUpperCase()}
          </Typography>
        </Container>
      </Container>
    </>
  );
}
export default Reports;
