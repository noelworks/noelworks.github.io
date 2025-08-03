import { useState } from 'react';
import './App.css';
import FakeLink from './FakeLink.tsx';
import Footer from './Footer.tsx';
import Header from './Header.tsx';
import LinkHoverAnimation from './LinkHoverAnimation.tsx';
import { ALL_LINKS, LINK_SECTION } from './constants.tsx';

export function App() {
	const [activeLinkIdx, setActiveLinkIdx] = useState<number>(NaN);
	const [activeLinkSection, setActiveLinkSection] = useState<LINK_SECTION>(NaN);

	function onProjectTitleHover(linkSection: LINK_SECTION, idx: number) {
		setActiveLinkIdx(idx);
		setActiveLinkSection(linkSection);
	}

	return (
		<>
			{!isNaN(activeLinkSection) && !isNaN(activeLinkIdx) ? (
				<LinkHoverAnimation
					AnimateFromRight={ALL_LINKS[activeLinkSection][activeLinkIdx]?.animate?.fromRight}
				></LinkHoverAnimation>
			) : null}
			<Header></Header>
			<main>
				<section>
					<h1>UI-UX Design Projects</h1>
					<ul>
						{ALL_LINKS[LINK_SECTION.UI_UX_DESIGN_PROJECTS].map((linkDetails, idx) => (
							<FakeLink
								key={idx}
								title={linkDetails.title}
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
						{ALL_LINKS[LINK_SECTION.FRAMES_FORMS].map((linkDetails, idx) => (
							<FakeLink
								key={idx}
								title={linkDetails.title}
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
