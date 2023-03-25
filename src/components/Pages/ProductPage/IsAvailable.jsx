import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

const TextAvailable = styled.span`
    display: block;
    color: ${p => p.color || 'inherit'};
    font-size: 1rem;
    margin:0;
`


export const IsAvailable = ({ quantity }) => {
    const [isAvailable, setIsAvailable] = useState(false)

    useEffect(() => {
        quantity > 0
            ? setIsAvailable(true)
            : setIsAvailable(false)
    }, [quantity])

    return (
        <>
            {
                isAvailable
                    ? <TextAvailable color='green'>Available</TextAvailable>
                    : <TextAvailable color='red'>Out of Stock</TextAvailable>

            }
        </>
    )
}
