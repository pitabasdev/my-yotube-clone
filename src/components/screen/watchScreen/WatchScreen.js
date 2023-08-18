import React, { useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import VideoMetaData from '../../videoMetaData/VideoMetaData'
import VideoHorizontal from '../../videoHorizontal/VideoHorizontal'
import Comments from '../../Comments.js/Comments'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import './watchScreen.scss'
import { getVideoById } from '../../../redux/actions/videos.action'
import { getRelatedVideos } from '../../../redux/actions/videos.action'


const WatchScreen = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getVideoById(id))
    dispatch(getRelatedVideos(id))
 



  }, [dispatch, id])
  const { video, loading } = useSelector(
    state => state.selectedVideo
  )
//   const { videos, loading: relatedVideosLoading } = useSelector(
//     state => state.relatedVideos
//  )

  return (
    <Row>

      <Col lg={8}>
        <div className='watchScreen__player'>
          <iframe
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder='0'
            title={video?.snippet?.title}
            allowFullScreen
            width='100%'
            height='100%'></iframe>
        </div>
      
        {!loading ? (
          <VideoMetaData video={video} videoId={id} />
        ) : (
          <h6>Loading...</h6>
        )}
        <Comments videoId={id} totalComments={video?.statistics?.commentCount}/>

      </Col>
      <Col lg={4}>
        {
         [...Array(10)].map(() => <VideoHorizontal video={video} />)
        }

      </Col>
    </Row>
  )
}

export default WatchScreen
