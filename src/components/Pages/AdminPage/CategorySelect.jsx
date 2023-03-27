import React, { useEffect, useState } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../../config/firebase'

export const CategorySelect = ({ setProductData }) => {
    const [categoriesList, setCategoriesList] = useState([])

    useEffect(() => {
        const getCategories = async () => {

            const dbRef = collection(db, 'products')

            try {
                const categoriesFetch = await getDocs(dbRef)
                categoriesFetch.forEach(item => setCategoriesList(prev => [...prev, item.id]))
            } catch (error) {
                console.log(error);
            }
        }
        getCategories()
    }, [])

    return (
        <select style={{ height: '2rem', padding: '.5rem' }} name="category" onChange={(e) => setProductData(prev => ({ ...prev, category: e.target.value }))}>
            <option value="">--Please choose category--</option>
            {
                categoriesList && categoriesList.map((el, idx) =>
                    <option key={idx} value={el}>{el}</option>
                )
            }
        </select >
    )
}
