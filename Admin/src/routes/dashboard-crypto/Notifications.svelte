<script>

	import { Card, CardBody, CardTitle, Col, Image } from "sveltestrap";
    import 'overlayscrollbars/overlayscrollbars.css';
	import { OverlayScrollbars } from 'overlayscrollbars';
	import { onMount } from 'svelte';
    import img1 from "../../assets/images/companies/img-1.png"
    import img2 from "../../assets/images/companies/img-2.png"
    import img3 from "../../assets/images/companies/img-3.png"

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
            <CardTitle class="mb-4">Notifications</CardTitle>
            <ul class="list-group list" style="max-height: 390px;">
                <li class="list-group-item border-0">
                    <div class="d-flex">
                        <div class="flex-shrink-0 me-3">
                            <div class="avatar-xs">
                                <span class="avatar-title rounded-circle bg-light">
                                    <Image src={img1} alt="" height="18" />
                                </span>
                            </div>
                        </div>
                        <div class="flex-grow-1">
                            <h5 class="font-size-14">Donec vitae sapien ut</h5>
                            <p class="text-muted">If several languages coalesce, the grammar of the resulting language</p>

                            <div class="float-end">
                                <p class="text-muted mb-0"><i class="mdi mdi-account me-1"></i> Joseph</p>
                            </div>
                            <p class="text-muted mb-0">12 Mar, 2020</p>
                        </div>
                    </div>
                </li>
                <li class="list-group-item border-0">
                    <div class="d-flex">
                        <div class="flex-shrink-0 me-3">
                            <div class="avatar-xs">
                                <span class="avatar-title rounded-circle bg-light">
                                    <Image src={img2} alt="" height="18" />
                                </span>
                            </div>
                        </div>
                        
                        <div class="flex-grow-1">
                            <h5 class="font-size-14">Cras ultricies mi eu turpis</h5>
                            <p class="text-muted">To an English person, it will seem like simplified English, as a skeptical cambridge</p>

                            <div class="float-end">
                                <p class="text-muted mb-0"><i class="mdi mdi-account me-1"></i> Jerry</p>
                            </div>
                            <p class="text-muted mb-0">13 Mar, 2020</p>
                        </div>
                    </div>
                </li>
                <li class="list-group-item border-0">
                    <div class="d-flex">
                        <div class="flex-shrink-0 me-3">
                            <div class="avatar-xs">
                                <span class="avatar-title rounded-circle bg-light">
                                    <Image src={img3} alt="" height="18" />
                                </span>
                            </div>
                        </div>
                        
                        <div class="flex-grow-1">
                            <h5 class="font-size-14">Duis arcu tortor suscipit</h5>
                            <p class="text-muted">It va esser tam simplic quam occidental in fact, it va esser occidental.</p>

                            <div class="float-end">
                                <p class="text-muted mb-0"><i class="mdi mdi-account me-1"></i> Calvin</p>
                            </div>
                            <p class="text-muted mb-0">14 Mar, 2020</p>
                        </div>
                    </div>
                </li>
                <li class="list-group-item border-0">
                    <div class="d-flex">
                        <div class="flex-shrink-0 me-3">
                            <div class="avatar-xs">
                                <span class="avatar-title rounded-circle bg-light">
                                    <Image src={img1} alt="" height="18" />
                                </span>
                            </div>
                        </div>
                        
                        <div class="flex-grow-1">
                            <h5 class="font-size-14">Donec vitae sapien ut</h5>
                            <p class="text-muted">If several languages coalesce, the grammar of the resulting language</p>

                            <div class="float-end">
                                <p class="text-muted mb-0"><i class="mdi mdi-account me-1"></i> Joseph</p>
                            </div>
                            <p class="text-muted mb-0">12 Mar, 2020</p>
                        </div>
                    </div>
                </li>
            </ul>
        </CardBody>
    </Card>
</Col>
