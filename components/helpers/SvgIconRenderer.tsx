import React from 'react';


interface Props {
    height?: string
    width?: string
    size?: number
    path: string
    viewBox?: string
    fill?: string
    xmlns?: string
    style?: React.CSSProperties
    pathFill?: string
    className?: string
}


const SvgIconRenderer: React.FC<Props> = (props) => {
    // const {} = useActions()
    // const {} = useAppState()
    const { width, height, path, style, viewBox, fill, xmlns, pathFill, className } = props;

    return <svg className={className} style={{ width: width, height: height, ...style }} viewBox={viewBox} fill={fill} xmlns={xmlns}>
        <path fill={pathFill ?? "#FFF"}
            d={path} />
    </svg>
};

export default SvgIconRenderer;
