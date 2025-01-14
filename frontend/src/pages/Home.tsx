import styled from "@emotion/styled";
import SectionUI from "../components/ui/SectionUI";
import { useQuery } from "@tanstack/react-query";
import { Get } from "../utils/api";
import CarouselUI from "../components/ui/CarouselUI";

export type Image = {
  imgId: number;
  fileNm: string;
  fileExtsn: string;
  filePath: string;
  priority: number;
};

export default function Home() {
  const { data, isLoading } = useQuery<Image[]>({
    queryKey: ["imageList"],
    queryFn: () => Get("/main/mainImage"),
  });

  if (isLoading) return <div>Loading...</div>;

  console.log(data);

  return (
    <SectionUI>
      <CarouselUI images={data} />
    </SectionUI>
  );
}
