import { useState } from 'react';
import './App.css';
import FakeLink from './FakeLink.tsx';
import Footer from './Footer.tsx';
import Header from './Header.tsx';

export function App() {
	const [activeLinkIdx, setActiveLinkIdx] = useState<number>();
	const [activeLinkSection, setActiveLinkSection] = useState<LINK_SECTION>();
	enum LINK_SECTION {
		UI_UX_DESIGN_PROJECTS,
		FRAMES_FORMS
	}
	const ALL_LINKS = {
		[LINK_SECTION.UI_UX_DESIGN_PROJECTS]: [
			'Interaction Design',
			'Design System',
			'Hair Salon App',
			'Courier Services',
			'Data Visualisation',
			'Work in Progress'
		],
		[LINK_SECTION.FRAMES_FORMS]: ['Graphic Design', 'Sketches', 'Photography']
	};

	function onProjectTitleHover(linkSection: LINK_SECTION, idx: number) {
		setActiveLinkIdx(idx);
		setActiveLinkSection(linkSection);
	}

	return (
		<>
			<Header></Header>
			<main>
				<section>
					<h1>UI-UX Design Projects</h1>
					<ul>
						{ALL_LINKS[LINK_SECTION.UI_UX_DESIGN_PROJECTS].map((projectTitle, idx) => (
							<FakeLink
								key={idx}
								title={projectTitle}
								isActive={
									activeLinkSection === LINK_SECTION.UI_UX_DESIGN_PROJECTS && activeLinkIdx === idx
								}
								onHover={onProjectTitleHover.bind(null, LINK_SECTION.UI_UX_DESIGN_PROJECTS, idx)}
							/>
						))}
					</ul>
				</section>
				<section>
					<h1>Frames & Forms</h1>
					<ul>
						{ALL_LINKS[LINK_SECTION.FRAMES_FORMS].map((projectTitle, idx) => (
							<FakeLink
								key={idx}
								title={projectTitle}
								isActive={activeLinkSection === LINK_SECTION.FRAMES_FORMS && activeLinkIdx === idx}
								onHover={onProjectTitleHover.bind(null, LINK_SECTION.FRAMES_FORMS, idx)}
							/>
						))}
					</ul>
				</section>
			</main>
			<Footer></Footer>
		</>
	);
}
