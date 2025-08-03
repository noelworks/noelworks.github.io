import clsx from 'clsx';

const H1: React.FunctionComponent<React.PropsWithChildren<{}>> = ({ children }) => {
	return <h1 className={clsx('mb-5 text-lg')}>{children}</h1>;
};

export default H1;
