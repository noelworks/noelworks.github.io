type LinkHoverAnimationProps = {
	AnimateFromLeft?: React.FunctionComponent<{}>;
	AnimateFromRight?: React.FunctionComponent<{}>;
};

const LinkHoverAnimation: React.FunctionComponent<LinkHoverAnimationProps> = ({
	AnimateFromLeft,
	AnimateFromRight
}) => {
	return (
		<div>
			{AnimateFromLeft ? <AnimateFromLeft /> : null}
			{AnimateFromRight ? <AnimateFromRight /> : null}
		</div>
	);
};

export default LinkHoverAnimation;
