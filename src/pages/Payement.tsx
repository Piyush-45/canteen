import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import React from 'react'

const Payement = () => {
    return (
        <div className='flex flex-col '>
            <Header />
            <div className='flex flex-col items-center w-full justify-center mt-20'>
                <img src="../../qr.jpeg" alt="" className='w-[400px] h-[400px]' />

                <input type="text" name="transaction id" id="" placeholder='fill you transaction id' className='mt-10 border-2 border-orange-300 px-10 py-2 focus:outline-none ' />
            </div>

            <Footer />
        </div>
    )
}

export default Payement