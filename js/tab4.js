 // Data
 const dataChartOptionsExample = {
    type: 'bar',
    data: {
      labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
      datasets: [
        {
          label: 'number',
          data: [21, 15, 20, 28, 36, 50,33],
          backgroundColor: [
            'rgba(100, 99, 132, 0.2)',
            'rgba(200, 162, 40, 0.2)',
            'rgba(150, 100, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(13, 102, 255, 0.2)',
            'rgba(80, 211, 100, 0.2)',
            'rgba(255, 11, 100, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(25, 159, 64, 1)',
          ],
          borderWidth: 1,
        },
      ],
    },
  };

  // Options
  const optionsChartOptionsExample = {
    options: {
      scales: {
        x:
        {
          ticks: {
            color: '#4285F4',
          },
        },
        y:
        {
          ticks: {
            color: '#f44242',
          },
        },
      },
    },
  };

  new mdb.Chart(
    document.getElementById('chart-options-example'),
    dataChartOptionsExample,
    optionsChartOptionsExample
  );