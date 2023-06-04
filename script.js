
const ctx = document.getElementById('myChart');
new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['mon', 'tues', 'wed', 'thurs', 'fri', 'sat', 'sun'],
    datasets: [{
    label: '$',
      data: [17.45, 34.91,  52.36, 31.07,23.39,  43.28,  25.48],
      borderWidth: 1,
      backgroundColor: [
        'hsl(10, 79%, 65%)',
        'hsl(10, 79%, 65%)',
        'hsl(186, 34%, 60%)',
        'hsl(10, 79%, 65%)',
        'hsl(10, 79%, 65%)',
        'hsl(10, 79%, 65%)',
        'hsl(10, 79%, 65%)'
      ],
      hoverBackgroundColor: ['hsl(9, 68%, 73%)', 'hsl(9, 68%, 73%)', 'hsl(185, 42%, 79%)', 'hsl(9, 68%, 73%)', 'hsl(9, 68%, 73%);', 'hsl(9, 68%, 73%)', 'hsl(9, 68%, 73%)'],
      borderRadius: 5,
    }]
  },
  options: {

    plugins: {
        legend: {
            display: false
        },
    },
    scales: {
      y: {
        display: false,
    }
    }
  }
});

