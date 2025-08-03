import clsx from 'clsx';

type FakeLinkProps = {
	isActive: boolean;
	title: string;
	onHover: () => void;
};

const FakeLink: React.FunctionComponent<FakeLinkProps> = ({ title, isActive, onHover }) => {
	return (
		<li onMouseEnter={onHover} className={clsx('cursor-pointer')}>
			<span>--</span>
			<span>{title}</span>
		</li>
	);
};

export default FakeLink;
