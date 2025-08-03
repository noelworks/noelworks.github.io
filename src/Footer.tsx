import { ReactElement } from 'react';
import H1 from './H1';

export default function Footer() {
	return (
		<footer className="grid grid-cols-4 gap-6">
			<section className="border-t-2">
				<H1>Services</H1>
				<ul>
					<li>Interface Design</li>
					<li>Experience Design</li>
					<li>Data Visualisation</li>
					<li>Information Architecture</li>
					<li>User Research</li>
					<li>Product Strategy</li>
					<li>Interaction Design</li>
				</ul>
			</section>
			<section className="border-t-2">
				<H1>Toolkit</H1>
				<ul>
					<li>Figma</li>
					<li>Adobe Illustrator</li>
					<li>Adobe Photoshop</li>
					<li>Adobe XD</li>
					<li>Tableau</li>
				</ul>
			</section>
			<section className="border-t-2">
				<H1>Bio</H1>
				{[
					'Designing for people, not just pixels — I’m a UX design student exploring how stories, systems, and empathy shape better digital worlds.',
					'So far, I’ve worked with a startup to design NonVegMart, a food delivery platform, and built a range of projects during my coursework — from secure photo vaults and tourism redesigns to data visualisations and service design for student salons. I also love experimenting with visual storytelling through illustrations, photography, and graphic design.',
					'Outside of design, you’ll often find me on the football field, chasing sunsets, or getting involved in community work. I’ve served as the youth president of my church and enjoy being part of spaces that bring people together — on and off the screen.'
				].map((text, idx) => (
					<p className="mb-4" key={idx}>
						{text}
					</p>
				))}
			</section>
		</footer>
	);
}
