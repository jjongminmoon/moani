import styled from "@emotion/styled";

export default function SectionUI({ children }: { children: React.ReactNode }) {
  return <Section>{children}</Section>;
}

const Section = styled.section`
  max-width: 1200px;
  margin: 134px auto 0 auto;
  background-color: #fff;
`;
