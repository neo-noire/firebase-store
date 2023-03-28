import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { storage } from '../../../config/firebase'
import { nanoid } from 'nanoid'



export const uploadImage = async (image, category, id) => {
    const imgId = nanoid(6)
    const imageRef = ref(storage, `${category}/${id}/${image.name + imgId}`)
    const upladedImage = await uploadBytes(imageRef, image);
    const imageUrl = await getDownloadURL(upladedImage.ref)
    return imageUrl
}

export const ImagesUpload = async (images, category, id) => {
    const imagePromises = Array.from(images, (item) => uploadImage(item, category, id))

    const imagesResponse = Promise.all(imagePromises)
    return imagesResponse
}
