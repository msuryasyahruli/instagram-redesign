import React from 'react'
import style from './explore.module.css'

const Explore = () => {
    return (
        <>
            <div className={`${style.backgound}`}>
                <div className='d-flex flex-wrap justify-content-center m-2'>
                    <div className={style.contentImg}>
                        <img src={require('../../assets/image/GyozaChicken.jpg')} alt="contentImg" className='w-100 h-100'/>
                    </div>
                    <div className={style.contentImg}>
                        <img src={require('../../assets/image/GyozaChicken.jpg')} alt="contentImg" className='w-100 h-100'/>
                    </div>
                    <div className={style.contentImg}>
                        <img src={require('../../assets/image/GyozaChicken.jpg')} alt="contentImg" className='w-100 h-100'/>
                    </div>
                    <div className={style.contentImg}>
                        <img src={require('../../assets/image/GyozaChicken.jpg')} alt="contentImg" className='w-100 h-100'/>
                    </div>
                    <div className={style.contentImg}>
                        <img src={require('../../assets/image/GyozaChicken.jpg')} alt="contentImg" className='w-100 h-100'/>
                    </div>
                    <div className={style.contentImg}>
                        <img src={require('../../assets/image/GyozaChicken.jpg')} alt="contentImg" className='w-100 h-100'/>
                    </div>
                    <div className={style.contentImg}>
                        <img src={require('../../assets/image/GyozaChicken.jpg')} alt="contentImg" className='w-100 h-100'/>
                    </div>
                    <div className={style.contentImg}>
                        <img src={require('../../assets/image/GyozaChicken.jpg')} alt="contentImg" className='w-100 h-100'/>
                    </div>
                    <div className={style.contentImg}>
                        <img src={require('../../assets/image/GyozaChicken.jpg')} alt="contentImg" className='w-100 h-100'/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Explore