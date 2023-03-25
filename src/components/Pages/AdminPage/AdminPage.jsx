import React, { useState } from 'react'
import styled from 'styled-components'
import { FlexContainer, RoundedContainer, TextComponent, Texth2 } from '../../../styles/styles'
import { collection, addDoc, getDocs, setDoc, doc } from 'firebase/firestore'
import { db } from '../../../config/firebase'

const AdminContainer = styled(RoundedContainer)`
    flex-direction: column;
`
export const AdminPage = () => {
    const [productData, setProductData] = useState({
        category: '',
        name: '',
        price: 0,
        description: '',
    })

    const addNewCollection = async () => {
        if (productData.category.length <= 3) return console.log('Please specify the category');

        const itemRef = doc(db, `products`, `${productData.category}`, 'items', `${productData.name}`)
        try {
            const docRef = await setDoc(itemRef, { ...productData }, { capital: true }, { merge: true })
            console.log('product id is', docRef);
        } catch (error) {
            console.log(error)
        }
    }

    const getDocsHandler = async () => {
        try {



            const queryDocs = await getDocs(collection(db, `${productData.category}`))
            // console.log(queryDocs.empty);
            queryDocs.forEach((doc) => {
                // console.log(doc);
                console.log(doc.id)
                // console.log(doc.data())
            })
        }
        catch (error) {
            console.log(error)

        }
    }

    return (
        <div>
            <Texth2>
                AdminPage
            </Texth2>
            <AdminContainer>
                <FlexContainer>
                    <TextComponent>
                        Category Name
                    </TextComponent>
                    <input type={'text'} value={productData.category} onChange={(e) => setProductData({ ...productData, category: e.target.value })} />

                </FlexContainer>
                <FlexContainer>
                    <TextComponent>
                        Product Name
                    </TextComponent>
                    <input type={'text'} value={productData.name} onChange={(e) => setProductData({ ...productData, name: e.target.value })} />

                </FlexContainer>
                <FlexContainer>
                    <TextComponent>
                        Product Price
                    </TextComponent>
                    <input type={'number'} value={productData.price} onChange={(e) => setProductData({ ...productData, price: e.target.value })} />

                </FlexContainer>
                <FlexContainer>
                    <TextComponent>
                        Product Description
                    </TextComponent>
                    <textarea type={'text'} value={productData.description} onChange={(e) => setProductData({ ...productData, description: e.target.value })} />
                    <button onClick={addNewCollection}>Upload</button>
                    <button onClick={getDocsHandler}>Get Docs</button>
                </FlexContainer>
            </AdminContainer>
        </div>
    )
}
