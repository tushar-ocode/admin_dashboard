<script>
	import { browser } from '$app/environment';

	import logo from '../assets/images/logo.svg';
	import logodark from '../assets/images/logo-dark.png';
	import logolightsvg from '../assets/images/logo-light.svg';
	import logolightpng from '../assets/images/logo-light.png';

	import FullScreenDropdown from '../common/FullScreenDropdown.svelte';

	import ProfileDropdown from '../common/ProfileDropdown.svelte';
	import { OverlayScrollbars } from 'overlayscrollbars';

	// export let toggleRightBar;
	const toggleSideBar = () => {
		if (browser) {
			document.body.classList.toggle('sidebar-enable');
			document.body.classList.toggle('vertical-collpsed');

			if (document.body.classList.contains('vertical-collpsed')) {
				const Instance = OverlayScrollbars(document.querySelector('#vertical-menu'));
				if (Instance) {
					Instance.destroy();
				}
			} else {
				const options = {
					scrollbars: {
						visibility: 'auto', // You can adjust the visibility ('auto', 'hidden', 'visible')
						autoHide: 'move', // You can adjust the auto-hide behavior ('move', 'scroll', false)
						autoHideDelay: 100,
						dragScroll: true,
						clickScroll: false,
						theme: 'os-theme-light',
						pointers: ['mouse', 'touch', 'pen']
					}
				};
				const menuElement = document.querySelector('#vertical-menu');
				OverlayScrollbars(menuElement, options);
			}
		}
	};
</script>

<header id="page-topbar">
	<div class="navbar-header">
		<div class="d-flex">
			<!-- LOGO -->
			<div class="navbar-brand-box">
				<a href="/dashboard" class="logo logo-dark">
					<span class="logo-sm">
						<img src={logo} alt="" height="40" />
					</span>
					<span class="logo-lg">
						<img src={logodark} alt="" height="40" />
					</span>
				</a>

				<a href="/dashboard" class="logo logo-light">
					<span class="logo-sm">
						<img src={logolightsvg} alt="" height="40" />
					</span>
					<span class="logo-lg">
						<img src={logolightpng} alt="" height="40" />
					</span>
				</a>
			</div>

			<button
				type="button"
				class="btn btn-sm px-3 font-size-16 header-item waves-effect"
				id="vertical-menu-btn"
				on:click={toggleSideBar}
			>
				<i class="fa fa-fw fa-bars" />
			</button>

		</div>
		<div class="d-flex">

			<FullScreenDropdown />
	
			<ProfileDropdown />

		</div>
	</div>
</header>
