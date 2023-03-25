import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Container } from '../../Layout/Navbar/Navbar'
import airpodsPro from '../../../assets/airpodsPro.png'
import heroLogo from '../../../assets/hero-logo.png'
import reactSVG from '../../../assets/react.svg'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { IconButton } from '../../../styles/styles'


const MainImageContainer = styled.div`
    position: relative;
    width: 50%;
    height: 60vh;
    /* background-color: #b5b5b5c5; */
    border-right: 1px solid #b5b5b563;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    
`

const SliderContainer = styled(Container)`
    height: 20%;
    width: 75%;
    display: flex;
    justify-content: center;
    overflow-x: auto;
`

const BigImage = styled.img`
    height: 100%;
    max-width: 100%;
    object-fit:contain;
`

const SmallImage = styled.img`
    height: 100%;
    /* width: fit-content; */
    object-fit: contain;
    cursor: pointer;
    border-radius: 8px;
    border: ${props => props.active || 'none'};
`

const ArrowContainer = styled(Container)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    /* bottom: 0; */
    height: fit-content;
    left: 10%;
    right: 10%;
    justify-content: space-between;
    
`

const ArrowBtn = styled(IconButton)`
   background-color: #c6c6c6bc;   
   &:hover {
       background-color: #a1a1a1bb;
       color: black;
   }
`
const data = [
    {
        imgUrl: airpodsPro,
    },
    {
        imgUrl: heroLogo,
    },
    {
        imgUrl: reactSVG,
    },
    {
        imgUrl: airpodsPro,
    }
]
export const Slider = ({ image }) => {
    const [firstImg, setFirstImg] = useState(data[0])
    const [allImgs, setAllImgs] = useState([])
    const [currentImgIndex, setCurrentImgIndex] = useState(0)

    useEffect(() => {
        setFirstImg(allImgs[currentImgIndex])
    }, [allImgs, currentImgIndex])

    useEffect(() => {
        image && setAllImgs(image)
    }, [image])

    const nextImgHandler = () => {
        setCurrentImgIndex(idx => idx >= allImgs.length - 1 ? 0 : idx + 1)
    }
    const prevImgHandler = () => {
        setCurrentImgIndex(idx => idx <= 0 ? allImgs.length - 1 : idx - 1)
    }

    return (
        <MainImageContainer>
            <BigImage
                src={firstImg}
            />
            <SliderContainer>
                {
                    allImgs && allImgs?.map((item, idx) =>
                        <SmallImage
                            active={idx === currentImgIndex ? '1px solid black' : 'none'}
                            onClick={() => {
                                setCurrentImgIndex(idx)
                                setFirstImg(item)
                            }}
                            key={idx} src={item} />)
                }
            </SliderContainer>
            <ArrowContainer>
                <ArrowBtn onClick={prevImgHandler}>
                    <AiOutlineArrowLeft size={20} />
                </ArrowBtn>
                <ArrowBtn onClick={nextImgHandler}>
                    <AiOutlineArrowRight size={20} />
                </ArrowBtn>
            </ArrowContainer>
        </MainImageContainer>
    )
}
