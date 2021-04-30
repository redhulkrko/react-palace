import styled from "styled-components";

export const TabsNav = styled.nav`
  /* background: ${({ scrollNav }) => (scrollNav ? "#000" : "transparent")}; */
  background: #150f0f;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  top: 0;
  z-index: 10;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

export const TabsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  background: #eb1826;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0;
  max-width: 1100px;
`;

export const TabLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  padding: 0.5rem 1rem;
  flex: auto;
  text-align: center;
  height: 100%;
  cursor: pointer;

  &.all {
    background: #b20404;
    color: #fff;
  }

  &.active {
    background: #cd0404;
    color: #fff;
  }
`;

export const TabsContent = styled.div`
  display: block;
  width: 100%;
`;
