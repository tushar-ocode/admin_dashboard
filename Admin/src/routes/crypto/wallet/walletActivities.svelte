<script>
	import { onMount } from 'svelte';
	import { Card, CardBody, NavItem, NavLink, Table } from 'sveltestrap';
	let activeTab = 1;
	// import { Datatable } from "svelte-simple-datatables";
	import { DataHandler, Datatable, Th } from '@vincjo/datatables';
	const settings = {
		sortable: true,
		pagination: true,
		rowPerPage: 10
	};
	import data from '../../../common/data/crypto';
	const handler = new DataHandler(data.wallet.walletHistory, { rowsPerPage: 10 });
	const rows = handler.getRows();
	onMount(async () => {});
</script>

<Card>
	<CardBody>
		<h4 class="card-title mb-4">Activities</h4>
		<ul class="nav nav-tabs nav-tabs-custom">
			<NavItem>
				<NavLink on:click={() => (activeTab = 1)} active={activeTab == 1}>All</NavLink>
			</NavItem>
			<NavItem>
				<NavLink on:click={() => (activeTab = 2)} active={activeTab == 2}>Buy</NavLink>
			</NavItem>
			<NavItem>
				<NavLink on:click={() => (activeTab = 3)} active={activeTab == 3}>Sell</NavLink>
			</NavItem>
		</ul>
		<div class="mt-4">
			<Datatable {handler}>
				<Table hover class="dt-responsive nowrap">
					<thead>
						<tr>
              
							<Th {handler} style="width: 158px;" orderBy="id">ID No</Th>
							<Th {handler} style="width: 219px;" orderBy="date">Date</Th>
							<Th {handler} style="width: 142px;" orderBy="type">Type</Th>
							<Th {handler} style="width: 215px;" orderBy="currency">Currency</Th>
							<Th {handler} style="width: 205px;" orderBy="amount">Amount</Th>
							<Th {handler} style="width: 306px;" orderBy="amountinUSD">Amount in USD</Th>
						</tr>
					</thead>
					<tbody>
						{#if rows}
							{#each $rows as row}
								<tr>
									<td style="width: 158px;"><a href="/" class="text-body fw-bold">{row.id}</a></td>
									<td style="width: 219px;">{row.date}</td>
									<td style="width: 142px;">{row.type}</td>
									<td style="width: 215px;">{row.currency}</td>
									<td style="width: 205px;">{row.amount}</td>
									<td style="width: 306px;">{row.amountinUSD}</td>
								</tr>
							{/each}
						{/if}
					</tbody>
				</Table>
			</Datatable>
		</div>
	</CardBody>
</Card>
