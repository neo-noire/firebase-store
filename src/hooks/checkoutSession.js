import axios from 'axios'


export const checkoutSession = async (products) => {
    try {
        const response = await axios.post('http://localhost:8080/create-payment-session', { products: products })
        window.location.href = response.data
    } catch (error) {
        console.log(error);
    }
}