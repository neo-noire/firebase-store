import React, { useEffect, useState } from 'react'
import { Category } from './Category'
import { Hero } from './Hero'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { collection, addDoc, getDocs, setDoc, doc } from 'firebase/firestore'
import { db } from '../../../config/firebase'
import { useGetFirebaseData } from '../../../hooks/useGetFirebaseData'


export const MainPage = () => {
    const [data, loading, error] = useGetFirebaseData('products')
  
    return (
        <>
            <Hero />
            {
                loading && <div>Loading...</div>
            }
            {
                data?.map((item, idx) => <Category key={item + idx} name={item.id} />)
            }
        </>
    )
}
