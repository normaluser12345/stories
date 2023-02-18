import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import song from './song/song.mp3'

const styles: React.CSSProperties | undefined = {
    width: '50%', 
    position: 'absolute', 
    left: '50%',  
    top: '50%',
    background: 'rgba(0,0,0,0.0)',
    transform: `translate(-50%, -50%)`, 
    border: 'none', 
    boxShadow: 'none', 
    padding: 0
}

export const Player = () => {

  return (
        <AudioPlayer 
            style={styles}
            preload='metadata'
            src={song}
            onPlay={e => console.log("onPlay")}
            showJumpControls={false}
            customVolumeControls={[]}
            customAdditionalControls={[]}
            autoPlayAfterSrcChange
            showDownloadProgress={false}
            showFilledProgress={false}
            customProgressBarSection={[]}
        />
  )
}

