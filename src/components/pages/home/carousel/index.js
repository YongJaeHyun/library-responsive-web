import Slider from "react-slick";
import styled from "styled-components";
import IconBtn from "../../../../components/IconBtn";
import Item from "./Item";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselContainer = styled.div`
  background-color: #f2f2f2;
  border-radius: 10px;
`;

const CarouselSlider = styled(Slider)`
  display: flex !important;
`;

const carouselImgs = [
  "http://sigongsa.com/filedata/book/SB007275/detail_SB007275.jpg",
  "https://sigongsa.com/filedata/book/SB007268/detail_SB007268.jpg",
  "https://www.sigongsa.com/filedata/book/SB003972/list96_SB003972.jpg",
  "http://www.sigongsa.com/filedata/book/SB007259/detail_SB007259.jpg",
  "http://www.sigongsa.com/filedata/book/SB007270/detail_SB007270.jpg",
  "http://www.sigongsa.com/filedata/book/SB007267/detail_SB007267.jpg",
  "http://www.sigongsa.com/filedata/book/SB007266/detail_SB007266.jpg",
  "http://www.sigongsa.com/filedata/book/SB007269/detail_SB007269.jpg",
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  nextArrow: <IconBtn title="chevron_right" fontSize="50px" />,
  prevArrow: <IconBtn title="chevron_left" fontSize="50px" />,
  responsive: [
    { breakpoint: 1200, settings: { slidesToShow: 4 } },
    { breakpoint: 992, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 576, settings: { slidesToShow: 1 } },
  ],
};

// For Image Preloading
carouselImgs.forEach(async (img) => await (new Image().src = img));

const Carousel = () => {
  return (
    <CarouselContainer>
      <CarouselSlider {...settings}>
        {carouselImgs.map((src, idx) => (
          <Item key={idx} src={src} />
        ))}
      </CarouselSlider>
    </CarouselContainer>
  );
};

export default Carousel;
