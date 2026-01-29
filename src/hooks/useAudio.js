import useSound from 'use-sound';

// High-quality UI sound assets
const SOUND_URLS = {
    click: 'https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3', // Mechanical Click
    hover: 'https://assets.mixkit.co/active_storage/sfx/2571/2571-preview.mp3', // Subtle Hover/Tick
    pop: 'https://assets.mixkit.co/active_storage/sfx/2570/2570-preview.mp3',   // Panel Pop
    success: 'https://assets.mixkit.co/active_storage/sfx/2567/2567-preview.mp3' // Success/Finish
};

export const useAudio = () => {
    const [playClick] = useSound(SOUND_URLS.click, { volume: 0.25 });
    const [playHover] = useSound(SOUND_URLS.hover, { volume: 0.15 });
    const [playPop] = useSound(SOUND_URLS.pop, { volume: 0.2 });
    const [playSuccess] = useSound(SOUND_URLS.success, { volume: 0.2 });

    return {
        playClick,
        playHover,
        playPop,
        playSuccess
    };
};
