import React from 'react';
import "./Project.scss"

function Project({ project, isReversed, isReels }) {
  const { blobs, blobClasses, additionalImages, reelsClasses } = project;

  return (
    <div className={`project ${isReversed ? 'project--reverse' : ''} ${isReels ? 'project--reels' : ''}`}>
      <div className="project__text-container">
        <h3>{project.title}</h3>
        <h4>Summary</h4>
        <p>{project.summary}</p>
        <div className="project__details">
          <div className="project__details-container">
            <h4>Role</h4>
            <p>{project.role}</p>
          </div>
          <div className="project__details-container">
            <h4>Tools</h4>
            <p>{project.tools}</p>
          </div>
        </div>
      </div>
      <div className={`project__img-container ${reelsClasses ? reelsClasses[3] : ''}`}>
        <img className={`project__img ${reelsClasses ? reelsClasses[0] : ''}`} src={project.image} alt={project.imageAlt} />
        {additionalImages && additionalImages.map((img, index) => (
          <img key={index} className={`project__img ${reelsClasses[index + 1]}`} src={img.src} alt={img.alt} />
        ))}
        {project.link && (
          <a className="btn" href={project.link} target="_blank" rel="noopener noreferrer">
            View Demo
          </a>
        )}
      </div>
      {blobs?.desktop && <blobs.desktop className={`project__blob ${blobClasses?.desktop}`} />}
      {blobs?.mobile && <blobs.mobile className={`project__blob-mobile ${blobClasses?.mobile}`} />}
    </div>
  );
}

export default Project;