<script>
	import Link from 'svelte-link';

	import { Card, CardBody, Col, Container, Row } from 'sveltestrap';
    import logodark from '../../../assets/images/logo-dark.png';
	import logolight from '../../../assets/images/logo-light.png';
	import HeadTitle from '../../../common/HeadTitle.svelte';
</script>

<HeadTitle title="Confirm Mail" />
<div class="account-pages my-5 pt-sm-5">
	<Container>
		<Row>
			<Col lg={12}>
				<div class="text-center mb-5 text-muted">
					<Link to="dashboard" class="d-block auth-logo">
						<img
							src={logodark}
							alt=""
							height="20"
							class="auth-logo-dark mx-auto"
						/>
						<img
							src={logolight}
							alt=""
							height="20"
							class="auth-logo-light mx-auto"
						/>
					</Link>
					<p class="mt-3">Responsive Bootstrap 5 Admin Dashboard</p>
				</div>
			</Col>
		</Row>
		<Row class="justify-content-center">
			<Col md={8} lg={6} xl={5}>
				<Card>
					<CardBody>
						<div class="p-2">
							<div class="text-center">
								<div class="avatar-md mx-auto">
									<div class="avatar-title rounded-circle bg-light">
										<i class="bx bx-mail-send h1 mb-0 text-primary" />
									</div>
								</div>
								<div class="p-2 mt-4">
									<h4>Success !</h4>
									<p class="text-muted">
										At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
										praesentium voluptatum deleniti atque corrupti quos dolores et
									</p>
									<div class="mt-4">
										<Link href="/dashboard" class="btn btn-success">Back to Home</Link>
									</div>
								</div>
							</div>
						</div>
					</CardBody>
				</Card>
				<div class="mt-5 text-center">
					<p>
						© {new Date().getFullYear()} Skote. Crafted with
						<i class="mdi mdi-heart text-danger" /> by Themesbrand
					</p>
				</div>
			</Col>
		</Row>
	</Container>
</div>
