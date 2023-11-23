import React from 'react'
import posts from '../../data/data.json'
import './jobdiv.css'

const JobDiv = ({...props}) => {

  const jobPosts = posts.map(
    post =>
    
      <div className="jobContainer" key={post.id}>
        <div className="companyLogo">
          <img src={post.logo} alt="Company Icon" className="logo" />
        </div>
        <div className="time">
          <li className="postedAt">{post.postedAt}</li>
          <li className="contract">{post.contract}</li>
        </div>
        <h2 className="position">{post.position}</h2>
        <span className="company">{post.company}</span>
        <h4 className="location">{post.location}</h4>

      </div>
  )

  return (
    <div className='jobContainers' >
      {jobPosts}

    </div>
  )
}

export default JobDiv
