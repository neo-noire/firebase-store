import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Card } from '../../Card/Card'
import { Container } from '../../Layout/Navbar/Navbar'
import { useGetFirebaseData } from '../../../hooks/useGetFirebaseData'
import { devices } from '../../../styles/breakpoints'

const CategoryContainer = styled(Container)`
    flex-wrap: wrap;
    @media ${devices.tabletS} {
        flex-wrap: nowrap;
        overflow: auto;
    }
`

export const TextCat = styled.h2`
    margin: 30px 0 20px;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    text-transform: ${p => p.textTransform || 'capitalize'}; 
    color: #838383;
`

export const Category = ({ name }) => {
    const [data, setData] = useState([])
    const [info, loading, error] = useGetFirebaseData(`products/${name}/items`)

    useEffect(() => {
        info.map(doc => setData(prev => [...prev, doc.data()]))
    }, [info])



    return (
        <>
            {
                data.length > 0 &&
                <>
                    <TextCat>
                        {name.toLowerCase()}
                    </TextCat>
                    <CategoryContainer>
                        {
                            data && data?.map((item, idx) => <Card key={idx + item} data={item} />)
                        }
                    </CategoryContainer>
                </>
            }
        </>
    )
}
