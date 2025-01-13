import styled from "@emotion/styled";
import { useState } from "react";

export default function Carousel(images: []) {
  const [current, setCurrent] = useState(0);

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return <Container>Carousel</Container>;
}

const Container = styled.div``;
