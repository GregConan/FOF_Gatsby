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
import africaEducation from "../images/africa-education.png"
import africaInternet from "../images/africa-internet.png"
import pewEuropeReligion from "../images/pew-europe-religion.png"
import pewGlobalReligion from "../images/pew-global-religion.png"
import pewReligionAfrica from "../images/pew-religion-africa.png"

var notes = 0;
var sections = 0;
const DemographicsWorld = () => (
<Layout>
<SEO title="Global Religious Demographics" />
<Section num={++sections} summary="Most industrialized countries have shown the same decline of religion as the United States, although theirs are closer to completion.">
	European Christianity has declined far more than American Christianity, and in the near future it will continue declining. Although Christianity maintained hegemonic dominance of Europe and most of its cultures for nearly two millennia, if current trends continue, then by the end of this century barely half of Europeans will even be nominally Christian.
	<br /><br />
	From 2010 to 2050, Pew projected the <Hyperlink to="https://www.pewresearch.org/fact-tank/2015/04/15/europe-projected-to-retain-its-christian-majority-but-religious-minorities-will-grow/">Christian proportion of the European population to fall by more than 10%,</Hyperlink> from 74.5% to 65.2%. If this rate continues, then by 2100 53.6% of Europe will identify as Christian, and by 2116 most Europeans will not be Christians.
	<Note num={++notes}>The decline from 74.5% in 2010 to 65.2% in 2050 occurred at a rate of -0.23% per year, so these estimates extrapolate that rate forward.
	</Note> Europe is the <Hyperlink to="https://www.pewresearch.org/fact-tank/2017/04/05/christians-remain-worlds-largest-religious-group-but-they-are-declining-in-europe/">only continent where more Christians died than were born</Hyperlink> between 2010 and 2015, even as the total European population grew by 6.65 million.
	<Note num={++notes}>743.06 million in 2015 minus 736.41 million in 2010. Those numbers are from Our World in Data, <Hyperlink to="https://ourworldindata.org/world-population-growth#future-population-by-region">"World Population Growth: Future Population by Region."</Hyperlink></Note>
	<br /><br />
	<Hyperlink to="https://www.pewforum.org/2015/04/02/europe/" archived="hide">
		<img src={pewEuropeReligion} /></Hyperlink>
	Yet aging is not the only factor responsible for the decline of European Christianity. "The largest consequence" of religious switching in Europe will be a <Hyperlink to="https://www.pewresearch.org/fact-tank/2015/04/15/europe-projected-to-retain-its-christian-majority-but-religious-minorities-will-grow/">"net movement of people leaving Christianity and joining the ranks of the religiously unaffiliated."</Hyperlink> The unaffiliated population in Europe will grow from 19% of the European population to 23% in 2050.
</Section>
<Section num={++sections} summary="Christianity's proportion of the global population will remain stable in the near future and nonreligion's will shink. However, this is almost exclusively because of African population growth. The factors reducing American religion are likely to rise in Africa over the next century. Most religious switching over the next century will be from religion to irreligion, suggesting that irreligion may rise once the global population stabilizes.">
	The future of global religion appears much brighter than the future of American religion, at least according to projections from the Pew Research Center: Christianity will probably maintain its percentage of the global population while the nonreligous proportion shrinks. The reason why is fairly simple: Although almost every industrialized country will continue becoming less religious, poorer countries tend to have higher birthrates and much higher rates of religious belief. The trend of mass religious deconversion is unlikely to keep up with Third World population growth.
	<br /><br />
	<Hyperlink to="https://www.pewforum.org/2017/04/05/the-changing-global-religious-landscape/" archived="hide">
		<img src = {pewGlobalReligion} /></Hyperlink>
	The vast majority of the growth in the religious population will occur in sub-Saharan Africa. It is the only region where Pew projected more Christians to be born than die between 2015 and 2060. The Christian population will shrink in North America and Europe, and will grow by no more than 3.5 million everywhere else -- except sub-Saharan Africa, where it will grow by almost 80 million. Islam is similar, albeit less extreme: Its numbers will increase by 19 million in Asia and in the Middle East, while rising 65 million in sub-Saharan Africa. 
	<br /><br />
	<Hyperlink to="https://www.pewforum.org/2017/04/05/the-changing-global-religious-landscape/" archived="hide">
		<img src = {pewReligionAfrica} /></Hyperlink>
	So, will irreligion gradually die out due to demographic doom? Not quite. There is a conceptual problem with that claim, best shown by the problems with a study reported in an Independent article called <Hyperlink to="http://www.independent.co.uk/life-style/atheists-dying-out-contraception-claims-study-a7626846.html">"Atheists at risk of dying out due to belief in contraception, study claims."</Hyperlink> It argued that atheists' low fertility rates compared to religious people and the high rates of religious heritability based on nature (genetics) and nurture (parenting) would cause atheism to decline in the future.
	<br /><br />
	The article was <Hyperlink to="https://www.reddit.com/r/nottheonion/comments/5z955o/atheists_at_risk_of_dying_out_due_to_belief_in/">shared in the "Not the Onion" subreddit,</Hyperlink> which features <Hyperlink to="https://www.reddit.com/r/nottheonion/about">"true stories that are so mind-blowingly ridiculous, that you could have sworn it was an Onion story."</Hyperlink> A lot of commenters there swiftly criticized the many flaws of the article's conclusion, including that the claim of a genetic basis for religious belief was <Hyperlink to="https://www.reddit.com/r/nottheonion/comments/5z955o/comment/dewm6pa">not based on any peer-reviewed research but on the unsupported "God gene" hypothesis which has survived without support</Hyperlink> for over a decade. Also, some poked fun at its poor understanding of heritability by an analogy with homosexuality: <Hyperlink to="https://www.reddit.com/r/nottheonion/comments/5z955o/comment/dewofe3">"According to my study homosexuals will eventually die out because they can't have babies. Am I scientist yet?"</Hyperlink> While this reasoning seems absurd, the so-called "alt-right provacateur" Milo Yiannopoulos <Hyperlink to="http://www.breitbart.com/big-government/2015/06/17/gay-rights-have-made-us-dumber-its-time-to-get-back-in-the-closet/">actually tried to use it as a serious argument against gay marriage</Hyperlink> despite being gay himself, so perhaps its absurdity needs to be spelled out more clearly. Most homosexuals have heterosexual parents,
	<Note num={++notes}>Citation not needed.
	</Note> and likewise most atheists have religious parents. 
	<br /><br />
	There are two main reasons to suspect that irreligion will continue to grow:
	<ol>
		<li>The factors which reduced American religion by rising in the late twentieth century will likely rise in Africa in the coming century.</li>
		<li>The vast majority of religious switching in the coming century will be from religion to irreligion.</li>
	</ol>		
	To accept the first point, recall the main factors driving the decline of American religion: Internet access, not being raised religious, college education, and maybe intelligence. Each of these is lower in Africa than in other regions right now,<Note num={++notes}>Probably, I suspect, due to poverty and lingering traces of colonial oppression.</Note> but likely to explosively rise in Africa over the next century.
	<br /><br />
	First, consider the factor most responsible for reducing American religion: the Internet. Sub-Saharan Africa has lagged far behind most of the world in gaining Internet access. Only <Hyperlink to="https://ourworldindata.org/internet">206 million</Hyperlink> sub-Saharan Africans had Internet access in 2016, <Hyperlink to="https://data.worldbank.org/region/sub-saharan-africa">out of more than a billion</Hyperlink> people total. About 19% of sub-Saharan Africans have Internet access, unlike over 50% of the global population. However, <Hyperlink to="http://documents.worldbank.org/curated/en/518261552658319590/Internet-Access-in-Sub-Saharan-Africa">sub-Saharan African Internet access is rising exponentially,</Hyperlink> especially in recent years. If this trend continues to give a higher percentage of Africans Internet access, and the Internet has the same effect on religious demographics in Africa as it does in the United States,
	<Note num={++notes}>Admittedly, this a huge assumption ignoring a bunch of important socioeconomic and cultural factors.
	</Note> then perhaps an increasing percentage of them will become irreligious.
	<Hyperlink to="http://documents.worldbank.org/curated/en/518261552658319590/Internet-Access-in-Sub-Saharan-Africa" archived="hide">
		<img src = {africaInternet} /></Hyperlink>
	Rising Internet access is not <em>guaranteed</em> to reduce religious belief, for the record, but Internet use is not the only religion-reducing factor projected to rise in sub-Saharan Africa. <Hyperlink to="http://dataexplorer.wittgensteincentre.org/wcde-v2/" archived="hide">Higher education is also projected to rise dramatically:
	<br /><br />
	<img src = {africaEducation} /></Hyperlink>
	Finally, the average African intelligence is likely to continue rising well into the twenty-first century, probably much longer than current industrialized nations. James Flynn in a recent research review on trends in global intelligence predicted that the average African intelligence level is likely to rise explosively in the coming decades, following the past century's trend in industrialized countries:
	<br /><br /><blockquote>
	"Meisenberg['s] and Woodley['s] study is of outstanding quality. It is the first to systematically test the hypothesis that developing nations are likely to match the mean IQs of developed nations during the 21st century. Some of the former appear to be entering the “first phase” of modernity (massive gains) that the latter enjoyed last century ... After studying six developing nations in some depth (Flynn, 2012, pp. 55–65), I predict that the 21st century will reflect both of these results."
	<Note num={++notes}>James R. Flynn (2013), <Hyperlink to="http://doi.org/10.1016/j.intell.2013.06.014">The “Flynn Effect” and Flynn's Paradox"</Hyperlink> (<Hyperlink to="http://www.iapsych.com/iqmr/fe/LinkedDocuments/flynn2013.pdf" archived="hide">PDF</Hyperlink>). <em>Intelligence</em>, 41(6), 851-857. doi:10.1016/j.intell.2013.06.014
	</Note></blockquote>
	To be fair, Flynn noted that some countries have not followed this trend, and that the trend appears much more pronounced in South America than in Africa based on the available data. However, the intelligence of any African country in which the political and socioeconomic state stabilizes is likely to rise like that of the industrialized countries of the twentieth century.
	<br /><br />
	To accept the second point above that most religious switching from now until 2100 will be apostasy, one need only look at Pew's projections for religious switching. Christianity is expected to lose, and irreligion to gain, eight million people. Those numbers are quite small compared to the total global population. However, they indicate that the demographic rise of religion may be short-lived. Even as various religions increase their share of the global population, most religious switching will continue to be away from religion. It seems that as long as religious switching occurs, so will the abandonment of religion.
	<Hyperlink to="https://www.pewforum.org/2017/04/05/the-changing-global-religious-landscape/" archived="hide">
		<img src = "https://www.pewforum.org/wp-content/uploads/sites/7/2017/03/PF_17.04.05_projectionsUpdate_switching640px.png" /></Hyperlink>
	If current trends continue, then population growth may have only delayed the decline of global religion. Once the global population stabilizes at roughly 11 billion people, which is projected to occur shortly after 2100, then religious switching may reverse the demographic growth of religion and cause the irreligious proportion of the world population to rise.
	<Note num={++notes}>Assuming, that is, that humanity is not wiped out by climate change or a similar disaster first!</Note>
	<br /><br />
	<iframe src="https://ourworldindata.org/grapher/world-population-1750-2015-and-un-projection-until-2100?time=1750..2100" style={{width: "100%", height: "600px", border: "0px none"}} />
</Section>
</Layout>
)


export default DemographicsWorld
