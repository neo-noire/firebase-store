import React, { useEffect, useState } from 'react'
import { collection, addDoc, getDocs, setDoc, doc } from 'firebase/firestore'
import { db } from '../config/firebase'

export const useGetFirebaseData = (path) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    useEffect(() => {
        const getData = async () => {
            // const dataRef = collection(db, path)
            setLoading(true)
            try {
                const data = await getDocs(collection(db, path))
                data.forEach(doc => {
                    setData(prev => [...prev, doc])
                })

            } catch (error) {
                setError(error)
            } finally {
                setLoading(false)
            }
        }
        getData()
    }, [path])

    return [data, loading, error]
}
