import React from 'react'
import moment from 'moment'
import './comment.scss'
const comment = ({comment}) => {
    const {
        authorDisplayName,
        authorProfileImageUrl,
        publishedAt,
        textDisplay,
     } = comment
    return (
        <div className='p-2 comment d-flex'>
            <img src={authorProfileImageUrl} alt='' className='ms-3 rounded-circle' />
            <div className='comment__body'>
                <p className='mb-1 comment__header ms-2 mb-1'>
               {authorDisplayName} • {moment(publishedAt).fromNow()}

                </p>
                <p className='mb-0'>
                    <p className='mb-0 ms-2'>{textDisplay}</p>
                </p>
            </div>

        </div>
    )
}

export default comment
