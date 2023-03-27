import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ButtonMain, ImgComponent, RoundedContainer, TextComponent, Texth2 } from '../../../styles/styles'
import { collection, getDocs, setDoc, doc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { db, storage } from '../../../config/firebase'
import blank from '../../../assets/blank.png'
import { CategorySelect } from './CategorySelect'
import { ImageSlider } from './ImageSlider'
import { uploadImage } from './ImagePromise'

const AdminContainer = styled(RoundedContainer)`
    margin-top: 1rem;
    flex-direction: column;
    flex:1 ;
`

const AdminInput = styled.input`
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
                        'quantity image image'
                        'desc desc desc';
    grid-gap: .2rem 1rem;
`

const GridItem = styled.div`
    display:flex;
    flex-direction: column;
    height: ${p => p.height || 'initial'};
    margin-bottom: 1rem;
    grid-area: ${p => p.area};
`
export const AdminPage = () => {
    const [productData, setProductData] = useState({
        category: '',
        name: '',
        price: 0,
        description: '',
        quantity: 0,
    })

    const [allImagesToUpload, setAllImagesToUpload] = useState([])
    // const uploadImage = async (image) => {
    //     const imageRef = ref(storage, `${productData.category}/${image.name}`)
    //     const upladedImage = await uploadBytes(imageRef, image);
    //     const imageUrl = await getDownloadURL(upladedImage.ref)
    //     return imageUrl
    // }

    const ImagesUpload = async (images) => {
        const imagePromises = Array.from(images, (item) => uploadImage(item, productData.category))

        const imagesResponse = Promise.all(imagePromises)
        return imagesResponse
    }
    const addNewCollection = async () => {
        console.log(allImagesToUpload);
        if (productData.category.length <= 3) return console.log('Please specify the category');
        if (allImagesToUpload.length === 0) return


        const itemRef = doc(db, `products`, `${productData.category}`, 'items', `${productData.name + Math.random()}`)

        try {
            ImagesUpload(allImagesToUpload).then(res => {
                debugger
                setDoc(itemRef, { ...productData, image: [...res], id: Math.random() }, { capital: true }, { merge: true })
            }).then(res => console.log(res))
            console.log('product id is');
        } catch (error) {
            console.log(error)
        }
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
                    <GridItem area='name'>
                        <TextComponent>
                            Product Name:
                        </TextComponent>
                        <AdminInput type={'text'} value={productData.name} onChange={(e) => setProductData({ ...productData, name: e.target.value })} />
                    </GridItem>
                    <GridItem area='image' height='40vh'>
                        <ImageSlider setAllImagesToUpload={setAllImagesToUpload} allImagesToUpload={allImagesToUpload} />
                    </GridItem>
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
                <ButtonMain onClick={addNewCollection}>Upload</ButtonMain>
            </AdminContainer>
        </div>
    )
}
