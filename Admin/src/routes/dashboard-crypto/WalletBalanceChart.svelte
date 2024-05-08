<script>
	import { onMount } from 'svelte';
	import { getChartColorsArray } from '../../common/ChartColorsArray.svelte';
	export let chartColor;

	const walletBalanceColors = getChartColorsArray(chartColor);

	const options = {
		series: [76, 67, 61],
		chart: {
			height: 302,
			type: 'radialBar'
		},
		plotOptions: {
			radialBar: {
				offsetY: 0,
				startAngle: 0,
				endAngle: 270,
				hollow: {
					margin: 5,
					size: '35%',
					background: 'transparent',
					image: undefined
				},
				track: {
					show: true,
					startAngle: undefined,
					endAngle: undefined,
					background: '#f2f2f2',
					strokeWidth: '97%',
					opacity: 1,
					margin: 12,
					dropShadow: {
						enabled: false,
						top: 0,
						left: 0,
						blur: 3,
						opacity: 0.5
					}
				},
				dataLabels: {
					name: {
						show: true,
						fontSize: '16px',
						fontWeight: 600,
						offsetY: -10
					},
					value: {
						show: true,
						fontSize: '14px',
						offsetY: '04',
						formatter: function (val) {
							return val + '%';
						}
					},
					total: {
						show: true,
						label: 'Total',
						color: '#373d3f',
						fontSize: '16px',
						fontFamily: undefined,
						fontWeight: 600,
						formatter: function (w) {
							return (
								w.globals.seriesTotals.reduce(function (a, b) {
									return a + b;
								}, 0) + '%'
							);
						}
					}
				}
			}
		},
		stroke: {
			lineCap: 'round'
		},
		colors: walletBalanceColors,
		labels: ['Ethereum', 'Bitcoin', 'Litecoin'],
		legend: {
			show: false
		}
	};

	onMount(() => {
		const chart = new ApexCharts(document.querySelector('#linechart'), options);
		chart.render();
	});
</script>

<div id="linechart" class="apex-charts" dir="ltr" />
