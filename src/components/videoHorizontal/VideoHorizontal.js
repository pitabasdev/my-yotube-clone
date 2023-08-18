import React from 'react'
import './_videoHorizontal.scss'
import { AiFillEye } from 'react-icons/ai'
// import request from '../../api'
import { Col, Row } from 'react-bootstrap'
import moment from 'moment'
import numeral from 'numeral'
import { LazyLoadImage } from 'react-lazy-load-image-component'
const VideoHorizontal = () => {
    return (
        <Row
            className='py-2 m-1 videoHorizontal align-items-center'>
            <Col xs={6} md={6} className='videoHorizontal__left'>
                <LazyLoadImage
                    src='https://i.ytimg.com/vi/9u9OqOiSbbc/maxresdefault.jpg'
                    effect='blur'
                    className='videoHorizontal__thumbnail'
                    wrapperClassName='videoHorizontal__thumbnail-wrapper'
                />
                <span className='videoHorizontal__duration'>05:00</span>
            </Col>
            <Col xs={6} md={6} className='videoHorizontal__right p-0'>
                <p className='mb-1 videoHorizontal__title'>
                    Creating a MERN Stack Google Keep Clone | MERN Stack Tutorial
                </p>
                <div className='videoHorizontal__details'>
                    <AiFillEye /> {numeral(100000).format('0.a')} Views •
                    {moment('2020-05-05').fromNow()}
                </div>
                <p className='mt-1 videoHorizontal__desc'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quibusdam.
                </p>
                <div className='my-1 videoHorizontal__channel d-flex align-items-center'>
                    <p>Pitabas </p>
                </div>

            </Col>
        </Row>
    )
}

export default VideoHorizontal
