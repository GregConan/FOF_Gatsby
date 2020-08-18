import React from "react"
import { Link } from "gatsby"

// Components
import Layout from "../components/layout"
import Hyperlink from "../components/Hyperlink"
import Image from "../components/image"
import Note from "../components/Note"
import SEO from "../components/seo"
import Section from "../components/Section"

var notes = 0;
var sections = 0;
const LogicContra = () => (
  <Layout>
    <SEO title="Logical Contradictions" />
	<script>
		{notes = 0}
		{sections = 0}
	</script>
		<blockquote>"<em>[N]o one would expect to have a rational conversation with someone who spoke in contradictory statements. If Logical Absolutes are not always true, then it might be true that something can contradict itself, which would make truth unknowable and rational discourse impossible</em>."
		<br />
		—<Hyperlink to="https://carm.org/atheism/transcendental-argument">Christian apologist Matt Slick</Hyperlink></blockquote>
      <Section num={++sections} summary="Every contradictory statement must be false.">
		To accept a contradiction is to accept a falsehood. In deductive logic, this follows trivially. A "contradiction" is any conjunction of two propositions where the truth of one logically entails the falsity of the other. So because the conjunction of a false proposition with any other proposition is false,<Note num={++notes}>William of Ockham, <em><Hyperlink to="https://books.google.com/books?id=bTWchKGopDoC">Philosophical Writings: A Selection</Hyperlink></em>, ed. Philotheus Boehner and Stephen F. Brown (Indianapolis, IN: Hackett, 1990), p. 80. Note that Ockham uses the term "copulative proposition" to mean "that which is composed of several categorical propositions connected by the conjunction 'and' or some part of speech equivalent to some such conjunction." I use the term "conjunction" or "conjunctive proposition" to mean what he calls a "copulative proposition."</Note> every contradiction is necessarily false. But another reason not to believe in any contradiction, sometimes called the "principle of explosion," has been known at least since its brief summary by Ockham in the fourteenth century: "From an impossibility anything follows…Therefore this follows: 'You are a donkey, therefore you are God.'"<Note num={++notes}>Ockham, <em>Philosophical Writings</em> p. 88.</Note> Ockham uses the term "impossibility" instead of "contradiction," and does not explain the basis of the principle. I will explain that basis by using his example in the following proof. It will prove that, if one contradiction is true, then so is every other proposition:
		<br /><ol>
			<li>You are a donkey (assumed as a premise).</li>
			<li>You are not a donkey (assumed as a premise).</li>
			<li>You are a donkey, or you are God (deduced from premise 2 by <Hyperlink to="https://en.wikipedia.org/wiki/Disjunction_introduction">disjunction introduction</Hyperlink><Note num={++notes}>By "disjunction introduction" I mean the logical rule of inference that if one proposition X is true, then so is the disjunctive proposition "X or Y is true": Ockham, <em>Philosophical Writings</em> p. 82.</Note>).</li>
			<li>Therefore, you are God (deduced from premises 2 and 3 by a <Hyperlink to="https://en.wikipedia.org/wiki/Disjunctive_syllogism">disjunctive syllogism</Hyperlink><Note num={++notes}>By "disjunctive syllogism" I mean the logical rule of inference that if one proposition in a true disjunction is false, then the other must be true: Ockham, <em>Philosophical Writings</em> p. 82.</Note>).</li>
		</ol>
		To show why a contradiction logically entails any proposition to be true, the first two premises assume an arbitrary contradiction: you are, and are not, a donkey. The example that I chose can be swapped out with any other contradiction and the proof will remain logically valid, as long as one premise negates the other. A "disjunction" of two propositions is the proposition that one of them is true or the other is true.<Note num={++notes}>Ockham, <em>Philosophical Writings</em> p. 81.</Note> One of them is already known to be true, and a disjunction between many propositions means that at least one of them is true. Therefore, any proposition at all can be added to a true proposition by disjunction. 
		<br /><br />
		The same proof above can be shown in logical notation as follows: X; not-X; therefore X or Y; therefore Y. Because X and Y are arbitrary, each can be swapped out with any proposition at all. This is often called the "principle of explosion" because if one contradiction is true—any contradiction at all—then it follows by logical necessity that every other proposition is also true. If a belief system contains any contradiction, then it "explodes" and proves every other belief to be true.
		</Section>
		<Section num={++sections} summary="One should not believe a statement that one can only interpret in a contradictory way.">
		<blockquote>"<em><Hyperlink to="https://youtu.be/pGnMiGrYmPE?t=593">There are no true paradoxes, only seeming paradoxes that point to a gap in our understanding.
		</Hyperlink></em>"<br />—PBS Space Time</blockquote>
		One should not believe in any contradiction because it would force one to believe every other proposition:
		<br /><ol>
			<li>If a contradiction is true, then so is any other proposition (deduced from the principle of explosion).</li>
			<li>If one believes in some set of propositions, one should also believe all of its deductive implications (assumed as a premise).</li>
			<li>Therefore, if one believes a contradiction, one should believe every proposition (deduced from premises 1 and 2 by <Hyperlink to="https://en.wikipedia.org/wiki/Substitution_(logic)">substitution of terms</Hyperlink>).</li>
			<li>But one should not believe every proposition (assumed as a premise).</li>
			<li>Therefore, one should not believe a contradiction (deduced from premises 3 and 4 by <Hyperlink to="https://en.wikipedia.org/wiki/Modus_tollens">denying the consequent</Hyperlink><Note num={++notes}>"Denying the consequent" is this logical rule of inference: "The consequent is false; therefore so is the antecedent." From Ockham, <em>Philosophical Writings</em> p. 84.</Note>).</li>
		</ol>
		One can avoid the conclusion only by rejecting premise 1, 2, 4, or the logical rules of inference that entail the conclusion from the premises. Premise 1 is logically necessary, as proven above. To deny premise 2, one must—in at least one case—deny whatever logical rule of inference is used to deduce a new proposition from the propositions that one already believes to be true. Therefore, the only way to accept a contradiction is to violate a logical rule of inference or believe everything—including, for example, the proposition that no logical rule of inference is valid. Believing any contradiction, then, rejects logic.
		<br /><br />
		Because of the principle of explosion, a contradiction within any set of beliefs undermines the entire set. Imagine that a person named Emily believes in a set of propositions [A, B, C, …], such that two or more of them (say, B and C) contradict each other. From that set, Emily can prove any imaginable proposition true. By the argument above, she must believe in everything and become maximally gullible. One may object that perhaps Emily believes in contradictory propositions, but believes that they are consistent. Yet that does not resolve the problem; instead, it simply makes it worse. Imagine that Emily also believes another proposition D, which means, "B and C are not really contradictory and they only seem contradictory." The initial contradiction does not disappear. B and C still contradict each other—which itself contradicts proposition D. Emily still believes two contradictory propositions, but has added another proposition which contradicts them both!
		<br /><br />
		The only option for Emily to have a consistent set of beliefs is to remove one of the contradictory propositions from the set. She need not believe the opposite, for example by replacing B with the proposition "B is not true." Instead, she can merely withhold belief in the contradictory statement by removing it from the set without replacing it. Another possible objection is that by believing in proposition D, Emily is simply reinterpreting her beliefs B and C in a different way. But a "proposition" differs from a "statement" because the former is a unit of meaning, not a unit of language. If a statement has multiple meanings, then each of them is a different proposition. A proposition cannot then be "reinterpreted" unless it changes to become a totally different proposition. So, if Emily reinterprets her beliefs to make them consistent, that means removing B or C from the set and replacing at least one of them with a similar but different proposition.
		<br /><br />
		Therefore, if one ought to believe only in true propositions and not false ones, one ought never to believe in a contradiction—even if one does not see it as a contradiction and instead merely calls it "paradoxical." Anyone who claims to believe two statements which appear contradictory and merely calls them a "paradox" or "apparent contradiction" is either wrong or does not mean those statements literally. Either the person interprets the statements as consistent propositions, contradictory propositions, or does not believe them as propositions. If the propositions are not consistent, then the person’s beliefs are wrong, as shown above. If the propositions are consistent, but the person did not phrase them as consistent statements, then she did not mean those statements literally. She also did not mean them literally if she claims to believe the statements but does not believe one of them as a proposition.
		<br /><br />
		One may argue that the person has non-literal or non-propositional beliefs. Yet "literal" does not describe the belief; it describes the relation between the statement and the (propositional) belief. If a proposition is the most straightforward interpretation of the terms of a statement, then the proposition is the "literal" interpretation of the statement; and otherwise it is not. I would define "straightforward" here, but that is unneeded: regardless of its meaning, the relevant point is that calling a belief "non-literal" is a category error. Similarly, one may argue that some beliefs are non-propositional. But every belief is at least about some proposition, so "non-propositional beliefs" do not exist. From all of this, it follows that if two propositions are contradictory, then a person should withhold belief from at least one of them. If two statements appear contradictory, then a person must either interpret the statements as consistent propositions or withhold belief from at least one of the statements.	
      </Section>
  </Layout>
)

export default LogicContra

