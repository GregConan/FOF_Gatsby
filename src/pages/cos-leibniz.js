import React from "react"
import { Link } from "gatsby"
import Hyperlink from "../components/Hyperlink"
import Section from "../components/Section"
import Note from "../components/Note"

import Layout from "../components/layout"
import SEO from "../components/seo"

var notes = 0;
var sections = 0;
const CosLeibniz = () => (
  <Layout>
    <SEO title="Gottfried Leibniz's Cosmological Argument" />
    <p>According to Gottfried Leibniz, "<Hyperlink to="https://reasonabletheology.org/why-is-there-something-rather-than-nothing-leibniz-contingency-argument/">the first question that should rightly be asked is 'Why is there something instead of nothing?'</Hyperlink>" It is a simple question to which Leibniz considered God the only possible answer. But asking why there is something rather than nothing is insufficient to show that God exists.</p>
    <Section num={++sections} summary="Why is there something rather than nothing? Well, why not? There is no reason to expect nothing rather than something, and maybe the universe has no explanation. Plus, if probability is based on observations, 1 out of 1 observed universes exists.">
        A much simpler answer to Leibniz's question is given without invoking God in the first three words of the Stanford Encyclopedia of Philosophy's discussion of Leibniz's question: "<Hyperlink to="https://plato.stanford.edu/entries/nothingness/#WhyTheSomRatThaNot">Well, why not?</Hyperlink>"
        <Note num={++notes}>
            See also Sean Carroll, "<Hyperlink to="http://blogs.discovermagazine.com/cosmicvariance/2007/08/30/why-is-there-something-rather-than-nothing/#.Wwq4EEFRWEf">Why Is There Something Rather Than Nothing?</Hyperlink>"; and TheMessianicManic, "<Hyperlink to="https://youtu.be/21xaQcugUJU">Refuting the Argument from Causality."</Hyperlink>
        </Note> After all, the universe may simply have no explanation. One may protest that the universe must have an explanation because of the Principle of Sufficient Reason, but I address that while refuting Leibniz's contingency argument. So why expect nothing rather than something?
        <br /><br />
        Consider as a response Dr. Craig's claim that "[g]iven the infinity of broadly logically possible worlds, the odds that in all of them contingent beings just happen inexplicably to exist is infinitesimal."
        <Note num={++notes}>
            Craig, <em>Reasonable Faith</em> p. 110.
        </Note> If so, there must be some explanation given that the universe's existence is so unlikely. The universe could not simply exist due to chance, can it?
        <br /><br />
        One need not assume that anything necessarily exists to answer Leibniz's question. It depends on one's <Hyperlink to="https://plato.stanford.edu/entries/probability-interpret/">interpretation of probability</Hyperlink>. First consider "frequentism," which defines the probability of the set of events X in the set of mutually exclusive possible events Y as the frequency with which X actually occurs rather than other members of Y. Since there is one known existence, and no actual nonexistence, the probability of the universe existing is 1 ÷ 1 = 100%.
    </Section>
    <Section num={++sections} summary="'[S]ince there are infinitely many' possible worlds in which something exists and only one possible world in which nothing exists, if all possible worlds are equally likely, then 'the probability of a populated world is equal to 1. Although the empty world is not impossible, it is as improbable as anything can be!'">
        Now consider the classical interpretation of probability: the probability of the set of events X in the set of mutually exclusive possible events Y is simply the number of members of X divided by the number of members of Y. In this case too, as will be shown, the probability of existence existing is 100%.
        <br /><br />
        To evaluate the probability of existence existing, one must evaluate which possibilities — or "possible worlds"
        <Note num={++notes}>
            I elsewhere reject the idea of possible worlds, but I grant it here for the sake of argument because Leibniz's cosmological argument depends on it.
        </Note> — allow existence to exist. Only one logically possible world contains nothing at all. Call it the "null world," named after the unitary <Hyperlink to="https://en.wikipedia.org/wiki/Null_pointer">null pointer</Hyperlink> in programming. It is impossible to imagine multiple null worlds because no difference between them can be defined. While "<Hyperlink to="https://plato.stanford.edu/entries/nothingness/#TheMosOneEmpWor">[m]ost philosophers would grant</Hyperlink>" that there is only one null world according to the Stanford Encyclopedia of Philosophy, it is worth considering the objections to avoid using an appeal to authority.
        <br /><br />
        <Hyperlink to="https://plato.stanford.edu/entries/nothingness/#TheMosOneEmpWor">John Carroll claimed that multiple null worlds can be distinguished based on their physical laws</Hyperlink>. However, such laws cannot exist in, or apply to, a possible world without any entities. Again recall the three major interpretations of what "the laws of nature" are: regularity theory, nomic necessity theory, and causal dispositions theory
        <Note num={++notes}>
            Craig, <em>Reasonable Faith</em> pp. 262-263.
        </Note> Under none of them is Carroll correct. Regularity theory and nomic necessity theory define the laws of nature as occurrences or generalizations about occurrences, respectively. Since nothing can occur in any null world, one cannot define multiple null worlds by what occurs in one as opposed to another. If physical laws are predictive generalizations, and the null world contains no physical objects about which to predict behavior, then physical laws cannot apply to the null world. Even if they did, their predictions would be identical for any null world, so null worlds cannot be distinguished by predictive laws. Causal dispositions theory defines the laws of nature as the essential causal tendencies of existing entities. Since null worlds have no existing entities, they would have no laws under this definition, so laws cannot be used to define multiple null worlds.
        <br /><br />
        Carroll tried to argue that null worlds can be distinguished by their counterfactuals, e.g., "If this world contained objects, then they would behave in certain ways." But possibilities are the same for all possible worlds — that is why they are called "<em>possible</em> worlds." To describe what a null world would be like if it had objects is simply to define a new possible world with those objects — notably, not a null world. No world can be distinguished from another by the counterfactual possibilities which contradict its own actual facts. So, only one possible world contains no contingent beings.
        <br /><br />
        Unlike the null world, differences can be defined between possible worlds which contain contingent beings. For any possible world, another can be defined by duplicating it and adding an arbitrary entity. Infinite possible worlds containing contingent beings can then be defined, as Dr. Craig implied by mentioning "the infinity of broadly logically possible worlds." There is no evidence to make one possible world more likely than another in the context of Leibniz's question, since evidence presupposes some existing thing. In this context, Dr. Craig must assume that all possible worlds are equally likely — especially because he needs this principle of indifference for his fine-tuning argument.
        <Note num={++notes}>
            Craig, <em>Reasonable Faith</em> p. 164.
        </Note>
        <br /><br />
        "[S]ince there are infinitely many populated worlds" and only one null world, if all possible worlds are equally likely, then "<Hyperlink to="https://plato.stanford.edu/entries/nothingness/#WhyTheSomRatThaNot">the probability of a populated world is equal to 1. Although the empty world is not impossible, it is as improbable as anything can be!</Hyperlink>" The probability of nothing existing is a numerator of one (the null world) with an infinite denominator (all possible worlds) — in other words, zero. The opposite of Dr. Craig's statement of Leibniz's argument is true: "Given the infinity of broadly logically possible worlds, the odds that in all of them contingent beings just happen inexplicably to exist" is 100%. There must exist something rather than nothing because there are infinitely more ways for something to exist than nothing.
    </Section>
    <Section num={++sections} summary="Even if it was possible and likely for nothing to exist, lacking an explanation for why there is something rather than nothing does not entail that God must be the explanation.">
        Even assuming that the null world is metaphysically possible <em>and</em> likely, such that Leibniz's question is legitimate, one could reasonably reply that "<Hyperlink to="https://youtu.be/NSqnl22Onzw?t=3m25s">I don't know why the universe exists, but I'm not convinced it's [G]od" because "[n]ot having an explanation of your own does not make you incapable of identifying when other explanations are ridiculous."</Hyperlink> This dismissal may raise eyebrows when applied to explaining the universe, because it is difficult to imagine what could explain the universe's existence if not God. Dr. Craig has explained why <Hyperlink to="https://www.reasonablefaith.org/podcasts/defenders-podcast-series-1/s1-argument-from-contingency/argument-from-contingency/">he believes that God is the only possible explanation</Hyperlink> for the universe:
        <blockquote>
        If the universe has an explanation of its existence then that explanation would be a being which exists beyond time and space and is therefore immaterial and timeless. If it is beyond space then it cannot be a material object. So this being would have to be immaterial ... But it would also have to be timeless if it created time ... There are only two types of things that I can think of that philosophers have ever thought of that could satisfy those types of conditions. One would be abstract objects ... like numbers ... The other thing that would fit this description would be a personal mind ... But abstract objects cannot cause anything ... So that means that the explanation of the existence of the universe must be a transcendent mind.
        </blockquote>
        Yet Craig's explanation leaves room for skepticism on several counts. First, Dr. Craig repeated one argument structure to argue that the first cause is immaterial, spaceless, and timeless: supposedly, it couldn’t be X because it brought about X. Yet this ignores the possibility that it was X, and brought about the universe's X from itself. In Christian theology, this position is known as <em>Creatio ex deo</em>: God created the universe out of himself, rather than out of nothing. For example, perhaps the initial cause of the universe was some kind of primeval matter, which created the rest of the material universe out of its own material. I am unaware at the moment how such a "prime matter" could cause the rest of the universe to exist, although presumably some multiverse theories offer candidates. These theories need not be known as true to make one skeptical that God must explain the universe; they need only to not be known to be false. <Hyperlink to="https://www.reasonablefaith.org/media/debates/the-craig-krauss-debate-at-north-carolina-state-university#presentation-10">Dr. Lawrence Krauss said as much</Hyperlink> in his debate with Dr. Craig:
        <blockquote>
        "Dr. Craig has <em>defined</em> God to be something that meets his question, his desire for necessity. So I <em>define</em> the multiverse to be that. Fine! The multiverse always existed. It is—without the multiverse our universe couldn’t have existed. Fine! Let him call it 'God.' I call it 'the multiverse.' My difference is that mine is motivated by physics, and his is motivated by myths that are thousands of years old. There’s some difference!" 
        </blockquote>
        One may protest the arbitrariness of "defining" the cause to be a multiverse instead of God without a falsifiable, well-evidenced specific theory entailing a multiverse to rely on. Yet this forgets that science has a stricter epistemic standard than theology. Although neither God nor a generic concept of a multiverse meet the high epistemic standards of scientific theories when proposed to explain why the universe exists, there is no epistemic reason to prefer one of them over the other. And again, one need not believe the multiverse <em>is</em> the explanation. One need only doubt that God is the explanation.
        <br /><br />
        Even if the cause must be timeless and immaterial, it still may be something other than God. Philosophers may only have come up with two examples of immaterial timeless beings, but that does not mean other kinds could not possibly exist. Dr. Craig called this "<Hyperlink to="https://www.reasonablefaith.org/media/reasonable-faith-podcast/debate-on-the-kalam-argument">a very weak response</Hyperlink>" by claiming that one ought to at least come up with an example. While giving an example would be ideal, it is not necessary to doubt the impossibility of some other timeless immaterial being. Again, the argument here is simply that although universe has an explanation, the evidence is not convincing enough to infer that the explanation is God.
        <br /><br />
        <Hyperlink to="https://www.reasonablefaith.org/media/reasonable-faith-podcast/debate-on-the-kalam-argument">Dr. Craig claimed</Hyperlink> that any immaterial timeless being may as well be God, and it is "just a semantic difference." But if a timeless, immaterial explanation of the universe cannot violate the laws of nature, then it ought not be called "God," because a "god" is usually defined as something supernatural. Dr. Craig has provided no explanation for why the explanation of the universe must be able to violate the laws of nature.
    </Section>
    At least one objection to Leibniz's cosmological argument which I have encountered or thought of does not suffice to refute it, though:
    <Section num={++sections} summary="Leibniz's cosmological argument assumes that it is possible for nothing to exist. Even though it is inconceivable for nothing to exist, it is still possible because it entails no contradiction.">
        <blockquote>"<em>[B]eing itself is so certain in itself that it cannot be thought not to be</em>."
        <br />
        –Saint Bonaventure
        <Note num={++notes}>
            Saint Bonaventure, <em>The Soul's Journey Into God</em> 5:3, p. 96.
        </Note></blockquote>
        Try to imagine a world where literally nothing exists. No people, no matter, no energy, no time, no space, and no gods.
        <br /><br />
        You can't do it, can you?
        <br /><br />
        Even the previous argument about the probability of there existing nothing rather than something assumes that it is possible for nothing to exist, but after all, "<Hyperlink to="https://youtu.be/BtOz7W-jt-c?t=2m20s">a state of affairs in which nothing existed ... doesn't make sense because that wouldn't be a state of affairs at all."</Hyperlink> One may rightly reply that even if a nonexistent state of affairs is contradictory, stating that it would be possible for nothing to exist entails no contradiction. Yet if a statement is noncontradictory, it does not follow that the statement describes anything metaphysically possible. A defender of Leibniz's cosmological argument must first show the metaphysical possibility of the null world. Conceivability is sometimes used to show metaphysical possibility,<Note num={++notes}>For example, in <em>A Treatise of Human Nature</em> (p. 32), David Hume references "an establish’d maxim in metaphysics, [t]hat whatever the mind clearly conceives, includes the idea of possible existence, or in other words, that nothing we imagine is absolutely impossible."</Note> but again, the null world is inconceivable. The null world may not merely be impossibly unlikely, but metaphysically impossible.
        <br /><br />
        However, I am unwilling to endorse that argument because it requires accepting "metaphysical possibility" as a legitimate category, separate from logical or physical possibility. As explained earlier, I do not. 
    </Section>			
  </Layout>
)

export default CosLeibniz;