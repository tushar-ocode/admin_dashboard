<script>
  import {
    Card,
    CardBody,
    CardHeader,
    Col,
    NavItem,
    NavLink,
    TabContent,
    TabPane,
    DropdownMenu,
    DropdownToggle,
    Dropdown,
    Image
  } from "sveltestrap";
  import Link from "svelte-link";
  import { OverlayScrollbars } from 'overlayscrollbars';
	import { onMount } from 'svelte';
  
  import img1 from "../../assets/images/small/img-1.jpg";
  import img2 from "../../assets/images/small/img-2.jpg";
  import img6 from "../../assets/images/small/img-6.jpg";

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
		const menuElement = document.querySelectorAll('.scrollbar');
		menuElement.forEach((item) => {
			let scrollbar = OverlayScrollbars(item, options);
		});
	});


  let activeTab = "1";
</script>

<Col xl={4} lg={6}>
  <Card>
    <CardHeader class="bg-transparent border-bottom">
      <div class="d-flex flex-wrap">
        <div class="me-2">
          <h5 class="card-title mt-1 mb-0">Posts</h5>
        </div>
        <ul
          class="nav nav-tabs nav-tabs-custom card-header-tabs ms-auto"
          role="tablist"
        >
          <NavItem>
            <NavLink
              on:click={() => (activeTab = "1")}
              active={activeTab == "1"}
            >
              Recent
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              on:click={() => (activeTab = "2")}
              active={activeTab == "2"}
            >
              Popular
            </NavLink>
          </NavItem>
        </ul>
      </div>
    </CardHeader>

    <CardBody>
      <div class="scrollbar" style="max-height: 295px;">
        <div>
          <TabContent {activeTab}>
            <TabPane tabId="1" class="{activeTab == "1" ? 'active': ''}">
              <ul class="list-group list-group-flush">
                <li class="list-group-item py-3">
                  <div class="d-flex">
                    <div class="me-3">
                      <Image
                        src={img2} 
                        alt=""
                        class="avatar-md h-auto d-block rounded"
                      />
                    </div>

                    <div class="align-self-center overflow-hidden me-auto">
                      <div>
                        <h5 class="font-size-14 text-truncate">
                          <Link  class="text-dark">
                            Beautiful Day with Friends
                          </Link>
                        </h5>
                        <p class="text-muted mb-0">10 Nov, 2020</p>
                      </div>
                    </div>

                    <Dropdown class="ms-2">
                      <DropdownToggle
                        class="text-muted font-size-14"
                        color=""
                        tag="div"
                      >
                        <i class="mdi mdi-dots-horizontal" />
                      </DropdownToggle>
                      <DropdownMenu class="dropdown-menu-end">
                        <Link class="dropdown-item" >Action</Link>
                        <Link class="dropdown-item" >Another action</Link>
                        <Link class="dropdown-item" >
                          Something else here
                        </Link>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </li>

                <li class="list-group-item py-3">
                  <div class="d-flex">
                    <div class="me-3">
                      <Image
                        src={img2}
                        alt=""
                        class="avatar-md h-auto d-block rounded"
                      />
                    </div>
                    <div class="align-self-center overflow-hidden me-auto">
                      <div>
                        <h5 class="font-size-14 text-truncate">
                          <Link  class="text-dark">Drawing a sketch</Link>
                        </h5>
                        <p class="text-muted mb-0">02 Nov, 2020</p>
                      </div>
                    </div>

                    <Dropdown class="ms-2">
                      <DropdownToggle
                        class="text-muted font-size-14"
                        color=""
                        tag="div"
                      >
                        <i class="mdi mdi-dots-horizontal" />
                      </DropdownToggle>
                      <DropdownMenu class="dropdown-menu-end">
                        <Link class="dropdown-item" >Action</Link>
                        <Link class="dropdown-item" >Another action</Link>
                        <Link class="dropdown-item" >
                          Something else here
                        </Link>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </li>

                <li class="list-group-item py-3">
                  <div class="d-flex">
                    <div class="me-3">
                      <Image
                        src={img1}
                        alt=""
                        class="avatar-md h-auto d-block rounded"
                      />
                    </div>

                    <div class="align-self-center overflow-hidden me-auto">
                      <div>
                        <h5 class="font-size-14 text-truncate">
                          <Link  class="text-dark">
                            Project discussion with team
                          </Link>
                        </h5>
                        <p class="text-muted mb-0">24 Oct, 2020</p>
                      </div>
                    </div>

                    <Dropdown class="ms-2">
                      <DropdownToggle
                        class="text-muted font-size-14"
                        color=""
                        tag="div"
                      >
                        <i class="mdi mdi-dots-horizontal" />
                      </DropdownToggle>
                      <DropdownMenu class="dropdown-menu-end">
                        <Link class="dropdown-item" >Action</Link>
                        <Link class="dropdown-item" >Another action</Link>
                        <Link class="dropdown-item" >
                          Something else here
                        </Link>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </li>

                <li class="list-group-item py-3">
                  <div class="d-flex">
                    <div class="me-3">
                      <Image
                        src={img2}
                        alt=""
                        class="avatar-md h-auto d-block rounded"
                      />
                    </div>

                    <div class="align-self-center overflow-hidden me-auto">
                      <div>
                        <h5 class="font-size-14 text-truncate">
                          <Link  class="text-dark">
                            Riding bike on road
                          </Link>
                        </h5>
                        <p class="text-muted mb-0">20 Oct, 2020</p>
                      </div>
                    </div>

                    <Dropdown class="ms-2">
                      <DropdownToggle
                        class="text-muted font-size-14"
                        color=""
                        tag="div"
                      >
                        <i class="mdi mdi-dots-horizontal" />
                      </DropdownToggle>
                      <DropdownMenu class="dropdown-menu-end">
                        <Link class="dropdown-item" >Action</Link>
                        <Link class="dropdown-item" >Another action</Link>
                        <Link class="dropdown-item" >
                          Something else here
                        </Link>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </li>
              </ul>
            </TabPane>

            <TabPane tabId="2" class="{activeTab == "2" ? 'active': ''}">
              <ul class="list-group list-group-flush">
                <li class="list-group-item py-3">
                  <div class="d-flex">
                    <div class="me-3">
                      <Image
                        src={img6}
                        alt=""
                        class="avatar-md h-auto d-block rounded"
                      />
                    </div>

                    <div class="align-self-center overflow-hidden me-auto">
                      <div>
                        <h5 class="font-size-14 text-truncate">
                          <Link  class="text-dark">Drawing a sketch</Link>
                        </h5>
                        <p class="text-muted mb-0">02 Nov, 2020</p>
                      </div>
                    </div>

                    <Dropdown class="ms-2">
                      <DropdownToggle
                        class="text-muted font-size-14"
                        color=""
                        tag="div"
                      >
                        <i class="mdi mdi-dots-horizontal" />
                      </DropdownToggle>
                      <DropdownMenu class="dropdown-menu-end">
                        <Link class="dropdown-item" >Action</Link>
                        <Link class="dropdown-item" >Another action</Link>
                        <Link class="dropdown-item" >
                          Something else here
                        </Link>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </li>

                <li class="list-group-item py-3">
                  <div class="d-flex">
                    <div class="me-3">
                      <Image
                        src={img2}
                        alt=""
                        class="avatar-md h-auto d-block rounded"
                      />
                    </div>

                    <div class="align-self-center overflow-hidden me-auto">
                      <div>
                        <h5 class="font-size-14 text-truncate">
                          <Link  class="text-dark">
                            Beautiful Day with Friends
                          </Link>
                        </h5>
                        <p class="text-muted mb-0">10 Nov, 2020</p>
                      </div>
                    </div>

                    <Dropdown class="ms-2">
                      <DropdownToggle
                        class="text-muted font-size-14"
                        color=""
                        tag="div"
                      >
                        <i class="mdi mdi-dots-horizontal" />
                      </DropdownToggle>
                      <DropdownMenu class="dropdown-menu-end">
                        <Link class="dropdown-item" >Action</Link>
                        <Link class="dropdown-item" >Another action</Link>
                        <Link class="dropdown-item" >
                          Something else here
                        </Link>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </li>

                <li class="list-group-item py-3">
                  <div class="d-flex">
                    <div class="me-3">
                      <Image
                        src={img1}
                        alt=""
                        class="avatar-md h-auto d-block rounded"
                      />
                    </div>

                    <div class="align-self-center overflow-hidden me-auto">
                      <div>
                        <h5 class="font-size-14 text-truncate">
                          <Link  class="text-dark">
                            Riding bike on road
                          </Link>
                        </h5>
                        <p class="text-muted mb-0">20 Oct, 2020</p>
                      </div>
                    </div>

                    <Dropdown class="ms-2">
                      <DropdownToggle
                        class="text-muted font-size-14"
                        color=""
                        tag="div"
                      >
                        <i class="mdi mdi-dots-horizontal" />
                      </DropdownToggle>
                      <DropdownMenu class="dropdown-menu-end">
                        <Link class="dropdown-item" >Action</Link>
                        <Link class="dropdown-item" >Another action</Link>
                        <Link class="dropdown-item" >
                          Something else here
                        </Link>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </li>

                <li class="list-group-item py-3">
                  <div class="d-flex">
                    <div class="me-3">
                      <Image
                        src={img2}
                        alt=""
                        class="avatar-md h-auto d-block rounded"
                      />
                    </div>

                    <div class="align-self-center overflow-hidden me-auto">
                      <div>
                        <h5 class="font-size-14 text-truncate">
                          <Link  class="text-dark">
                            Project discussion with team
                          </Link>
                        </h5>
                        <p class="text-muted mb-0">24 Oct, 2020</p>
                      </div>
                    </div>

                    <Dropdown class="ms-2">
                      <DropdownToggle
                        class="text-muted font-size-14"
                        color=""
                        tag="div"
                      >
                        <i class="mdi mdi-dots-horizontal" />
                      </DropdownToggle>
                      <DropdownMenu class="dropdown-menu-end">
                        <Link class="dropdown-item" >Action</Link>
                        <Link class="dropdown-item" >Another action</Link>
                        <Link class="dropdown-item" >
                          Something else here
                        </Link>
                      </DropdownMenu>
                    </Dropdown>
                  </div>
                </li>
              </ul>
            </TabPane>
          </TabContent>
        </div>
      </div>
    </CardBody>
  </Card>
</Col>
