import React from 'react';
import ThemeComponent from '../src/core/theme/themeComponent';

const MuiDecorator = (Story, context) => {
  return (
    <ThemeComponent>
      <Story {...context} />
    </ThemeComponent>
  );
};

export default MuiDecorator;
