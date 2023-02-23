import styled from "@emotion/styled";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 20% 1fr;
  grid-template-rows: 1fr;
  gap: 0px 0px;
  grid-template-areas:
    "sidebar content"
    "sidebar content";
`;
