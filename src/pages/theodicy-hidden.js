import React from "react"
import { Link } from "gatsby"
import Hyperlink from "../components/Hyperlink"
import Section from "../components/Section"
import Note from "../components/Note"

import Layout from "../components/layout"
import SEO from "../components/seo"

var notes = 0;
var sections = 0;
const DivineHidden = () => (
  <Layout>
    <SEO title="Divine Hiddenness" />
    <script>
        {notes = 0}
        {sections = 0}
    </script>
    <blockquote><em>"The single best argument against God, for me, is how bad He is at declaring his glory. It would be trivially easy for God to let us know He exists. Instead, the world chugs along exactly as if He didn’t."</em></blockquote>
    —<Hyperlink to="https://twitter.com/seanmcarroll/status/1141770080063250434">Dr. Sean M. Carroll</Hyperlink>
    <br /><br />
    <p>Do you remember the story of Saint Paul’s conversion in Acts 9:1-30? According to the book of Acts, Saul of Tarsus received approval from the high priest to arrest all of the Christians in Damascus so that they could be executed. On the road to Damascus, he experienced a vision from Jesus:</p>
    <blockquote>“<em>[S]uddenly a light from heaven flashed around him.  He fell to the ground and heard a voice say to him, “Saul, Saul, why do you persecute me?” “Who are you, Lord?” Saul asked. “I am Jesus, whom you are persecuting,” he replied. “Now get up and go into the city, and you will be told what you must do.” The men traveling with Saul stood there speechless; they heard the sound but did not see anyone. Saul got up from the ground, but when he opened his eyes he could see nothing.</em>”<Note num={++notes}>Acts 9:3-8 (NIV)</Note></blockquote>
    <p>When Saul arrived in Damascus, the prophet Ananias healed Saul’s blindness at God’s direction. After his baptism as a Christian, Saul stopped persecuting Christians and became known as Paul.</p>
    <p>The most incredible part of this story is that God chose to directly communicate with this one man, demonstrably turning his life around and improving his character, and then chose never to repeat this highly effective strategy with most humans who have ever lived. God could have chosen to help the billions of people who have lived and died without a Christian religious experience. Why didn’t he? Were Saint Paul and a handful of other Christians the only ones who could have benefitted from God's divine intervention to turn their lives around? If not, God refused to help people when it was easily within his power. While the exact same kind of divine intervention may not work for everyone, an all-knowing God would by definition know the most effective means to convert every person.
    <br /><br />        
    Imagine a world where everyone could speak to God and receive a direct, unambiguous response. People could hear a disembodied voice (inside or outside their heads), speak to an avatar of God which everyone could see, or communicate in some other clear way. God could provide everyone with advice, encouragement, consolation, warnings, validation, and many other gifts which most human fathers strive to provide. God could nurture his children more effectively than any father in history. Everyone would have a relationship with him, a much closer relationship than our world allows. Those who are depressed, lonely, self-hating, anxious, grief-stricken, or on the brink of suicide could find solace in the unambiguous presence of an all-powerful being who deeply loves them. People would be less likely to make rash decisions or pursue sinful behavior, since xx. Such a world would be beautiful and incredible, incomprehensibly better than ours. It also would logically follow from the existence of an all-powerful, all-knowing, and all-loving deity. Unfortunately, that world is not our world.
    <br /><br />    
    God could have chosen to help the billions of people who went their entire lives without a Christian religious experience. Why didn't he? Was St. Paul the only person who could have possibly benefited from God's divine intervention to turn his life around? If not, God refused to help people when it was easily within his power.
    <br /><br />
    These questions are generally called the argument from “divine hiddenness.”<Note num={++notes}>John L. Schellenberg, <em>Divine Hiddenness and Human Reason</em> (Cornell University Press, 2006). I use Schellenberg’s terminology, including his term “divine hiddenness,” because my divine hiddenness arguments—especially the second one—have been heavily influenced by his work.</Note> They ask, “Why God has hidden himself from so many people?” To discuss “<em>the</em> argument from divine hiddenness” is misleading, though, because “divine hiddenness” labels a group of related arguments which use similar facts and reasoning to derive incorrect predictions from fundamental Christian doctrine. I will defend three similar but distinct divine hiddenness arguments. I call them respectively the arguments from the missing voice, missing concept, and missing dramatic universal revelation of God:</p>
    <Section num={++sections} summary="The Missing Concept: Christian doctrine implies that everyone can form an explicit personal relationship with God; so it implies that everyone has a concept of God; but some people have no concept of God; so Christian doctrine is false."
    >
        <blockquote>"<em>But how are they to call on one in whom they have not believed? And how are they to believe in one of whom they have never heard? And how are they to hear without someone to proclaim him?</em>" 
        </blockquote>
        —Romans 10:14-15
        <br /><br />
        The following argument has been adapted from J. L. Schellenberg's <em>Divine Hiddenness and Human Reason</em>:
        <br /><br /><ol>
            <li>Christian doctrine implies that everyone can freely choose an “explicit and positively meaningful relationship”<Note num={++notes}>
            Schellenberg, <em>Divine Hiddenness and Human Reason</em> p. ix.</Note> with God (assumed as a premise).</li>
            <li>If one does not know about God, then one cannot freely choose an explicit and positively meaningful relationship with God (assumed as a premise).</li>
            <li>So if one does not know about God, then Christian doctrine is false (deduced from premises 1 and 2 by <Hyperlink to="https://www.oxfordreference.com/view/10.1093/oi/authority.20110803095711647">denying the consequent</Hyperlink>
            <Note num={++notes}>
                By “denying the consequent” I mean the logical rule of inference that “if X, then Y” and “Y is false” deductively entail that X is false. “If an inference is valid, then from the opposite of the consequent the opposite of the antecedent follows,” as Ockham stated in his <em>Philosophical Writings</em> (p. 85).
            </Note>).</li>
            <li>Someone does not know about God (assumed as a premise).</li>
            <li>So, Christian doctrine is false (deduced from premises 3 and 4 by <Hyperlink to="https://www.oxfordreference.com/view/10.1093/oi/authority.20110803095354544">affirming the antecedent</Hyperlink><Note num={++notes}>
                By “affirming the antecedent” I mean the logical rule of inference that “if X, then Y” and “X is true” deductively entail that Y is true. Ockham does not specifically state this, but it is implicit in his discussion of deductive inferences in his <em>Philosophical Writings</em> (pp. 83-88).
            </Note>).</li>
        </ol>
        As with any proof, one can deny the conclusion by denying a key premise. Premises 1, 2, and 4 are deniable because they do not necessarily follow from the others. Premise 1 infers that because God loves everyone, God wants to form a positively meaningful relationship with everyone—that is, a relationship considered meaningful and positive by everyone involved. I have yet to meet any Christian who denies that God loves everyone and wants everyone to love him, but the option is still open to one who wishes to deny the conclusion. God also wants the relationship to be <em>explicit</em>: Everyone should not only be in a relationship with God, but know <em>that</em> their relationship is with God. This is necessary not only because one must explicitly affirm Christian doctrine to be saved according to the Athanasian Creed, but because a loving relationship is characterized by intimacy: to be in a loving relationship with a person is not only to intensely care about that person, but to know about that person. When someone in a relationship intentionally keeps secrets about her identity from the other people in that relationship, and those people find out about those secrets against the secret-keeper’s intentions, those people will often feel a sense of betrayal and may come to believe that the secret-keeper did not actually love them.
        <br /><br />
        Premise 2 is probably far more difficult to deny than premises 1 or 4, because one cannot choose an option when one does not know that the option exists. If someone does not know about a choice, then she is not free to make that choice, because one can only choose between options of which one is aware. 
        <br /><br />
        Premise 4’s claim that “someone does not know about God,” while it may seem innocuous, is actually highly controversial. To avoid any potential confusion, note that while I have been using the term “God” to mean the Christian god specifically, this argument uses “God” to mean the generic concept of a supernatural being who created the universe. Yet because of the difference between conceptual and real identity, different people may have different concepts of the same real God given Christian doctrine. Among the premises of the argument above, premise 4 is probably the most likely to be denied by Christian theology. It has been consistently denied by Christian theologians since the writings of Saint Paul:
        <br /><br /><blockquote>
        <em>[P]eople…suppress the truth by their wickedness, since what may be known about God is plain to them, because God has made it plain to them. For since the creation of the world God’s invisible qualities—his eternal power and divine nature—have been clearly seen, being understood from what has been made, so that people are without excuse.</em><Note num={++notes}>Romans 1:18-20 (NIV).</Note>
        </blockquote>
        If Saint Paul is correct, even those who do not believe in Christian doctrine understand the idea that the world was created by some eternal divinity. A cursory observation of human cultures seems to vindicate Paul’s assumption: every major religion affirms that there are some supernatural agents, and it seems that everyone knows what a “god” is. More recent theologians rarely disagree with Paul. For example, John Calvin says that “knowledge of God has been naturally implanted in the human mind”<Note num={++notes}>
            John Calvin, <em>The Institutes of Christian Religion</em>, ed. Tony Lane and Hilary Osborne (Grand Rapids, MS: Baker Academic, 1986), book 1, ch. 1, sec. 3, p. 27.
        </Note>:
        <br /><br /><blockquote><em>
        It is beyond dispute that some awareness of God exists in the human mind by natural instinct, since God himself has given everyone some idea of him so that no one can plead ignorance. He frequently renews and sometimes increases this awareness so that all men, knowing that there is a God and that he is their maker, may be convicted in their own conscience when they do not worship him or give their lives to his service.</em>
        <Note num={++notes}>
            Calvin, <em>Institutes</em> 1:1:3, p. 27.
        </Note></blockquote>
        If Calvin’s description was false and the rest of Christian doctrine was true, then the denial of salvation to nonbelievers would seem unfair to anyone who never knew about theism. How could one be condemned for nonbelief in God without having a chance to consider that such a belief is an option? Calvin could not accept the conclusion that God would allow some people to die without knowing about God, and it seems that most Christians are unlikely to disagree with Calvin on that point. From his view that everyone naturally knows about God, Calvin inferred the specific empirical prediction that “there is no tribe so warlike, no race so uncivilized as to be without the conviction that there is a God.”
        <Note num={++notes}>Calvin, <em>Institutes</em> 1:1:3, p. 27.
        </Note> His reasoning is admirably falsifiable. If a tribe was ever discovered which had no concept of a creator god, Calvin's beliefs about salvation and damnation would be discredited, for no one can believe in a god without a concept of a god. Calvin’s theism made a testable empirical prediction: no tribe without belief in God, or without a concept of God, will ever be found.
        <br /><br />
        In 1976, a Christian missionary and anthropologist named Daniel Everett—much to his own dismay—proved Paul and Calvin wrong. He traveled to the Amazon rainforest to convert members of the local Pirahã tribe to Christianity. Everett found not only that none of the Pirahã believed in a creator god, but that none of them had even <em>considered</em> the idea until he introduced it. No creation myth existed among the Pirahã, because they all assumed that the world had always been in its current state. Everett translated the Book of Luke into their language, but failed to convert any of them. Instead, they de-converted him. In 1985, after years of trying and failing to convert the Pirahã, Everett became an atheist. The book he wrote about his experience ends by describing how the <Hyperlink to="http://freethinker.co.uk/2008/11/08/how-an-amazonian-tribe-turned-a-missionary-into-an-atheist/">atheistic Pirahã turned Everett's worldview upside down</Hyperlink>:
        <Note num={++notes}>
            Daniel Leonard Everett, <em>Don't Sleep, There are Snakes: Life and Language in the Amazonian Jungle</em> (Profile Books, 2009). Also check out <Hyperlink to="https://youtu.be/get272FyNto">Everett's TEDx Talk about his experience with the Pirahã, "Wisdom From Strangers."</Hyperlink>
        </Note>
        <br /><br />
        <blockquote>"<em>The Pirahas have shown me that there is dignity and deep satisfaction in facing life and death without the comforts of heaven or the fear of hell, and of sailing towards the great abyss with a smile. And they have shown me that for years I held many of my beliefs without warrant. I have learned these things from the Pirahas, and I will be grateful to them for as long as I live.</em>"
        </blockquote>
        So denying premise 4 of the argument from the missing concept of God is no longer simply denying a controversial assumption. It denies Everett’s discovery, denies the history and lived experience of the entire Pirahã tribe, and ultimately denies observable reality.
    </Section>
    <Section num={++sections} summary="The Missing Voice: Christian doctrine implies that God’s voice reaches every person P in a way that P can understand; and that everyone who hears God’s voice is converted; so Christian doctrine implies that everyone is converted; but not everyone is converted; so Christian doctrine is false."
    >
        In his treatise <em>On Conversion</em>, Saint Bernard of Clairvaux cites a variety of verses from the Bible to show that God speaks to everyone in a manner that they can understand with the intent of converting them. He first shows that it is God’s will to convert everyone:
        <br /><br />
        <blockquote><em>And if you would like to know what his [God’s] will is: It is that we should be converted. Hear what he himself says, “It is not my will that the wicked should perish” (Ez 18:23), says the Lord, “but rather that they should turn from their wickedness and live” (Mt. 11:14)…[T]he mouth of the Lord has spoken, as the prophet bears witness. “You have said,” he cries undoubtedly speaking to the Lord his God, “be converted, sons of men” (Is 1:20, 40:5; Ps 89:3). It seems wholly fitting that it is conversion that it is required of the sons of men; it is absolutely necessary for sinners.
        </em><Note num={++notes}>
        Saint Bernard of Clairvaux, <em>Bernard of Clairvaux: Selected Works</em>, trans. Gillian R. Evans (New York: Paulist Press, 1987) p. 66. For whatever reason, Bernard said “Mt. 11:14” and actually meant Ezekiel 33:11, since the quote he used is from the latter instead of the former.
        </Note></blockquote>
        So God wants everyone—not only the morally righteous, but wicked sinners—to convert to Christianity. Next, Bernard shows that hearing God’s voice causes a person to convert: God “said, ‘Be converted’ (Ps 89:3), and the sons of men have been converted. So the conversion of souls is clearly the work of the divine voice, not of any human voice.”
        <Note num={++notes}>
            Saint Bernard, <em>Selected Works</em> p. 67.
        </Note> Bernard affirms not only that God’s voice <em>is the cause of</em> conversion, but that God’s voice <em>must cause</em> conversion. Note the subtle difference: Bernard says not only that God’s voice is a <em>necessary</em> condition of conversion, but that hearing God’s voice is a <em>sufficient</em> condition for conversion. One hears God’s voice and converts without any intermediate steps. Finally, Bernard shows that when God speaks to someone, that person can hear it loud and clear: “There is no need to make an effort to hear this voice. The difficulty is to shut your ears to it (Is 33:13). The voice speaks up; it makes itself heard; it does not cease to knock on everyone’s door (Rv 3:20).”
        <Note num={++notes}>
            Saint Bernard, <em>Selected Works</em> p. 67.
        </Note> Even if a sinner does not want to hear the voice of God, she cannot help but hear it.
        <br /><br />
        So Bernard affirmed premises 1 and 2 of the following proof, from which the rest follows:
        <br /><br />
        <ol>
            <li>Every person hears God's voice (from Bernard's theology).</li>
            <li>Every person who hears God's voice converts to Christianity (from Bernard's theology).</li>
            <li>So, every person converts to Christianity (deduced from premises 1 and 2 by "the <em>dici de omni</em>."
            <Note num={++notes}>
            Ockham, <em>Summa Logicae</em> III.I.4.</Note>)</li>
            <li>But not everyone converts to Christianity (assumed as a premise).</li>
            <li>So, premise 1 or 2 is false (deduced from premises 3 and 4 by non-contradiction).</li>
            <li>But Christian doctrine implies premises 1 and 2 (assumed as a premise).</li>
            <li>So, Christian doctrine is false (deduced from premises 5 and 6 by non-contradiction.</li>
        </ol>
        Again, one can deny the conclusion by denying premises 1, 2, 4, or 6. A Christian could deny premise 1 by claiming that God does not speak to everyone. Such an option would not only conflict with Bernard’s view and with the Bible verses he cited, but would raise the question of <em>why</em> God does not speak to everyone. If God wants to save everyone, and can save everyone simply by speaking to them, there must be some overriding reason preventing him from speaking to some particular people.
        <br /><br />
        Perhaps this reason is respecting each person’s free will: God wants each person to freely choose conversion instead of being compelled to convert by God. By “free will” here I mean someone’s ability to intentionally make choices which are not determined by, or predictable from, prior causes.<Note num={++notes}>
            Any believer in “compatibilism,” which defines free will as <em>compatible</em> with determinism, would reject this definition. A Christian compatibilist will probably affirm that God could have unchangeably determined the entire course of history, and that the humans in that history would retain some kind of morally significant freedom.
        </Note> But hearing God’s voice is necessary for conversion, at least according to Bernard,<Note num={++notes}>
            Saint Bernard, <em>Selected Works</em> p. 67.
        </Note> so it is impossible to freely choose to convert without hearing God’s voice—unless, again, one rejects Bernard’s interpretation.
        <br /><br />
	    A Christian could also deny premise 2 by claiming that even if everyone hears God’s voice, only some people understand it, and it is the latter group who convert. Yet there are several problems with this claim. It shows a failure on God’s part to speak in a comprehensible way. God, being all-knowing, should know how to speak comprehensibly to any person. For God to speak comprehensibly violates no one’s free will, because a person with free will can comprehend what someone else says and then choose not to believe in it. In fact, a person who does not understand a message lacks the freedom to choose whether to believe in that message, so if God speaks incomprehensibly that shows a failure to respect the listener’s free will. Even without considering freedom, Bernard describes God’s voice as comprehensible to all:
        <br /><br />
        <blockquote><em>
        God’s speaking…is not so much of a voice of power (Ps 67:34) as a ray of light, telling men about their sins (Is 58:1) and at the same time revealing the things hidden in darkness (1 Cor 4:5). There is no difference between this inner voice and light… [T]he whole soul seems to see and hear at once…overcome by the force of its realization of what it is seeing (Rom 2:15)…Who can bear this judgment without pain?…[Y]ou cannot be brought to face yourself without being aware of sin.</em><Note num={++notes}>
            Saint Bernard, <em>Selected Works</em> p. 68.
        </Note></blockquote>
        God’s voice is a light that reveals the sin within the person to whom God speaks, and that person cannot help but see the sin within herself and feel guilt. No one has the power to ignore God’s voice. So, one who hears God’s voice must listen and understand—none is blind to the light.
        <br /><br />
        Perhaps a Christian could deny premise 4 by claiming that everyone is converted. Such a denial is hard to reconcile with observational experience, because most humans deny Christian doctrine and would not identify as Christian. Yet perhaps one could say that everyone is <em>eventually</em> converted, in the afterlife if not on Earth. I can do little to contest such an unfalsifiable claim, except to argue that it undermines the Christian’s motivation to evangelize and the non-Christian’s motivation to convert. If everyone is eventually converted, then it is not only a waste of energy to try to convert people in their mortal lives, but any non-Christian need not worry about converting to Christianity in any particular moment because she always knows that she will convert later. Finally, one could deny premise 6—but only by claiming that Christian doctrine does not affirm either premise 1, 2, or 4, all of which I just discussed.
    </Section>
    <Section num={++sections} summary="The Missing Dramatic Universal Revelation: Christian doctrine implies that God wants everyone to become a Christian, that God could grant anyone a divine revelation, and that one must believe in Christian doctrine to be a Christian; so God would dramatically reveal himself to everyone; but many people who would be persuaded to believe in Christian doctrine by a vision from God have not been granted such a vision; so Christian doctrine is false.">
        The last divine hiddenness argument of the three outlined above claims that God should have provided a dramatic revelation to everyone. By “dramatic,” I mean that each person would find the revelation vivid, unusual, and memorable compared to the rest of her experience.
        <br /><br />
        <ol>
            <li>God does any action <em>A</em> if these three conditions are met: God can do <em>A</em>, <em>A</em> is morally permissible, and <em>A</em> bring the greatest possible number of people to salvation (assumed as a premise).</li>
            <li>For any person <em>P</em> who does not believe in Christian doctrine, God can dramatically reveal himself to <em>P</em> in a way that raises the probability of <em>P</em> converting to Christianity (assumed from the <Hyperlink to="https://www.crcna.org/welcome/beliefs/creeds/athanasian-creed">Athanasian Creed, which calls God “almighty”</Hyperlink>).</li>
            <li>For any person <em>P</em>, it is morally permissible for God to reveal himself to <em>P</em> (assumed as a premise).</li>
            <li>For any person <em>P</em>, Christian doctrine implies that it is good for <em>P</em> to believe in Christian doctrine (assumed from the Athanasian Creed).</li>
            <li>So, God has dramatically revealed himself to everyone (deduced from premises 1-4 by <Hyperlink to="https://www.oxfordreference.com/view/10.1093/oi/authority.20110803095354544">affirming the antecedent</Hyperlink> of premise 1 using the conjunction of premises 2-4).</li>
            <li>But God has not dramatically revealed himself to some people (assumed as a premise).</li>
            <li>So, Christian doctrine is false (deduced from premises 5 and 6 by <Hyperlink to="https://www.oxfordreference.com/view/10.1093/oi/authority.20110803095711647">denying the consequent</Hyperlink>).</li>
        </ol>
        I will defend the first through fourth and sixth premises, although I admit that the first is probably the weakest. It assumes that God is morally perfect, and that a morally perfect being will do any possible action which is not wrong and will bring more people into a relationship with itself—both assumptions that a Christian could deny, since neither is affirmed in the Athanasian Creed. Yet both seem intuitively reasonable, since most Christians would probably call God morally perfect and a “morally perfect” being would likely do everything right—that is, all of her actions would be good in themselves or their effects. Modern Christian apologists including J. P. Moreland, Lee Strobel, and Dr. William Lane Craig have explicitly said that God's purpose in creating the universe was to maximize the total number of people who came to know him and attain salvation.
        <Note num={++notes}>
            When he debated Dr. Douglas Jesseph in 1998, Dr. Craig made the remarkable claim that <Hyperlink to="http://www.reasonablefaith.org/does-god-exist-the-craig-jesseph-debate#section_6">"God's aims in this life, in this world, are for a maximum number of people to come to know God and His salvation as fully as possible."</Hyperlink> He reaffirmed it in his debate with Dr. Arif Ahmed at Cambridge University in 2009, saying that <Hyperlink to="https://apologetics315.com/2009/10/william-lane-craig-vs-arif-ahmed-is-belief-in-god-reasonable-debate-mp3-audio/">"God's overall goal" is "bringing the maximum number of people freely into a love relationship with himself,"</Hyperlink> and in his debate with the late Christopher Hitchens at Biola University the same year, claiming that <Hyperlink to="http://www.reasonablefaith.org/does-god-exist-craig-vs-hitchens-apr-2009#section_10">"in Christian theism, God's purpose for human history is to bring the maximum number of people freely into his kingdom to find salvation and eternal life."</Hyperlink>
            <br /><br />
            J. P. Moreland and Lee Strobel agree with Craig. In their book <em>The Case For Faith</em>, they said, "When God is making these judgments, his purpose is not to keep as many people out of hell as possible. His goal is to get as many people in heaven as possible" (p. 187, <Hyperlink to="https://infidels.org/library/modern/paul_doland/strobel.html#obj6">as cited by Paul Doland</Hyperlink>).
        </Note> Premise 2 is inferred from the Athanasian Creed, as described before.
        <br /><br />
        The same answer that Saint Augustine used in reply to the problem of evil
        <Note num={++notes}>Augustine, <em>City of God</em> XII:8, pp. 480-81; Augustine, <em>City of God</em> XIII:14-15, p. 524; Augustine, <em>City of God</em> XIV:11-14, pp. 568-74.</Note> may seem attractive as a reply to premise 3: God refuses to violate a non-Christian’s free will by forcing her to believe in Christian doctrine. Under this reasoning, Christian belief must be freely chosen to be morally valuable, and God’s dramatic revelation is a way of converting its witness by force. There are several problems with using the idea of free will to reject premise 3. The first is that in the story of Saint Paul, God showed a willingness to reveal himself directly to someone who was not only unwilling to accept Christian belief up to that point and not seeking out reasons to believe in Christian doctrine, but actively sought out and murdered many Christians for their beliefs. One may reply that Saint Paul already believed in God, so all that God had to do was draw on his belief. That argument may work in his case, but it fails in others.
        <br /><br />
        Consider the less-known case of a man named Jerome in the thirteenth century. In his biography on <em>The Life of Saint Francis</em>, Saint Bonaventure describes how “a knight who was educated and prudent, Jerome by name, a distinguished and famous man, had doubts about these sacred signs and was unbelieving like Thomas.”
        <Note num={++notes}>Saint Bonaventure, “The Life of Saint Francis,” in <em>Bonaventure: The Soul's Journey Into God; The Tree of Life; The Life of St. Francis</em>, trans. Ewert H. Cousins (Paulist Press, 1978) p. 323.
        </Note> Jerome proceeded to examine the miraculous wounds (or “stigmata”) of Saint Francis which appeared highly similar to those of Jesus and were supposedly given by an angel during a divine vision. After examining the stigmata of Saint Francis, Jerome “completely healed the wound of doubt in his own heart and the hearts of others … [and] became a firm witness to this truth which he had come to know with such certainty; and he swore to it on the Gospel.”
        <Note num={++notes}>Bonaventure, “The Life of Saint Francis,” <em>Bonaventure</em> p. 323.
        </Note> If the viewing of an indirect supposed miracle could heal the doubt of an educated nonbeliever like Jerome, imagine what a directly revealed miracle could do for the millions of educated nonbelievers alive today!
        <br /><br />
        The second reason that one cannot reject premise 3 by bringing up free will is that exposing someone to sensory information never suffices to violate that person’s free will, because sensation is never freely chosen. Perhaps the best example is smell: if one is in the presence of something that smells bad, then one simply smells it automatically. One never chooses to smell it. One can plug one’s nose to avoid the smell—but in that case, the only way to avoid sensation is to intentionally act after already experiencing the sensation or after already knowing that one will experience it. Once something stimulates one’s senses, one has no choice but to experience it. So, God can provide any sense experience to any person without violating that person’s free will—including the kind of immersive, intense divine visions described in detail by many Christian mystics such as Julian of Norwich. Granting that kind of vision to a non-Christian is highly likely to convert that person, even if it will not work every time.
        <br /><br />
        One may also object to the missing universal revelation of God is by claiming that God cannot persuade everyone because some people will reject belief in God of their own free will. Granting this assumption for the sake of argument, God cannot know before revealing himself to a particular person <em>P</em> whether he will convince <em>P</em> to convert to Christianity. But if God cannot know the effects of his revelation, God also cannot know who won’t convert. Therefore, God cannot risk hiding from any person <em>P</em>, because God cannot discount the possibility that his revelation will convert <em>P</em>.
        <br /><br />
        A Christian could reject premise 4 by saying that God does not want some people to believe in Christian doctrine for some reason, and that is why he does not try to convert everyone. Since premise 1 is inferred from the Athanasian Creed, such a Christian may have to reject part it such that she could not even be called a “Christian.” Also, there is no reason that one ought not to believe Christian doctrine if it is true. Even ignoring the rule that one ought to believe the truth, Christian doctrine strongly emphasizes the moral benefit of believing in it: God wills that one should convert to Christianity, and conversion is the only way that one can enter the kingdom of heaven in the afterlife.  If there was such a reason, a non-Christian could simply use that reason as a justification to withhold her own belief in Christian doctrine. Finally, to deny premise 6 is to deny the experience of the overwhelming majority of humans.
        <br /><br />
        This argument can be applied to any non-Christian person that has ever existed. If God truly wanted "to bring the maximum number of people freely into his kingdom," then he would have revealed himself directly to every non-Christian who has ever lived.
        <br /><br />
        In a booming voice directly to their hearts, God would have told Muslims and Jews that the Savior had come in the form of Jesus. This could instantly convert most if not all of them, as it did to St. Paul. God would have manifested in a glorious light to everyone and told them his truth, so that they could share a loving relationship with him if they chose to. Such a relationship would still be free because, once someone is made aware that God exists, they still have the option to reject a relationship with him.
    </Section>
  </Layout>
)

export default DivineHidden;