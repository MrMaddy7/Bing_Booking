import React, { useEffect, useRef } from 'react';
import audioFile from '/audio.mp3';

const BackgroundMusic = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current.volume = 0.5;
        audioRef.current.play();
        audioRef.current.loop = true;
    }, []);

    return (
        <audio ref={ audioRef }>
            <source src={ audioFile } type="audio/mp3" />
        </audio>
    );
};

export default BackgroundMusic;