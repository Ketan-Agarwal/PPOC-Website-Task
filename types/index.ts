import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type ImageProps = {
  src: string;
  size: number;
  alt?: string;
  width?: number | string;
  height?: number | string;
} & React.ImgHTMLAttributes<HTMLImageElement>;