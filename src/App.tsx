import './App.css';
import Footer from './Footer.tsx';
import Header from './Header.tsx';

export function App() {
	return (
		<>
			<Header></Header>
			<main>
				<section>
					<h1>UI-UX Design Projects</h1>
					<ul>
						<li>Interaction Design</li>
						<li>Design System</li>
						<li>Hair Salon App</li>
						<li>Courier Services</li>
						<li>Data Visualisation</li>
						<li>Work in Progress</li>
					</ul>
				</section>
				<section>
					<h1>Frames & Forms</h1>
					<ul>
						<li>Graphic Design</li>
						<li>Sketches</li>
						<li>Photography</li>
					</ul>
				</section>
			</main>
			<Footer></Footer>
		</>
	);
}
