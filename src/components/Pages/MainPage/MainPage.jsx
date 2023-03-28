import React, { useEffect, useState } from 'react'
import { Category } from './Category'
import { Hero } from './Hero'
import { useGetFirebaseData } from '../../../hooks/useGetFirebaseData'
import { Oval } from 'react-loader-spinner'


export const MainPage = () => {
    const [data, load, error] = useGetFirebaseData('products')


    if (load) {
        return (
            <div style={{ display: 'grid', placeItems: 'center', backgroundColor: '#EAEAEA', flex: '1' }}>
                <Oval
                    height={80}
                    width={80}
                    color="gray"
                    wrapperStyle={{}}
                    wrapperClass=""
                    visible={true}
                    ariaLabel='oval-loading'
                    secondaryColor="#FFA542"
                    strokeWidth={2}
                    strokeWidthSecondary={2}

                />
            </div>
        )
    }

    return (
        <>
            <Hero />
            {
                data?.map((item, idx) => <Category key={item + idx} name={item.id} />)
            }
        </>
    )
}
