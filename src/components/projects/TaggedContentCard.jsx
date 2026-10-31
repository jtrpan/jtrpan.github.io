import React from 'react';
import './TaggedContentCard.css';

// Copy of react-ui-cards' TaggedContentCard (markup + styles), which can't run
// on React 19. Blurred thumbnail as the background, thumbnail on top, then a
// translucent text panel.
const TaggedContentCard = ({ href, thumbnail, title, description, tags = [] }) => (
    <a className="tcc-link" href={href}>
        <div className="tcc-card">
            <div className="tcc-overlay">
                <div style={{ backgroundImage: `url("${thumbnail}")` }}/>
            </div>
            <div className="tcc-content">
                <div className="tcc-thumbnail"><img src={thumbnail} alt=""/></div>
                <div className="tcc-text">
                    <div>{title}</div>
                    <div className="tcc-description">{description}</div>
                    <div className="tcc-tags">
                        {tags.map(tag => <span key={tag} className="tcc-tag">{tag}</span>)}
                    </div>
                </div>
            </div>
        </div>
    </a>
);

export default TaggedContentCard;
