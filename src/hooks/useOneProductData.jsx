import { useEffect, useState } from 'react'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../config/firebase'

export const useOneProductData = (path) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    useEffect(() => {
        const getInfo = async () => {
            setLoading(true)
            const dbRef = doc(db, `products/${path}`)
            try {
                const info = await getDoc(dbRef)
                if (info.exists()) {
                    setData(info.data())
                } else {
                    setError('No such document in collection')
                }
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false)
            }
        }

        getInfo()
    }, [path])

    return [data, loading, error]
}
