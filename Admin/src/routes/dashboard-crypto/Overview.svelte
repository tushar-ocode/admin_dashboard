<script>
	import { Card, CardBody, CardTitle } from 'sveltestrap';
	import OverviewChart from './OverviewChart.svelte';
</script>

<Card>
	<CardBody>
        <CardTitle class="mb-3">
            Overview
        </CardTitle>
        <OverviewChart chartColor={["--bs-warning"]} />
    </CardBody>
</Card>
