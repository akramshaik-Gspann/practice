import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState } from "react";
import styled from "styled-components";
import { sliderItems } from "../../data";
import { NavLink } from "react-router-dom";
import '../../assets/scss/slider.css';

const Container = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  overflow: hidden;
  
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "30px"};
  right: ${(props) => props.direction === "right" && "30px"};
  margin: auto;
  cursor: pointer;
  opacity: 1;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 510px;
  display: flex;
  align-items: center;
  background-color: #00000033;
`;

const ImgContainer = styled.div`
  
  flex: 1;
`;

const Image = styled.img`
  height: 510px;
  width: 684px;

  @media only screen and (max-width: 1024px) {
    width:511px;
  }
  @media only screen and (max-width: 1440px) {
    width:100%;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 75px;
  // height: 510px;
  // width: 684px;
`;

const Title = styled.h1`
  margin-top:0px;
  color:#172026;
  font: normal normal 600 30px/40px Source Serif Pro;
`;

const Desc = styled.p`
  
  color:#172026;
  height:75px;
  text-align: left;
  font: normal normal normal 16px/24px Muli;
  @media only screen and (max-width: 1024px) {
    width:445px;
  }
`;

const Button = styled.button`

    cursor: pointer;
    width: 195px;
    height: 36px;
    background: #E26A2C 0% 0% no-repeat padding-box;
    opacity: 1;
    border: none;
    color: #FFFFFF;
    font-size: 15px;

`;


const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowBackIosIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <div class="aem-Grid aem-Grid--12 sliderSize"
            // style={{marginTop: "139px"}}
            >
              <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                <InfoContainer >
                  <Title>{item.title}</Title>
                  <Desc>{item.desc}</Desc>
                  <NavLink to="/products">  <Button>SHOP NOW </Button></NavLink>
                </InfoContainer>
              </div>
              <div class="aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--12">
                <ImgContainer>
                  <Image src={item.img} />
                </ImgContainer>
              </div>
            </div>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowForwardIosIcon />
      </Arrow>
    </Container>
  );
};

export default Slider;
