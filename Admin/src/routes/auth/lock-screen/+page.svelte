<script>
	import Link from 'svelte-link';
	import { Row, Col, CardBody, Card, Container, Form, Label, Input, Button } from 'sveltestrap';
	import Headtitle from '../../../common/HeadTitle.svelte';
	import profileImg from '../../../assets/images/profile-img.png';
	import logo from '../../../assets/images/logo.svg';
	import avatar1 from "../../../assets/images/users/avatar-1.jpg"
</script>

<Headtitle title="Lock Screen" />

<div class="account-pages my-5 pt-sm-5">
	<Container>
		<Row class="justify-content-center">
			<Col md="8" lg="6" xl="5">
				<Card class="overflow-hidden">
					<div class="bg-primary-subtle">
						<Row>
							<Col xs="7">
								<div class="text-primary p-4">
									<h5 class="text-primary">Lock screen</h5>
									<p>Enter your password to unlock the screen!</p>
								</div>
							</Col>
							<Col xs="5" class="align-self-end">
								<img src={profileImg} alt="" class="img-fluid" />
							</Col>
						</Row>
					</div>
					<CardBody class="pt-0">
						<div>
							<Link href="/">
								<div class="avatar-md profile-user-wid mb-4">
									<span class="avatar-title rounded-circle bg-light">
										<img src={logo} alt="" class="rounded-circle" height="34" />
									</span>
								</div>
							</Link>
						</div>
						<div class="p-2">
							<Form action="/">
								<div class="user-thumb text-center mb-4">
									<img
										src={avatar1}
										class="rounded-circle img-thumbnail avatar-md"
										alt="thumbnail"
									/>
									<h5 class="font-size-15 mt-3">Maria Laird</h5>
								</div>

								<div class="mb-3">
									<Label for="userpassword">Password</Label>
									<Input
										type="password"
										class="form-control"
										id="userpassword"
										placeholder="Enter password"
									/>
								</div>

								<div class="text-end">
									<Button color="primary" class="w-md waves-effect waves-light" type="submit"
										>Unlock</Button
									>
								</div>
							</Form>
						</div>
					</CardBody>
				</Card>
				<div class="mt-5 text-center">
					<p>
						Not you ? return
						<Link to="/login" class="fw-medium text-primary">Sign In</Link>
					</p>
					<p>
						© {new Date().getFullYear()} Skote. Crafted with
						<i class="mdi mdi-heart text-danger" /> by Themesbrand
					</p>
				</div>
			</Col>
		</Row>
	</Container>
</div>
