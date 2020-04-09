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
import pewNonesSurvey from "../images/pew-nones-survey.png"

var notes = 0;
var sections = 0;
const ExplainingDemographicsUSA = () => (
  <Layout>
    <SEO title="Explaining American Religious Demographic Trends" />
    The rise of American nonreligion is typically explained in the literature by one of two overarching theories: the <Hyperlink to="http://hdl.handle.net/11299/206620">"backlash theory" and the "drift theory."</Hyperlink><Note num={++notes}>Evan Stewart (2019), "<Hyperlink to="http://hdl.handle.net/11299/206620">No Church in the Wild: The Politics of American Nonreligion</Hyperlink>," pp. 2-3 (<Hyperlink to="https://conservancy.umn.edu/bitstream/handle/11299/206620/Stewart_umn_0130E_20445.pdf?sequence=1">PDF</Hyperlink>).
    </Note> Each of these partly explains the rise in American nonreligion, but another often-overlooked factor explains just as much: digital-age access to information. 
    <Section num={++sections} summary="The decline of American religion is caused largely by better access to information. The decline accelerated in the past few decades because Americans can access vastly more information now through the Internet.">
        Daniel Dennett claimed that the <Hyperlink to="https://www.brainyquote.com/quotes/quotes/d/danieldenn513760.html">Internet could cause the downfall of religion</Hyperlink>: "Now that mobile phones and the Internet have altered the epistemic selective landscape in a revolutionary way, every religious organisation must scramble to evolve defences or become extinct." It would be too easy to dismiss as nothing more than naive atheist rhetoric, except for the significant amount of evidence showing that it is basically correct. I review some of this evidence from demographic surveys below.
        <br /><br />
        Allen Downey analyzed the General Social Survey data on the decline of religion and found that the rise of <Hyperlink to="https://www.technologyreview.com/s/526111/how-the-internet-is-taking-away-americas-religion/">Internet use explains 25% of the decline in American religious affiliation</Hyperlink>. Some third factor might possibly explain the rise of Internet use <em>and</em> the rise of American irreligion, "[b]ut Downey discounts this possibility" because his study "controlled for most of the obvious candidates, including income, education, socioeconomic status, and rural/urban environments." As more Americans gained easy access to more information and more different perspectives than their own, they increasingly abandoned their religious beliefs. 
        <Hyperlink to="https://www.technologyreview.com/s/526111/how-the-internet-is-taking-away-americas-religion/" archived="hide">
            <img src = "https://cdn.technologyreview.com/i/images/Religion.png?sw=2500" /></Hyperlink>
        A survey of nonreligious American college students by a Christian outreach group called the Fixed Point Foundation also discovered the <Hyperlink to="https://www.theatlantic.com/national/archive/2013/06/listening-to-young-atheists-lessons-for-a-stronger-christianity/276584/">link between Internet use and religious nonbelief</Hyperlink>:
        <br /><br /><blockquote>
        “When our participants were asked to cite key influences in their conversion to atheism--people, books, seminars, etc. -- we expected to hear frequent references to the names of the "New Atheists." We did not. Not once. Instead, we heard vague references to videos they had watched on YouTube or website forums.” 
        </blockquote>
        Yet to say that American Christianity is dying "because of higher Internet use" is not to offer a full explanation, even though I offered a few plausible reasons above. Fortunately, several groups have investigated the causes of American Christianity's decline. As a follow-up to their Religious Landscape Study, Pew Research Center surveyed the 78% of nonreligious Americans who were raised religious but left their religion behind. The respondents were asked a simple, open-ended question: Why did you leave your religion?
        <br /><br />
        The results should discourage any American Christians. Few of these American apostates are merely non-practicing (8%) or too busy for religion (2%). By a landslide, the <Hyperlink to="https://www.pewresearch.org/fact-tank/2016/08/24/why-americas-nones-left-religion-behind">most common reason for Americans to leave their religion is no longer believing its doctrines:</Hyperlink>
        <br /><br /><blockquote>
        “About half of current religious 'nones' who were raised in a religion (49%) indicate that a lack of belief led them to move away from religion. This includes many respondents who mention 'science' as the reason they do not believe in religious teachings, including one who said 'I’m a scientist now, and I don’t believe in miracles.' Others reference 'common sense,' 'logic,' or a 'lack of evidence' – or simply say they do not believe in God.” 
        </blockquote>
        <Hyperlink to="https://www.pewresearch.org/fact-tank/2016/08/24/why-americas-nones-left-religion-behind" archived="hide">
            <img src = {pewNonesSurvey} /></Hyperlink>
        The second most popular reason was not even half as common: 20% of American apostates reported leaving because they dislike institutional religion. Pew also "asked religious 'nones'" for <Hyperlink to="https://www.pewresearch.org/fact-tank/2018/08/08/why-americas-nones-dont-identify-with-a-religion/">"the single most important reason they are unaffiliated:</Hyperlink>
        <br /><br /><blockquote>
        “Again, questioning religious teachings is among the top responses, with a quarter of all 'nones' saying it is the most important reason. A similar share (22%) cite lack of belief in God, and 16% say the most important reason is that they dislike the positions churches take on social and political issues.”
        </blockquote>
        <Hyperlink to="https://www.pewresearch.org/fact-tank/2018/08/08/why-americas-nones-dont-identify-with-a-religion/" archived="hide">
            <img src = "https://www.pewresearch.org/wp-content/uploads/2018/08/FT_18.08.07_whyUnaffiliated_questioning.png" /></Hyperlink>
        Disliking religious leaders and organizations together made up 8% of responses. So Gallup researcher Frank Newport was <Hyperlink to="https://news.gallup.com/opinion/polling-matters/260738/why-americans-losing-confidence-organized-religion.aspx">wrong when he claimed</Hyperlink> that "the drop in confidence in 'the church or organized religion' does not necessarily equate to a drop in confidence in religion" because "people may simply be shifting their underlying religious and spiritual instincts to new and different outlets, with organized religion increasingly left behind." Disliking organized religion was nowhere near as common of a main reason for American apostasy as abandoning religious belief.
        <br /><br />
        Perhaps increased Internet access helps explain why more people are rejecting religion based on ideas of science and rationality, since more people can access more information. Downey noted another factor which helps link rational thinking with the decline of American religion: 5% of the decline is explained by the increasing percentage of Americans with a college education. More education predicts less religious belief,
        <Note num={++notes}>Albrecht and Heaton found a <Hyperlink to="https://www.jstor.org/stable/3511041?seq=1#page_scan_tab_contents">negative correlation between religiosity and educational attainment among Americans</Hyperlink> in their 1984 article: "Secularization, Higher Education, and Religiosity." They notably also found that within denominations, higher church attendance predicted better education. Since this may be a <Hyperlink to="https://en.wikipedia.org/wiki/Simpson%27s_paradox">Simpson paradox</Hyperlink>, each trend merits its own explanation. In general, people who learn more become less religious; but within religious communities, perhaps those with the highest levels of dedication or conscientiousness attend church more frequently. Or perhaps the explanation is economic, as <Hyperlink to="https://doi.org/10.1023/B:REHO.0000031614.84035.8e">Lehrer showed in 2004</Hyperlink> about conservative Protestant American women. Still, the salient point is that overall, education predicts lower religious belief.
        </Note> so as more Americans are exposed to new ideas and learn how to think abstractly in an academic setting, fewer of them accept religion.
        <Hyperlink to="https://www.census.gov/library/visualizations/time-series/demo/cps-historical-time-series.html" archived="hide">
            <img src = "https://www.census.gov/content/dam/Census/library/visualizations/time-series/demo/fig2.jpg" />
        </Hyperlink>
        The rise of access to information is slowly choking American Christianity to death. 
    </Section>
    <Section num={++sections} summary="American liberals have increasingly left religion behind as an act of political backlash against American Christianity merging with right-wing and Republican politics.">
        <blockquote>
            “<em>I’d argue that the compromises and unholy alliances Christians have made in pursuit of converting the culture has left many more suspicious of and hardened to the message of the church. And I don’t blame them.</em>”
            <br />
            —Southern Baptist Convention writer Matt Chandler
        <Note num={++notes}>
            Matt Chandler, “<Hyperlink to="https://erlc.com/resource-library/articles/how-the-church-can-respond-to-a-post-christian-culture">How the Church can Respond to a Post-Christian Culture</Hyperlink>.”
        </Note>
        </blockquote>
        Allen Downey found that 25% of the decline in religious affiliation is explained by nonreligious upbringings, 5% by higher education, and 25% by more use of the Internet. What missing factor could explain the other 45%? To explain the missing variance, a factor “<Hyperlink to="https://www.technologyreview.com/s/526111/how-the-internet-is-taking-away-americas-religion/">would have to be something new that was increasing in prevalence during the 1990s and 2000s, just like the Internet. ‘It is hard to imagine what that factor might be,’ says Downey.</Hyperlink>” After all, Downey “controlled for most of the obvious candidates, including income, education, socioeconomic status, and rural/urban environments,” ruling them all out. What explanatory factor is missing?
        <br /><br />
        Several polling organizations have shown a factor that has risen since the 1990s and only kept rising, perfectly fitting Downey’s description of the missing factor: American political polarization.
        <br /><br />
        A "<Hyperlink to = "http://news.gallup.com/poll/197828/record-high-americans-perceive-nation-divided.aspx">record-high 77% of Americans perceive the nation as 'divided'</Hyperlink>" about "the most important values," and in terms of political values they are correct. Since 1949, <Hyperlink to="http://www.mamartino.com/projects/rise_of_partisanship/">members of the U.S. Congress have increasingly voted on party lines</Hyperlink>. Political scientists Nolan McCarty, Keith Poole and Howard Rosenthal discovered that "<Hyperlink to="https://io9.gizmodo.com/its-been-150-years-since-the-u-s-was-this-politically-1590076355">It's Been 150 Years Since the U.S. Was This Politically Polarized</Hyperlink>." Other branches of the federal government, such as the <Hyperlink to="http://fivethirtyeight.com/features/if-justice-kennedy-retires-his-replacement-could-undermine-his-legacy">Supreme Court</Hyperlink>, have <Hyperlink to="http://twitter.com/FiveThirtyEight/status/986056651575787520">also experienced polarization in recent decades</Hyperlink>. Political polarization is not limited to politicians, though.
        <br /><br />
        In the general public, per Pew Research Center polling, <Hyperlink to="http://www.people-press.org/2017/10/05/the-partisan-divide-on-political-values-grows-even-wider/">Democrats' and Republicans' political attitudes are growing apart</Hyperlink> on <Hyperlink to="http://www.people-press.org/2017/10/05/1-partisan-divides-over-political-values-widen/1_1-18/">many specific issues</Hyperlink>. Gallup confirmed Pew's findings by discovering that the <Hyperlink to="http://news.gallup.com/opinion/polling-matters/215210/partisan-differences-growing-number-issues.aspx">partisan gap has widened on 15 out of 24 major political issues</Hyperlink> since the turn of the century. Polarization has emerged not only in terms of specific issues, but <Hyperlink to="http://www.people-press.org/2014/06/12/political-polarization-in-the-american-public/">political ideology in general</Hyperlink>, making this <Hyperlink to="http://www.people-press.org/2017/10/05/the-partisan-divide-on-political-values-grows-even-wider/">gap between parties' ideological views</Hyperlink> far surpass the gap between any other demographic categories:
        <br /><br />
        <img src="https://www.pewresearch.org/wp-content/uploads/sites/4/2017/10/1_3.png" />
        <br /><br />
        Polarization happened at the same time as the rise of American nonreligion, but it took additional research to show one's effect on the other. In 2002, Michael Hout and Claude Fisher first proposed that “<Hyperlink to="https://www.jstor.org/stable/3088891">the political part of the rise of the 'nones' can be viewed as a symbolic statement against the Religious Right</Hyperlink>.” “Backlash theory,” as it came to be called, posits that many American liberals left Christianity in disgust at the merging of Christianity and right-wing politics that many have nicknamed the <Hyperlink to="https://en.wikipedia.org/wiki/Christian_right">“Christian Right” or “Religious Right”</Hyperlink>: 
        <br /><br /><blockquote>
            “The [backlash theory] explanation is that religious disaffiliation is primarily an act of political backlash. In this theory, people holding liberal and progressive political views and moderate religious commitments see the close relationship between conservative politics and conservative faith forged by the Religious Right through the 1980s and 1990s and decide that religion simply is not for them…The backlash theory sees disaffiliation as a symptom of stronger political alignment where social identities are increasingly falling in line with partisan preferences.”
            <Note num={++notes}><Hyperlink to="http://hdl.handle.net/11299/206620">Stewart (2019)</Hyperlink>, p. 2.
            </Note>
        </blockquote>
        Since then a variety of data has shown that ever since its ascendance in the 1990s, the coalition of religious leaders and Republican politicians known as the “Christian Right” has gradually driven American liberals away from religion. Starting at the broadest level of analysis, over the past 3 decades <Hyperlink to="https://fivethirtyeight.com/features/the-christian-right-is-helping-drive-liberals-away-from-religion/">liberals have become nonreligious much faster than conservatives:
        <br /><br />
        <img src="https://fivethirtyeight.com/wp-content/uploads/2019/09/ATD.DC-RELIGION-POLITICS.0918-0917-1.png?w=575" />
        <br /><br />
        Similarly, liberal Americans are far more likely to be nonreligious:
        <br /><br />
        <img src="https://fivethirtyeight.com/wp-content/uploads/2019/09/ATD.DC-RELIGION-POLITICS.0918-0911-2.png?w=575" />
        </Hyperlink>
        <br /><br />
        Perhaps, one might argue, that trend only happened because nonreligious Americans became more liberal. Although that seems like a reasonable possibility, “<Hyperlink to="https://doi.org/10.15195/v1.a24">several studies that followed respondents over time</Hyperlink> [<Hyperlink to="https://www.sociologicalscience.com/download/volume%201/october/SocSci_v1_423to447.pdf">PDF</Hyperlink>] showed that...it wasn’t that people were generally becoming more secular, and then gravitating toward liberal politics because it fit with their new religious identity. <Hyperlink to="https://www.jstor.org/stable/40213322?seq=1#page_scan_tab_contents">People’s political identities remained constant</Hyperlink> as their religious affiliation shifted.” By following the same participants and tracking how their religion changed to match their politics, this study ruled out the possibility that participants were changing their politics to match their (lack of) religion. Politics changed religious affiliation, instead of the other way around.
        <br /><br />
        Backlash theory also gains support from a study showing that <Hyperlink to="https://neurosciencenews.com/atheism-politics-9027">in states where Christian conservatives caused more public controversy over gay marriage, nonreligion rose faster</Hyperlink>. 29 states banned same-sex marriage between 2004 and 2010. The states which implemented those bans were more likely to have high levels of evangelicals and low levels of religious “nones” — at least initially. “From 2006-10, the gap between the nones in marriage ban states and those in states with no marriage ban had been cut in half...[because] a greater percentage of people left the church in states where the religious right is most active.” By standing up for their bigoted beliefs, those Christians only alienated more moderate and tolerant Americans. Trying to defend Christian America only helped to undermine Christian America.
        <br /><br />
        Although these are still only statistical trends, one <Hyperlink to="https://fivethirtyeight.com/features/the-christian-right-is-helping-drive-liberals-away-from-religion/">experiment</Hyperlink> “found that something as simple as reading a news story about a Republican who spoke in a church <Hyperlink to="https://onlinelibrary.wiley.com/doi/abs/10.1111/ajps.12365">could actually prompt some Democrats</Hyperlink> to say they were nonreligious.” Political scientist David Campbell compared it to “an allergic reaction to the mixture of Republican politics and religion.”
        <br /><br />
        Anti-LGBT+ prejudice is one of the main controversies driving away moderate and liberal Americans from religion. In January 2015, Friar Peter Daly “attempt[ed] to answer the question” plaguing his parish and many others across the nation: “<Hyperlink to="https://www.ncronline.org/blogs/parish-diary/attempt-answer-question-where-are-young-adults">Where are the young adults?</Hyperlink>”
        <Note num={++notes}>
            Also see Adam Lee's article “<Hyperlink to="https://www.patheos.com/blogs/daylightatheism/2015/01/an-honest-look-at-catholicisms-decline/">An Honest Look at Catholicism's Decline</Hyperlink>” for commentary.
        </Note> He noted that in the United States, “<Hyperlink to="http://cara.georgetown.edu/caraservices/requestedchurchstats.html">only 24 percent of Catholics go to Mass</Hyperlink> on an average Sunday, down from 55 percent in 1965.” From his own parish, he noticed a glaring absence of 18- to 40-year-olds.
        <br /><br />
        Determined to discover why the number of young adults attending Catholic churches was dwindling, Daly made an admirable gesture of good faith: He invited 500 young adults to come to a forum to answer the question, “Why don't you come to church?” Although only 40 of the young adults showed up to the forum, he listened to them in silence. One factor recurred over and over: prejudice against people of traditionally-oppressed genders and sexualities.
        <br /><br />
        <blockquote>
            “The No. 1 issue by far, which came up over and over again, was the Catholic church's treatment of lesbians and gays. Everyone, conservative or liberal, disagreed with the church on that...
            <br /><br />
            One young man, a lawyer, said the Catholic church is the "most sexist and homophobic institution of significance in our culture." He noted that there is no discussion of issues like women's ordination in the church. It is just not to be discussed. He felt the church just dismissed women's opinions...
            <br /><br />
            One young woman...said that our song 'All Are Welcome' is hypocritical. 'You say that all are welcome, but that is not true. Gays are not welcome. Catholics are the most judgmental group,' she said. 'If you don't follow all the precepts, you are excluded.'”
        </blockquote>
        Shaken by what he heard, Daly concluded on a note of pessimism. He doubted that more education, enthusiasm, evangelism could rescue the future of his church:
        <br /><br />
        <blockquote>
            “If our young adults are typical of formerly Catholic young adults, then we are in deep trouble. Will there be another generation of Catholics? I'm not sure.
            <br /><br />
            I used to think that better catechesis was the problem. But they did not feel that they had not been taught the faith. We have a pretty thorough religious education program. They felt they knew 'the stuff.' It did not seem that pounding the catechism harder would have made them more sympathetic to the faith. Some, like the young lawyer, clearly knew what the Catholic church said in great detail. They just disagreed.”
        </blockquote>
        Evangelical Protestants in the United States face the same problems as Catholics, if not more so. Many of their churches are shrinking. The number of Southern Baptists, the largest American Protestant denomination, “<Hyperlink to="https://www.christianitytoday.com/news/2019/may/southern-baptists-acp-membership-baptism-decline-2018.html">fell to 14.8 million in 2018 — its first time below 15 million since 1989 and the lowest it’s been since 1987</Hyperlink>.” And like the Catholics, evangelical churches' problems also cannot be resolved by more education or evangelism. Unlike any other religion in America, <Hyperlink to="https://www.pewforum.org/2019/07/23/what-americans-know-about-religion/">knowing <em>more</em> about Evangelical Christianity made respondents like it <em>less</em></Hyperlink> in a 2019 Pew survey.
        <br /><br />
        <blockquote>
        “According to Margolis’s research, while young people across the political spectrum tend to drift away from religion, <Hyperlink to="https://books.google.com/books?id=g3llDwAAQBAJ&pg=PA102&lpg=PA102&dq=hout+fischer+unaffiliated+politics&source=bl&ots=ZfQ6uzYqjt&sig=ACfU3U2rtOjp2hme7ZJc9iToo3l-_mNlEA&hl=en&sa=X&ved=2ahUKEwj9o5fPls7kAhWXqZ4KHW3rBzYQ6AEwDXoECAkQAQ#v=onepage&q=hout%20fischer%20unaffiliated%20politics&f=false">liberals are increasingly unlikely to return</Hyperlink>.”
        </blockquote>
        When many Republicans <Hyperlink to="https://www.foxnews.com/faith-values/trump-support-impeachment-prayer-breakfast-christian">argue</Hyperlink> <Hyperlink to="https://www.foxnews.com/faith-values/trump-sotu-speech-christian-reaction-2020">that</Hyperlink> <Hyperlink to="https://www.amazon.com/God-Trump-2020-Election-Christians/dp/1629996653">Christian</Hyperlink> <Hyperlink to="https://www.foxnews.com/faith-values/trump-paula-white-spiritual-adviser-2020-evangelical-vote">values</Hyperlink> <Hyperlink to="https://www.foxnews.com/politics/california-congress-worship-leader-sean-feucht">support</Hyperlink> <Hyperlink to="https://www.amazon.com/Culture-Jihad-Stop-Killing-Nation/dp/1642931667/ref=sr_1_1?keywords=todd+starnes&qid=1561303263&s=gateway&sr=8-1">Republican</Hyperlink> <Hyperlink to="https://www.foxnews.com/faith-values/faith-based-colleges-increasingly-under-threat">politics</Hyperlink>, they often hope to convince left-leaning Christians to vote Republican. Instead, they often alienate left-leaning Christians from Christianity.
        <br /><br />
        So America is <Hyperlink to="https://www.forbes.com/sites/daviddavenport/2015/07/29/elites-and-courts-push-america-into-a-post-christian-era">not being “push[ed] into a post-Christian era” by “elites and courts,”</Hyperlink> as David Davenport claimed. Neither are “secular values being forced on people of faith” by so-called “militant secularists,” as William Barr charged in a <Hyperlink to="https://www.foxnews.com/politics/ag-barr-blasts-militant-secularists-attacks-on-religious-freeom">paranoid screed about an alleged secular conspiracy</Hyperlink>. Conservative Christians like Davenport and Barr are the ones pushing America into a post-Christian era by alienating left-leaning former Christians. Despairing conservative Christians have only themselves to blame.
    </Section>
    <Section num={++sections} summary="Americans who are raised nonreligious are much less likely to become religious when they grow older, so the rise of the 'nones' is to some degree self-perpetuating.">
        <Hyperlink to="https://www.technologyreview.com/s/526111/how-the-internet-is-taking-away-americas-religion/">25% of the decline in American religious affiliation is explained by fewer Americans having a religious upbringing</Hyperlink>, Allen Downey found, neatly fitting what Evan Stewart called <Hyperlink to="http://hdl.handle.net/11299/206620">"drift theory"</Hyperlink>: 
        <br /><br />
        <blockquote>
            “[Drift theory] focuses on drift from social institutions. While many people make the choice to leave religious groups, a growing number of people simply stop attending or never join them in the first place…[T]he drift theory sees religious disaffiliation as an outcome of social-structural changes in institutions like the market and the family, rather than ideological changes in the population.”
            <Note num={++notes}><Hyperlink to="http://hdl.handle.net/11299/206620">Stewart (2019)</Hyperlink>, p. 3.
            </Note>
        </blockquote>
        Per <Hyperlink to="https://fivethirtyeight.com/features/the-christian-right-is-helping-drive-liberals-away-from-religion/">FiveThirtyEight</Hyperlink>:
        <br /><br />
        <blockquote>
        “[S]ecular liberals are more likely than moderates or conservatives to have spouses who aren’t religious. That’s critical because these couples are then often less likely to pray or send their children to Sunday school, and research shows that <Hyperlink to="https://www.jstor.org/stable/3511333?seq=1#page_scan_tab_contents">formative</Hyperlink> <Hyperlink to="https://psycnet.apa.org/record/1983-07799-001">religious</Hyperlink> <Hyperlink to="https://www.jstor.org/stable/1386039?seq=1#page_scan_tab_contents">experiences</Hyperlink> as a child play a crucial role in structuring an adult’s religious beliefs and identity...It’s very, very unlikely that a kid raised in a nonreligious liberal household would suddenly consider going to church.”
        </blockquote>
        The less that Americans are taught to follow their religion as children, before the development of their critical thinking skills, the fewer of them ever come to believe it.
    </Section>
</Layout>)

export default ExplainingDemographicsUSA;