import React from 'react';
import { Avatar, useTheme, AvatarGroup } from '@mui/material';

interface AvatarProps {
  // Defines the type of avatar

  type: 'single' | 'group';

  // Defines the maximum number of avatars to display in a group
  max?: number;

  // An array of objects containing letter and background color to render as avatars

  avatars?: Array<{ letter: string; bgcolor: string }>;

  // Defines custom styles to apply to the Avatar components
}

// Component to render Avatar(s) with custom options

export const AvatarComponent = ({ type, max = 4, avatars = [] }: AvatarProps) => {
  const theme = useTheme();
  /**

Renders a single Avatar or an AvatarGroup based on the provided type and props
*/
  const renderAvatar = () => {
    switch (type) {
      case 'single':
        return <Avatar sx={{ bgcolor: avatars[0].bgcolor }}>{avatars[0].letter}</Avatar>;
      case 'group':
        return (
          <AvatarGroup max={max}>
            {avatars.map(({ letter, bgcolor }) => (
              <Avatar key={letter} sx={{ bgcolor }}>
                {letter}
              </Avatar>
            ))}
          </AvatarGroup>
        );
      default:
        return null;
    }
  };
  return <>{renderAvatar()}</>;
};
