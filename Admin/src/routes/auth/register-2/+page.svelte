<script>
	import { browser } from '$app/environment';
	import Link from 'svelte-link';
	import { Row, Col, Form, Label, Input, Button } from 'sveltestrap';
	import Headtitle from '../../../common/HeadTitle.svelte';
	import logodark from '../../../assets/images/logo-dark.png';
	import logolight from '../../../assets/images/logo-light.png';
	import { onMount } from 'svelte';
	import CarouselPage from '../CarouselPage.svelte';

	onMount(() => {
		if(browser){
			document.body.classList.add("auth-body-bg")
		}
	})
</script>

<Headtitle title="Register 2" />

<Row class="g-0">
	<CarouselPage />

	<Col xl={3}>
		<div class="auth-full-page-content p-md-5 p-4">
			<div class="w-100">
				<div class="d-flex flex-column h-100">
					<div class="mb-4 mb-md-5">
						<Link href="/dashboard" class="d-block auth-logo">
							<img src={logodark} alt="" height="18" class="auth-logo-dark" />
							<img src={logolight} alt="" height="18" class="auth-logo-light" />
						</Link>
					</div>
					<div class="my-auto">
						<div>
							<h5 class="text-primary">Register account</h5>
							<p class="text-muted">Get your free Skote account now.</p>
						</div>

						<div class="mt-4">
							<Form class="needs-validation" novalidate action="/dashboard">
								<div class="mb-3">
									<Label for="useremail" class="form-label">Email</Label>
									<Input
										type="email"
										class="form-control"
										id="useremail"
										placeholder="Enter email"
										required
									/>
									<div class="invalid-feedback">Please Enter Email</div>
								</div>

								<div class="mb-3">
									<Label for="username" class="form-label">Username</Label>
									<Input
										type="text"
										class="form-control"
										id="username"
										placeholder="Enter username"
										required
									/>
									<div class="invalid-feedback">Please Enter Username</div>
								</div>

								<div class="mb-3">
									<Label for="userpassword" class="form-label">Password</Label>
									<Input
										type="password"
										class="form-control"
										id="userpassword"
										placeholder="Enter password"
										required
									/>
									<div class="invalid-feedback">Please Enter Password</div>
								</div>

								<div>
									<p class="mb-0">
										By registering you agree to the Skote <Link href="#" class="text-primary"
											>Terms of Use</Link
										>
									</p>
								</div>

								<div class="mt-4 d-grid">
									<Button color="primary" class="waves-effect waves-light" type="submit"
										>Register</Button
									>
								</div>

								<div class="mt-4 text-center">
									<h5 class="font-size-14 mb-3">Sign up using</h5>

									<ul class="list-inline">
										<li class="list-inline-item">
											<Link href="#" class="social-list-item bg-primary text-white border-primary">
												<i class="mdi mdi-facebook" />
											</Link>
										</li>
										<li class="list-inline-item">
											<Link href="#" class="social-list-item bg-info text-white border-info">
												<i class="mdi mdi-twitter" />
											</Link>
										</li>
										<li class="list-inline-item">
											<Link href="#" class="social-list-item bg-danger text-white border-danger">
												<i class="mdi mdi-google" />
											</Link>
										</li>
									</ul>
								</div>
							</Form>

							<div class="mt-5 text-center">
								<p>
									Already have an account ?
									<Link href="auth-login-2" class="fw-medium text-primary">Login</Link>
								</p>
							</div>
						</div>
					</div>

					<div class="mt-4 mt-md-5 text-center">
						<p class="mb-0">
							©
							{new Date().getFullYear()}
							Skote. Crafted with
							<i class="mdi mdi-heart text-danger" /> by Themesbrand
						</p>
					</div>
				</div>
			</div>
		</div>
	</Col>
</Row>
