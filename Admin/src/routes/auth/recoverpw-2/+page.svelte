<script>
	import { browser } from '$app/environment';
	import Link from 'svelte-link';
	import { Row, Col, Container, Form, Label, Input, Button, Alert } from 'sveltestrap';
	import Headtitle from '../../../common/HeadTitle.svelte';
	import logodark from '../../../assets/images/logo-dark.png';
	import logolight from '../../../assets/images/logo-light.png';
	import { onMount } from 'svelte';
	import CarouselPage from '../CarouselPage.svelte';

	onMount(() => {
		if (browser) {
			document.body.classList.add('auth-body-bg');
		}
	});
</script>

<Headtitle title="Recover Password 2" />

<Container fluid class="p-0">
	<Row class="g-0">
		<CarouselPage />

		<Col xl={3}>
			<div class="auth-full-page-content p-md-5 p-4">
				<div class="w-100">
					<div class="d-flex flex-column h-100">
						<div class="mb-4 mb-md-5">
							<Link href={'/'} class="d-block auth-logo">
								<img src={logodark} alt="" height="18" class="auth-logo-dark" />
								<img src={logolight} alt="" height="18" class="auth-logo-light" />
							</Link>
						</div>
						<div class="my-auto">
							<div>
								<h5 class="text-primary">Reset Password</h5>
								<p class="text-muted">Reset Password with Skote.</p>
							</div>

							<div class="mt-4">
								<Alert color="success" class="text-center mb-4" role="alert">
									Enter your Email and instructions will be sent to you!
								</Alert>
								<Form action="#">
									<div class="mb-3">
										<Label for="useremail" class="form-label">Email</Label>
										<Input
											type="email"
											class="form-control"
											id="useremail"
											placeholder="Enter email"
										/>
									</div>

									<div class="text-end">
										<Button color="primary" class="w-md waves-effect waves-light" type="submit"
											>Reset</Button
										>
									</div>
								</Form>
								<div class="mt-5 text-center">
									<p>
										Remember It ?
										<Link href="/auth/login-2" class="fw-medium text-primary">Sign In here</Link>
									</p>
								</div>
							</div>
						</div>

						<div class="mt-4 mt-md-5 text-center">
							<p class="mb-0">
								© {new Date().getFullYear()} Skote. Crafted with
								<i class="mdi mdi-heart text-danger" /> by Themesbrand
							</p>
						</div>
					</div>
				</div>
			</div>
		</Col>
	</Row>
</Container>
