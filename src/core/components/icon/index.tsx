import React, { useEffect, useState } from 'react';

interface IconProps {
  icon: string;
  color?: string;
  mode?: 'light' | 'dark';
  width?: number;
  height?: number;
}

const Icon: React.FC<IconProps> = ({ icon, color, mode = 'light', width = 24, height = 24 }) => {
  const [LoadedIcon, setLoadedIcon] = useState<React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  > | null>(null);

  useEffect(() => {
    const loadIcon = async () => {
      try {
        const iconModule = await import(`./icons/${mode}/${icon}.svg`);
        setLoadedIcon(() => iconModule.default);
      } catch (error) {
        console.error('Failed to load icon:', error);
      }
    };

    loadIcon();
  }, [icon, mode]);

  if (!LoadedIcon) {
    return null;
  }

  return (
    <LoadedIcon
      width={width}
      height={height}
      viewBox="0 0 20 20"
      style={{ color: color ? color : 'inherit' }}
    />
  );
};

export default Icon;
