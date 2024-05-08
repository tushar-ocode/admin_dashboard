<script>
	import HeadTitle from '../../common/HeadTitle.svelte';
	import Breadcrumb from '../../common/Breadcrumb.svelte';
	import {
		Card,
		CardBody,
		CardFooter,
		Col,
		Dropdown,
		DropdownItem,
		DropdownMenu,
		DropdownToggle,
		Row,
		Image
	} from 'sveltestrap';
	import Link from 'svelte-link';
	import img1 from '../../assets/images/crypto/features-img/img-1.png';
	import AreSparkLineChart from './AreSparkLineChart.svelte';
	import WalletBalance from './WalletBalance.svelte';
	import Overview from './Overview.svelte';
	import Transaction from './Transaction.svelte';
	import Notifications from './Notifications.svelte';
	import BuySell from './Buy-Sell.svelte';
</script>

<HeadTitle title="Crypto Dashboard" />

<Breadcrumb title="Dashboards" pagetitle="Crypto" />

<Row>
	<Col xl={4}>
		<Card>
			<CardBody>
				<Dropdown class="float-end ms-2">
					<DropdownToggle tag="div">
						<i class="mdi mdi-dots-horizontal font-size-18" />
					</DropdownToggle>
					<DropdownMenu end>
						<DropdownItem>Action</DropdownItem>
						<DropdownItem>Another action</DropdownItem>
						<DropdownItem>Something else here</DropdownItem>
					</DropdownMenu>
				</Dropdown>
				<div>
					<div class="mb-4 me-3">
						<i class="mdi mdi-account-circle text-primary h1" />
					</div>

					<div>
						<h5>Henry Wells</h5>
						<p class="text-muted mb-1">henrywells@abc.com</p>
						<p class="text-muted mb-0">Id no: #SK0234</p>
					</div>
				</div>
			</CardBody>
			<CardBody class="border-top">
				<Row>
					<Col sm="6">
						<div>
							<p class="fw-medium mb-2">Balance :</p>
							<h4>$ 6134.39</h4>
						</div>
					</Col>
					<Col sm="6">
						<div class="mt-4 mt-sm-0">
							<p class="fw-medium mb-2">Coin :</p>
							<div class="d-inline-flex align-items-center mt-1">
								<Link href="#" class="m-1">
									<div class="avatar-xs">
										<span
											class="avatar-title rounded-circle bg-warning-subtle text-warning font-size-18"
										>
											<i class="mdi mdi-bitcoin" />
										</span>
									</div>
								</Link>
								<Link href="#" class="m-1">
									<div class="avatar-xs">
										<span
											class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-18"
										>
											<i class="mdi mdi-ethereum" />
										</span>
									</div>
								</Link>
								<Link href="#" class="m-1">
									<div class="avatar-xs">
										<span class="avatar-title rounded-circle bg-info-subtle text-info font-size-18">
											<i class="mdi mdi-litecoin" />
										</span>
									</div>
								</Link>
							</div>
						</div>
					</Col>
				</Row>
			</CardBody>
			<CardFooter class="bg-transparent border-top">
				<div class="text-center">
					<Link href="#" class="btn btn-light me-2 w-md">Deposit</Link>
					<Link href="#" class="btn btn-primary me-2 w-md">Buy / Sell</Link>
				</div>
			</CardFooter>
		</Card>
	</Col>
	<Col xl={8}>
		<Card>
			<Row>
				<Col lg="9" sm="8">
					<div class="p-4">
						<h5 class="text-primary">Welcome Back !</h5>
						<p>Skote Crypto Dashboard</p>
						<div class="text-muted">
							<p class="mb-1">
								<i class="mdi mdi-circle-medium align-middle text-primary me-1" /> If several languages
								coalesce
							</p>
							<p class="mb-1">
								<i class="mdi mdi-circle-medium align-middle text-primary me-1" /> Sed ut perspiciatis
								unde
							</p>
							<p class="mb-0">
								<i class="mdi mdi-circle-medium align-middle text-primary me-1" /> It would be necessary
							</p>
						</div>
					</div>
				</Col>
				<Col lg="3" sm="4" class="align-self-center">
					<div>
						<Image src={img1} alt="" class="img-fluid d-block" />
					</div>
				</Col>
			</Row>
		</Card>
		<Row>
			<Col sm="4">
				<Card>
					<CardBody>
						<p class="text-muted mb-4">
							<i class="mdi mdi-bitcoin h2 text-warning align-middle mb-0 me-3" /> Bitcoin
						</p>
						<Row>
							<Col xs="6">
								<div>
									<h5>$ 9134.39</h5>
									<p class="text-muted text-truncate mb-0">
										+ 0.0012 ( 0.2 % ) <i class="mdi mdi-arrow-up ms-1 text-success" />
									</p>
								</div>
							</Col>
							<Col xs="6">
								<AreSparkLineChart
									chartColor={['--bs-warning']}
									id="area-sparkline-chart-1"
									series={[
										{
											name: 'BTC',
											data: [12, 14, 2, 47, 42, 15, 47, 75, 65, 19, 14]
										}
									]}
								/>
							</Col>
						</Row>
					</CardBody>
				</Card>
			</Col>
			<Col sm="4">
				<Card>
					<CardBody>
						<p class="text-muted mb-4">
							<i class="mdi mdi-ethereum h2 text-primary align-middle mb-0 me-3" /> Ethereum
						</p>
						<Row>
							<Col xs="6">
								<div>
									<h5>$ 245.44</h5>
									<p class="text-muted text-truncate mb-0">
										- 4.102 ( 0.1 % ) <i class="mdi mdi-arrow-down ms-1 text-danger" />
									</p>
								</div>
							</Col>
							<Col xs="6">
								<AreSparkLineChart
									chartColor={['--bs-primary']}
									id="area-sparkline-chart-2"
									series={[
										{
											name: 'ETH',
											data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54]
										}
									]}
								/>
							</Col>
						</Row>
					</CardBody>
				</Card>
			</Col>
			<Col sm="4">
				<Card>
					<CardBody>
						<p class="text-muted mb-4">
							<i class="mdi mdi-litecoin h2 text-info align-middle mb-0 me-3" /> litecoin
						</p>
						<Row>
							<Col xs="6">
								<div>
									<h5>$ 63.61</h5>
									<p class="text-muted text-truncate mb-0">
										+ 1.792 ( 0.1 % ) <i class="mdi mdi-arrow-up ms-1 text-success" />
									</p>
								</div>
							</Col>
							<Col xs="6">
								<AreSparkLineChart
									chartColor={['--bs-info']}
									id="area-sparkline-chart-3"
									series={[
										{
											name: 'LTC',
											data: [35, 53, 93, 47, 54, 24, 47, 75, 65, 19, 14]
										}
									]}
								/>
							</Col>
						</Row>
					</CardBody>
				</Card>
			</Col>
		</Row>
	</Col>
</Row>
<Row>
	<Col xl="8">
		<WalletBalance />
	</Col>
	<Col xl="4">
		<Overview />
	</Col>
</Row>
<Row>
	<Transaction />
	<Notifications />
	<BuySell />
</Row>
