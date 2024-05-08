<script>
  import {
    Card,
    CardBody,
    Col,
    Dropdown,
    DropdownMenu,
    DropdownToggle,
    Row,
    Progress,
	DropdownItem
  } from "sveltestrap";
</script>

<Col xl={4}>
  <Card>
    <CardBody>
      <div class="d-flex flex-wrap">
        <div class="me-2">
          <h5 class="card-title mb-3">Top Visitors</h5>
        </div>
        <Dropdown class="ms-auto">
          <DropdownToggle class="text-muted font-size-16" color="" tag="div">
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
      <Row class="text-center">
        <Col xs={6}>
          <div class="mt-3">
            <p class="text-muted mb-1">Today</p>
            <h5>1024</h5>
          </div>
        </Col>

        <Col xs={6}>
          <div class="mt-3">
            <p class="text-muted mb-1">This Month</p>
            <h5>
              12356{" "}
              <span class="text-success font-size-13">
                0.2 % <i class="mdi mdi-arrow-up ms-1" />
              </span>
            </h5>
          </div>
        </Col>
      </Row>

      <hr />

      <div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">
            <div class="py-2">
              <h5 class="font-size-14">
                California <span class="float-end">78%</span>
              </h5>
              <Progress animated color="primary" value={78} class="progress-sm" />
            </div>
          </li>
          <li class="list-group-item">
            <div class="py-2">
              <h5 class="font-size-14">
                Nevada <span class="float-end">69%</span>
              </h5>
              <Progress  animated color="warning" value={69} class="progress-sm" />
          </li>
          <li class="list-group-item">
            <div class="py-2">
              <h5 class="font-size-14">
                Texas <span class="float-end">61%</span>
              </h5>
              <Progress animated color="success" value={61} class="progress-sm" />
          </li>
        </ul>
      </div>
    </CardBody>
  </Card>
</Col>