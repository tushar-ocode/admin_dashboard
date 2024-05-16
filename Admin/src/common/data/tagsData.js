import img1 from "../../assets/images/product/img-1.jpg"
import img2 from "../../assets/images/product/img-2.jpg"
import img3 from "../../assets/images/product/img-3.jpg"
import img4 from "../../assets/images/product/img-4.jpg"
import img5 from "../../assets/images/product/img-5.jpg"
import img6 from "../../assets/images/product/img-6.jpg"

const productsData = [
    {
      id: 1,
      image: img1,
      name: "Diamond Cut Ring",
      link: "#",
      category: "Engagement ring",
      rating: 5.1,
      oldPrice: 500,
      newPrice: 405,
      isOffer: true,
      offer: 25,
      reviews: 0,
    //   subImage: [img1, "assets/images/product/Pro-1a.png" , "assets/images/product/Pro-1b.png" ],
      specification: [
        { type: "Category", value: "Engagement ring" },
        { type: "Brand", value: "Diamond nexus" },
        { type: "Size", value: "M" },
        { type: "Color", value: "White gold" },
      ],
  
      features: [
        { icon: "fa fa-caret-right", type: "Fit", value: "Regular fit" },
        { icon: "fa fa-caret-right", type: "", value: "Highest quality fabric" },
        {
          icon: "fa fa-caret-right",
          type: "",
          value: "Suitable for all weather condition",
        },
        {
          icon: "fa fa-caret-right",
          type: "",
          value: "Excellent Washing and Light Fastness",
        },
      ],
    //   colorOptions: [
    //     { image: "assets/images/product/Pro-1b.png", color: "Red" },
    //     { image: "product7", color: "Black" },
    //   ],
    },
    {
      id: 2,
      image: img2,
      name: "Hidden Oval Cut Engagement Ring",
      link: "#",
      category: "Engagement Ring",
      rating: 4.3,
      oldPrice: 225,
      newPrice: 175,
      isOffer: false,
      reviews: 0,
    //   subImage: ["assets/images/product/img-2.png", "assets/images/product/Pro-2a.png", "assets/images/product/Pro-2b.png"],
      specification: [
        { type: "Category", value: "Engagement ring" },
        { type: "Brand", value: "Diamond nexus" },
        { type: "Size", value: "L" },
        { type: "Color", value: "Light blue" },
      ],
      features: [
        { icon: "fa fa-caret-right", type: "Fit", value: "Regular fit" },
        { icon: "fa fa-caret-right", type: "", value: "Highest quality fabric" },
        {
          icon: "fa fa-caret-right",
          type: "",
          value: "Suitable for all weather condition",
        },
        {
          icon: "fa fa-caret-right",
          type: "",
          value: "Excellent Washing and Light Fastness",
        },
      ],
    //   colorOptions: [
    //     { image: "product2", color: "Light blue" },
    //     { image: "product9", color: "Black" },
    //   ],
    },
    {
      id: 3,
      image: img3,
      name: "Novara Oval Cut Engagement Ring",
      link: "#",
      category: "Engagement Ring",
      rating: 3.5,
      oldPrice: 177,
      newPrice: 152,
      isOffer: true,
      offer: 20,
      reviews: 0,
    //   subImage: ["assets/images/product/img-3.png", "assets/images/product/Pro-4.png", "assets/images/product/Pro-4a.png"],
      specification: [
        { type: "Category", value: "Engagement ring" },
        { type: "Brand", value: "Diamond nexus" },
        { type: "Size", value: "XL" },
        { type: "Color", value: "Black" },
      ],
      features: [
        { icon: "fa fa-caret-right", type: "Fit", value: "Regular fit" },
        { icon: "fa fa-caret-right", type: "", value: "Highest quality fabric" },
        {
          icon: "fa fa-caret-right",
          type: "",
          value: "Suitable for all weather condition",
        },
        {
          icon: "fa fa-caret-right",
          type: "",
          value: "Excellent Washing and Light Fastness",
        },
      ],
    //   colorOptions: [
    //     { image: "product3", color: "Black" },
    //     { image: "product10", color: "White" },
    //   ],
    },
    { 
      id: 4,
      image: img4,
      name: "Reign Oval Cut Engagement Ring",
      link: "#",
      category: "Engagement Ring",
      rating: 3.1,
      oldPrice: 150,
      newPrice: 145,
      isOffer: false,
      offer: 0,
      reviews: 0,
    //   subImage: ["assets/images/product/img-4.png", "assets/images/product/Pro-12a.png", "assets/images/product/Pro-12b.png"],
      specification: [
        { type: "Category", value: "Engagement ring" },
        { type: "Brand", value: "Diamond nexus" },
        { type: "Size", value: "M" },
        { type: "Color", value: "Blue" },
      ],
      features: [
        { icon: "fa fa-caret-right", type: "Fit", value: "Regular fit" },
        { icon: "fa fa-caret-right", type: "", value: "Highest quality fabric" },
        {
          icon: "fa fa-caret-right",
          type: "",
          value: "Suitable for all weather condition",
        },
        {
          icon: "fa fa-caret-right",
          type: "",
          value: "Excellent Washing and Light Fastness",
        },
      ],
    //   colorOptions: [
    //     { image: "product4", color: "Blue" },
    //     { image: "product11", color: "Black" },
    //   ],
    },
    {
      id: 5,
      image: img5,
      name: "Seine Oval Cut Engagement Ring",
      link: "#",
      category: "T-shirts",
      rating: "5.0",
      oldPrice: 177,
      newPrice: 152,
      isOffer: true,
      offer: 22,
      reviews: 5,
    //   subImage: ["assets/images/product/Pro-8.png", "assets/images/product/Pro-8a.png", "assets/images/product/Pro-8b.png"],
      specification: [
        { type: "Size", value: "S" },
        { type: "Color", value: "Coral" },
      ],
      features: [
        { icon: "fa fa-caret-right", type: "Fit", value: "Regular fit" },
        { icon: "fa fa-caret-right", type: "", value: "Highest quality fabric" },
        {
          icon: "fa fa-caret-right",
          type: "",
          value: "Suitable for all weather condition",
        },
        {
          icon: "fa fa-caret-right",
          type: "",
          value: "Excellent Washing and Light Fastness",
        },
      ],
    //   colorOptions: [
    //     { image: "product5", color: "Coral" },
    //     { image: "product12", color: "Black" },
    //   ],
    },
    {
      id: 6,
      image: img6,
      name: "Seine Round Cut Engagement Ring",
      link: "#",
      category: "T-shirts",
      rating: 1,
      oldPrice: 200,
      newPrice: 100,
      isOffer: true,
      offer: 28,
      reviews: 10,
    //   subImage: ["assets/images/product/img-6.png", "assets/images/product/Pro-17.png", "assets/images/product/Pro-17a.png"],
      specification: [
        { type: "Category", value: "Engagement ring" },
        { type: "Brand", value: "Diamond nexus" },
        { type: "Size", value: "L" },
        { type: "Color", value: "Green" },
      ],
      features: [
        { icon: "fa fa-caret-right", type: "Fit", value: "Regular fit" },
        { icon: "fa fa-caret-right", type: "", value: "Highest quality fabric" },
        {
          icon: "fa fa-caret-right",
          type: "",
          value: "Suitable for all weather condition",
        },
        {
          icon: "fa fa-caret-right",
          type: "",
          value: "Excellent Washing and Light Fastness",
        },
      ],
    //   colorOptions: [
    //     { image: "product6", color: "Green" },
    //     { image: "product13", color: "Black" },
    //   ],
    },
  ]
  
  const recentProducts = [
    {
      id: 1,
      img: "img7",
      name: "Solid Color T-Shirt",
      link: "",
      rating: 4,
      oldPrice: 240,
      newPrice: 225,
    },
    {
      id: 2,
      img: "img4",
      name: "Smiley Plain T-shirt",
      link: "",
      rating: 3,
      oldPrice: 150,
      newPrice: 145,
    },
    {
      id: 3,
      img: "img6",
      name: "Sky blue color T-shirt",
      link: "",
      rating: 4,
      oldPrice: 138,
      newPrice: 135,
    },
  ]
  
  const comments = [
    {
      id: 1,
      img: "avatar2",
      name: "Brian",
      description:
        "If several languages coalesce, the grammar of the resulting language.",
      date: "5 hrs ago",
    },
    {
      id: 2,
      img: "avatar4",
      name: "Denver",
      description:
        "To an English person, it will seem like simplified English, as a skeptical Cambridge",
      date: "07 Oct, 2019",
      childComment: [
        {
          id: 1,
          img: "avatar5",
          name: "Henry",
          description:
            "Their separate existence is a myth. For science, music, sport, etc.",
          date: "08 Oct, 2019",
        },
      ],
    },
    {
      id: 3,
      img: "Null",
      name: "Neal",
      description:
        "Everyone realizes why a new common language would be desirable.",
      date: "05 Oct, 2019",
    },
  ]
  
  const discountData = [
    { label: "Less than 10%", value: 0 },
    { label: "10% or more", value: 10 },
    { label: "20% or more", value: 20 },
    { label: "30% or more", value: 30 },
    { label: "40% or more", value: 40 },
    { label: "50% or more", value: 50 },
  ]
  
  const orders = [
    {
        tagName: "Boutique Ready"
    },
    {
        tagName: "Brand - 1215"
    },
    {
        tagName: "Brand - Blue Nile"
    },
    {
        tagName: "Brand - Brilliant Earth"
    },
    {
        tagName: "Brand - David Yurman"
    },
    {
        tagName: "Brand - Diamond Nexus"
    },
    {
        tagName: "Brand - FA Boutique"
    },
    {
        tagName: "Brand - Heidi Gibson"
    },
    {
        tagName: "Brand - James Allen"
    },
    {
        tagName: "Brand - Ken and Dana"
    },
    {
        tagName: "Brand - Knox Jewelers"
    },
    {
        tagName: "Brand - Lauren B Jewelry"
    },
    {
        tagName: "Brand - Tacori"
    },
    {
        tagName: "Brand - Tiffany's"
    },
    {
        tagName: "Brand - Verragio"
    },
    {
        tagName: "Color - Alexandrite"
    },
    {
        tagName: "Color - Amethyst"
    },
    {
        tagName: "Color - Aquamarine"
    },
    {
        tagName: "Color - Black"
    },
    {
        tagName: "Color - Blue Diamond"
    },
    {
        tagName: "Color - Blue Topaz"
    },
    {
        tagName: "Color - Blue Zircon"
    },
    {
        tagName: "Color - Canary"
    },
    {
        tagName: "Color - Champagne"
    },
    {
        tagName: "Color - Chocolate"
    },
    {
        tagName: "Color - Citrine"
    },
    {
        tagName: "Color - Emerald"
    },
    {
        tagName: "Color - Enamel"
    },
    {
        tagName: "Color - Garnet"
    },
    {
        tagName: "Color - Glacial Ice"
    },
    {
        tagName: "Color - Green Garnet"
    },
    {
        tagName: "Color - Honey Topaz"
    },
    {
        tagName: "Color - Moissanite"
    },
    {
        tagName: "Color - Moonstone"
    },
    {
        tagName: "Color - Morganite"
    },
    {
        tagName: "Color - Mystic Topaz"
    },
    {
        tagName: "Color - Onyx"
    },
    {
        tagName: "Color - Opal"
    },
    {
        tagName: "Color - Orange"
    },
    {
        tagName: "Color - Padaparadscha"
    },
    {
        tagName: "Color - Pearl"
    },
    {
        tagName: "Color - Peridot"
    },
    {
        tagName: "Color - Pink Sapphire"
    },
    {
        tagName: "Color - Pink Tourmaline"
    },
    {
        tagName: "Color - Rose"
    },
    {
        tagName: "Color - Ruby"
    },
    {
        tagName: "Color - Salt & Pepper Diamond"
    },
    {
        tagName: "Color - Sapphire"
    },
    {
        tagName: "Color - Star Sapphire"
    },
    {
        tagName: "Color - Tanzanite"
    },
    {
        tagName: "Color - Tourmalinated Quartz"
    },
    {
        tagName: "Color - Tourmaline"
    },
    {
        tagName: "Color - Turquoise"
    },
    {
        tagName: "Color - White"
    },
    {
        tagName: "Color - Yellow Sapphire"
    },
    {
        tagName: "CS Carat Weight - One to Two"
    },
    {
        tagName: "CS Carat Weight - Over 5"
    },
    {
        tagName: "CS Carat Weight - Three to Five"
    },
    {
        tagName: "CS Carat Weight - Two to Three"
    },
    {
        tagName: "CS Carat Weight - Under One"
    },
    {
        tagName: "Metal - Black Rhodium"
    },
    {
        tagName: "Metal - Mixed"
    },
    {
        tagName: "Metal - Platinum / Palladium"
    },
    {
        tagName: "Metal - Rose"
    },
    {
        tagName: "Metal - Sterling Silver / Lorian Platinum"
    },
    {
        tagName: "Metal - Two Tone"
    },
    {
        tagName: "Metal - White Gold"
    },
    {
        tagName: "Metal - Yellow Gold"
    },
    {
        tagName: "Shape - Asscher"
    },
    {
        tagName: "Shape - Baguette"
    },
    {
        tagName: "Shape - Cushion"
    },
    {
        tagName: "Shape - Emerald"
    },
    {
        tagName: "Shape - Half Moon"
    },
    {
        tagName: "Shape - Heart"
    },
    {
        tagName: "Shape - Marquise"
    },
    {
        tagName: "Shape - Oval"
    },
    {
        tagName: "Shape - Pear"
    },
    {
        tagName: "Shape - Princess"
    },
    {
        tagName: "Shape - Radiant"
    },
    {
        tagName: "Shape - Round"
    },
    {
        tagName: "Shape - Special Stone"
    },
    {
        tagName: "Shape - Trapezoid"
    },
    {
        tagName: "Shape - Triangle"
    },
    {
        tagName: "Shape - Trillion"
    }
]


  
  const cartData = {
    products: [
      {
        id: 1,
        img: img1,
        name: "Half sleeve T-shirt",
        color: "Green",
        price: "450",
        data_attr: 2,
        total: 900,
      },
      {
        id: 2,
        img: img2,
        name: "Black color T-shirt",
        color: "Black",
        price: "225",
        data_attr: 6,
        total: 225,
      },
      {
        id: 3,
        img: img3,
        name: "Printed T-shirt",
        color: "Black",
        price: "152",
        data_attr: 2,
        total: 304,
      },
      {
        id: 4,
        img: img4,
        name: "Smiley Plain T-shirt",
        color: "Blue",
        price: "145",
        data_attr: 2,
        total: 290,
      },
      {
        id: 5,
        img: img5,
        name: "Full sleeve T-Shirt",
        color: "Light orange",
        price: "138",
        data_attr: 8,
        total: 138,
      },
      {
        id: 6,
        img: img6,
        name: "Sky blue color T-shirt",
        color: "Green",
        price: "152",
        data_attr: 2,
        total: 304,
      },
    ],
    orderSummary: {
      grandTotal: "$ 1,857",
      discount: "$ 157",
      shippingCharge: "$ 25",
      estimatedTax: "$ 19.22",
      total: "$ 1744.22",
    },
  }
  
  const customerData = [
    {
      id: 1,
      username: "Stephen Rash",
      phone: "325-250-1106",
      email: "StephenRash@teleworm.us",
      address: "2470 Grove Street Bethpage, NY 11714",
      rating: "4.2",
      walletBalance: "$5,412",
      joiningDate: "07 Oct, 2019",
    },
    {
      id: 2,
      username: "Juan Mays",
      phone: "443-523-4726",
      email: "JuanMays@armyspy.com",
      address: "3755 Harron Drive Salisbury, MD 21875",
      rating: "4.0",
      walletBalance: "$5,632",
      joiningDate: "06 Oct, 2019",
    },
    {
      id: 3,
      username: "Scott Henry",
      phone: "704-629-9535",
      email: "ScottHenry@jourrapide.com",
      address: "3632 Snyder Avenue Bessemer City, NC 2801",
      rating: "4.4",
      walletBalance: "$7,523",
      joiningDate: "06 Oct, 2019",
    },
    {
      id: 4,
      username: "Cody Menendez",
      phone: "701-832-5838",
      email: "CodyMenendez@armyspy.com",
      address: "4401 Findley Avenue Minot, ND 58701",
      rating: "4.1",
      walletBalance: "$6,325",
      joiningDate: "05 Oct, 2019",
    },
    {
      id: 5,
      username: "Jason Merino",
      phone: "706-219-4095",
      email: "JasonMerino@dayrep.com",
      address: "3159 Holly Street Cleveland, GA 30528",
      rating: "3.8",
      walletBalance: "$4,523",
      joiningDate: "04 Oct, 2019",
    },
    {
      id: 6,
      username: "Kyle Aquino",
      phone: "415-232-5443",
      email: "KyleAquino@teleworm.us",
      address: "4861 Delaware Avenue San Francisco, CA 94143",
      rating: "4.0",
      walletBalance: "$5,412",
      joiningDate: "03 Oct, 2019",
    },
    {
      id: 7,
      username: "David Gaul",
      phone: "314-483-4679",
      email: "DavidGaul@teleworm.us",
      address: "1207 Cottrill Lane Stlouis, MO 63101",
      rating: "4.2",
      walletBalance: "$6,180",
      joiningDate: "02 Oct, 2019",
    },
    {
      id: 8,
      username: "John McCray",
      phone: "253-661-7551",
      email: "JohnMcCray@armyspy.com",
      address: "3309 Horizon Circle Tacoma, WA 98423",
      rating: "4.1",
      walletBalance: "$5,2870",
      joiningDate: "02 Oct, 2019",
    },
  ]
  
  const shops = [
    {
      id: 1,
      color: "primary",
      name: "Brendle's",
      product: 112,
      balance: "13,575",
      profileLink: "#",
    },
    {
      id: 2,
      color: "warning",
      name: "Tech Hifi",
      product: 104,
      balance: "11,145",
      profileLink: "#",
    },
    {
      id: 3,
      color: "danger",
      name: "Lafayette",
      product: 126,
      balance: "12,356",
      profileLink: "#",
    },
    {
      id: 4,
      color: "success",
      name: "Packer",
      product: 102,
      balance: "11,228",
      profileLink: "#",
    },
    {
      id: 5,
      color: "info",
      name: "Nedick's",
      product: 96,
      balance: "9,235",
      profileLink: "#",
    },
    {
      id: 6,
      color: "dark",
      name: "Hudson's",
      product: 120,
      balance: "14,794",
      profileLink: "#",
    },
    {
      id: 7,
      color: "dark",
      name: "Tech Hifi",
      product: 104,
      balance: "11,145",
      profileLink: "#",
    },
    {
      id: 8,
      color: "primary",
      name: "Brendle's",
      product: 112,
      balance: "13,575",
      profileLink: "#",
    },
    {
      id: 9,
      color: "success",
      name: "Lafayette",
      product: 120,
      balance: "12,356",
      profileLink: "#",
    },
  ];
  
  const MOCK_DATA = {
      productsData,
      recentProducts,
      comments,
      discountData,
      orders,
      shops,
      customerData,
      cartData,
  }
  
  export default MOCK_DATA;