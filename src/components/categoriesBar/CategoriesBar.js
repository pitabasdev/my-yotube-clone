import React from 'react'
import "./_categogoriesBar.scss"
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getVideosByCategory } from '../../redux/actions/videos.action'
import { getPopularVideos } from '../../redux/actions/videos.action'
const keywords = [
    'All',
    'React js',
    'Node js',
    'Angular js',
    'odia songs',
    'Hindi movies',
    'Odia movies',
    'React Native',
    'use of API',
    'Redux',
    'Music',
    'Algorithm Art ',
    'Guitar',
    'Bengali Songs',
    'Coding',
    'Cricket',
    'Football',
    'Real Madrid',
    'Gatsby',
    'Poor Coder',
    'Shwetabh',
]

const CategoriesBar = () => {

    const [activeElement, setActiveElement] = useState('All')

    const dispatch = useDispatch()

    const handleClick = value => {
       setActiveElement(value)
       if(value === 'All'){
              dispatch(getPopularVideos())
       }else{
         dispatch(getVideosByCategory(value))
       }
    }
 

    return (
        <div className='categoriesBar' >
            {
                keywords.map((value, i) => (
                    <span
                        onClick={() => handleClick(value)}
                        key={i}
                        className={activeElement === value ? 'active' : ''}>
                        {value}
                    </span>
                ))
            }

        </div>
    )
}

export default CategoriesBar
