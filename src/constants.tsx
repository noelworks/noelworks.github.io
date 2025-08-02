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

export const ALL_LINKS: Record<LINK_SECTION, LINK_DETAILS[]> = {
	[LINK_SECTION.UI_UX_DESIGN_PROJECTS]: [
		{
			title: 'Food Delivery App',
			id: 'ui-ux-0',
			animate: {
				fromLeft: () => (
					<div>
						<img src={NonVegMart} alt="Mobile app mockup for an app that sells poultry" />
					</div>
				)
			}
		},
		{
			title: 'Interaction Design',
			id: 'ui-ux-1',
			animate: {
				fromLeft: () => (
					<div>
						<img
							src={Equalizer}
							alt="Mockup of an equalizer app with bars to adjust different aspects of sound"
						/>
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
						<img src={DesignSystem3} alt="A button element shown as part of a design system" />
						<img src={DesignSystem4} alt="A group of buttons shown in different configurations" />
					</div>
				),
				fromLeft: () => (
					<div>
						<img src={DesignSystem2} alt="A color pallete shown as part of design system" />
						<img src={DesignSystem1} alt="A mockup of an app using the design system" />
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
						<img src={HairSalonAppMockup1} alt="Hair salon mockup" />
						<img src={HairSalonAppMockup2} alt="Hair salon mockup showing calendar" />
					</div>
				)
			}
		},
		{
			title: 'Courier Services',
			id: 'ui-ux-4',
			animate: {}
		},
		{
			title: 'Data Visualisation',
			id: 'ui-ux-5',
			animate: {}
		},
		{
			title: 'Work in Progress',
			id: 'ui-ux-6',
			animate: {}
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
