import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ButtonMain, RoundedContainer, TextComponent, Texth2, Label, ResetButton } from '../../../styles/styles'
import { setDoc, doc } from 'firebase/firestore'
import { db } from '../../../config/firebase'
import { CategorySelect } from './CategorySelect'
import { ImageSlider } from './ImageSlider'
import { ImagesUpload } from './ImagePromise'
import { ProductSelect } from './ProductSelect'
import { nanoid } from 'nanoid'

const AdminContainer = styled(RoundedContainer)`
    margin-top: 1rem;
    flex-direction: column;
    flex:1 ;
`

export const AdminInput = styled.input`
    width: 100%;
    height: 2rem;
    padding: 1rem;
    display: ${p => p.display};
`

const GridContainer = styled.div`
    width: 80%;
    display: grid;
    grid-template-areas: 'cat image image'
                        'name image image'
                        'price image image'
                        'price image image'
                        'quantity editImg editImg'
                        'desc desc desc';
    grid-gap: .2rem 1rem;
`

export const GridItem = styled.div`
    display:flex;
    flex-direction: ${p => p.direction || 'column'};
    justify-content: ${p => p.justify};
    align-items: ${p => p.align};
    gap: ${p => p.gap};
    height: ${p => p.height || 'initial'};
    margin-bottom: ${p => p.mb || '1rem'};
    grid-area: ${p => p.area};
`



const AdminPage = () => {
    const [editExistingImages, setEditExistingImages] = useState(false);
    const [productData, setProductData] = useState({
        category: '',
        name: '',
        price: 0,
        description: '',
        quantity: 0,
        id: '',
    })
    const [allImagesToUpload, setAllImagesToUpload] = useState([])

    const addNewCollection = async () => {
        if (productData.category.length <= 3) return console.log('Please specify the category');
        if (allImagesToUpload.length === 0) return
        const uniqueId = `${productData.name + `-` + nanoid(8)}`;
        const itemRef = doc(db, `products`, `${productData.category}`, 'items', `${uniqueId}`)

        try {
            ImagesUpload(allImagesToUpload, productData.category, uniqueId).then(res => {
                setDoc(itemRef, { ...productData, id: uniqueId, image: [...res] }, { capital: true }, { merge: true })
            }).then(res => console.log(res))
            console.log('product id is');
        } catch (error) {
            console.log(error)
        }
    }

    const editProduct = async () => {
        if (productData.category.length <= 3) return console.log('Please specify the category');
        if (!productData.id) return console.log('No such product in db');
        const itemRef = doc(db, `products`, `${productData.category}`, 'items', `${productData.id}`)
        const result = await setDoc(itemRef, { ...productData }, { capital: true }, { merge: true })
        console.log(result);
    }

    const replaceImgHandler = () => {
        alert('By choosing this value you confirm to rewrite original images in db')
        setEditExistingImages(true)
    }


    console.log(productData);
    return (
        <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
            <Texth2>
                AdminPage
            </Texth2>
            <AdminContainer>
                <GridContainer>
                    <GridItem area='cat'>
                        <TextComponent>
                            Category Name:
                        </TextComponent>
                        <CategorySelect setProductData={setProductData} />
                    </GridItem>
                    <ProductSelect productData={productData} setProductData={setProductData} />
                    <GridItem area='image' height='40vh'>
                        <ImageSlider productData={productData} setAllImagesToUpload={setAllImagesToUpload} allImagesToUpload={allImagesToUpload} />
                    </GridItem>
                    {
                        productData.image &&
                        <GridItem area='editImg' align='center' direction='row' justify='space-evenly' mb='0'>
                            <Label>
                                <input onClick={() => replaceImgHandler()}
                                    type='radio'
                                    name='imgEdit' />
                                Replace original images
                            </Label>
                            <Label >
                                <input onClick={() => setEditExistingImages(false)}
                                    defaultChecked
                                    type='radio'
                                    name='imgEdit' />
                                Keep original images
                            </Label>
                        </GridItem>
                    }
                    <GridItem area='price'>
                        <TextComponent>
                            Product Price:
                        </TextComponent>
                        <AdminInput type={'number'} value={productData.price} onChange={(e) => setProductData({ ...productData, price: e.target.value })} />
                    </GridItem>
                    <GridItem area='quantity'>
                        <TextComponent>
                            Stock quantity:
                        </TextComponent>
                        <AdminInput type={'number'} value={productData.quantity} onChange={(e) => setProductData({ ...productData, quantity: e.target.value })} />
                    </GridItem>
                    <GridItem area='desc'>
                        <TextComponent>
                            Product Description:
                        </TextComponent>
                        <textarea style={{ padding: '.5rem', height: '5rem' }} type={'text'} value={productData.description} onChange={(e) => setProductData({ ...productData, description: e.target.value })} />
                    </GridItem>
                </GridContainer>
                <GridItem direction='row' gap='2rem'>

                    {
                        productData.id
                            ? <ButtonMain onClick={editProduct}>Edit</ButtonMain>
                            : <ButtonMain onClick={addNewCollection}>Upload</ButtonMain>
                    }
                    <ResetButton onClick={() => setProductData({
                        category: '',
                        name: '',
                        price: 0,
                        description: '',
                        quantity: 0,
                        id: '',
                    })}>Reset</ResetButton>
                </GridItem>
            </AdminContainer>
        </div>
    )
}

export default AdminPage;