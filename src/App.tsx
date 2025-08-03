import { Fragment, useRef, useState } from 'react';
import './App.css';
import FakeLink from './FakeLink.tsx';
import Footer from './Footer.tsx';
import Header from './Header.tsx';
import LinkHoverAnimation from './LinkHoverAnimation.tsx';
import { ALL_LINKS, LINK_DETAILS, LINK_SECTION } from './constants.tsx';
import { createPortal } from 'react-dom';

export function App() {
	const [activeLinkIdx, setActiveLinkIdx] = useState<number>(NaN);
	const [activeLinkSection, setActiveLinkSection] = useState<LINK_SECTION>(NaN);
	const hoverAnimationPortal = useRef<HTMLDivElement>(null);

	function onProjectTitleHover(linkSection: LINK_SECTION, idx: number) {
		setActiveLinkIdx(idx);
		setActiveLinkSection(linkSection);
	}

	function renderLink(linkDetails: LINK_DETAILS, isActive: boolean, onHover: () => void) {
		return (
			<Fragment key={linkDetails.id}>
				<FakeLink title={linkDetails.title} isActive={isActive} onHover={onHover} />
				{hoverAnimationPortal.current &&
					createPortal(
						<LinkHoverAnimation
							AnimateFromRight={linkDetails?.animate?.fromRight}
							AnimateFromLeft={linkDetails?.animate?.fromLeft}
							isActive={isActive}
						></LinkHoverAnimation>,
						hoverAnimationPortal.current
					)}
			</Fragment>
		);
	}

	function renderLinks(linkSection: LINK_SECTION) {
		return ALL_LINKS[linkSection].map((linkDetails, idx) => {
			const isActive = activeLinkSection === linkSection && activeLinkIdx === idx;

			return renderLink(linkDetails, isActive, onProjectTitleHover.bind(null, linkSection, idx));
		});
	}

	return (
		<>
			<div ref={hoverAnimationPortal}></div>
			<Header></Header>
			<main className="m-32">
				<section>
					<h1>UI-UX Design Projects</h1>
					<ul>{renderLinks(LINK_SECTION.UI_UX_DESIGN_PROJECTS)}</ul>
				</section>
				<section>
					<h1>Frames & Forms</h1>
					<ul>{renderLinks(LINK_SECTION.FRAMES_FORMS)}</ul>
				</section>
			</main>
			<Footer></Footer>
		</>
	);
}
