import { Fragment, useRef, useState } from 'react';
import './App.css';
import FakeLink from './FakeLink.tsx';
import Footer from './Footer.tsx';
import Header from './Header.tsx';
import LinkHoverAnimation from './LinkHoverAnimation.tsx';
import { ALL_LINKS, LINK_SECTION } from './constants.tsx';
import { createPortal } from 'react-dom';

export function App() {
	const [activeLinkIdx, setActiveLinkIdx] = useState<number>(NaN);
	const [activeLinkSection, setActiveLinkSection] = useState<LINK_SECTION>(NaN);
	const hoverAnimationPortal = useRef<HTMLDivElement>(null);

	function onProjectTitleHover(linkSection: LINK_SECTION, idx: number) {
		setActiveLinkIdx(idx);
		setActiveLinkSection(linkSection);
	}

	return (
		<>
			<div ref={hoverAnimationPortal}></div>
			<Header></Header>
			<main>
				<section>
					<h1>UI-UX Design Projects</h1>
					<ul>
						{ALL_LINKS[LINK_SECTION.UI_UX_DESIGN_PROJECTS].map((linkDetails, idx) => {
							const isActive =
								activeLinkSection === LINK_SECTION.UI_UX_DESIGN_PROJECTS && activeLinkIdx === idx;
							return (
								<Fragment key={idx}>
									<FakeLink
										key={idx}
										title={linkDetails.title}
										isActive={isActive}
										onHover={onProjectTitleHover.bind(
											null,
											LINK_SECTION.UI_UX_DESIGN_PROJECTS,
											idx
										)}
									/>
									{hoverAnimationPortal.current &&
										createPortal(
											<LinkHoverAnimation
												AnimateFromRight={linkDetails?.animate?.fromRight}
												isActive={isActive}
											></LinkHoverAnimation>,
											hoverAnimationPortal.current
										)}
								</Fragment>
							);
						})}
					</ul>
				</section>
				<section>
					<h1>Frames & Forms</h1>
					<ul>
						{ALL_LINKS[LINK_SECTION.FRAMES_FORMS].map((linkDetails, idx) => {
							const isActive =
								activeLinkSection === LINK_SECTION.FRAMES_FORMS && activeLinkIdx === idx;
							return (
								<Fragment key={idx}>
									<FakeLink
										title={linkDetails.title}
										isActive={isActive}
										onHover={onProjectTitleHover.bind(
											null,
											LINK_SECTION.UI_UX_DESIGN_PROJECTS,
											idx
										)}
									/>
									{hoverAnimationPortal.current &&
										createPortal(
											<LinkHoverAnimation
												AnimateFromRight={linkDetails?.animate?.fromRight}
												isActive={isActive}
											></LinkHoverAnimation>,
											hoverAnimationPortal.current
										)}
								</Fragment>
							);
						})}
					</ul>
				</section>
			</main>
			<Footer></Footer>
		</>
	);
}
