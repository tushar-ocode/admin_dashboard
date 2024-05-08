<script>
	import Link from 'svelte-link';
	import { Card, CardBody, CardTitle, Col, Row } from 'sveltestrap';
	import WalletBalanceChart from './WalletBalanceChart.svelte';
</script>

<Card>
	<CardBody>
        <div class="float-end">
            <select class="form-select form-select-sm ms-2">
                <option value="MA" selected>March</option>
                <option value="FE">February</option>
                <option value="JA">January</option>
                <option value="DE">December</option>
            </select>
        </div>
        <CardTitle class="mb-3">
            Wallet Balance
        </CardTitle>
        <Row>
            <Col lg="4">
                <div class="mt-4">
                    <p>Available Balance</p>
                    <h4>$ 6134.39</h4>

                    <p class="text-muted mb-4"> + 0.0012.23 ( 0.2 % ) <i class="mdi mdi-arrow-up ms-1 text-success"></i></p>

                    <div class="row">
                        <div class="col-6">
                            <div>
                                <p class="mb-2">Income</p>
                                <h5>$ 2632.46</h5>
                            </div>
                        </div>
                        <div class="col-6">
                            <div>
                                <p class="mb-2">Expense</p>
                                <h5>$ 924.38</h5>
                            </div>
                        </div>
                    </div>

                    <div class="mt-4">
                        <Link href="#" class="btn btn-primary btn-sm">View more <i class="mdi mdi-arrow-right ms-1"></i></Link>
                    </div>
                </div>
            </Col>
            <Col lg="4" sm="6">
                <WalletBalanceChart chartColor={["--bs-primary", "--bs-warning", "--bs-info"]} />
            </Col>
            <Col lg="4" sm="6" class="align-self-center">
                <div>
                    <p class="mb-2"><i class="mdi mdi-circle align-middle font-size-10 me-2 text-primary"></i> Ethereum</p>
                    <h5>4.5701 ETH = <span class="text-muted font-size-14">$ 1123.64</span></h5>
                </div>
                <div class="mt-4 pt-2">
                    <p class="mb-2"><i class="mdi mdi-circle align-middle font-size-10 me-2 text-warning"></i> Bitcoin</p>
                    <h5>0.4412 BTC = <span class="text-muted font-size-14">$ 4025.32</span></h5>
                </div>
                <div class="mt-4 pt-2">
                    <p class="mb-2"><i class="mdi mdi-circle align-middle font-size-10 me-2 text-info"></i> Litecoin</p>
                    <h5>35.3811 LTC = <span class="text-muted font-size-14">$ 2263.09</span></h5>
                </div>
            </Col>
        </Row>
    </CardBody>
</Card>
