import React from "react"
import { Link } from "gatsby"

// Components
import Layout from "../components/layout"
import Hyperlink from "../components/Hyperlink"
import Image from "../components/image"
import Note from "../components/Note"
import SEO from "../components/seo"
import Section from "../components/Section"

// Images
import theoriesOfTime from "../images/theories-of-time.png"

var notes = 0;
var sections = 0;
const RelativeTime = () => (
  <Layout>
    <SEO title="Relative Time" />
    <Section num={++sections} summary="The many different theories of time disagree about whether the passage or 'flow' of a 'present moment' forward through time is real. Dynamic 'A-theories' call it objectively real, while static 'B-theories' call it a subjective illusion.">	
        Dr. William Lane Craig's "kalām cosmological argument" (KCA) is based on the idea that some things "begin to exist." To define what this means, Craig invoked the concept of "tensed facts," which <Hyperlink to="https://www.reasonablefaith.org/question-answer/P20/beginning-to-exist">presupposes a controversial metaphysical theory of time</Hyperlink>:
        <br /><br />
        <blockquote>"[I]f there are tensed facts, then time itself is tensed. That is to say, the moments of time are really past, present, or future, independently of our subjective experience of time ... The reality of tensed facts therefore entails a tensed theory of time, usually called an A-Theory of time ... on a tenseless or B-Theory of time there really are no tensed facts ... in objective reality there is no 'now' in the world. Everything just exists tenselessly. So according to the B-Theory of time, all things and events in time are equally existent ... Nothing in the space-time block ever comes into or goes out of being, nor does the space-time block as a whole come into being or pass away."</blockquote>
        The ostensibly simple phrase "tensed fact" opens up a philosophical debate about the nature of time that has raged for thousands of years, since the <Hyperlink to="https://plato.stanford.edu/entries/spacetime-bebecome/#Intro">dispute was expressed by Heraclitus and Parmenides in the fifth century B.C.E.</Hyperlink> It was defined perhaps most clearly by J.M.E. McTaggart in his 1908 work <Hyperlink to="https://en.wikipedia.org/wiki/The_Unreality_of_Time">The Argument for the Unreality of Time</Hyperlink>, which described two ways that events can be ordered: the <Hyperlink to="https://en.wikipedia.org/wiki/A-series_and_B-series">"A-series" and "B-series."</Hyperlink> They define the temporal order of events absolutely and relatively, respectively. The A-series says that events either have the property of being "past," "present," or "future" absolutely, making verb tense an objective feature of reality. The B-series, on the other hand, only says that events only have the properties of being "earlier than," "simultaneous with," or "later than" other events, making tense a mere perspective-dependent linguistic shortcut, like "here."
        <br /><br />
        Based on McTaggart's distinction, a debate has emerged between defenders of the "A-theory of time," which calls tense objective such that the A-series is fundamental to reality, and the "tenseless" or "<Hyperlink to="https://en.wikipedia.org/wiki/B-theory_of_time">B-theory of time</Hyperlink>," which calls tense relative such that the B-series is fundamental. A-theories are sometimes called "tensed" because they affirm that an event’s tense (e.g., "the event happened" is past tense) is a real property of that event. B-theories deny that the property of tense is real, making them "tenseless." A-theories are also sometimes called "dynamic" and B-theories "static." A-theories call the passage or "dynamic flow" of time from present to future objective, and B-theories call it subjective. Static (B-)theories claim that the passage of time is a mere illusion existing only in the minds of observers, and not fundamental to reality. Dynamic (A-)theories of time consider the present to exist objectively, whereas static (B-)theories claim that an event is no more objectively "present" than objectively "here."
        <br /><br />
        The chart below summarizes the difference between the two theories:
        <table>
            <tr>
                <th></th>
                <th>A-Theory</th>
                <th>B-Theory</th>
            </tr>
            <tr>
                <td>The flow of time from past to future is</td>
                <td>objectively real</td>
                <td>a subjective illusion</td>
            </tr>
            <tr>
                <td>The universe is actually</td>
                <td>dynamic, ever-changing</td>
                <td>static, never changing</td>
            </tr>
            <tr>
                <td>Space and time are</td>
                <td>totally different things</td>
                <td>parts of one thing, "spacetime"</td>
            </tr>
            <tr>
                <td>Verb tense ("it happened" vs. "it will happen") is</td>
                <td>an objective fact</td>
                <td>only true relative to a perspective</td>
            </tr>

        </table>

    </Section>
    <Section num={++sections} summary="Different theories of time disagree about which moments are real (past, present, and/or future). Presentism says only the present exists. Eternalism says every moment exists. This distinction is different from A- vs. B-theory. Every theory of time defines the present moment as objectively different from the past and future — except eternalist B-theory.">
        A closely related distinction has emerged in the same debate regarding which moments in time actually exist: <em><Hyperlink to="https://en.wikipedia.org/wiki/Philosophical_presentism">presentism</Hyperlink></em> claims that only the present moment actually exists, whereas <em><Hyperlink to="https://en.wikipedia.org/wiki/Eternalism_(philosophy_of_time)">eternalism</Hyperlink></em> claims that all moments in time actually exist such that none ever come into or leave existence. Eternalism has been nicknamed the "block universe" theory because it treats the universe as a "block" of spacetime. Similarly, a third view called the <em><Hyperlink to="https://en.wikipedia.org/wiki/Growing_block_universe">growing block</Hyperlink></em> theory claims that the past and present exist, but the future does not. The spacetime-block universe then "grows" because new "time-slices" are added onto the front of the block; i.e., the present. Events come into existence in the present, but never go out of existence, instead staying in the block. Growing block theory also implies a fourth: a "shrinking block" theory which claims that the present and future exist but the past does not. However, this theory has rarely if ever been seriously defended.
        <br /><br />
        Presentism and eternalism may seem identical to the A- and B-theories respectively, but the distinctions are technically independent. There can be an eternalist A-theory and a presentist B-theory. Bradford Skow's <Hyperlink to="https://doi.org/10.5840/jphil20091061224">"Moving Spotlight" theory of time</Hyperlink>, for example, is an eternalist A-theory. It claims that all moments in time are equally real, but that the passage of time is also real. Instead of understanding the passage of time as events coming into and out of existence, it claims that a given moment starts with the property of being future, exchanges it for the property of being present, and finally exchanges it for the property of being past. In that way, the moment of "being present" passes through the "block" like a spotlight which shines on one moment at a time, even though all moments exist.
        <br /><br />
        The converse of the moving spotlight theory is a presentist A-theory in which only the present exists, but the flow of time is illusory, Like the "shrinking block" theory, it has rarely if ever been defended in the literature. Anyone who believes it must believe that only the present exists and will never change, which conflicts with the entirety of science and human experience. Yet it is still a coherent position to hold. Similarly, one could also claim that only the past, only the future, or only both is real by denying that the present exists. However, since each person's conscious experience is presumably in the(ir) present, there is little reason for anyone to endorse any of those three theories. To my knowledge, no one has.
        <br /><br />
        All of those positions can be organized into an exhaustive chart based on which of the past, present, and future they consider real, and whether they consider the passage of time to be real:
        <br /><br />
        <img src = {theoriesOfTime} alt = "theories-of-time.png" />
        Perhaps the most interesting fact about this chart is in its right column: every one of those positions, from the oft-defended dynamic present theory to the never-defended past-only theory, assumes that the present can be defined objectively – except one: the "static block" eternalist B-theory of time. If it could be shown that the present cannot be defined objectively but can instead only be defined relative to one's perspective, then one could simultaneously rule out all eight alternatives to B-theoretic eternalism. Such a powerful knock-down argument against all alternatives to a position is extremely rare in philosophy. However, Albert Einstein's theory of relativity has provided exactly such an argument.
    </Section>
    <Section num={++sections} summary="Einstein's theory of relativity shows that the present moment ('now') cannot be defined objectively and is instead relative, in the same way as 'here' is for space. But if the present moment is relative, then the only possible theory of time is eternalist B-theory.">	
        According to the theory of relativity, the speed of light is constant. So if one observer moves towards a light source and away from another, then the light coming from in front of them will take less time to reach them than any light coming from behind them. The light from in front of them would reach them earlier than light from behind them — even if another observer sees both sources release light at the same time. Events that one person observes as occurring simultaneously in the present can be observed by another person as happening sequentially, such that some of them happen in the past. This phenomenon is called the "<Hyperlink to="https://en.wikipedia.org/wiki/Relativity_of_simultaneity">relativity of simultaneity."</Hyperlink> Wikipedia's entry on it includes an "<Hyperlink to="https://en.wikipedia.org/wiki/Relativity_of_simultaneity#/media/File:Relativity_of_Simultaneity_Animation.gif">animation illustrating the relativity of simultaneity</Hyperlink>," which shows how it allows the temporal order of events to change based on one's velocity:
        <br /><br />
        <img class="aligncenter" src="https://media1.giphy.com/media/PrlkxgXrQpn3i/giphy.gif" alt="events occur GIF" />
        <blockquote>"The three events (A, B, C) are simultaneous from the reference frame of an observer moving at <em>v</em> = 0. From the reference frame of an observer moving at <em>v</em> = 0.3<em>c</em>, the events appear to occur in the order C, B, A. From the reference frame of an observer moving at <em>v</em> = -0.5<em>c</em>, the events appear to occur in the order A, B, C. The white line represents a <em>plane of simultaneity</em> being moved from the past of the observer to the future of the observer, highlighting events residing on it. The gray area is the light cone of the observer."</blockquote>
        Unfortunately for the presentist, the <Hyperlink to="https://youtu.be/crk0KAnp5FQ?t=1m50s">relativity of simultaneity directly contradicts presentism</Hyperlink>, as TheMessianicManic explained (although he said "A-theory" when he should have said "presentism"):
        <br /><br />
        <blockquote>"According to the theory of relativity, two events that are simultaneous from one frame of reference can be sequential (one after the other) from another frame of reference.
        <br /><br />
        So say two events (we’ll call them Event A and Event B) are simultaneous from one frame of reference, while being sequential from another frame of reference. If we apply the A theory of time … from the frame of reference in which the events are simultaneous, since they both occupy the present, [they] are both equally real … But from the frame of reference in which the two events are sequential, one event occurs in the present while the other does not. So in this frame of reference, while Event A is real, Event B is not real … The A-Theory of time forces us to assume that Event B is both real and not real.
        <br /><br />
        The only way the A Theory can reconcile these two perspectives is to assume that the difference between the two frames of reference is illusory … Craig rejects the theory of relativity and adopts what’s called a ‘neo-Lorentzian’ perspective of this phenomenon. The key difference … is that relativity says that there is no privileged frame of reference."</blockquote>
        Craig's "Neo-Lorentzianism" harkens back to the concept of the "luminiferious ether," a single substance making up what we call empty space through which light propagates. It has largely been <Hyperlink to="https://youtu.be/DQsplQW7KGw">abandoned by modern physics</Hyperlink>. Even Lorentz himself realized that there is no place for an objective reference frame in relativity, and left behind the ether theory which bears his name. Unlike Lorentz, though, <Hyperlink to="http://rationalwiki.org/wiki/William_Lane_Craig">Craig remains an ardent defender of his "Neo-Lorenzianism"</Hyperlink>:
        <br /><br />
        <blockquote>"Craig has <Hyperlink to="http://rationalwiki.org/wiki/Argumentum_ad_nauseam">written a lot of books</Hyperlink> on the subject of time, promoting an <Hyperlink to="http://rationalwiki.org/wiki/Relativity_denial">interpretation of relativity</Hyperlink> that he calls Neo-Lorentzian, and which includes an absolute present moment. Craig claims that such an interpretation is observationally equivalent to special relativity. Of course this is seriously disputed, but even if this is the case, there is no reason why we should prefer Craig’s interpretation (<Hyperlink to="http://rationalwiki.org/wiki/Occam%27s_duct_tape">which is very complex</Hyperlink>) to Einstein’s interpretation (<Hyperlink to="http://rationalwiki.org/wiki/Occam%27s_razor">which is simpler and works completely fine by itself</Hyperlink>)."</blockquote>
        Using Ockham's razor, <Hyperlink to="https://en.wikipedia.org/wiki/Lorentz_ether_theory">Einstein threw out the concept of an objective reference frame nearly a century ago</Hyperlink>. Postulating an ether adds nothing to modern physics, since <Hyperlink to="https://youtu.be/DQsplQW7KGw">observational evidence falsified original concepts of the ether</Hyperlink> which made different predictions from the Einsteinian non-ether theory. Neo-Lorentzianism consists of an unfalsifiable and unverifiable metaphysical assertion that there exists a privileged reference frame somewhere out there in the universe, of which scientists have neither discovered (nor ever could discover) any evidence. The <Hyperlink to="https://en.wikipedia.org/wiki/Eternalism_(philosophy_of_time)">Neo-Lorentzian's highly dubious approach</Hyperlink> is
        <br /><br />
        <blockquote>to accept that SR [special relativity] offers a perfectly empirically adequate theory, but to insist that absolute simultaneity still exists … [claiming] that we cannot possibly detect the privileged frame of reference that determines the present. In other words, absolute simultaneity is not empirically accessible...
        <br /><br />
        [The] metaphysics fully relies on postulated extra-structure that can't even in principle be observed... [which] violates Ockham's razor so crassly that the move cannot be justified by putting some post-verificationist philosophy of science on one's flag.
        <br />
        —Christian Wüthrich<Note num={++notes}>"Christian Wüthrich, 'No Presentism in Quantum Gravity,' in <em>Space, Time, and Spacetime: Physical and Philosophical Implications of Minkowski's Unification of Space and Time</em>," as cited by <Hyperlink to="https://en.wikipedia.org/wiki/Eternalism_(philosophy_of_time)">Wikipedia's page on "Eternalism."</Hyperlink></Note>
        </blockquote>
        Since Einstein, few if any cosmologists would claim that an ether exists. Dr. Craig seems to be one of the only intelligent people left clinging to the idea, probably because he has an agenda: trying to squeeze God into modern cosmology. Still, Craig tried to justify the second premise of the KCA by <Hyperlink to="http://www.leaderu.com/offices/billcraig/docs/kalam-oppy.html">appealing to the scientific consensus</Hyperlink> in physics:
        <br /><br />
        <blockquote>"According to [Stephen] Hawking in his most recent book, 'almost everyone now believes that the universe, and time itself, had a beginning at the Big Bang.' The defender of the kalam cosmological argument can hardly be indicted for appealing to this vast consensus in support of his argument."</blockquote>
        By appealing to the scientific consensus here, Craig tries to have his cake and eat it too. Under his logic, the scientific consensus is correct when it says that the universe had a beginning, but it is incorrect when it claims that B-Theory is preferable to A-Theory because the latter includes an unnecessary, unverifiable, unfalsifiable metaphysical assertion. Cosmology may support the contention that the universe had a first moment, but it does not support the A-Theory of time. Dr. Craig affirmed the conclusions of modern physics when they supported his argument, but denied the conclusions of modern physics when they negated his argument.
    </Section>
</Layout>)

export default RelativeTime