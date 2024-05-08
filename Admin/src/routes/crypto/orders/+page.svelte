<script>
	import Breadcrumb from '../../../common/Breadcrumb.svelte';
	import HeadTitle from '../../../common/HeadTitle.svelte';
	import {
		Button,
		Card,
		CardBody,
		Col,
		Form,
		FormGroup,
		Label,
		Nav,
		NavItem,
		NavLink,
		Row,
		TabContent,
		TabPane,  
		Table
	} from 'sveltestrap';
	import productData from '../../../common/data/crypto-orders';

	let activeTab = 1;
</script>

<HeadTitle title="Orders" />

<Breadcrumb title="Crypto" pagetitle="Orders" />

<Row>
	<Col lg="12">
		<Card>
			<CardBody>
				<h4 class="card-title mb-3">Orders</h4>
				<Nav class="nav nav-tabs nav-tabs-custom" role="tablist">
					<NavItem>
						<NavLink on:click={() => (activeTab = 1)} active={activeTab == 1}>All Orders</NavLink>
					</NavItem>
					<NavItem>
						<NavLink on:click={() => (activeTab = 2)} active={activeTab == 2}>Processing</NavLink>
					</NavItem>
				</Nav>

				<TabContent>
					<TabPane class={activeTab == 1 ? 'active' : ''}>
						<Form>
							<Row>
								<Col sm="6" class="col-xl">
									<FormGroup class="mt-3 mb-0">
										<Label>Date :</Label>
										<input
											type="date"
											class="form-control"
											id="orderid-input"
											placeholder="Select date"
											value=""
										/>
									</FormGroup>
								</Col>

								<Col sm="6" class="col-xl">
									<FormGroup class="mt-3 mb-0">
										<Label>Coin</Label>
										<select class="form-control select2-search-disable">
											<option value="BTC"> Bitcoin </option>
											<option value="ETH">Ethereum</option>
											<option value="LTC">litecoin</option>
										</select>
									</FormGroup>
								</Col>

								<Col sm="6" class="col-xl">
									<FormGroup class="mt-3 mb-0">
										<Label>Type</Label>
										<select class="form-control select2-search-disable">
											<option value="BU"> Buy </option>
											<option value="SE">Sell</option>
										</select>
									</FormGroup>
								</Col>

								<Col sm="6" class="col-xl">
									<FormGroup class="mt-3 mb-0">
										<Label>Status</Label>
										<select class="form-control select2-search-disable">
											<option value="CO"> Completed </option>
											<option value="PE">Pending</option>
										</select>
									</FormGroup>
								</Col>

								<Col sm="6" class="col-xl align-self-end">
									<div class="mb-3">
										<Button type="button" color="primary" class="w-md">Add Order</Button>
									</div>
								</Col>
							</Row>
						</Form>

						<div class="mt-3">
							<Table>
								<thead>
									<tr>
										<th>Date</th>
										<th>Type</th>
										<th>Coin</th>
										<th>Value</th>
										<th>Value in USD</th>
										<th>Status</th>
									</tr>
								</thead>
								<tbody>
									{#if productData}
										{#each productData as row}
											<tr>
												<td>{row.pdate}</td>
												<td>{row.type}</td>
												<td>{row.coin}</td>
												<td>{row.value}</td>
												<td>{row.valueInUsd}</td>
												<td>
													<span class="badge bg-{row.badgecolor} font-size-10">{row.status}</span>
												</td>
											</tr>
										{/each}
									{/if}
								</tbody>
							</Table>
						</div>
					</TabPane>
					<TabPane class={activeTab == 2 ? 'active' : ''}>
						<div class="mt-3">
							<Table>
								<thead>
									<tr>
										<th>Date</th>
										<th>Type</th>
										<th>Coin</th>
										<th>Value</th>
										<th>Value in USD</th>
										<th>Status</th>
									</tr>
								</thead>
								<tbody>
									{#if productData}
										{#each productData as row}
											<tr>
												<td>{row.pdate}</td>
												<td>{row.type}</td>
												<td>{row.coin}</td>
												<td>{row.value}</td>
												<td>{row.valueInUsd}</td>
												<td>
													<span class="badge bg-{row.badgecolor} font-size-10">{row.status}</span>
												</td>
											</tr>
										{/each}
									{/if}
								</tbody>
							</Table>
						</div>
					</TabPane>
				</TabContent>
			</CardBody>
		</Card>
	</Col>
</Row>
