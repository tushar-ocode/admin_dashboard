<script>
	import { Col, Container, Row } from "sveltestrap";

</script>


<footer class="footer">
    <Container fluid>
        <Row>
            <Col sm={6}>
                {new Date().getFullYear()} © Forever Artsians.
            </Col>
            <Col sm={6}>
                <div class="text-sm-end d-none d-sm-block">
                    Designed & Developed with <i class="mdi mdi-heart text-danger" /> by Ocode Technologies
                </div>
            </Col>
        </Row>
    </Container>
</footer>