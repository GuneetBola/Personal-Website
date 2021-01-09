import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles';

const SocialProfile = props => {


    const {title, image, link} = props.socialProfile;

    return (
        <span>
            <a href={link}>
                <img src={image} alt='social_icon' style={{ width: 35, height: 35, margin: 10}}/>
            </a>
        </span>
    )

}
const SocialProfiles = () => (

    <div className="footer">

        <hr />
        <hr />
        <h4 className="col d-flex justify-content-center"> Connect with me!</h4>
        <span className="col d-flex justify-content-center">
        {
            SOCIAL_PROFILES.map(SOCIAL_PROFILE => {
                return(
                <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE} />
                );
            })
        }
        </span>
    </div>

)


export default SocialProfiles;