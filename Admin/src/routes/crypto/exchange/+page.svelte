<script>
	import Breadcrumb from '../../../common/Breadcrumb.svelte';
	import HeadTitle from '../../../common/HeadTitle.svelte';
	import { Button, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, Input, InputGroup, Label, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'sveltestrap';
  import avatar1 from "../../../assets/images/users/avatar-1.jpg"
	import PriceChart from './PriceChart.svelte';
  import 'overlayscrollbars/overlayscrollbars.css';
	import { OverlayScrollbars } from 'overlayscrollbars';
	import { onMount } from 'svelte';

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
  const notofications = [
    {
      date: "15 Mar",
      desc: "If several languages coalesce of the resulting.",
    },
    {
      date: "14 Mar",
      desc: "New common language will be more simple and regular than the existing.",
    },
    {
      date: "13 Mar",
      desc: "It will seem like simplified English as a skeptical Cambridge.",
    },
    { date: "13 Mar", desc: "To achieve this, it would be necessary." },
    { date: "12 Mar", desc: "Cum sociis natoque penatibus et magnis dis." },
    {
      date: "11 Mar",
      desc: "New common language will be more simple and regular than the existing.",
    },
    {
      date: "10 Mar",
      desc: "It will seem like simplified English as a skeptical Cambridge.",
    },
    { date: "9 Mar", desc: "To achieve this, it would be necessary." },
  ];
</script>

<HeadTitle title="Exchange" />

<Breadcrumb title="Crypto" pagetitle="Exchange" />

<Row>
  <Col lg="12">
    <Card>
      <CardBody>
        <div class="d-flex">
          <div class="me-3">
            <img
              src={avatar1}
              alt=""
              class="avatar-md rounded-circle img-thumbnail"
            />
          </div>
          <div class="flex-grow-1 align-self-center">
            <div class="text-muted">
              <h5>Henry wells</h5>
              <p class="mb-1">henrywells@abc.com</p>
              <p class="mb-0">Id no: #SK0234</p>
            </div>
          </div>
          <Dropdown>
            <DropdownToggle type="button" tag="button" color="light"
              ><i class="mdi mdi-wallet me-1" />
              <span class="d-none d-sm-inline-block">
                Wallet Balance{" "}
                <i class="mdi mdi-chevron-down" />
              </span>
            </DropdownToggle>
            <DropdownMenu class="dropdown-menu-md dropdown-menu-end">
              <div class="dropdown-item-text">
                <div>
                  <p class="text-muted mb-2">Available Balance</p>
                  <h5 class="mb-0">$ 9148.23</h5>
                </div>
              </div>

              <DropdownItem divider />

              <DropdownItem href="#">
                BTC : <span class="float-end">1.02356</span>
              </DropdownItem>
              <DropdownItem href="#">
                ETH : <span class="float-end">0.04121</span>
              </DropdownItem>
              <DropdownItem href="#">
                LTC : <span class="float-end">0.00356</span>
              </DropdownItem>

              <DropdownItem divider />

              <DropdownItem class="text-primary text-center" href="#">
                Learn more
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </div>
      </CardBody>
    </Card>
  </Col>
</Row>

<Row>
  <Col xl="8">
    <Card>
      <CardBody>
        <h4 class="card-title mb-4">Price</h4>

        <Row>
          <Col xl="3" sm="4">
            <div class="d-flex">
              <div class="avatar-sm me-3">
                <span
                  class="avatar-title rounded-circle bg-warning-subtle text-warning font-size-22"
                >
                  <i class="mdi mdi-bitcoin" />
                </span>
              </div>

              <div class="flex-1">
                <p class="text-muted mb-2">Bitcoin</p>
                <h5>1.02356 BTC</h5>
              </div>
            </div>
          </Col>

          <Col xl="3" sm="4">
            <div class="mt-4 mt-sm-0">
              <p class="text-muted mb-2">In USD</p>
              <h5>6310.22 USD</h5>
            </div>
          </Col>

          <Col xl="3" sm="4">
            <div class="mt-4 mt-sm-0">
              <p class="text-muted mb-2">Last 24 hrs</p>
              <h5>
                0.24 %{" "}
                <i class="mdi mdi-arrow-up text-success" />
              </h5>
            </div>
          </Col>
        </Row>

        <div class="mt-4">
          <div id="candlestick-chart" class="apex-charts" dir="ltr">
            
            <PriceChart />
          </div>
        </div>
      </CardBody>
    </Card>
  </Col>

  <Col xl="4">
    <Card>
      <CardBody>
        <h4 class="card-title mb-4">Buy / Sell</h4>

        <div>
          <p class="text-muted mb-2">
            <i class="mdi mdi-wallet me-1" /> Wallet Balance
          </p>
          <h5>$ 9148.23</h5>
        </div>

        <div class="mt-4">
          <Nav class="nav nav-pills bg-light rounded" role="tablist">
            <NavItem>
              <NavLink
                on:click={() => (activeTab = "1")}
                active={activeTab == "1"}
              >
                Buy
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                on:click={() => (activeTab = "2")}
                active={activeTab == "2"}
              >
                Sell
              </NavLink>
            </NavItem>
          </Nav>

          <TabContent {activeTab} class="mt-4">
            <TabPane tabId="1" id="buy-tab" class="{activeTab == 1 ? 'active': ''}">
              <h5 class="font-size-14 mb-4">Buy Coin</h5>

              <div>
                <div>
                  <Label>Add Amount :</Label>
                  <InputGroup class="mb-3">
                      <Label class="input-group-text">Amount</Label>
                    <select
                      class="form-select"
                      style="max-width: 90px"
                    >
                      <option value="1"> BTC </option>
                      <option value="2">ETH</option>
                      <option value="3">LTC</option>
                    </select>
                    <Input type="text" class="form-control" />
                  </InputGroup>

                  <InputGroup class="mb-3">
                      <Label class="input-group-text">Price</Label>
                    
                    <Input type="text" class="form-control" />
                      <Label class="input-group-text">$</Label>
                  </InputGroup>

                  <InputGroup class="mb-3">
                      <Label class="input-group-text">Total</Label>
                    <Input type="text" class="form-control" />
                  </InputGroup>
                </div>

                <div class="text-center">
                  <Button type="button" color="success" class="w-md">
                    Buy Coin
                  </Button>
                </div>
              </div>
            </TabPane>
            <TabPane tabId="2" id="sell-tab" class="{activeTab == 2 ? 'active': ''}">
              <h5 class="font-size-14 mb-4">Sell Coin</h5>

              <div>
                <div>
                  <Label>Add Amount :</Label>
                  <InputGroup class="mb-3">
                      <Label class="input-group-text">Amount</Label>
                    <select
                      class="form-select"
                      style="max-width: 90px"
                    >
                      <option> BTC </option>
                      <option>ETH</option>
                      <option>LTC</option>
                    </select>
                    <Input type="text" class="form-control" />
                  </InputGroup>

                  <InputGroup class="mb-3">
                      <Label class="input-group-text">Price</Label>
                    <Input type="text" class="form-control" />
                      <Label class="input-group-text">$</Label>
                  </InputGroup>

                  <InputGroup class="mb-3">
                      <Label class="input-group-text">Total</Label>
                    <Input type="text" class="form-control" />
                  </InputGroup>
                </div>

                <div class="text-center">
                  <Button type="button" color="danger" class="w-md">
                    Sell Coin
                  </Button>
                </div>
              </div>
            </TabPane>
            <TabPane tabId="3" id="exchange-tab" role="tabpanel" class="{activeTab == 3 ? 'active': ''}">
              <div class="float-end ms-2">
                <h5 class="font-size-14">
                  <i
                    class="bx bx-wallet text-primary font-size-16 align-middle me-1"
                  />{" "}
                  $4235.23
                </h5>
              </div>
              <h5 class="font-size-14 mb-4">Exchange Coin</h5>

              <div>
                <div class="form-group mb-3">
                  <Label>Payment method :</Label>
                  <select class="form-select">
                    <option>Credit / Debit Card</option>
                    <option>Paypal</option>
                  </select>
                </div>

                <div>
                  <Label>Add Amount :</Label>
                  <InputGroup class="mb-3">
                      <Label class="input-group-text">Amount</Label>

                    <select
                      class="form-select"
                      style="max-width: 90px"
                    >
                      <option> BTC </option>
                      <option>ETH</option>
                      <option>LTC</option>
                    </select>
                    <Input type="text" class="form-control" />
                  </InputGroup>

                  <InputGroup class="mb-3">
                      <Label class="input-group-text">Price</Label>
                   
                    <Input type="text" class="form-control" />
                    
                      <Label class="input-group-text">$</Label>
                    
                  </InputGroup>

                  <InputGroup class="mb-3">
                      <Label class="input-group-text">Total</Label>
                    
                    <Input type="text" class="form-control" />
                  </InputGroup>
                </div>

                <div class="text-center">
                  <Button type="button" color="secondary" class="w-md">
                    Exchange Coin
                  </Button>
                </div>
              </div>
            </TabPane>
          </TabContent>
        </div>
      </CardBody>
    </Card>
  </Col>
</Row>

<Row>
  <Col xl="6">
    <Card>
      <CardBody>
        <h4 class="card-title mb-4">Order book</h4>

        <div class="table-responsive">
          <table class="table table-bordered mb-0">
            <thead>
              <tr class="text-center">
                <th colSpan="3">Buy</th>
                <th colSpan="3">Sell</th>
              </tr>
              <tr>
                <th scope="col">Amount</th>
                <th scope="col">Total</th>
                <th scope="col">Price</th>
                <th scope="col">Amount</th>
                <th scope="col">Total</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0.0412</td>
                <td>0.0412</td>
                <td>256.18</td>
                <td>0.0201</td>
                <td>0.0201</td>
                <td>124.98</td>
              </tr>
              <tr>
                <td>0.0301</td>
                <td>0.0301</td>
                <td>187.16</td>
                <td>0.0165</td>
                <td>0.0165</td>
                <td>102.60</td>
              </tr>
              <tr>
                <td>0.0523</td>
                <td>0.0523</td>
                <td>325.21</td>
                <td>0.0348</td>
                <td>0.0348</td>
                <td>216.39</td>
              </tr>
              <tr>
                <td>0.0432</td>
                <td>0.0432</td>
                <td>268.62</td>
                <td>0.0321</td>
                <td>0.0321</td>
                <td>199.60</td>
              </tr>
              <tr>
                <td>0.0246</td>
                <td>0.0246</td>
                <td>152.96</td>
                <td>0.0403</td>
                <td>0.0403</td>
                <td>250.59</td>
              </tr>
            </tbody>
          </table>
        </div>
      </CardBody>
    </Card>
  </Col>
  <Col xl="6">
    <Card>
      <CardBody>
        <h4 class="card-title mb-4">Notifications</h4>
        <div class="scrollbar" style="max-height: 310px;">
          <ul class="verti-timeline list-unstyled">
            {#each notofications as notification}
              <li class="event-list">
                <div class="event-timeline-dot">
                  <i class="bx bx-right-arrow-circle font-size-18" />
                </div>
                <div class="d-flex">
                  <div class="flex-shrink-0 me-3">
                    <h5 class="font-size-14">
                      {notification.date}{" "}
                      <i
                        class="bx bx-right-arrow-alt font-size-16 text-primary align-middle ms-2"
                      />
                    </h5>
                  </div>
                  <div class="flex-grow-1">
                    <div>{notification.desc}</div>
                  </div>
                </div>
              </li>
            {/each}
          </ul>
        </div>
      </CardBody>
    </Card>
  </Col>
</Row>