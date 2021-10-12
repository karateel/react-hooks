import React, {useRef} from 'react';
import useHover from "../hooks/useHover.js";

const Hover = () => {
    const ref = useRef();
    const isHovering = useHover(ref)

    return (
        <div ref={ref} style={{width: 300, height: 300, background: isHovering ?  "purple" : "green"}}/>
    );
};

export default Hover;