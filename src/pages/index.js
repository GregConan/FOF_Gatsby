import React from "react"
import { Link } from "gatsby"

// Components
import Layout from "../components/layout"
import Hyperlink from "../components/Hyperlink"
import Image from "../components/image"
import Note from "../components/Note"
import SEO from "../components/seo"
import Section from "../components/Section"
import Sidebar from "../components/Sidebar"
import DropdownMenu from "../components/DropdownMenu"
import MenuButton from "../components/MenuButton"
import MenuButtonRow from "../components/MenuButtonRow"

function render() {
	var notes = 0;
	var sections = 0;
	return (
		<Layout>
		<SEO title="The Fallacies of Faith: Main Page" />
		<blockquote><em>"All we can do is to follow the truth and not fight against it."</em>
		<br />—2 Corinthians 13:8 (CEV)</blockquote>
		This website is a work-in-progress counter-apologetics resource. Its intent is to provide a factually accurate, logically coherent, and intellectually honest set of arguments that fundamental Christian doctrine as defined in the <Hyperlink to="https://www.crcna.org/welcome/beliefs/creeds">traditional</Hyperlink> <Hyperlink to="https://els.org/beliefs/the-three-ecumenical-creeds-2/">Christian creeds</Hyperlink> should not be believed. In this document, I have sought to address every pro-Christian argument that I have ever encountered.
		<br /><br />
		For each argument that I have found in Christian apologetics, I have tried to find the best response using the ideas and terms of analytic philosophy. Each argument will have its own section in the "Application" section of the table below when this website is complete. The "Basis" section will contain all of the necessary underlying philosophical groundwork to justify the arguments I make in the "Application" section.
		<br /><br />
		<table id="menu" style={{width: "100%"}}>
			<tr>
				<th>Cognitive Epistemology</th>
				<th>Metaphysics</th>
				<th>Theology</th>
				<th>Sociology</th>
			</tr>
			<tr>
				<td><DropdownMenu title="Reformed Epistemology"
					 	col1="Objection Basis" col2="Argument By"
					 >
						 <MenuButtonRow text="Psychology of Cognitive Bias" to="./cognitive-bias" />
					 </DropdownMenu>
				</td>
				<td><DropdownMenu title="Cosmological ('First Cause') Arguments"
						col1="Objection Basis" col2="Argument By"
					>
						<tr>
							<td rowspan="5">
								<MenuButton text="Relative Time" to="./time-relative" />
								<br /><br />
								Absolute Time
							</td>
						</tr>
						<MenuButtonRow text="Thomas Aquinas" to="./cos-aquinas" />
						<MenuButtonRow text="William Lane Craig" to="./cos-craig" />
						<MenuButtonRow text="Gottfried Leibniz" to="./cos-leibniz" />
						<MenuButtonRow text="Gerald Schroeder" to="./cos-schroeder" />
					</DropdownMenu>
				</td>
				<td><DropdownMenu title="Trinitarian Theology"
						col1="Objection Basis" col2="Arguments"
					>
						<tr><td>
							<MenuButton text="Against Contradictions" to="./logic-contra" />
						</td><td>
							<MenuButton text="Modern Scientific Trinity Analogies" to="./trinity-modern" />							
						</td></tr>
					</DropdownMenu>
					</td>
				<td><DropdownMenu title="Religious Demographic Trends Over Time"
						col1="Location/Scale" col2="Explanation"
					>
					<tr>
						<td><MenuButton text="The United States" to="./demographics-usa" /></td>
						<td><MenuButton text="American Secularization" to="./demographics-usa-explained" /></td>
					</tr><tr>
						<td><MenuButton text="Global Religion" to="./ont-anselm" /></td>
					</tr>
					</DropdownMenu>
				</td>
			</tr><tr>
				<td></td>
				<td><DropdownMenu title="Ontological ('Maximally Great') Arguments"
						col1="Objection Basis" col2="Argument By"
					>
						<tr>
							<td rowspan="5">
								<MenuButton text="Metaphysical Modality" to="./possible-metaphys" />
								<br /><br />
								<MenuButton text="Possible Worlds" to="./possible-worlds" />
							</td>
						</tr><MenuButtonRow text="Anselm of Canterbury" to="./ont-anselm" />
						<MenuButtonRow text="Rene Descartes" to="./ont-descartes" />
						<MenuButtonRow text="Kurt Godel" to="./ont-godel" />
						<MenuButtonRow text="Alvin Plantinga" to="./ont-plantinga" />
					</DropdownMenu></td>
				<td></td>
				<td></td>
			</tr>
		</table>
		<br /><br />
		<Section num={++sections} summary="Why is another atheist critique of Christian ideas needed?">
		<ul>
			<li><Hyperlink to="http://www.booksandculture.com/articles/2007/marapr/1.21.html">Many Christian apologists</Hyperlink> have <Hyperlink to="http://www.deeperwatersapologetics.com/?p=8446">protested</Hyperlink> that so-called "New Atheist" books show a poor understanding of Christian philosophy, theology, and apologetics. So, I wanted to refute Christian apologetics using a more nuanced approach with a stronger basis in analytic philosophy.</li>
			<li>I wanted to compile and crystallize all of the arguments and information that I have gathered from my research on Christian apologetics into a coherent, compelling case supporting my own view(s) or lack thereof.</li>
			<li>Many Christian apologists, particularly Dr. William Lane Craig, have written a lot of material that has gone unaddressed or insufficiently addressed by atheists online. So, I want to sufficiently address that material.</li>
			<li>I wanted to respond to 3rd and greater "layers" of arguments, where the first layer is someone's initial argument, the second is a counterargument, the third is a rebuttal (or counter-counterargument), etc., since these often become too specific and obscure for popular sources to address.</li>
			<li>Christian apologists and online atheist counter-apologists often argue past each other, since Christian apologists often prefer to focus on metaphysics whereas atheists often prefer to focus on epistemology.<Note num={++notes}>See for example, <Hyperlink to="http://capturingchristianity.com/conversation-street-epistemologist/">Cameron Bertuzzi's metaphysics against Iain MacLeod's "Street Epistemology."</Hyperlink></Note> I want to address both.</li>
			<li>Many critiques of Christian doctrine that I have seen made by atheists online are simply not sound enough arguments to justify their conclusions. I want to try my best to provide better ones.</li>
			<li>Finally and perhaps most importantly, I have not yet found any other online source with a good comprehensive rebuttal to Christian apologetics which I feel comfortable recommending to people who ask me for more information. So, I decided to make my own.</li>
		</ul></Section>
		<Section num={++sections} summary="I started writing for this project in 2016, made it into a website in May 2019, and am still working on finishing the website.">
		I have been writing material for this project since 2016, but several sections are still incomplete and only contain rough outlines of arguments. For example, at the moment my section refuting teleological arguments is fairly sparse.
		<br /><br />
		Also, parts of this project that I have already written but still need to be added to this website address the following subjects:
		<ul>
			<li>Epistemology and Cognitive Psychology</li>
			<li>Semantics</li>
			<li>Philosophy of Mind</li>
			<li>Personal Identity</li>
			<li>The Problem of Evil</li>
			<li>Divine Hiddenness</li>
			<li>History and Biblical Studies</li>
			<li>Psychology of Religion</li>
			<li>My Personal Story</li>
		</ul>
		For the moment, the style of this website is strongly influenced by a <Hyperlink to="https://beliefmap.org/">fantastic online Christian apologetics resource called BeliefMap</Hyperlink> by Blake Giunta. My apologies to Mr. Giunta for imitating so many aspects of his website's style, and if the resemblance is too strong, hopefully I can make this website's style more unique in the future.
		<br /><br />
		</Section>
	</Layout>);
} /* <Sidebar /> */

const IndexPage = () => render()
export default IndexPage