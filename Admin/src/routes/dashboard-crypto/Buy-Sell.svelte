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
		Table,
		Label,
        Input,

		Button

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

	let currTab = 'Buy';

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
			<CardTitle class="mb-4">Buy / Sell</CardTitle>
			<Nav class="bg-light rounded" pills>
				<NavItem>
					<NavLink active={currTab == 'Buy'} on:click={() => (currTab = 'Buy')}>Buy</NavLink>
				</NavItem>
				<NavItem>
					<NavLink active={currTab == 'Sell'} on:click={() => (currTab = 'Sell')}>Sell</NavLink>
				</NavItem>
			</Nav>
			<TabContent class="mt-4">
				<TabPane class={currTab == 'Buy' ? 'active' : ''}>
					<div class="float-end ms-2">
						<h5 class="font-size-14">
							<i class="bx bx-wallet text-primary font-size-16 align-middle me-1" /> $4235.23
						</h5>
					</div>
					<h5 class="font-size-14 mb-4 mt-3">Buy Coin</h5>

					<div>
						<div class="form-group mb-3">
							<Label>Payment method :</Label>
							<select class="form-select">
								<option>Credit / Debit Card</option>
								<option>Paypal</option>
							</select>
						</div>

						<div>
							<Label>Add Amount :</Label>
							<div class="input-group mb-3">
								<Label class="input-group-text">Amount</Label>
								<select class="form-select" style="max-width: 90px;">
									<option value="BT" selected>BTC</option>
									<option value="ET">ETH</option>
									<option value="LT">LTC</option>
								</select>
								<Input type="text" class="form-control" />
							</div>

							<div class="input-group mb-3">
								<Label class="input-group-text">Price</Label>
								<Input type="text" class="form-control" />
								<Label class="input-group-text">$</Label>
							</div>

							<div class="input-group mb-3">
								<Label class="input-group-text">Total</Label>
								<Input type="text" class="form-control" />
							</div>
						</div>

						<div class="text-center">
							<Button type="button" color="success" class="w-md">Buy Coin</Button>
						</div>
					</div>
				</TabPane>
				<TabPane class={currTab == 'Sell' ? 'active' : ''}>
					<div class="float-end ms-2">
						<h5 class="font-size-14">
							<i class="bx bx-wallet text-primary font-size-16 align-middle me-1" /> $4235.23
						</h5>
					</div>
					<h5 class="font-size-14 mb-4 mt-3">Sell Coin</h5>

					<div>
                        <div class="form-group mb-3">
                            <Label>Email :</Label>
                            <input type="email" class="form-control">
                        </div>

						<div>
							<Label>Add Amount :</Label>
							<div class="input-group mb-3">
								<Label class="input-group-text">Amount</Label>
								<select class="form-select" style="max-width: 90px;">
									<option value="BT" selected>BTC</option>
									<option value="ET">ETH</option>
									<option value="LT">LTC</option>
								</select>
								<Input type="text" class="form-control" />
							</div>

							<div class="input-group mb-3">
								<Label class="input-group-text">Price</Label>
								<Input type="text" class="form-control" />
								<Label class="input-group-text">$</Label>
							</div>

							<div class="input-group mb-3">
								<Label class="input-group-text">Total</Label>
								<Input type="text" class="form-control" />
							</div>
						</div>

						<div class="text-center">
							<Button type="button" color="danger" class="w-md">Sell Coin</Button>
						</div>
					</div>
				</TabPane>
			</TabContent>
		</CardBody>
	</Card>
</Col>
