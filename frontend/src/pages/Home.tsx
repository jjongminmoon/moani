import styled from "@emotion/styled";
import { useQuery } from "@tanstack/react-query";
import { Post } from "../utils/api";

export default function Home() {
  const { data, isLoading } = useQuery({
    queryKey: ["video"],
    queryFn: () => Post("/main/mainImage", { imgType: 2 }),
  });

  if (isLoading) return <div>...Loading</div>;

  return (
    <section>
      <Wrapper>
        <Video src={data[0].filePath} autoPlay loop></Video>
      </Wrapper>
    </section>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  scroll-snap-align: start;
`;

const Video = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
