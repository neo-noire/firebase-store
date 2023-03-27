import React from 'react'
import { useSelector } from 'react-redux'
import { FlexContainer, Texth2 } from '../../../styles/styles'
import { Card } from '../../Card/Card'
import { TextCat } from '../MainPage/Category'

export const FavouritePage = () => {
    const favourite = useSelector(state => state.fav.items)

    return (
        <FlexContainer flexDirection='column' alignItems='flex-start' flex='1'  directionMobile='column'>
            <Texth2>
                Favourite
            </Texth2>
            {
                favourite.length === 0 &&
                <div style={{ flex: '1', width: '100%', display: 'grid', placeItems: 'center' }}>
                    <TextCat textTransform='initial'>
                        Your wishlist is empty
                    </TextCat>
                </div>

            }
            <FlexContainer gap='1rem' margin='1rem auto 0' wrap='wrap' directionMobile='column'>
                {
                    favourite && favourite.map((item, idx) => <Card key={idx + item.name} data={item} />)
                }
            </FlexContainer>

        </FlexContainer>
    )
}
