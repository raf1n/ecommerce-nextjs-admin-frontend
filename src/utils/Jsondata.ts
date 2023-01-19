import {
  FaFire,
  FaTrash,
  FaCog,
  FaEnvelope,
  FaColumns,
  FaGlobe,
  FaUserAlt,
  FaNewspaper,
  FaShoppingCart,
  FaMapMarkerAlt,
  FaHome,
  FaAdversal,
  FaCircle,
  FaCheckCircle,
  FaUser,
  FaAnchor,
  FaGamepad,
  FaMobileAlt,
  FaBasketballBall,
  FaBicycle,
  FaStreetView,
  FaAndroid,
  FaAdjust,
  FaCogs,
} from "react-icons/fa";
import { AiFillAppstore } from "react-icons/ai";

export class Jsondata {
  //Product Categories
  static productCategories = [
    {
      name: "Electronics",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Felectronics-2022-11-19-02-48-28-5548.png&w=1920&q=75",
    },
    {
      name: "Game",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fgame-2022-11-19-02-48-48-6382.png&w=1920&q=75",
    },
    {
      name: "Mobile",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmobile-2022-11-19-02-49-20-2538.png&w=1920&q=75",
    },
    {
      name: "Lifestyle",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Flifestyle-2022-11-19-02-49-38-3139.png&w=1920&q=75",
    },
    {
      name: "Babies & Toys",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fbabies-toys-2022-11-19-02-50-00-3811.png&w=1920&q=75",
    },
    {
      name: "Bike",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fbike-2022-11-19-02-50-18-4648.png&w=1920&q=75",
    },
    {
      name: "Men's Fashion",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmens-fasion-2022-11-19-02-50-39-5203.png&w=1920&q=75",
    },
    {
      name: "Woman Fashion",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fwomans-fasion-2022-11-19-02-52-58-2850.png&w=1920&q=75",
    },
  ];
  //Best Seller
  static bestSeller = [
    {
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fseller-logo-2022-09-21-11-58-14-9795.png&w=1920&q=75",
      name: "Shopno BD",
    },
    {
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fseller-logo-2022-09-21-01-10-12-2682.png&w=1920&q=75",
      name: "Ecoms Shop",
    },
    {
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fseller-logo-2022-09-21-01-16-13-5847.png&w=1920&q=75",
      name: "Fusion X",
    },
    {
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fseller-logo-2022-09-21-01-19-19-3916.png&w=1920&q=75",
      name: "Rikayi Rox",
    },
    {
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fseller-logo-2022-09-21-01-22-55-6660.png&w=1920&q=75",
      name: "Habbriyi",
    },
    {
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fseller-logo-2022-09-21-01-30-46-9044.png&w=1920&q=75",
      name: "Rayhans",
    },
  ];
  //Sale Time
  static saleTime = [
    {
      name: "Days",
      duration: "984",
    },
    {
      name: "Hours",
      duration: "23",
    },
    {
      name: "Minutes",
      duration: "28",
    },
    {
      name: "Seconds",
      duration: "56",
    },
  ];
  //Footer Data
  static footerData = [
    {
      header: "Feature",
      links: [
        {
          title: "About Us",
          url: "about",
        },
        {
          title: "Terms Condition",
          url: "terms_condition",
        },
        {
          title: "Best Products",
          url: "/products?highlight=best_product",
        },
      ],
    },
    {
      header: "General Links",
      links: [
        {
          title: "Blog",
          url: "blogs",
        },
        {
          title: "Shop",
          url: "sellers",
        },
        {
          title: "Support",
          url: "faq",
        },
      ],
    },
    {
      header: "Helpful",
      links: [
        {
          title: "About Us",
          url: "about",
        },
        {
          title: "Popular Category",
          url: "products?highlight=popular_category",
        },
        {
          title: "Contact Us",
          url: "contact",
        },
      ],
    },
  ];
  //Best Products
  static bestProductsData = [
    {
      name: "Mi Laptop Pro",
      formerPrice: 50000,
      currentPrice: 45000,
      slug: "mi-laptop-pro",
      imgUrl:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmi-laptop-pro-2022-09-26-01-22-47-3531.png&w=1920&q=75",
    },
    {
      name: "Mi Laptop Pro",
      formerPrice: 50000,
      currentPrice: 45000,
      slug: "mi-laptop-pro",
      imgUrl:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmi-laptop-pro-2022-09-26-01-22-47-3531.png&w=1920&q=75",
    },
    {
      name: "Mi Laptop Pro",
      formerPrice: 50000,
      currentPrice: 45000,
      slug: "mi-laptop-pro",
      imgUrl:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmi-laptop-pro-2022-09-26-01-22-47-3531.png&w=1920&q=75",
    },
    {
      name: "Mi Laptop Pro",
      formerPrice: 50000,
      currentPrice: 45000,
      slug: "mi-laptop-pro",
      imgUrl:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmi-laptop-pro-2022-09-26-01-22-47-3531.png&w=1920&q=75",
    },
    {
      name: "Mi Laptop Pro",
      formerPrice: 50000,
      currentPrice: 45000,
      slug: "mi-laptop-pro",
      imgUrl:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmi-laptop-pro-2022-09-26-01-22-47-3531.png&w=1920&q=75",
    },
    {
      name: "Mi Laptop Pro",
      formerPrice: 50000,
      currentPrice: 45000,
      slug: "mi-laptop-pro",
      imgUrl:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmi-laptop-pro-2022-09-26-01-22-47-3531.png&w=1920&q=75",
    },
    {
      name: "Mi Laptop Pro",
      formerPrice: 50000,
      currentPrice: 45000,
      slug: "mi-laptop-pro",
      imgUrl:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmi-laptop-pro-2022-09-26-01-22-47-3531.png&w=1920&q=75",
    },
    {
      name: "Mi Laptop Pro",
      formerPrice: 50000,
      currentPrice: 45000,
      slug: "mi-laptop-pro",
      imgUrl:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmi-laptop-pro-2022-09-26-01-22-47-3531.png&w=1920&q=75",
    },
    {
      name: "Mi Laptop Pro",
      formerPrice: 50000,
      currentPrice: 45000,
      slug: "mi-laptop-pro",
      imgUrl:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmi-laptop-pro-2022-09-26-01-22-47-3531.png&w=1920&q=75",
    },
    {
      name: "Mi Laptop Pro",
      formerPrice: 50000,
      currentPrice: 45000,
      slug: "mi-laptop-pro",
      imgUrl:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmi-laptop-pro-2022-09-26-01-22-47-3531.png&w=1920&q=75",
    },
    {
      name: "Mi Laptop Pro",
      formerPrice: 50000,
      currentPrice: 45000,
      slug: "mi-laptop-pro",
      imgUrl:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmi-laptop-pro-2022-09-26-01-22-47-3531.png&w=1920&q=75",
    },
    {
      name: "Mi Laptop Pro",
      formerPrice: 50000,
      currentPrice: 45000,
      slug: "mi-laptop-pro",
      imgUrl:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmi-laptop-pro-2022-09-26-01-22-47-3531.png&w=1920&q=75",
    },
  ];
  //Blogs Data
  static blogsData = [
    {
      id: 1,
      blogThum:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fblog--2022-09-22-04-18-09-8292.jpg&w=1920&q=75",
      tittle:
        "It's Official! The IPhone 14 Series Is On Its Way! Rumors Turned Out To Be True. The Goods & The Bads.",
      desciption:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33",
    },
    {
      id: 2,
      blogThum:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fblog--2022-09-22-04-18-09-8292.jpg&w=1920&q=75",
      tittle:
        "It's Official! The IPhone 14 Series Is On Its Way! Rumors Turned Out To Be True. The Goods & The Bads.",
      desciption:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33",
    },
    {
      id: 3,
      blogThum:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fblog--2022-09-22-04-18-09-8292.jpg&w=1920&q=75",
      tittle:
        "It's Official! The IPhone 14 Series Is On Its Way! Rumors Turned Out To Be True. The Goods & The Bads.",
      desciption:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33",
    },
    {
      id: 4,
      blogThum:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fblog--2022-09-22-04-18-09-8292.jpg&w=1920&q=75",
      tittle:
        "It's Official! The IPhone 14 Series Is On Its Way! Rumors Turned Out To Be True. The Goods & The Bads.",
      desciption:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33",
    },
    {
      id: 5,
      blogThum:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fblog--2022-09-22-04-18-09-8292.jpg&w=1920&q=75",
      tittle:
        "It's Official! The IPhone 14 Series Is On Its Way! Rumors Turned Out To Be True. The Goods & The Bads.",
      desciption:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33",
    },
    {
      id: 6,
      blogThum:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fblog--2022-09-22-04-18-09-8292.jpg&w=1920&q=75",
      tittle:
        "It's Official! The IPhone 14 Series Is On Its Way! Rumors Turned Out To Be True. The Goods & The Bads.",
      desciption:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like). Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33",
    },
  ];
  //Top Rated Products Data
  static topRatedProducts = [
    {
      name: "Sony joystick SJ pro",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fsony-joystick-sj-pro-2022-09-27-03-39-20-9931.png&w=2048&q=75",
      rating: 5,
      mainPrice: "$7000",
      offerPrice: " $5000.00",
    },
    {
      name: "JBL headphone Max",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fjbl-headphon-max-2022-09-26-01-55-56-9123.png&w=1920&q=75",
      rating: 5,
      mainPrice: "$700",
      offerPrice: " $650.000",
    },
    {
      name: "Sony Play Station 5",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fsony-play-staton-5-2022-09-26-12-20-52-2324.png&w=1920&q=75",
      rating: 5,
      mainPrice: "$88.88",
      offerPrice: " $61.10",
    },
    {
      name: "FANTECH OCTANE Headset",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Ffantech-octane-headset-2022-09-26-12-53-57-7709.png&w=1920&q=75",
      rating: 5,
      mainPrice: "$88",
      offerPrice: "$59.40",
    },
  ];
  //Featured Products Data
  static featuredProducts = [
    {
      name: "Asus zenbook desktop",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fasus-zenbook-desktop-2022-09-26-12-33-24-3339.png&w=1920&q=75",
      previousPrice: 3500,
      currentPrice: 3300,
    },
    {
      name: "VISION ELITE CEILING FAN",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fvision-rice-cooker-2022-09-26-12-48-28-5516.png&w=1920&q=75",
      previousPrice: 11.11,
      currentPrice: 9.9,
    },
    {
      name: "VISION Rice Cooker",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fvision-elite-ceiling-fan-2022-09-26-12-29-33-2795.png&w=1920&q=75",
      previousPrice: 99.88,
      currentPrice: 35.43,
    },
  ];
  //New Release Products
  static newReleasedProducts = [
    {
      name: "Apple watch pro",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fapple-watch-pro-2022-09-26-12-04-40-6657.png&w=1920&q=75",
      previousPrice: 4500,
      currentPrice: 4000,
    },
    {
      name: "Sony joystick SJ pro",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fsony-joystick-sj-pro-2022-09-27-03-39-20-9931.png&w=1920&q=75",
      previousPrice: 7000,
      currentPrice: 5000,
    },
    {
      name: "Asus zenbook desktop",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fasus-zenbook-desktop-2022-09-26-12-33-24-3339.png&w=1920&q=75",
      previousPrice: 35000,
      currentPrice: 33000,
    },
    {
      name: "Realme mini music",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Frealme-mini-music-2022-09-26-01-34-10-1954.png&w=1920&q=75",
      previousPrice: 800,
      currentPrice: 569,
    },
    {
      name: "Mi Laptop pro",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmi-laptop-pro-2022-09-26-01-22-47-3531.png&w=1920&q=75",
      previousPrice: 50000,
      currentPrice: 45000,
    },
    {
      name: "JBL Clip 4 Orange Portable Bluetooth Speaker",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fjbl-clip-4-orange-portable-bluetooth-speaker-jblclip40rg-2022-09-26-12-42-09-8912.png&w=1920&q=75",
      previousPrice: 332,
      currentPrice: 299,
    },
    {
      name: "PlayStation 4",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fplaystation-4-2022-09-26-12-43-50-4261.png&w=1920&q=75",
      previousPrice: 123,
      currentPrice: 99,
    },
    {
      name: "Samsung Galaxy A52 (8/128 GB)",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fsamsung-galaxy-a52-8128-gb-2022-09-26-12-12-12-9319.png&w=1920&q=75",
      previousPrice: 11.11,
      currentPrice: 9.9,
    },
    {
      name: "VISION Rice Cooker",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fvision-elite-ceiling-fan-2022-09-26-12-29-33-2795.png&w=1920&q=75",
      previousPrice: 99.88,
      currentPrice: 35.43,
    },
    {
      name: "Sony Play Staton 5",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fsony-play-staton-5-2022-09-26-12-20-52-2324.png&w=1920&q=75",
      previousPrice: 88.88,
      currentPrice: 69.99,
    },
    {
      name: "FANTECH OCTANE Headset",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Ffantech-octane-headset-2022-09-26-12-53-57-7709.png&w=1920&q=75",
      previousPrice: 88.88,
      currentPrice: 69.99,
    },
  ];
  //Single Item Detail
  static itemDetail = {
    short_name: "zenbook",
    name: "Asus zenbook desktop",
    slug: "asus_zenbook_desktop",
    category: "Electronic",
    sub_category: "Electronic",
    brand: "Asus",
    sku: "kjhyy78",
    rating: 3,
    reviews: [],
    price: 45000,
    offerPrice: 33000.0,
    formerPrice: 35000,
    currentPrice: 33000.0,
    availability: 3,
    weight: 2,
    description: `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.`,
    long_description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    highlight: ["Top Product", "New Arrival"],
    status: "inactive",
    SEO_title: "Asus zenbook desktop",
    SEO_description: "Asus zenbook desktop",
    images: [
      "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fasus-zenbook-desktop-2022-09-26-12-33-24-3339.png&w=2048&q=75",
      "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fjbl-clip-4-orange-portable-speaker-2022-09-27-03-24-27-9922.png&w=1920&q=75",
    ],
  };

  static dashboardSummaryData = [
    {
      id: 1,
      title: "Today Order",
      icons: FaShoppingCart,
      bgColor: "#2563eb",
      value: "0",
    },
    {
      id: 2,
      title: "Today Pending Order",
      icons: FaShoppingCart,
      bgColor: "#2563eb",
      value: "0",
    },
    {
      id: 3,
      title: "Total Order",
      icons: FaShoppingCart,
      bgColor: "#2563eb",
      value: "0",
    },
    {
      id: 4,
      title: "Total Pending Order",
      icons: FaShoppingCart,
      bgColor: "#2563eb",
      value: "40",
    },
    {
      id: 5,
      title: "Total Declined Order",
      icons: FaShoppingCart,
      bgColor: "#c2410c",
      value: "0",
    },
    {
      id: 6,
      title: "Total Complete Order",
      icons: FaShoppingCart,
      bgColor: "#c2410c",
      value: "6",
    },
    {
      id: 7,
      title: "Total Earning",
      icons: FaNewspaper,
      bgColor: "#c2410c",
      value: "$0",
    },
    {
      id: 8,
      title: "Today Pending Earning",
      icons: FaNewspaper,
      bgColor: "#c2410c",
      value: "$0",
    },
    {
      id: 9,
      title: "This Month Earning",
      icons: FaNewspaper,
      bgColor: "#16a34a",
      value: "$0",
    },
    {
      id: 10,
      title: "This Year Earning",
      icons: FaNewspaper,
      bgColor: "#16a34a",
      value: "$0",
    },
    {
      id: 11,
      title: "Total Earning",
      icons: FaNewspaper,
      bgColor: "#16a34a",
      value: "$0",
    },
    {
      id: 12,
      title: "Today Product Sale",
      icons: FaCircle,
      bgColor: "#16a34a",
      value: "0",
    },
    {
      id: 13,
      title: "This Month Product Sale",
      icons: FaCircle,
      bgColor: "#dc2626",
      value: "0",
    },
    {
      id: 14,
      title: "This Year Product Sale",
      icons: FaCircle,
      bgColor: "#dc2626",
      value: "0",
    },
    {
      id: 15,
      title: "Total Product Sale",
      icons: FaCircle,
      bgColor: "#dc2626",
      value: "0",
    },
    {
      id: 16,
      title: "Total Product",
      icons: FaCheckCircle,
      bgColor: "#dc2626",
      value: "0",
    },
    {
      id: 17,
      title: "Total Product Report",
      icons: FaCheckCircle,
      bgColor: "#16a34a",
      value: "0",
    },
    {
      id: 18,
      title: "Total Product Review",
      icons: FaCheckCircle,
      bgColor: "#16a34a",
      value: "0",
    },
    {
      id: 19,
      title: "Total Seller",
      icons: FaUser,
      bgColor: "#16a34a",
      value: "0",
    },
    {
      id: 20,
      title: "Total Seller",
      icons: FaUser,
      bgColor: "#16a34a",
      value: "0",
    },
    {
      id: 21,
      title: "Total Subscriber",
      icons: FaUser,
      bgColor: "#2563eb",
      value: "0",
    },
    {
      id: 22,
      title: "Total Blog",
      icons: FaCheckCircle,
      bgColor: "#2563eb",
      value: "0",
    },
    {
      id: 23,
      title: "Product Category",
      icons: FaCheckCircle,
      bgColor: "#2563eb",
      value: "0",
    },
    {
      id: 24,
      title: "Total Brand",
      icons: FaCheckCircle,
      bgColor: "#2563eb",
      value: "40",
    },
  ];
  static checkCategoryFilterData = [
    {
      id: "electronics",
      name: 1,
      label: "Electronics",
    },
    {
      id: "game",
      name: 2,
      label: "game",
    },
    {
      id: "mobile",
      name: 3,
      label: "mobile",
    },
    {
      id: "lifestyle",
      name: 4,
      label: "lifestyle",
    },
    {
      id: "babiesAndToys",
      name: 5,
      label: "Babies & Toys",
    },
    {
      id: "bike",
      name: 6,
      label: "bike",
    },
    {
      id: "mensFashion",
      name: 7,
      label: "Men's Fashion",
    },
    {
      id: "womensFashion",
      name: 8,
      label: "Women's Fashion",
    },
    {
      id: "television",
      name: 9,
      label: "television",
    },
    {
      id: "accessories",
      name: 10,
      label: "accessories",
    },
    {
      id: "johnDoe",
      name: 11,
      label: "John Doe",
    },
  ];

  static checkBrandFilterData = [
    {
      id: "onePlus",
      name: 1,
      label: "OnePlus",
    },
    {
      id: "tencent",
      name: 2,
      label: "tencent",
    },
    {
      id: "apple",
      name: 3,
      label: "apple",
    },
    {
      id: "microsoft",
      name: 4,
      label: "Microsoft",
    },
    {
      id: "lenovo",
      name: 5,
      label: "Lenovo",
    },
    {
      id: "huawei",
      name: 6,
      label: "Huawei",
    },
    {
      id: "nexus",
      name: 7,
      label: "Nexus",
    },
    {
      id: "google",
      name: 8,
      label: "Google",
    },
    {
      id: "firefox",
      name: 9,
      label: "Firefox",
    },
    {
      id: "tesla",
      name: 10,
      label: "Tesla",
    },
    {
      id: "brave",
      name: 11,
      label: "Brave",
    },
    {
      id: "facebook",
      name: 12,
      label: "Facebook",
    },
  ];

  static menus = [
    { title: "Dashboard", icon: FaHome, gap: false, link: "/" },
    {
      title: "Orders",
      icon: FaShoppingCart,
      height: "253px",
      nestedRoutes: [
        {
          title: "All Orders",
          link: "/all_orders",
        },
        {
          title: "Pending Orders",
          link: "/pending_orders",
        },
        {
          title: "Progress Orders",
          link: "/progress_orders",
        },
        {
          title: "Delivered Orders",
          link: "/delivered_orders",
        },
        {
          title: "Completed Orders",
          link: "/completed_orders",
        },
        {
          title: "Declined Orders",
          link: "/declined_orders",
        },
        {
          title: "Cash On Delivery",
          link: "/cash_on_delivery",
        },
      ],
    },
    {
      title: "Manage Categories",
      icon: AiFillAppstore,
      height: "218px",
      nestedRoutes: [
        {
          title: "Categories",
          link: "/product_categories",
        },
        {
          title: "Sub Categories",
          link: "/product_sub_categories",
        },
        {
          title: "Child Categories",
          link: "/product_child_categories",
        },
        {
          title: "Mega Menu Category",
          link: "/mega_menu_category",
        },
        {
          title: "Popular Category",
          link: "/popular_category",
        },
        {
          title: "Featured Category",
          link: "/featured_category",
        },
      ],
    },
    {
      title: "Manage Products ",
      icon: AiFillAppstore,
      height: "323px",
      nestedRoutes: [
        {
          title: "Brands",
          link: "/product_brands",
        },
        {
          title: "Create Product",
          link: "/products/create",
        },
        {
          title: "Products",
          link: "/products",
        },
        {
          title: "Stock Out",
          link: "/stock_out",
        },
        {
          title: "Seller Products",
          link: "/seller_products",
        },
        {
          title: "Seller Pending Products",
          link: "/seller_pending_products",
        },
        {
          title: "Specification Key",
          link: "/specification_key",
        },
        {
          title: "Product Reviews",
          link: "/product_reviews",
        },
        {
          title: "Product Report",
          link: "/product_report",
        },
      ],
    },
    { title: "Ecommerce", icon: FaShoppingCart },
    { title: "Advertisements", icon: FaAdversal },
    { title: "Withdraw Payment", icon: FaNewspaper },
    { title: "Users", icon: FaUserAlt },
    { title: "Manage Website", icon: FaGlobe },
    { title: "Website Footer", icon: AiFillAppstore },
    { title: "Pages", icon: FaColumns },
    { title: "Blogs", icon: AiFillAppstore },
    { title: "Email Configuration", icon: FaEnvelope },
    { title: "Language", icon: AiFillAppstore },
    { title: "Setting", icon: FaCog },
    { title: "Clear Database", icon: FaTrash },
    { title: "Subscribers", icon: FaFire },
    { title: "Contact Message", icon: FaEnvelope },
    { title: "Admin List", icon: FaUserAlt },
  ];
  //Categories Table Data
  static categoriesTableData = [
    {
      id: 1,
      name: "Electronics",
      image:
        "https://api.websolutionus.com/shopo/uploads/custom-images/electronics-2022-11-19-02-48-28-5548.png",
      icon: FaAnchor,
      status: "active",
    },
    {
      id: 2,
      name: "Game",
      image:
        "https://api.websolutionus.com/shopo/uploads/custom-images/game-2022-11-19-02-48-48-6382.png",
      icon: FaGamepad,
      status: "inactive",
    },
    {
      id: 3,
      name: "Mobile",
      image:
        "https://api.websolutionus.com/shopo/uploads/custom-images/mobile-2022-11-19-02-49-20-2538.png",
      icon: FaMobileAlt,
      status: "active",
    },
    {
      id: 4,
      name: "Lifestyle",
      image:
        "https://api.websolutionus.com/shopo/uploads/custom-images/lifestyle-2022-11-19-02-49-38-3139.png",
      icon: FaHome,
      status: "active",
    },
    {
      id: 5,
      name: "Babies & Toys",
      image:
        "https://api.websolutionus.com/shopo/uploads/custom-images/babies-toys-2022-11-19-02-50-00-3811.png",
      icon: FaBasketballBall,
      status: "active",
    },
    {
      id: 6,
      name: "Bike",
      image:
        "https://api.websolutionus.com/shopo/uploads/custom-images/bike-2022-11-19-02-50-18-4648.png",
      icon: FaBicycle,
      status: "active",
    },
    {
      id: 7,
      name: "Men's Fasion",
      image:
        "https://api.websolutionus.com/shopo/uploads/custom-images/mens-fasion-2022-11-19-02-50-39-5203.png",
      icon: FaStreetView,
      status: "active",
    },
    {
      id: 8,
      name: "Woman Fashion",
      image:
        "https://api.websolutionus.com/shopo/uploads/custom-images/womans-fasion-2022-11-19-02-52-58-2850.png",
      icon: FaAndroid,
      status: "active",
    },
    {
      id: 9,
      name: "Talevision",
      image: "",
      icon: FaAdjust,
      status: "active",
    },
    {
      id: 10,
      name: "Accessories",
      image: "",
      icon: FaCogs,
      status: "active",
    },
    {
      id: 11,
      name: "John Doe",
      image:
        "https://api.websolutionus.com/shopo/uploads/custom-images/john-doe-2022-11-17-12-00-23-1751.jpg",
      icon: FaAdjust,
      status: "active",
    },
  ];
  //Child Category Table Data
  static childCategoriesTableData = [
    {
      id: 1,
      childCategory: "LG",
      slug: "lg",
      subCategory: "Monitor",
      category: "Electronics",
      status: "active",
    },
    {
      id: 2,
      childCategory: "HP",
      slug: "hp",
      subCategory: "Monitor",
      category: "Electronics",
      status: "Inactive",
    },
    {
      id: 3,
      childCategory: "PlayStation 4",
      slug: "playstation-4",
      subCategory: "PlayStation",
      category: "Game",
      status: "Inactive",
    },
    {
      id: 4,
      childCategory: "PlayStation 5",
      slug: "playstation-5",
      subCategory: "PlayStation",
      category: "Game",
      status: "Inactive",
    },
    {
      id: 5,
      childCategory: "Samsung",
      slug: "samsung",
      subCategory: "Mobiles",
      category: "Electronics",
      status: "Inactive",
    },
    {
      id: 6,
      childCategory: "Apple",
      slug: "apple",
      subCategory: "Mobiles",
      category: "Electronics",
      status: "active",
    },
  ];
  static subCategoriesTableData = [
    {
      id: 1,
      subCat: "Mobiles",
      slug: "mobiles",
      category: "Electronics",
      status: "active",
    },
    {
      id: 2,
      subCat: "Laptop",
      slug: "laptop",
      category: "Electronics",
      status: "active",
    },
    {
      id: 3,
      subCat: "Headphone",
      slug: "headphone",
      category: "Electronics",
      status: "inactive",
    },
    {
      id: 4,
      subCat: "Mouse",
      slug: "mouse",
      category: "Electronics",
      status: "inactive",
    },
  ];
  static sellerAddress = [
    {
      shopName: "Ryhans",
      email: "ryhan@gmail.com",
      phone: "01739446375",
      address: "Chattogram , Bangladesh",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fseller-logo-2022-09-21-01-30-46-9044.png&w=1920&q=75",
    },
    {
      shopName: "Ryhans",
      email: "ryhan@gmail.com",
      phone: "01739446375",
      address: "Chattogram , Bangladesh",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fseller-logo-2022-09-21-01-30-46-9044.png&w=1920&q=75",
    },
    {
      shopName: "Ryhans",
      email: "ryhan@gmail.com",
      phone: "01739446375",
      address: "Chattogram , Bangladesh",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fseller-logo-2022-09-21-01-30-46-9044.png&w=1920&q=75",
    },
    {
      shopName: "Ryhans",
      email: "ryhan@gmail.com",
      phone: "01739446375",
      address: "Chattogram , Bangladesh",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fseller-logo-2022-09-21-01-30-46-9044.png&w=1920&q=75",
    },
    {
      shopName: "Ryhans",
      email: "ryhan@gmail.com",
      phone: "01739446375",
      address: "Chattogram , Bangladesh",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fseller-logo-2022-09-21-01-30-46-9044.png&w=1920&q=75",
    },
    {
      shopName: "Ryhans",
      email: "ryhan@gmail.com",
      phone: "01739446375",
      address: "Chattogram , Bangladesh",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fseller-logo-2022-09-21-01-30-46-9044.png&w=1920&q=75",
    },
  ];

  static tableDatas = [
    {
      id: 1,
      Customer: "Rafin Robin",
      OrderId: "8966896",
      Date: "32 December, 2023",
      Quantity: 2320,
      Amount: 20343,
      OrderStatus: "pending",
      Payment: "success",
      Action: "",
    },
    {
      id: 2,
      Customer: "Mr. Sadab",
      OrderId: "8966896",
      Date: "32 January, 2023",
      Quantity: 540,
      Amount: 65456,
      OrderStatus: "delivered",
      Payment: "success",
      Action: "",
    },
    {
      id: 3,
      Customer: "Toukir khan",
      OrderId: "4547544",
      Date: "15 February, 2023",
      Quantity: 1220,
      Amount: 62324,
      OrderStatus: "pending",
      Payment: "pending",
      Action: "",
    },
    {
      id: 4,
      Customer: "Iqbal Hasan",
      OrderId: "7875876",
      Date: "23 January, 2023",
      Quantity: 767,
      Amount: 77544,
      OrderStatus: "delivered",
      Payment: "success",
      Action: "",
    },
    {
      id: 5,
      Customer: "Fayaz karim",
      OrderId: "674454",
      Date: "31 August, 2023",
      Quantity: 1345,
      Amount: 86647,
      OrderStatus: "pending",
      Payment: "pending",
      Action: "",
    },
    {
      id: 6,
      Customer: "Mr Stark",
      OrderId: "656568",
      Date: "32 January, 2023",
      Quantity: 110,
      Amount: 65575,
      OrderStatus: "pending",
      Payment: "success",
      Action: "",
    },
    {
      id: 7,
      Customer: "Mr Xavier",
      OrderId: "9676767",
      Date: "32 July, 2023",
      Quantity: 225,
      Amount: 24242,
      OrderStatus: "delivered",
      Payment: "success",
      Action: "",
    },
  ];
  static wishlistData = [
    {
      name: "JBL Clip 4 Orange Portable Speaker",
      price: 133.0,
      imgUrl:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fjbl-clip-4-orange-portable-speaker-2022-09-27-03-24-27-9922.png&w=1920&q=75",
    },
    {
      name: "JBL Clip 4 Orange Portable Speaker",
      price: 133.0,
      imgUrl:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fjbl-clip-4-orange-portable-speaker-2022-09-27-03-24-27-9922.png&w=1920&q=75",
    },
    {
      name: "JBL Clip 4 Orange Portable Speaker",
      price: 133.0,
      imgUrl:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fjbl-clip-4-orange-portable-speaker-2022-09-27-03-24-27-9922.png&w=1920&q=75",
    },
  ];

  static productBrandsData = [
    {
      id: 1,
      name: "LG",
      slug: "lg",
      logo: "https://api.websolutionus.com/shopo/uploads/custom-images/oneplus-2022-09-25-04-15-53-8330.png",
      status: "active"
    },
    {
      id: 2,
      name: "LG",
      slug: "lg",
      logo: "https://api.websolutionus.com/shopo/uploads/custom-images/oneplus-2022-09-25-04-15-53-8330.png",
      status: "inactive"
    },
    {
      id: 3,
      name: "LG",
      slug: "lg",
      logo: "https://api.websolutionus.com/shopo/uploads/custom-images/oneplus-2022-09-25-04-15-53-8330.png",
      status: "active"
    },
  ]

  static adminProductsData = [
    {
      id: 1,
      name: "Mi Laptop Pro",
      currentPrice: 45000,
      link: "mi-laptop-pro",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmi-laptop-pro-2022-09-26-01-22-47-3531.png&w=1920&q=75",
      type: ["New", "Featured", "Best"],
      status: "active",
    },
    {
      id: 2,
      name: "Mi Laptop Pro",
      currentPrice: 45000,
      link: "mi-laptop-pro",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmi-laptop-pro-2022-09-26-01-22-47-3531.png&w=1920&q=75",
      type: ["New", "Featured", "Best"],
      status: "inactive",
    },
  ]

  static stockOutProductsData = [
    {
      id: 1,
      name: "Mi Laptop Pro",
      currentPrice: 45000,
      link: "mi-laptop-pro",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmi-laptop-pro-2022-09-26-01-22-47-3531.png&w=1920&q=75",
    },
    {
      id: 2,
      name: "Mi Laptop Pro",
      currentPrice: 45000,
      link: "mi-laptop-pro",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmi-laptop-pro-2022-09-26-01-22-47-3531.png&w=1920&q=75",
    },
    {
      id: 3,
      name: "Mi Laptop Pro",
      currentPrice: 45000,
      link: "mi-laptop-pro",
      image:
        "https://shopo-ecom.vercel.app/_next/image?url=https%3A%2F%2Fapi.websolutionus.com%2Fshopo%2Fuploads%2Fcustom-images%2Fmi-laptop-pro-2022-09-26-01-22-47-3531.png&w=1920&q=75",
    },
  ]
}
