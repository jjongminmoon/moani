import styled from "@emotion/styled";

export default function SectionUI({ children }: { children: React.ReactNode }) {
  return <Section>{children}</Section>;
}

const Section = styled.section`
  background-color: #fff;
  overflow-x: hidden;
`;
