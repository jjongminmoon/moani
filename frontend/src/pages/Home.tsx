import styled from "@emotion/styled";
import SectionUI from "../components/ui/SectionUI";
import { useQuery } from "@tanstack/react-query";
import { Get } from "../utils/api";

interface Image {
  imgId: number;
  fileNm: string;
  fileExtsn: string;
  filePath: string;
  priority: number;
}

export default function Home() {
  const { data, isLoading } = useQuery<Image[]>({
    queryKey: ["imageList"],
    queryFn: () => Get("/main/mainImage"),
  });

  if (isLoading) return <div>Loading...</div>;

  console.log(data);

  return (
    <SectionUI>
      {data?.map((item) => (
        <Image src={item.filePath} key={item.imgId} />
      ))}
    </SectionUI>
  );
}

const Image = styled.img`
  width: 100%;
  height: 800px;
`;
