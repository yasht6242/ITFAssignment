import styled from "styled-components";

export const FullHeader = styled.div`
  display: flex;
  align-items: center;
  font-family: "Poppins", sans-serif;
  padding: 0px 157px;
`;

export const AfterShortly = styled.div`
  margin-left: 20px;
  display: flex;
  align-items: center;
  @media (max-width: 663px) {
    display: none;
  }
`;

export const Shortlytext = styled.div`
  font-size: 30px;
  font-family: "Poppins", sans-serif;
  color: #232127;
  font-weight: 700;
`;
export const Aftertext = styled.div`
  font-size: 15px;
  font-family: "Poppins", sans-serif;
  color: #bfbfbf;
  margin-left: 20px;
  &:hover {
    color: #232127;
    cursor: pointer;
  }
`;
