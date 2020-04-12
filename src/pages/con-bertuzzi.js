import React from "react"
import { Link } from "gatsby"
import Hyperlink from "../components/Hyperlink"
import Section from "../components/Section"
import Note from "../components/Note"

import Layout from "../components/layout"
import SEO from "../components/seo"

var notes = 0;
var sections = 0;
const ConBertuzzi = () => (
  <Layout>
    <SEO title="Cameron Bertuzzi's Contingency Argument" />
    <script>
        {notes = 0}
        {sections = 0}
    </script>    
		<p>Cameron Bertuzzi of "Capturing Christianity" described an "<Hyperlink to="http://capturingchristianity.com/updated-contingency-argument/">updated contingency argument</Hyperlink>" using modal logic which attempted to avoid many of the problems with Leibniz's. Note that "L" is defined as "the set of all concrete objects in the actual world," which will become crucial when deconstructing Bertuzzi's argument. Anyway, he presented his argument as the following syllogism:</p>
		<blockquote><ol>
            <li>"Necessarily, every set of contingent concrete objects possibly has an explanation for why it, rather than some other set of objects, exists.</li>
    		<li>L possibly has an explanation for why it, rather than some other set of objects, exists. (from 1)</li>
            <li>No contingent object in the actual world could explain L.</li>
		    <li>If no contingent object in the actual world could explain L and (2) is true, L is possibly explained by a necessary being or group of necessary beings (N).</li>
		    <li>If L is possibly explained by N, N exists.</li> 
    		<li>If N exists, God exists.</li>
    		<li>God exists. (from 2, 3, 4, 5, 6 via modus ponens and hypothetical syllogism)"</li>
        </ol></blockquote>
		But Bertuzzi's contingency argument is insufficient to show that God exists.
        <Section num={++sections} summary="Bertuzzi conflates the location of a thing's explanation with that thing's necessity, making him ignore the possibility of self-explanatory contingent things and non-self-explanatory necessary things. According to many Christian apologists, the laws of logic fall into the latter category, so if the PSR is correct then the transcendental argument for God must fail.">
            First note the familiar mistake of conflating an entity's necessity with the location of that entity's explanation. Like the PSR, if an apologist accepts the conflation inherent to Bertuzzi's argument then they must reject the TAG, since the TAG claims that the metaphysically necessary laws of logic need an explanation. But that is not my main problem with Bertuzzi's argument.
        </Section>
        <Section num={++sections} summary="Bertuzzi claims that the set of all actual contingent things possibly requires an explanation. But necessarily, a set defined as actual exists only in the actual world. Claiming that an actual set possibly requires an explanation is then the same as claiming that the set actually requires an explanation, which is an unfounded presupposition.">
        While dropping other flaws of the PSR, Bertuzzi picked up the central flaw of Plantinga's MOA: definitional smuggling and an illicit use of "possibility." In premise (2), Bertuzzi described the <em>possibility</em> that L has an explanation; that is, the possible world containing L where L has an explanation. Yet recall that L is defined as existing "in the actual world." Since L is defined as actual, no set of concrete objects in a non-actual world is L, because the phrase "the L in a world that is not actual" means "the set in the actual world which is not in the actual world," a contradiction. So L is necessarily only actual.
				<br /><br />
				One could argue that calling that a contradiction presupposes the impossibility of transworld identity, to which I have two replies. First, I elsewhere gave arguments for that impossibility rather than presupposing it. But suppose secondly that transworld identity is possible, which entails modal essentialism because transworld identity allows the property of being a particular thing to exist simultaneously in multiple individuals, making it a universal essence. Given modal essentialism, to <em>define</em> L as actual is to call L necessarily actual, and therefore <em>essentially</em> actual. Since nothing contradicts its essence in any possible world, L existing in a non-actual world is impossible. So if L is defined as actual, then L exists in no possible world except for the actual world.
				<br /><br />
				By definition, and therefore necessarily, L exists in the actual world. Therefore, to say that L is "possibly" anything is deceptive: if L is X in the actual world, then by definition (and therefore necessarily) L is X. Inversely, if L is not X in the actual world, then by definition (and therefore necessarily) L is not X. So either L is necessarily X or necessarily not X, without any possibilities in between — i.e., □X(L) ⊻ □¬X(L). For any proposition P, (□P ⇒ ◊P) ∧ (□¬P ⇒ ¬◊P) ∧ (□¬P ⇒ ◊¬P), so (□P ⊻ □¬P) ⇒ (◊P ⇔ □P). Therefore, ◊X(L) ⇔ □X(L). Whenever Bertuzzi claims that L is "possibly" anything, he is then claiming that L is necessarily that thing. Put another way, L is possibly X only if L is actually X, because if L was possibly but not actually X then a contradiction would follow from the definition of L as actual.
				<br /><br />
				The upshot is that calling anything possible for L is identical to calling it necessary and actual for L. With that in mind, replace every instance of "L is possibly…" with "L is necessarily…" or "L is actually…" in Bertuzzi's syllogism:
				<blockquote>
				(2) L <em>necessarily/actually</em> has an explanation for why it, rather than some other set of objects, exists.
				<br />
				(3) No contingent object in the actual world could explain L.
				<br />
				(4) If no contingent object in the actual world could explain L and (2) is true, L is <em>necessarily/actually</em> explained by a necessary being or group of necessary beings (N).
				</blockquote>
				In the act of asserting (2), Bertuzzi presupposes that the set of all actual contingent objects (i.e., the universe) has an explanation. Conjoined to (3), (2) entails that the universe has an explanation outside itself. Bertuzzi's assertion that his argument "does not entail that the universe as a whole is contingent" is then false, which opens his argument up to those objectors to Leibniz who call the universe necessary even though its parts are contingent. Because the claim that L actually has an explanation of its existence has yet to be demonstrated, and point (2) of Bertuzzi's argument is identical to that claim, I withhold belief from point (2) and therefore from any conclusion(s) that Bertuzzi draws from it, including the existence of God.
				<br /><br />
				Every X either is necessary and actual and possible, is actual and possible, is non-actual and possible, or is impossible. Once one has called something necessary, or actual, they have answered the question of whether it is possible. So discussing whether a necessary thing possibly exists, or whether an actual thing possibly has some property, is inherently deceptive. Bertuzzi and Plantinga hid their respective deceptions using <em>definitional smuggling</em>: Plantinga smuggled necessity into his definition of a maximally great being, an
				d Bertuzzi smuggled actuality into his definition of L, so that they could discuss possibilities about those entities without anyone noticing their deception.
        </Section>
    </Layout>);

export default ConBertuzzi;