import React from 'react';
import { View } from 'react-native';
import { Svg, Circle, Path } from 'react-native-svg';

const ProgressBar = () => {
  return (
    <Svg height="100" width="100">
      <Circle
        cx="50"
        cy="50"
        r="40"
        stroke="blue"
        strokeWidth="10"
        fill="transparent"
        strokeDasharray="0 330"
      />
    </Svg>
  );
};

export default ProgressBar;