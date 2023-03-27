import React, { useEffect, useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai'
import { ArrowBtn, ArrowContainer, BigImage, MainImageContainer, SliderContainer, SmallImage } from '../ProductPage/Slider'
import blank from '../../../assets/blank.png'
import addImage from '../../../assets/addImage.png'
import styled from 'styled-components'

const SliderHorizontalImages = styled(SliderContainer)`
    height: 30%;
    overflow: hidden;
`
export const ImageSlider = ({ setAllImagesToUpload, allImagesToUpload }) => {
    const [mainImage, setMainImage] = useState()
    const [allImagesURL, setAllImagesURL] = useState([])

    const imageInputHandler = (e) => {
        if (allImagesURL.length === 3) {
            setMainImage(URL.createObjectURL(e.target.files[0]))
            setAllImagesURL([...allImagesURL.slice(1, 3), URL.createObjectURL(e.target.files[0])])
            setAllImagesToUpload([...allImagesToUpload.slice(1, 3), e.target.files[0]])
        } else {
            setMainImage(URL.createObjectURL(e.target.files[0]))
            setAllImagesURL([...allImagesURL, URL.createObjectURL(e.target.files[0])])
            setAllImagesToUpload([...allImagesToUpload, e.target.files[0]])
        }
    }

    return (
        <MainImageContainer width='100%' borderRight='none' height='100%'>
            <div style={{ height: '70%' }}>
                <BigImage
                    src={mainImage || blank}
                />
            </div>

            <SliderHorizontalImages>
                {
                    allImagesURL && allImagesURL?.map((item, idx) =>
                        <SmallImage
                            key={idx}
                            onClick={() => {
                                setMainImage(item)
                            }}
                            src={item} />)
                }
                <label style={{ height: '100%' }} >
                    <SmallImage src={addImage} />
                    <input style={{ display: 'none' }} type='file' onChange={imageInputHandler} />
                </label>

            </SliderHorizontalImages>
        </MainImageContainer>
    )
}
