<script>
	import { onMount } from 'svelte';
	import { getChartColorsArray } from '../../common/ChartColorsArray.svelte';
	export let chartColor;
	export let series;
	export let id;

	const areaSparklineColors = getChartColorsArray(chartColor);

	const options = {
    series:series,
    chart: {
      type: 'area',
      height: 40,
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      curve: 'smooth',
      width: 2,
    },
    colors: areaSparklineColors,
    fill: {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.45,
        opacityTo: 0.05,
        stops: [25, 100, 100, 100]
      },
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      marker: {
        show: false
      }
    }
	};

	onMount(() => {
		const chart = new ApexCharts(document.querySelector('#'+id), options);
		chart.render();
	});
</script>

<div {id} class="apex-charts" dir="ltr" />
