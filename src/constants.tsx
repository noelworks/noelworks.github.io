import NonVegMart from 'url:./assets/nonVegMart.png';
import Equalizer from 'url:./assets/equalizer.png';
import HairSalonAppMockup1 from 'url:./assets/hairSalon1.png';
import HairSalonAppMockup2 from 'url:./assets/hairSalon2.png';
import DesignSystem1 from 'url:./assets/designSystem1.png';
import DesignSystem2 from 'url:./assets/designSystem2.png';
import DesignSystem3 from 'url:./assets/designSystem3.png';
import DesignSystem4 from 'url:./assets/designSystem4.png';

export type LINK_DETAILS = {
	title: string;
	id: string;
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
console.log(
	Equalizer,
	HairSalonAppMockup1,
	HairSalonAppMockup2,
	DesignSystem1,
	DesignSystem2,
	DesignSystem3,
	DesignSystem4
);
export const ALL_LINKS: Record<LINK_SECTION, LINK_DETAILS[]> = {
	[LINK_SECTION.UI_UX_DESIGN_PROJECTS]: [
		{
			title: 'Food Delivery App',
			id: 'ui-ux-0',
			animate: {
				fromRight: () => <div>Test</div>,
				fromLeft: () => (
					<div>
						<img src={NonVegMart} />
					</div>
				)
			}
		},
		{
			title: 'Interaction Design',
			id: 'ui-ux-1',
			animate: {
				fromRight: () => <div>Test</div>,
				fromLeft: () => (
					<div>
						<img src={Equalizer} />
					</div>
				)
			}
		},
		{
			title: 'Design System',
			id: 'ui-ux-2',
			animate: {
				fromRight: () => (
					<div>
						<img src={DesignSystem3} />
						<img src={DesignSystem4} />
					</div>
				),
				fromLeft: () => (
					<div>
						<img src={DesignSystem2} />
						<img src={DesignSystem1} />
					</div>
				)
			}
		},
		{
			title: 'Hair Salon App',
			id: 'ui-ux-3',
			animate: {
				fromLeft: () => (
					<div>
						<img src={HairSalonAppMockup1} />
						<img src={HairSalonAppMockup2} />
					</div>
				)
			}
		},
		{
			title: 'Courier Services',
			id: 'ui-ux-4',
			animate: {
				fromRight: () => <div>Test4</div>
			}
		},
		{
			title: 'Data Visualisation',
			id: 'ui-ux-5',
			animate: {
				fromRight: () => <div>Test5</div>
			}
		},
		{
			title: 'Work in Progress',
			id: 'ui-ux-6',
			animate: {
				fromRight: () => <div>Test6</div>
			}
		}
	],
	[LINK_SECTION.FRAMES_FORMS]: [
		{
			title: 'Graphic Design',
			id: 'ff-1'
		},
		{ title: 'Sketches', id: 'ff-2' },
		{ title: 'Photography', id: 'ff-3' }
	]
};
