import styled from "styled-components";
import ImgBg from "../../images/poster.jpg";

export const HeroContainer = styled.div`
  height: 100vh;
  /* margin-top: -80px; */
`;

export const HeroContent = styled.div`
  height: 100vh;
  max-height: 100%;
  width: 100vw;
  padding: 0rem calc((100vw - 1300px) / 2);
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  height: 80vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const HeroItemsContainer = styled.div`
  border-left: 2px solid red;
  padding: 0 1rem;
`;

export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 5vw, 2.5rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e8ba23;
  letter-spacing: 3px;
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 1rem 4rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;

  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #fff;
  }
`;

export const MovieSlide = styled.div`
  height: 100vh;
  max-height: 100%;
  width: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);

  &:before {
    content: "";
    z-index: 1;
    height: 100%;
    position: absolute;
    top: auto;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: radial-gradient(
      rgba(24, 24, 24, 0) 0%,
      rgba(24, 24, 24, 0.8) 100%
    );
  }
`;

export const MovieItem = styled.div`
  position: relative;

  &:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 50%;
    background: linear-gradient(rgba(0, 0, 0, 0) 0%, black 80%);
  }
`;

export const MoviePoster = styled.img`
  max-width: 100%;
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  object-position: 50% 0;
  vertical-align: top;
`;

export const MovieDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  position: absolute;
  margin-left: 52px;
  bottom: 0;
  left: 0;
  padding-right: 16px;
  padding-bottom: 40px;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  z-index: 2;

  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;

export const MovieStatus = styled.span`
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 3px 4px;
  margin-bottom: 8px;
  display: inline-block;
  background: #eb0028;
  color: #fff;
`;

export const MovieTitle = styled.h1`
  color: white;
  font-size: 40px;
  line-height: 1.16667em;
  margin: 0 0 2px;
  text-transform: uppercase;
`;

export const MovieDuration = styled.span`
  display: block;
  color: #ececec;
`;
