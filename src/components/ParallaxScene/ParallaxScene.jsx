import React, {useRef, useEffect} from 'react';
import Parallax from 'parallax-js';

const ParallaxScene = (props) => {

    //var scene = useRef();

    useEffect(() => {
        var scene = document.getElementById("scene");
        new Parallax(scene);
    });
    
    return (
        <div id="scene" style={{width: "100%", height: "100%"}}>
            {props.children}
        </div>
    );
}

export default ParallaxScene;