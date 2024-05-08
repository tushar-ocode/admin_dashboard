<script>
	import { onMount } from 'svelte';
	import { getChartColorsArray } from '../../common/ChartColorsArray.svelte';

	export let chartColor;

	const VisitorsChartColors = getChartColorsArray(chartColor);
	let chart;
	const options = {
        series: [
      {
        name: "Current",
        data: [18, 21, 45, 36, 65, 47, 51, 32, 40, 28, 31, 26],
      },
      {
        name: "Previous",
        data: [30, 11, 22, 18, 32, 23, 58, 45, 30, 36, 15, 34],
      },
    ],
    chart: {
      height: 350,
      type: "area",
      toolbar: {
        show: !1,
      },
    },
    colors: VisitorsChartColors,
    dataLabels: {
      enabled: !1,
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        inverseColors: !1,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [20, 100, 100, 100],
      },
    },
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },

    markers: {
      size: 3,
      strokeWidth: 3,

      hover: {
        size: 4,
        sizeOffset: 2,
      },
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
    },
	};

	onMount(() => {
		chart = new ApexCharts(document.querySelector('#visitorChart'), options);
		chart.render();
	});

</script>

	
	<div id="visitorChart" class="apex-charts" dir="ltr" />
