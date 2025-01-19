import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { MdOutlineArrowBackIos } from "react-icons/md";

type Image = {
  imgId: number;
  fileNm: string;
  fileExtsn: string;
  filePath: string;
  prior: number;
  imgType: number;
};

interface CaruoselProps {
  images?: Image[];
}

export default function CarouselUI({ images = [] }: CaruoselProps) {
  const [current, setCurrent] = useState(1);
  const infiniteImages = [images[images.length - 1], ...images, images[0]]; // 무한 캐러셀 더미 이미지

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrent((prev) => prev - 1);
  };

  // 더미 이미지 도달 시 위치 조정
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (current === infiniteImages.length - 1) {
        setCurrent(1);
      } else if (current === 0) {
        setCurrent(infiniteImages.length - 2);
      }
    }, 0);

    return () => clearTimeout(timeout);
  }, [current, infiniteImages.length]);

  return (
    <Container>
      <Carousel>
        <Wrapper current={`translateX(-${current * 100}%)`}>
          {infiniteImages?.map((image: Image, index) => (
            <Slide isCurrent={index === current}>
              <Item key={image.imgId} src={image.filePath}></Item>
            </Slide>
          ))}
        </Wrapper>
        <PrevButton onClick={prevSlide} />
        <NextButton onClick={nextSlide} />
      </Carousel>
    </Container>
  );
}

const Container = styled.div`
  margin-top: 110px;
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
  transform: ${(props) => props.current};
  transition: transform 0.5s ease-in-out;
`;

const Slide = styled.div<{ isCurrent: boolean }>`
  flex-shrink: 0;
  width: 100%;
  height: 650px;
  border-radius: 10px; /* 둥근 모서리 */
  padding: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  filter: ${(props) => (props.isCurrent ? "none" : "blur(3px)")};
  transition: filter 0.3s ease-in-out;
`;

const Item = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const PrevButton = styled(MdOutlineArrowBackIos)`
  position: absolute;
  top: 50%;
  left: 3%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
  font-size: 30px;
  color: white;
`;

const NextButton = styled(MdOutlineArrowForwardIos)`
  position: absolute;
  top: 50%;
  right: 3%;
  transform: translateY(-50%);
  cursor: pointer;
  z-index: 10;
  font-size: 30px;
  color: white;
`;
