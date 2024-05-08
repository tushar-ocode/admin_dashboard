<script>
	import HeadTitle from '../../common/HeadTitle.svelte';
	import Breadcrumb from '../../common/Breadcrumb.svelte';
	import { Card, CardBody, Col, Row } from 'sveltestrap';
	import VisitorChart from './VisitorChart.svelte';
	import Settings from './Settings.svelte';
	import Posts from './Posts.svelte';
	import Comments from './Comments.svelte';
	import TopVisitors from './TopVisitors.svelte';
	import Activity from "./Activity.svelte";
  	import PopularPost from "./PopularPost.svelte";
</script>

<HeadTitle title="Blog Dashboard" />

<Breadcrumb title="Dashboards" pagetitle="Blog" />

<Row>
	<Col xl={8}>
		<Row>
			<Col lg={4}>
				<Card class="mini-stats-wid">
					<CardBody>
						<div class="d-flex flex-wrap">
							<div class="me-3">
								<p class="text-muted mb-2">Total Post</p>
								<h5 class="mb-0">120</h5>
							</div>

							<div class="avatar-sm ms-auto">
								<div class="avatar-title bg-light rounded-circle text-primary font-size-20">
									<i class="bx bxs-book-bookmark" />
								</div>
							</div>
						</div>
					</CardBody>
				</Card>
			</Col>

			<Col lg={4}>
				<Card class="blog-stats-wid">
					<CardBody>
						<div class="d-flex flex-wrap">
							<div class="me-3">
								<p class="text-muted mb-2">Pages</p>
								<h5 class="mb-0">86</h5>
							</div>

							<div class="avatar-sm ms-auto">
								<div class="avatar-title bg-light rounded-circle text-primary font-size-20">
									<i class="bx bxs-note" />
								</div>
							</div>
						</div>
					</CardBody>
				</Card>
			</Col>
			<Col lg={4}>
				<Card class="blog-stats-wid">
					<CardBody>
						<div class="d-flex flex-wrap">
							<div class="me-3">
								<p class="text-muted mb-2">Comments</p>
								<h5 class="mb-0">4,235</h5>
							</div>

							<div class="avatar-sm ms-auto">
								<div class="avatar-title bg-light rounded-circle text-primary font-size-20">
									<i class="bx bxs-message-square-dots" />
								</div>
							</div>
						</div>
					</CardBody>
				</Card>
			</Col>
		</Row>

		<Card>
			<CardBody>
				<div class="d-flex flex-wrap">
					<h5 class="card-title me-2">Visitors</h5>
					<div class="ms-auto">
						<div class="toolbar d-flex flex-wrap gap-2 text-end">
							<button type="button" class="btn btn-light btn-sm"> ALL </button>{' '}
							<button type="button" class="btn btn-light btn-sm"> 1M </button>{' '}
							<button type="button" class="btn btn-light btn-sm"> 6M </button>{' '}
							<button type="button" class="btn btn-light btn-sm active"> 1Y </button>
						</div>
					</div>
				</div>

				<Row class="text-center">
					<Col lg={4}>
						<div class="mt-4">
							<p class="text-muted mb-1">Today</p>
							<h5>1024</h5>
						</div>
					</Col>

					<Col lg={4}>
						<div class="mt-4">
							<p class="text-muted mb-1">This Month</p>
							<h5>
								12356{' '}
								<span class="text-success font-size-13">
									0.2 % <i class="mdi mdi-arrow-up ms-1" />
								</span>
							</h5>
						</div>
					</Col>

					<Col lg={4}>
						<div class="mt-4">
							<p class="text-muted mb-1">This Year</p>
							<h5>
								102354{' '}
								<span class="text-success font-size-13">
									0.1 % <i class="mdi mdi-arrow-up ms-1" />
								</span>
							</h5>
						</div>
					</Col>
				</Row>

				<hr class="mb-4" />
				<VisitorChart chartColor={['--bs-primary', '--bs-warning']} />
			</CardBody>
		</Card>
	</Col>
	<Settings />
</Row>

<Row>
	<Posts />
	<Comments />
	<TopVisitors />
</Row>
<Row>
	<Activity />
	<PopularPost />
</Row>
