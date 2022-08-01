import { useEffect } from "react"
import styles from './styles.module.css'

let player = null
let isPercentageReached = false

export default function YoutubeEmbed({ videoId, onReady, onStateChange, targetPercentage, onReachPercentage }){
    const shouldLookForPercentage = typeof onReachPercentage === 'function' && targetPercentage > 0 && targetPercentage < 100

    function getTargetInSeconds(){
        return player.getDuration() * (targetPercentage / 100)
    }

    function onPlayerReady(event){
        if(onReady) onReady(event);
    }

    function onPlayerStateChange(event){
        if(onStateChange) onStateChange(event);

        if(shouldLookForPercentage){
            ( (event) => {
                if (event.data == YT.PlayerState.PLAYING && !isPercentageReached) {
                    setInterval(() => {
                        if(typeof player?.getCurrentTime !== 'function') return;
                        if (!isPercentageReached && player.getCurrentTime() > getTargetInSeconds()) {
                            isPercentageReached = true
                            onReachPercentage()
                        }
                    }, 1000)
                }
            })(event)
        }
    }

    function onYouTubeIframeAPIReady(){
        player = new YT.Player(`youtube_player_${videoId}`, {
            height: '100%',
            width: '100%',
            videoId: videoId,
            events: {
                onReady: onPlayerReady,
                onStateChange: onPlayerStateChange
            }
        });
    }

    useEffect(() => {
        var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);


        window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady
        return () => {
            if(player){ player.destroy() }
            window.YT = null
            isPercentageReached = false
        }
    }, [videoId])

    return (
        <div className={styles.videoContainer}>
            <div id={`youtube_player_${videoId}`}></div>
        </div>
    )
}