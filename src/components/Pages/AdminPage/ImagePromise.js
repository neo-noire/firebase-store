import { collection, getDocs, setDoc, doc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { db, storage } from '../../../config/firebase'



export const uploadImage = async (image, category) => {
    const imageRef = ref(storage, `${category}/${image.name + Math.random()}`)
    const upladedImage = await uploadBytes(imageRef, image);
    const imageUrl = await getDownloadURL(upladedImage.ref)
    return imageUrl
}
