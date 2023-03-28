import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useGetFirebaseData } from '../../../hooks/useGetFirebaseData'
import { ButtonMain, TextComponent } from '../../../styles/styles'
import { AdminInput, GridItem } from './AdminPage'
import { db } from '../../../config/firebase'
import { collection, getDocs } from 'firebase/firestore'

const EditButton = styled(ButtonMain)`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    padding: .6rem;
    border-radius: 0;
`

const ItemsList = styled.div`
    width: 100%;
    background-color: white;
    border: 1px solid black;
    position: absolute;
`

const Items = styled.div`
    width: 100%;
    padding: .5rem;
    color: ${p => p.color};
    cursor: pointer;
    &:hover {
        background-color: ${p => p.bgHover || 'lightgray'};
    }
`
export const ProductSelect = ({ productData, setProductData }) => {
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [dropdown, setDropdown] = useState(false)

    const getProductsToEdit = async () => {
        if (productData.category === "") return setError('Please choose category')
        setLoading(true)
        try {
            setData([])
            const data = await getDocs(collection(db, `products/${productData.category}/items`))
            data.forEach(doc => {
                setData(prev => [...prev, doc.data()])
            })
            setLoading(false)
            setError(null)
            setDropdown(true)
        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }

    const handleChangeProductData = (product) => {
        setDropdown(false)
        setProductData(product)
    }
    useEffect(() => {

        console.log(data);
        console.log(error);
    }, [data, error])
    return (
        <GridItem area='name'>
            <TextComponent>
                Product Name:
            </TextComponent>
            <div style={{ position: 'relative' }}>
                <AdminInput type={'text'} value={productData.name} onClick={() => setDropdown(false)} onChange={(e) => setProductData({ ...productData, name: e.target.value })} />
                <EditButton onClick={getProductsToEdit}>Edit existing</EditButton>
                {
                    dropdown &&
                    <ItemsList>
                        {
                            data && data.map(item => <Items key={item.id} onClick={() => handleChangeProductData(item)}>{item.name}</Items>)
                        }
                        {
                            data.length === 0 && <Items color={'red'} bgHover={'none'} onClick={() => setDropdown(false)}>No products in this category</Items>
                        }
                    </ItemsList>
                }
            </div>
        </GridItem>
    )
}
