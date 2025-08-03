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
		'absolute top-0 h-full w-[50vw] -translate-x-32 border-2 border-amber-300 opacity-50';
	const commonActiveAnimationProperties =
		'translate-x-0 opacity-100 transition-all duration-300 ease-in';

	return (
		<div
			className={clsx('pointer-events-none fixed top-0 right-0 h-full w-full', {
				invisible: !isActive
			})}
		>
			{AnimateFromLeft ? (
				<div
					className={clsx(commonAnimationProperties, 'right-0 border-blue-300', {
						[commonActiveAnimationProperties]: isActive,
						'translate-x-32': !isActive
					})}
				>
					<AnimateFromLeft />
				</div>
			) : null}
			{AnimateFromRight ? (
				<div
					className={clsx(commonAnimationProperties, 'left-0 border-amber-300', {
						[commonActiveAnimationProperties]: isActive,
						'-translate-x-32': !isActive
					})}
				>
					<AnimateFromRight />
				</div>
			) : null}
		</div>
	);
};

export default LinkHoverAnimation;
