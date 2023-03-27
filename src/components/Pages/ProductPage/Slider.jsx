import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Container } from '../../Layout/Navbar/Navbar'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { IconButton } from '../../../styles/styles'
import { devices } from '../../../styles/breakpoints'
import useMediaQuery from '@mui/material/useMediaQuery';

export const MainImageContainer = styled.div`
    position: relative;
    width:${p => p.width || '50%'};
    height:${p => p.height || '60vh'};
    /* background-color: #b5b5b5c5; */
    border-right:${p => p.borderRight || '1px solid #b5b5b563'};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    @media ${devices.tabletM} {
        width: 100%;
        border-right:none;

    };

    @media (max-width: 480px) {
        height: 100%;
    }
`

export const SliderContainer = styled(Container)`
    height: 20%;
    width: 75%;
    display: flex;
    justify-content: center;
    overflow-x: auto;
    @media (max-width: 480px) {
        justify-content: flex-start;
        width: 85%;
        gap: 0;
    }
`

export const BigImage = styled.img`
    height: 100%;
    max-width: 100%;
    object-fit:contain;
`

export const SmallImage = styled.img`
    height: 100%;
    /* width: fit-content; */
    object-fit: contain;
    cursor: pointer;
    border-radius: 8px;
    border: ${props => props.active || 'none'};
    @media (max-width: 480px) {
        border: none;
    }
`

export const ArrowContainer = styled(Container)`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    /* bottom: 0; */
    height: fit-content;
    left: 10%;
    right: 10%;
    justify-content: space-between;
   
`

export const ArrowBtn = styled(IconButton)`
   background-color: #c6c6c6bc;   
   &:hover {
       background-color: #a1a1a1bb;
       color: black;
   }
`

export const Slider = ({ image }) => {
    const matches = useMediaQuery('(min-width:480px)');
    const [firstImg, setFirstImg] = useState([])
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
            {
                matches &&
                <div style={{ height: '70%' }}>
                    <BigImage
                        src={firstImg}
                    />
                </div>
            }
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
            {
                matches &&
                <ArrowContainer>
                    <ArrowBtn onClick={prevImgHandler}>
                        <AiOutlineArrowLeft size={20} />
                    </ArrowBtn>
                    <ArrowBtn onClick={nextImgHandler}>
                        <AiOutlineArrowRight size={20} />
                    </ArrowBtn>
                </ArrowContainer>
            }
        </MainImageContainer>
    )
}
