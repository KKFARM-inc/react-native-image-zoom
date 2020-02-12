import { ViewStyle } from 'react-native';

const container: ViewStyle = {
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
  backgroundColor: '#000' // fix 0.36 bug, see: https://github.com/facebook/react-native/issues/10782
};

export default {
  container
};
