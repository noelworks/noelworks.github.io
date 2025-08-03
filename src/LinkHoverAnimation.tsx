import clsx from 'clsx';

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
	const commonAnimationProperties =
		'absolute top-0 h-full w-[50vw] -translate-x-32 border-2 border-amber-300 opacity-50 transition-all duration-300 ease-in';
	const commonActiveAnimationProperties = 'translate-x-0 opacity-100';

	return (
		<div
			className={clsx('pointer-events-none fixed top-0 right-0 h-full w-full', {
				invisible: !isActive
			})}
		>
			<div
				className={clsx(commonAnimationProperties, 'right-0 border-blue-300', {
					[commonActiveAnimationProperties]: isActive,
					'translate-x-32': !isActive
				})}
			>
				{AnimateFromLeft ? <AnimateFromLeft /> : null}
			</div>
			<div
				className={clsx(commonAnimationProperties, 'left-0 border-amber-300', {
					[commonActiveAnimationProperties]: isActive,
					'-translate-x-32': !isActive
				})}
			>
				{AnimateFromRight ? <AnimateFromRight /> : null}
			</div>
		</div>
	);
};

export default LinkHoverAnimation;
