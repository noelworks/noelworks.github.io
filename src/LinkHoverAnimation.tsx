type LinkHoverAnimationProps = {
	AnimateFromLeft?: React.FunctionComponent<{}>;
	AnimateFromRight?: React.FunctionComponent<{}>;
	isActive: boolean;
};

const LinkHoverAnimation: React.FunctionComponent<LinkHoverAnimationProps> = ({
	AnimateFromLeft,
	AnimateFromRight,
	isActive
}) => {
	return (
		<div className={isActive ? 'bg-amber-300' : ''}>
			{AnimateFromLeft ? <AnimateFromLeft /> : null}
			{AnimateFromRight ? <AnimateFromRight /> : null}
		</div>
	);
};

export default LinkHoverAnimation;
