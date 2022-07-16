import Chart from 'react-google-charts';
import useReports from '../../hooks/useReports/useReports';

function Reports() {
  const { ageRange, numberByLocalities, professions, avgGroupSize } =
    useReports();

  return (
    <>
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
      <Chart
        chartType="BarChart"
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
        data={numberByLocalities}
        width="100%"
      />
      <h1>Average group size is {avgGroupSize}</h1>

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
    </>
  );
}
export default Reports;
