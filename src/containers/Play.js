import React from 'react';
import { connect } from 'react-redux';
import { setDuration, setPlaying, setCurrentTime } from '../redux/player/actions'
import FocusableButton from '../components/FocusableButton';

const mapStateToProps = state => ({
  ...state
})

class Play extends React.Component {
  constructor(props) {
    super(props);
    this.videoRef = React.createRef();
  }

  componentDidMount() {
    this.videoRef.current.addEventListener("loadedmetadata", this.onLoadedMetaData, false);
    this.videoRef.current.addEventListener("timeupdate", this.onTimeUpdate, false);
    this.videoRef.current.addEventListener("playing", this.onPlaying, false);
    this.videoRef.current.addEventListener("pause", this.onPause, false);
    this.videoRef.current.load();
  }

  componentWillUnmount() {
    this.videoRef.current.removeEventListener("loadedmetadata", this.onLoadedMetaData);
    this.videoRef.current.removeEventListener("timeupdate", this.onTimeUpdate);
    this.videoRef.current.removeEventListener("playing", this.onLoadedMetaData);
    this.videoRef.current.removeEventListener("pause", this.onTimeUpdate);
  }

  onLoadedMetaData = () => {
    this.props.setDuration(this.videoRef.current.duration)
  }

  onPlaying = () => {
    this.props.setPlaying(true)
  }

  onPause = () => {
    this.props.setPlaying(false)
  }

  onTimeUpdate = () => {
    this.props.setCurrentTime(this.videoRef.current.currentTime)
  }

  onPlayPause = () => {
    const { isPlaying } = this.props.player
    this.videoRef.current[isPlaying ? "pause" : "play"]()
  }

  render() {
    return (
      <div>
        <h2>Play</h2>
        <video ref={this.videoRef} width="640" height="360" autoPlay muted>
           <source src="http://media.w3.org/2010/05/sintel/trailer.mp4" type="video/mp4" />
        </video>
        <FocusableButton onClick={this.onPlayPause} isFocus>
          { this.props.player.isPlaying ? "Pause" : "Play" }
        </FocusableButton>
      </div>
    )
  }
}

export default connect(mapStateToProps, {
  setDuration,
  setPlaying,
  setCurrentTime
})(Play);
