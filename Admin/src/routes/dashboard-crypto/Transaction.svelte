<script>
	import {
		Card,
		CardBody,
		CardTitle,
		Col,
		Nav,
		NavItem,
		NavLink,
		TabContent,
		TabPane,
		Table
	} from 'sveltestrap';
	import 'overlayscrollbars/overlayscrollbars.css';
	import { OverlayScrollbars } from 'overlayscrollbars';
	import { onMount } from 'svelte';

	const options = {
		scrollbars: {
			visibility: 'auto',
			autoHide: 'move',
			autoHideDelay: 100,
			dragScroll: true,
			clickScroll: false,
			theme: 'os-theme-dark',
			pointers: ['mouse', 'touch', 'pen']
		}
	};

	let currTab = 'All';

	onMount(() => {
		const menuElement = document.querySelectorAll('.list');
		menuElement.forEach((item) => {
			let scrollbar = OverlayScrollbars(item, options);
		});
	});
</script>

<Col xl="4">
	<Card>
		<CardBody>
			<CardTitle class="mb-4">Transactions</CardTitle>
			<Nav class="bg-light rounded" pills>
				<NavItem>
					<NavLink active={currTab == 'All'} on:click={() => (currTab = 'All')}>All</NavLink>
				</NavItem>
				<NavItem>
					<NavLink active={currTab == 'Buy'} on:click={() => (currTab = 'Buy')}>Buy</NavLink>
				</NavItem>
				<NavItem>
					<NavLink active={currTab == 'Sell'} on:click={() => (currTab = 'Sell')}>Sell</NavLink>
				</NavItem>
			</Nav>
			<TabContent class="mt-4">
				<TabPane class={currTab == 'All' ? 'active' : ''}>
					<div class="table-responsive list" style="max-height: 330px;">
						<Table class="align-middle table-nowrap">
							<tbody>
								<tr>
									<td style="width: 50px;">
										<div class="font-size-22 text-primary">
											<i class="bx bx-down-arrow-circle" />
										</div>
									</td>

									<td>
										<div>
											<h5 class="font-size-14 mb-1">Buy BTC</h5>
											<p class="text-muted mb-0">14 Mar, 2020</p>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 mb-0">0.016 BTC</h5>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 text-muted mb-0">$125.20</h5>
										</div>
									</td>
								</tr>

								<tr>
									<td>
										<div class="font-size-22 text-danger">
											<i class="bx bx-up-arrow-circle" />
										</div>
									</td>

									<td>
										<div>
											<h5 class="font-size-14 mb-1">Sell ETH</h5>
											<p class="text-muted mb-0">15 Mar, 2020</p>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 mb-0">0.56 ETH</h5>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 text-muted mb-0">$112.34</h5>
										</div>
									</td>
								</tr>

								<tr>
									<td>
										<div class="font-size-22 text-primary">
											<i class="bx bx-down-arrow-circle" />
										</div>
									</td>

									<td>
										<div>
											<h5 class="font-size-14 mb-1">Buy LTC</h5>
											<p class="text-muted mb-0">16 Mar, 2020</p>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 mb-0">1.88 LTC</h5>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 text-muted mb-0">$94.22</h5>
										</div>
									</td>
								</tr>

								<tr>
									<td>
										<div class="font-size-22 text-primary">
											<i class="bx bx-down-arrow-circle" />
										</div>
									</td>

									<td>
										<div>
											<h5 class="font-size-14 mb-1">Buy ETH</h5>
											<p class="text-muted mb-0">17 Mar, 2020</p>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 mb-0">0.42 ETH</h5>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 text-muted mb-0">$84.32</h5>
										</div>
									</td>
								</tr>

								<tr>
									<td>
										<div class="font-size-22 text-danger">
											<i class="bx bx-up-arrow-circle" />
										</div>
									</td>

									<td>
										<div>
											<h5 class="font-size-14 mb-1">Sell BTC</h5>
											<p class="text-muted mb-0">18 Mar, 2020</p>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 mb-0">0.018 BTC</h5>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 text-muted mb-0">$145.80</h5>
										</div>
									</td>
								</tr>

								<tr>
									<td style="width: 50px;">
										<div class="font-size-22 text-primary">
											<i class="bx bx-down-arrow-circle" />
										</div>
									</td>

									<td>
										<div>
											<h5 class="font-size-14 mb-1">Buy BTC</h5>
											<p class="text-muted mb-0">14 Mar, 2020</p>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 mb-0">0.016 BTC</h5>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 text-muted mb-0">$125.20</h5>
										</div>
									</td>
								</tr>

								<tr>
									<td>
										<div class="font-size-22 text-danger">
											<i class="bx bx-up-arrow-circle" />
										</div>
									</td>

									<td>
										<div>
											<h5 class="font-size-14 mb-1">Sell ETH</h5>
											<p class="text-muted mb-0">15 Mar, 2020</p>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 mb-0">0.56 ETH</h5>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 text-muted mb-0">$112.34</h5>
										</div>
									</td>
								</tr>
							</tbody>
						</Table>
					</div>
				</TabPane>
				<TabPane class={currTab == 'Buy' ? 'active' : ''}>
					<div class="table-responsive list" style="max-height: 330px;">
						<Table class="align-middle table-nowrap">
							<tbody>
								<tr>
									<td style="width: 50px;">
										<div class="font-size-22 text-danger">
											<i class="bx bx-up-arrow-circle" />
										</div>
									</td>

									<td>
										<div>
											<h5 class="font-size-14 mb-1">Sell ETH</h5>
											<p class="text-muted mb-0">15 Mar, 2020</p>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 mb-0">0.56 ETH</h5>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 text-muted mb-0">$112.34</h5>
										</div>
									</td>
								</tr>

								<tr>
									<td>
										<div class="font-size-22 text-primary">
											<i class="bx bx-down-arrow-circle" />
										</div>
									</td>

									<td>
										<div>
											<h5 class="font-size-14 mb-1">Buy BTC</h5>
											<p class="text-muted mb-0">14 Mar, 2020</p>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 mb-0">0.016 BTC</h5>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 text-muted mb-0">$125.20</h5>
										</div>
									</td>
								</tr>

								<tr>
									<td>
										<div class="font-size-22 text-primary">
											<i class="bx bx-down-arrow-circle" />
										</div>
									</td>

									<td>
										<div>
											<h5 class="font-size-14 mb-1">Buy ETH</h5>
											<p class="text-muted mb-0">17 Mar, 2020</p>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 mb-0">0.42 ETH</h5>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 text-muted mb-0">$84.32</h5>
										</div>
									</td>
								</tr>

								<tr>
									<td>
										<div class="font-size-22 text-primary">
											<i class="bx bx-down-arrow-circle" />
										</div>
									</td>

									<td>
										<div>
											<h5 class="font-size-14 mb-1">Buy LTC</h5>
											<p class="text-muted mb-0">16 Mar, 2020</p>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 mb-0">1.88 LTC</h5>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 text-muted mb-0">$94.22</h5>
										</div>
									</td>
								</tr>

								<tr>
									<td style="width: 50px;">
										<div class="font-size-22 text-primary">
											<i class="bx bx-down-arrow-circle" />
										</div>
									</td>

									<td>
										<div>
											<h5 class="font-size-14 mb-1">Buy BTC</h5>
											<p class="text-muted mb-0">14 Mar, 2020</p>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 mb-0">0.016 BTC</h5>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 text-muted mb-0">$125.20</h5>
										</div>
									</td>
								</tr>

								<tr>
									<td>
										<div class="font-size-22 text-danger">
											<i class="bx bx-up-arrow-circle" />
										</div>
									</td>

									<td>
										<div>
											<h5 class="font-size-14 mb-1">Sell BTC</h5>
											<p class="text-muted mb-0">18 Mar, 2020</p>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 mb-0">0.018 BTC</h5>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 text-muted mb-0">$145.80</h5>
										</div>
									</td>
								</tr>

								<tr>
									<td>
										<div class="font-size-22 text-danger">
											<i class="bx bx-up-arrow-circle" />
										</div>
									</td>

									<td>
										<div>
											<h5 class="font-size-14 mb-1">Sell ETH</h5>
											<p class="text-muted mb-0">15 Mar, 2020</p>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 mb-0">0.56 ETH</h5>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 text-muted mb-0">$112.34</h5>
										</div>
									</td>
								</tr>
							</tbody>
						</Table>
					</div>
				</TabPane>
				<TabPane class={currTab == 'Sell' ? 'active' : ''}>
					<div class="table-responsive list" style="max-height: 330px;">
						<Table class="align-middle table-nowrap">
							<tbody>
								<tr>
									<td style="width: 50px;">
										<div class="font-size-22 text-primary">
											<i class="bx bx-down-arrow-circle" />
										</div>
									</td>

									<td>
										<div>
											<h5 class="font-size-14 mb-1">Buy BTC</h5>
											<p class="text-muted mb-0">14 Mar, 2020</p>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 mb-0">0.016 BTC</h5>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 text-muted mb-0">$125.20</h5>
										</div>
									</td>
								</tr>

								<tr>
									<td>
										<div class="font-size-22 text-primary">
											<i class="bx bx-down-arrow-circle" />
										</div>
									</td>

									<td>
										<div>
											<h5 class="font-size-14 mb-1">Buy LTC</h5>
											<p class="text-muted mb-0">16 Mar, 2020</p>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 mb-0">1.88 LTC</h5>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 text-muted mb-0">$94.22</h5>
										</div>
									</td>
								</tr>

								<tr>
									<td>
										<div class="font-size-22 text-primary">
											<i class="bx bx-down-arrow-circle" />
										</div>
									</td>

									<td>
										<div>
											<h5 class="font-size-14 mb-1">Buy ETH</h5>
											<p class="text-muted mb-0">17 Mar, 2020</p>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 mb-0">0.42 ETH</h5>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 text-muted mb-0">$84.32</h5>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div class="font-size-22 text-danger">
											<i class="bx bx-up-arrow-circle" />
										</div>
									</td>

									<td>
										<div>
											<h5 class="font-size-14 mb-1">Sell ETH</h5>
											<p class="text-muted mb-0">15 Mar, 2020</p>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 mb-0">0.56 ETH</h5>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 text-muted mb-0">$112.34</h5>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div class="font-size-22 text-danger">
											<i class="bx bx-up-arrow-circle" />
										</div>
									</td>

									<td>
										<div>
											<h5 class="font-size-14 mb-1">Sell BTC</h5>
											<p class="text-muted mb-0">18 Mar, 2020</p>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 mb-0">0.018 BTC</h5>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 text-muted mb-0">$145.80</h5>
										</div>
									</td>
								</tr>
								<tr>
									<td>
										<div class="font-size-22 text-danger">
											<i class="bx bx-up-arrow-circle" />
										</div>
									</td>

									<td>
										<div>
											<h5 class="font-size-14 mb-1">Sell ETH</h5>
											<p class="text-muted mb-0">15 Mar, 2020</p>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 mb-0">0.56 ETH</h5>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 text-muted mb-0">$112.34</h5>
										</div>
									</td>
								</tr>

								<tr>
									<td>
										<div class="font-size-22 text-primary">
											<i class="bx bx-down-arrow-circle" />
										</div>
									</td>

									<td>
										<div>
											<h5 class="font-size-14 mb-1">Buy BTC</h5>
											<p class="text-muted mb-0">14 Mar, 2020</p>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 mb-0">0.016 BTC</h5>
										</div>
									</td>

									<td>
										<div class="text-end">
											<h5 class="font-size-14 text-muted mb-0">$125.20</h5>
										</div>
									</td>
								</tr>
							</tbody>
						</Table>
					</div>
				</TabPane>
			</TabContent>
		</CardBody>
	</Card>
</Col>
