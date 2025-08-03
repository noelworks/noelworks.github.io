export type LINK_DETAILS = {
	title: string;
	animate?: {
		fromLeft?: React.FunctionComponent;
		fromRight?: React.FunctionComponent;
		theme?: React.CSSProperties;
	};
};

export enum LINK_SECTION {
	UI_UX_DESIGN_PROJECTS = 1,
	FRAMES_FORMS = 2
}

export const ALL_LINKS: Record<LINK_SECTION, LINK_DETAILS[]> = {
	[LINK_SECTION.UI_UX_DESIGN_PROJECTS]: [
		{
			title: 'Interaction Design',
			animate: {
				fromRight: () => <div>Test</div>
			}
		},
		{
			title: 'Design System',
			animate: {
				fromRight: () => <div>Test2</div>
			}
		},
		{
			title: 'Hair Salon App',
			animate: {
				fromRight: () => <div>Test3</div>
			}
		},
		{
			title: 'Courier Services',
			animate: {
				fromRight: () => <div>Test4</div>
			}
		},
		{
			title: 'Data Visualisation',
			animate: {
				fromRight: () => <div>Test5</div>
			}
		},
		{
			title: 'Work in Progress',
			animate: {
				fromRight: () => <div>Test6</div>
			}
		}
	],
	[LINK_SECTION.FRAMES_FORMS]: [
		{ title: 'Graphic Design' },
		{ title: 'Sketches' },
		{ title: 'Photography' }
	]
};
