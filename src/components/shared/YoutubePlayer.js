import { requireNativeComponent, PropTypes } from 'react-native';

var iface = {
  name: 'YoutubePlayer',
  propTypes: {
  },
};

module.exports = requireNativeComponent('RCTYoutubePlayer', iface);
