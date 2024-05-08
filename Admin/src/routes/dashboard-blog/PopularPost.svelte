<script>
	import Link from 'svelte-link';
	import {
		Card,
		CardBody,
		Col,
		DropdownMenu,
		DropdownToggle,
		Dropdown,
		DropdownItem
	} from 'sveltestrap';

	import img1 from '../../assets/images/small/img-1.jpg';
	import img2 from '../../assets/images/small/img-2.jpg';
	import img6 from '../../assets/images/small/img-6.jpg';

	const popularpost = [
		{
			id: 1,
			img: img2,
			title: 'Beautiful Day with Friends',
			date: '10 Nov, 2020',
			like: '125',
			comment: '68'
		},
		{
			id: 2,
			img: img6,
			title: 'Drawing a sketch',
			date: '02 Nov, 2020',
			like: '102',
			comment: '48'
		},
		{
			id: 3,
			img: img1,
			title: 'Riding bike on road',
			date: '24 Oct, 2020',
			like: '98',
			comment: '35'
		},
		{
			id: 4,
			img: img2,
			title: 'Project discussion with team',
			date: '15 Oct, 2020',
			like: '92',
			comment: '22'
		}
	];
</script>

<Col xl={8}>
	<Card>
		<CardBody>
			<div class="d-flex">
				<div class="me-2">
					<h5 class="card-title mb-4">Popular post</h5>
				</div>
				<Dropdown class="ms-auto">
					<DropdownToggle class="text-muted font-size-16 dropdown-toggle" color="" tag="div">
						<i class="mdi mdi-dots-horizontal" />
					</DropdownToggle>
					<DropdownMenu class="dropdown-menu-end">
						<DropdownItem>Action</DropdownItem>
						<DropdownItem>Another action</DropdownItem>
						<DropdownItem>Something else here</DropdownItem>
						<DropdownItem divider />
						<DropdownItem>Separated link</DropdownItem>
					</DropdownMenu>
				</Dropdown>
			</div>

			<div class="table-responsive">
				<table class="table align-middle table-nowrap mb-0">
					<thead>
						<tr>
							<th scope="col" colSpan="2"> Post </th>
							<th scope="col">Likes</th>
							<th scope="col">Comments</th>
							<th scope="col">Action</th>
						</tr>
					</thead>
					<tbody>
						{#each popularpost as popularpost}
							<tr>
								<td style="width: 100px;">
									<img src={popularpost.img} alt="" class="avatar-md h-auto d-block rounded" />
								</td>
								<td>
									<h5 class="font-size-13 text-truncate mb-1">
										<Link to="#" class="text-dark">
											{popularpost.title}
										</Link>
									</h5>
									<p class="text-muted mb-0">{popularpost.date}</p>
								</td>
								<td>
									<i class="bx bx-like align-middle me-1" />{' '}
									{popularpost.like}
								</td>
								<td>
									<i class="bx bx-comment-dots align-middle me-1" />{' '}
									{popularpost.comment}
								</td>
								<td>
									<Dropdown class="dropdown">
										<DropdownToggle class="text-muted font-size-16" color="" tag="div">
											<i class="mdi mdi-dots-horizontal" />
										</DropdownToggle>
										<DropdownMenu class="dropdown-menu-end" direction="right">
											<DropdownItem>Action</DropdownItem>
											<DropdownItem>Another action</DropdownItem>
											<DropdownItem>Something else here</DropdownItem>
											<DropdownItem divider />
											<DropdownItem>Separated link</DropdownItem>
										</DropdownMenu>
									</Dropdown>
								</td>
							</tr>
						{/each}
					</tbody>
				</table>
			</div>
		</CardBody>
	</Card>
</Col>
