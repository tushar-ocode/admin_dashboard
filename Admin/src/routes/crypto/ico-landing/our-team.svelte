<script>
	import { browser } from '$app/environment';
  import Link from "svelte-link";
  import Carousel from "svelte-carousel";
  import { Container, Row, Col, Card, CardBody } from "sveltestrap";
  import avatar1 from "../../../assets/images/users/avatar-1.jpg"
  import avatar2 from "../../../assets/images/users/avatar-2.jpg"
  import avatar3 from "../../../assets/images/users/avatar-3.jpg"
  import avatar5 from "../../../assets/images/users/avatar-5.jpg"
  import avatar8 from "../../../assets/images/users/avatar-8.jpg"
  const candidates = [
    {
      imgUrl: avatar2,
      name: "Mark Hurley",
      designation: "CEO & Lead",
      socials: [
        { id: 1, icon: "mdi mdi-facebook", title: "Facebook", url: "#" },
        { id: 2, icon: "mdi mdi-linkedin", title: "Linkedin", url: "#" },
        { id: 3, icon: "mdi mdi-google", title: "Google", url: "#" },
      ],
    },
    {
      imgUrl: avatar3,
      name: "Calvin Smith",
      designation: "Blockchain developer",
      socials: [
        { id: 4, icon: "mdi mdi-facebook", title: "Facebook", url: "#" },
        { id: 5, icon: "mdi mdi-linkedin", title: "Linkedin", url: "#" },
        { id: 6, icon: "mdi mdi-google", title: "Google", url: "#" },
      ],
    },
    {
      imgUrl: avatar8,
      name: "Vickie Sample",
      designation: "Designer",
      socials: [
        { id: 7, icon: "mdi mdi-facebook", title: "Facebook", url: "#" },
        { id: 8, icon: "mdi mdi-linkedin", title: "Linkedin", url: "#" },
        { id: 9, icon: "mdi mdi-google", title: "Google", url: "#" },
      ],
    },
    {
      imgUrl: avatar5,
      name: "Vickie Sample",
      designation: "Designer",
      socials: [
        { id: 10, icon: "mdi mdi-facebook", title: "Facebook", url: "#" },
        { id: 11, icon: "mdi mdi-linkedin", title: "Linkedin", url: "#" },
        { id: 12, icon: "mdi mdi-google", title: "Google", url: "#" },
      ],
    },
    {
      imgUrl: avatar1,
      name: "Alma Farley",
      designation: "App developer",
      socials: [
        { id: 13, icon: "mdi mdi-facebook", title: "Facebook", url: "#" },
        { id: 14, icon: "mdi mdi-linkedin", title: "Linkedin", url: "#" },
        { id: 15, icon: "mdi mdi-google", title: "Google", url: "#" },
      ],
    },
  ];
</script>

<section class="section" id="team">
  <Container>
    <Row>
      <Col lg="12">
        <div class="text-center mb-5">
          <div class="small-title">Team</div>
          <h4>Meet our team</h4>
        </div>
      </Col>
    </Row>

    <Col lg="12">
      <div dir="ltr">
        {#if browser}
        <Carousel
          particlesToShow={4}
          dots={false}
          autoplay={false}
          arrows={false}
        >
          {#each candidates as candidate}
            <div class="item">
              <Card class="text-center team-box">
                <CardBody>
                  <div>
                    <img src={candidate.imgUrl} alt="" class="rounded" />
                  </div>

                  <div class="mt-3">
                    <h5>{candidate.name}</h5>
                    <p class="text-muted mb-0">{candidate.designation}</p>
                  </div>
                </CardBody>
                <div class="card-footer bg-transparent border-top">
                  <div
                    class="d-flex mb-0 team-social-links"
                    id="tooltip-container"
                  >
                    <div class="flex-fill">
                      <Link href="#" data-toggle="tooltip" title="Facebook">
                        <i class="mdi mdi-facebook" />
                      </Link>
                    </div>
                    <div class="flex-fill">
                      <Link href="#" data-toggle="tooltip" title="Linkedin">
                        <i class="mdi mdi-linkedin" />
                      </Link>
                    </div>
                    <div class="flex-fill">
                      <Link href="#" data-toggle="tooltip" title="Google">
                        <i class="mdi mdi-google" />
                      </Link>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          {/each}
        </Carousel>
        {/if}
      </div>
    </Col>
  </Container>
</section>
