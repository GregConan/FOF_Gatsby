import React from "react"
import { Link } from "gatsby"
import Hyperlink from "../components/Hyperlink"
import Section from "../components/Section"
import Note from "../components/Note"

import Layout from "../components/layout"
import SEO from "../components/seo"

var notes = 0;
var sections = 0;
const CosAquinas = () => (
  <Layout>
    <SEO title="Saint Thomas Aquinas's Cosmological Argument" />
    <script>
        {notes = 0}
        {sections = 0}
    </script>   
    <p>In a PragerU video, Peter Kreeft advanced a <Hyperlink to="https://www.prageru.com/videos/god-vs-atheism-which-more-rational">simplified form of Aquinas' argument from motion</Hyperlink>: 
    <br /><br />
    <blockquote>"[T]hings move. But nothing moves for no reason. Something must cause that movement. And whatever caused that, must be caused by something else, and so on. But this causal chain cannot go backwards forever. It must have a beginning. There must be an Unmoved Mover to begin all the motion in the universe: a first domino to start the whole chain moving, since mere matter never moves itself."
    <br /><br />
    </blockquote>
    But Thomas Aquinas's first mover argument is insufficient to show that God exists.</p>
    <Section num={++sections} summary="Any post-Newtonian physics allows that non-moving objects will begin to move due to the laws of nature such as gravity, so there need not exist an unmoved mover to initiate all motion in the universe as Peter Kreeft claimed.">
        Notably, Kreeft's last clause is straightforwardly false: matter <em>can</em> move itself. His argument is based on a highly outdated Aristotelian model of physics. As described by The Secular Atheist, any post-Newtonian <Hyperlink to="http://thesecularatheist.com/argument_from_motion.html">theory of gravity removes the need for a first mover</Hyperlink>:
        <br /><br />
        <blockquote>"Physics is no longer classical. The idea that no movement can happen without something else causing the movement is not just pre-Einsteinian, it is pre-Newtonian. When people thought that no motion was possible without a mover, they believed that angels had to push the planets to keep them moving. Two bodies at rest will start to move towards each other due to gravity. They can be each other's first mover. Therefore, the prior mover requirement is unnecessary, in fact, gravity means that a universe without motion is inconceivable and no first mover is needed."
        </blockquote>
        While a universe without motion is conceivable because one can imagine it, The Secular Atheist correctly pointed out that gravity and the other forces of nature are sufficient to explain motion in the universe.
    </Section>
    <Section num={++sections} summary="Aquinas's cosmological argument assumed that all potential things need an efficient cause to become actual. But given eternalism, all things in all moments of time are actual, so nothing needs an efficient cause to become actual.">
        In fairness, some theistic <Hyperlink to="https://www.reddit.com/r/ReasonableFaith/comments/7jp1lw/comment/dr9m098?st=JHUEJNXM&sh=08b9a6f5">apologists have objected</Hyperlink> that showing how gravity can explain the initiation of motion does not <em>really</em> address Aquinas's argument from motion because Aquinas's is based on metaphysics, whereas Kreeft's — and the atheists' rebuttals to it — solely use physics. Fortunately, Aquinas's metaphysical argument from motion shares the same flaw as the KCA. Since it assumes efficient causality, if eternalism is true then Aquinas's argument from motion fails.
        <br /><br />
        According to Aquinas, an entity may exist potentially or actually. For example, a lump of bronze exists <em>actually</em> as a lump and <em>potentially</em> as a statue. Efficient causality is the process of making an entity transition from potential to actual existence; e.g., turning a lump of bronze into a statue. Aquinas understood efficient causality as the process of actualization, when some entity moves from potential to actual existence. He invoked it to understand how potential entities become actual, because if an entity is never actualized, he thought that it could only remain potential and never become actual.<Note num={++notes} >Saint Thomas Aquinas, <em>Selected Philosophical Writings</em>, pp. 67-80.</Note>
        <br /><br />
        Each actual entity must then have transitioned from potential to actual existence due to its efficient cause, which must also be an actual entity — and therefore must have an efficient cause, assuming that it only existed potentially. Given that this chain of causes does not extend infinitely into the past, Aquinas reasoned that there must have been an entity which existed actually but lacked an efficient cause, and that it is God.
        <br /><br />
        If the future does not exist, then one must explain how it <em>will</em> exist by describing how it comes into being. In Aquinas’s terms, non-eternalism entails that the future only exists potentially but not actually, so efficient causality is required to explain how entities transition from potential to actual existence. One can then infer that each entity has an efficient cause. But given eternalism, no such explanation is required because the future actually exists like the present. If an entity exists actually, then it cannot be actualized. Given eternalism, every entity in any moment of time exists actually. Therefore, every entity in any moment of time cannot be actualized. An entity has an efficient cause only if it is actualized, but no entity can be actualized, so no entity has an efficient cause.
        <br /><br />
        For a more detailed explanation, see "<Hyperlink to="https://www.reddit.com/r/DebateReligion/comments/9s5sbo/aquinas_second_way_vs_time/">Aquinas' Second Way vs. Time</Hyperlink>" on Reddit's r/DebateReligion.
    </Section>			
  </Layout>
)

export default CosAquinas;