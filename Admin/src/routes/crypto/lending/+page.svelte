<script>
	import Link from 'svelte-link';
	import Breadcrumb from '../../../common/Breadcrumb.svelte';
	import HeadTitle from '../../../common/HeadTitle.svelte';
	import {
		Card,
		CardBody,
		Col,
		Dropdown,
		DropdownItem,
		DropdownMenu,
		DropdownToggle,
		Row,
		Table
	} from 'sveltestrap';

  const assets = [
    {
      icon: "mdi mdi-bitcoin",
      color: "warning",
      title: "BTC",
      investRate: "1.2601",
      investPrice: "6225.74",
      price: "7525.47",
      loansRate: "0.1512",
      loansPrice: "742.32",
      totalRate: "4.2562",
      totalPrice: "6425.42",
    },
    {
      icon: "mdi mdi-ethereum",
      color: "primary",
      title: "ETH",
      investRate: "0.0814",
      investPrice: "3256.29",
      price: "4235.78",
      loansRate: "0.0253",
      loansPrice: "675.04",
      totalRate: "0.0921",
      totalPrice: "4536.24",
    },
    {
      icon: "mdi mdi-litecoin",
      color: "info",
      title: "LTC",
      investRate: "0.0682",
      investPrice: "2936.14",
      price: "3726.06",
      loansRate: "0.0234",
      loansPrice: "523.17",
      totalRate: "0.0823",
      totalPrice: "3254.23",
    },
    {
      icon: "mdi mdi-bitcoin",
      color: "warning",
      title: "BTC",
      investRate: "1.2601",
      investPrice: "6225.74",
      price: "7525.47",
      loansRate: "0.1512",
      loansPrice: "742.32",
      totalRate: "4.2562",
      totalPrice: "6425.42",
    },
    {
      icon: "mdi mdi-ethereum",
      color: "primary",
      title: "ETH",
      investRate: "0.0814",
      investPrice: "3256.29",
      price: "4235.78",
      loansRate: "0.0253",
      loansPrice: "675.04",
      totalRate: "0.0921",
      totalPrice: "4536.24",
    },
  ];
</script>

<HeadTitle title="Lending" />

<Breadcrumb title="Crypto" pagetitle="Lending" />


<Row>
  <Col xl="4">
    <Card>
      <CardBody class="border-bottom">
        <Dropdown
          class="float-end ms-2"
        >
          <DropdownToggle tag="div" color="" class="text-muted">
            <i class="mdi mdi-dots-horizontal font-size-18" />
          </DropdownToggle>
          <DropdownMenu class="dropdown-menu-end">
            <DropdownItem href="#">Action</DropdownItem>
            <DropdownItem href="#">Another action</DropdownItem>
            <DropdownItem href="#">Something else</DropdownItem>
          </DropdownMenu>
        </Dropdown>

        <div>
          <div class="mb-4 me-3">
            <i class="mdi mdi-account-circle text-primary h1" />
          </div>

          <div>
            <h5 class="">Henry Wells</h5>
            <p class="text-muted mb-1">henrywells@abc.com</p>
            <p class="text-muted mb-0">Id no: #SK0234</p>
          </div>
        </div>
      </CardBody>
      <CardBody class="border-bottom">
        <div>
          <Row>
            <Col sm="6">
              <div>
                <p class="text-muted mb-2">Available Balance</p>
                <h5>$ 9148.00</h5>
              </div>
            </Col>
            <Col sm="6">
              <div class="text-sm-end mt-4 mt-sm-0">
                <p class="text-muted mb-2">Since last month</p>
                <h5>
                  + $ 215.53{" "}
                  <span class="badge bg-success ms-1 align-bottom">
                    + 1.3 %
                  </span>
                </h5>
              </div>
            </Col>
          </Row>
        </div>
      </CardBody>
    </Card>

    <Card>
      <CardBody>
        <h4 class="card-title mb-4">How it work</h4>

        <div>
          <ul class="verti-timeline list-unstyled">
            <li class="event-list">
              <div class="event-timeline-dot">
                <i class="bx bx-right-arrow-circle" />
              </div>
              <div class="d-flex">
                <div class="me-3">
                  <i class="bx bx-user-plus h2 text-primary" />
                </div>
                <div class="flex-grow-1">
                  <div>
                    <h5 class="font-size-14">Register account</h5>
                    <p class="text-muted">
                      New common language will be more simple and regular
                      than the existing.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li class="event-list">
              <div class="event-timeline-dot">
                <i class="bx bx-right-arrow-circle" />
              </div>
              <div class="d-flex">
                <div class="me-3">
                  <i class="bx bx-copy-alt h2 text-primary" />
                </div>
                <div class="flex-grow-1">
                  <div>
                    <h5 class="font-size-14">Select Deposit</h5>
                    <p class="text-muted">
                      To achieve this, it would be necessary to have uniform
                      grammar.
                    </p>
                  </div>
                </div>
              </div>
            </li>

            <li class="event-list">
              <div class="event-timeline-dot">
                <i class="bx bx-right-arrow-circle" />
              </div>
              <div class="d-flex">
                <div class="me-3">
                  <i class="bx bx-cloud-download h2 text-primary" />
                </div>
                <div class="flex-grow-1">
                  <div>
                    <h5 class="font-size-14">Get Earnings</h5>
                    <p class="text-muted">
                      New common language will be more simple and regular
                      than the existing.
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </CardBody>
    </Card>
  </Col>

  <Col xl="8">
    <Card>
      <CardBody>
        <h4 class="card-title">Deposits</h4>

        <Row>
          <Col lg="4">
            <div class="border p-3 rounded mt-4">
              <div class="d-flex align-items-center mb-3">
                <div class="avatar-xs me-3">
                  <span
                    class="avatar-title rounded-circle bg-warning-subtle text-warning font-size-18"
                  >
                    <i class="mdi mdi-bitcoin" />
                  </span>
                </div>
                <h5 class="font-size-14 mb-0">Bitcoin</h5>
              </div>

              <Row>
                <div class="col-lg-6">
                  <div class="text-muted mt-3">
                    <p>Annual Yield</p>
                    <h4>4.05 %</h4>
                    <p class="mb-0">0.00745 BTC</p>
                  </div>
                </div>

                <div class="col-lg-6 align-self-end">
                  <div class="float-end mt-3">
                    <Link href="#" class="btn btn-primary">Select</Link>
                  </div>
                </div>
              </Row>
            </div>
          </Col>
          <Col lg="4">
            <div class="border p-3 rounded mt-4">
              <div class="d-flex align-items-center mb-3">
                <div class="avatar-xs me-3">
                  <span
                    class="avatar-title rounded-circle bg-primary-subtle text-primary font-size-18"
                  >
                    <i class="mdi mdi-ethereum" />
                  </span>
                </div>
                <h5 class="font-size-14 mb-0">Ethereum</h5>
              </div>

              <Row>
                <Col lg="6">
                  <div class="text-muted mt-3">
                    <p>Annual Yield</p>
                    <h4>5.08 %</h4>
                    <p class="mb-0">0.0056 ETH</p>
                  </div>
                </Col>

                <Col lg="6" class="align-self-end">
                  <div class="float-end mt-3">
                    <Link href="#" class="btn btn-primary">Select</Link>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col lg="4">
            <div class="border p-3 rounded mt-4">
              <div class="d-flex align-items-center mb-3">
                <div class="avatar-xs me-3">
                  <span
                    class="avatar-title rounded-circle bg-info-subtle text-info font-size-18"
                  >
                    <i class="mdi mdi-litecoin" />
                  </span>
                </div>
                <h5 class="font-size-14 mb-0">Litecoin</h5>
              </div>

              <Row>
                <div class="col-lg-6">
                  <div class="text-muted mt-3">
                    <p>Annual Yield</p>
                    <h4>4.12 %</h4>
                    <p class="mb-0">0.00245 LTC</p>
                  </div>
                </div>

                <div class="col-lg-6 align-self-end">
                  <div class="float-end mt-3">
                    <Link href="#" class="btn btn-primary">Select</Link>
                  </div>
                </div>
              </Row>
            </div>
          </Col>
        </Row>
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <h4 class="card-title mb-4">My Assets</h4>

        <div class="table-responsive">
          <Table class="table-nowrap align-middle mb-0">
            <thead>
              <tr>
                <th scope="col">Token</th>
                <th scope="col">Price</th>
                <th scope="col">Invest</th>
                <th scope="col">Loans</th>
                <th scope="col" colSpan="2"> Total </th>
              </tr>
            </thead>
            <tbody>
              {#each assets as asset}
                <tr>
                  <th scope="row">
                    <div class="d-flex align-items-center">
                      <div class="avatar-xs me-3">
                        <span
                          class={"avatar-title rounded-circle  bg-" +
                            asset.color +
                            "-subtle text-" +
                            asset.color +
                            " font-size-18"}
                        >
                          <i class={asset.icon} />
                        </span>
                      </div>
                      <span>{asset.title}</span>
                    </div>
                  </th>
                  <td>
                    <div class="text-muted">
                      $ {asset.price}
                    </div>
                  </td>
                  <td>
                    <h5 class="font-size-14 mb-1">
                      {asset.investRate}
                    </h5>
                    <div class="text-muted">
                      ${asset.investPrice}
                    </div>
                  </td>
                  <td>
                    <h5 class="font-size-14 mb-1">
                      {asset.loansRate}
                    </h5>
                    <div class="text-muted">
                      ${asset.loansPrice}
                    </div>
                  </td>
                  <td>
                    <h5 class="font-size-14 mb-1">
                      {asset.totalRate}
                    </h5>
                    <div class="text-muted">
                      ${asset.totalPrice}
                    </div>
                  </td>
                  <td style="width:120px">
                    <Link href="#" class="btn btn-primary btn-sm w-xs">
                      View
                    </Link>
                  </td>
                </tr>
              {/each}
            </tbody>
          </Table>
        </div>
      </CardBody>
    </Card>
  </Col>
</Row>