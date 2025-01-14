import styled from "@emotion/styled";
import { useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";
import { Image } from "../../pages/Home";

interface CaruoselProps {
  images?: Image[];
}

export default function CarouselUI({ images = [] }: CaruoselProps) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === images?.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? images?.length - 1 : prev - 1));
  };

  return (
    <Container>
      <Carousel>
        <Wrapper current={`translateX(-${current * 100}%)`}>
          {images?.map((image: Image, index) => (
            <Item
              key={image.imgId}
              src={image.filePath}
              isCurrent={index === current}></Item>
          ))}
        </Wrapper>
        <PrevButton onClick={prevSlide} />
        <NextButton onClick={nextSlide} />
      </Carousel>
    </Container>
  );
}

const Container = styled.div`
  border-top: 1px solid #ddd;
  border-bottom: 1px solid #ddd;
  margin-top: 100px;
  padding: 10px 0;
`;

const Carousel = styled.div`
  position: relative;
  width: 70%;
  height: 100%;
  margin: 0 auto;
`;

const Wrapper = styled.div<{ current: string }>`
  display: flex;
  gap: 50px;
  transform: ${(props) => props.current};
  transition: transform 0.5s ease-in-out;
`;

const Item = styled.img<{ isCurrent: boolean }>`
  width: 100%;
  height: 700px;
  object-fit: cover;
  padding: 20px;
  border-radius: 10px; /* 둥근 모서리 */
  box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.2),
    -10px -10px 20px rgba(0, 0, 0, 0.1);
  filter: ${(props) => (props.isCurrent ? "none" : "blur(5px)")};
  transition: filter 0.3s ease-in-out;
`;

const PrevButton = styled(MdOutlineArrowBackIos)`
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
`;

const NextButton = styled(MdOutlineArrowForwardIos)`
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
`;
