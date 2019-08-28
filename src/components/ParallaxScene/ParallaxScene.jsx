import React, { useEffect } from 'react';
import Parallax from 'parallax-js';

const ParallaxScene = (props) => {

    useEffect(() => {
        document.querySelectorAll('._parallax_scene').forEach(scene => {
            new Parallax(scene, props);
        })
    });
    
    return (
        <div class="_parallax_scene">
            {props.children}
        </div>
    );
}

export default ParallaxScene;