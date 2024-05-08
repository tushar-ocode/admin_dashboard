<script>
	import { onMount } from 'svelte';
	import { Nav, NavbarToggler, NavItem, NavLink, Container } from 'sveltestrap';
	import Link from 'svelte-link';
	import logodark from '../../../assets/images/logo-dark.png';
	import logolight from '../../../assets/images/logo-light.png';

	const navItems = [
		{ id: 1, idnm: 'home', navheading: 'Home' },
		{ id: 2, idnm: 'about', navheading: 'About' },
		{ id: 3, idnm: 'features', navheading: 'Features' },
		{ id: 3, idnm: 'roadmap', navheading: 'Roadmap' },
		{ id: 4, idnm: 'team', navheading: 'Team' },
		{ id: 5, idnm: 'news', navheading: 'News' },
		{ id: 6, idnm: 'faqs', navheading: 'FAQs' }
	];
	let isOpenMenu = false;

	onMount(() => {
		windowScroll();
		window.addEventListener('scroll', function () {
			windowScroll();
			handleScroll();
		});

		const navbar = document.getElementById('navbar');
		const sections = Array.from(document.querySelectorAll('section'));

		function handleScroll() {
			const scrollPosition = window.scrollY;

			// Find the first section that is currently in view
			const activeSection = sections.find((section) => scrollPosition <= section.offsetTop);
			// Update the active link in the navbar
			updateActiveLink(activeSection ? activeSection.id : null);
		}

		function updateActiveLink(activeSectionId) {
			const links = navbar.querySelectorAll('a');

			links.forEach((link) => {
				const sectionId = link.getAttribute('href').substring(1);
				const isActive = sectionId === activeSectionId;

				if (isActive) {
					link.classList.add('active');
				} else {
					link.classList.remove('active');
				}
			});
		}
		handleScroll();
	});

	const windowScroll = () => {
		const navbar = document.getElementById('navbar');
		if (navbar) {
			if (document.body.scrollTop >= 50 || document.documentElement.scrollTop >= 50) {
				navbar.classList.add('nav-sticky');
			} else {
				navbar.classList.remove('nav-sticky');
			}
		}
	};
</script>

<nav class="navbar navbar-expand-lg navigation fixed-top sticky" id="navbar">
	<Container>
		<a class="navbar-logo" href="/">
			<img src={logodark} alt="" height="19" class="logo logo-dark" />
			<img src={logolight} alt="" height="19" class="logo logo-light" />
		</a>

		<NavbarToggler
			class="btn btn-sm px-3 font-size-16 d-lg-none header-item waves-effect waves-light"
			on:click={() => (isOpenMenu = !isOpenMenu)}
		>
			<i class="fa fa-fw fa-bars" />
		</NavbarToggler>

		<div id="topnav-menu-content" {isOpenMenu} navbar>
			<div data-nav="list" class="navbar-collapse">
				<Nav class="ms-auto navbar-nav" id="navbar">
					{#each navItems as item}
						<NavItem class={item.navheading === 'Home' ? 'active' : ''}>
							<NavLink href={'#' + item.idnm}>
								{' '}
								{item.navheading}
							</NavLink>
						</NavItem>
					{/each}
				</Nav>
				<div class="ms-lg-2">
					<Link href="#" class="btn btn-outline-success w-xs">Sign in</Link>
				</div>
			</div>
		</div>
	</Container>
</nav>
