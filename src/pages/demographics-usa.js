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
import gssReligion from "../images/gss-religion.png"
import pewReligiousLandscape from "../images/pew-religious-landscape.png"
import gallupReligion from "../images/Gallup-Religion-1950-2050.png"

var notes = 0;
var sections = 0;
const DemographicsUSA = () => (
  <Layout>
    <SEO title="American Religious Demographic Trends" />
    <script>
        {notes = 0}
        {sections = 0}
    </script>    
    <blockquote>
        “<em><Hyperlink to="https://www.theatlantic.com/ideas/archive/2019/07/evangelical-christians-face-deepening-crisis/593353/">We’re losing an entire generation. They’re just gone. It’s one of the worst things to happen to the Church</Hyperlink></em>.”
        <br />
        —Pastor and evangelist Karel Coppock
        <Note num={++notes}>
            Quoted by Peter Wehner in his article for The Atlantic, “<Hyperlink to="https://www.theatlantic.com/ideas/archive/2019/07/evangelical-christians-face-deepening-crisis/593353/">The Deepening Crisis in Evangelical Christianity</Hyperlink>.” Wehner is a senior fellow at a think-tank promoting “Judeo-Christian values”: the <Hyperlink to="https://eppc.org/">Ethics and Public Policy Center</Hyperlink> (EPPC), which (per its About page) is “<Hyperlink to="https://eppc.org/about">dedicated to applying the Judeo-Christian moral tradition to critical issues of public policy</Hyperlink>.” 
        </Note>
    </blockquote>
      Discussions of demographic trends regarding religious belief and adherence often start out by mentioning two particular TIME Magazine covers from the 1960s, so I may as well do the same. In April 1966, the cover of TIME Magazine asked, "Is God Dead?" But in December 1969, the cover apparently reversed its position by asking, "Is God Coming Back to Life?" Usually, the flip-flop is used to frame a specific narrative — for example, that theism is on the rise, especially in scholarly circles,<Note num={++notes}>Dr. Craig, "<Hyperlink to="https://www.reasonablefaith.org/writings/popular-writings/existence-nature-of-god/the-resurrection-of-theism/">The Resurrection of Theism.</Hyperlink>"</Note> or that religious demographic trends vary and fluctuate.<Note num={++notes}>Tom W. Smith (2012), "<Hyperlink to="http://citeseerx.ist.psu.edu/viewdoc/summary?doi=10.1.1.371.3239">Beliefs about God across Time and Countries</Hyperlink>" (<Hyperlink to="http://www.norc.org/pdfs/beliefs_about_god_report.pdf" archived="hide">PDF</Hyperlink>). Chicago: NORC/University of Chicago.</Note> The latter is closer to the truth, but a third option fits the data even more accurately: American religion is declining.
      <Section num={++sections} summary="Fewer and fewer Americans have identified as Christian every year since the late 20th century, as consistently shown by many credible polling organizations (Gallup, Pew Research Center, NORC, and the General Social Survey) and contradicted by none. More and more Americans identify as nonreligious." class="hidden full content">
        The percentage of American identifying as Christian has declined for over sixty years, as found consistently by every polling organization that has checked. The most notable and credible are probably the Pew Research Center, the General Social Survey, and Gallup.
        <br /><br />
        In 2007 and 2014, the Pew Research Center conducted intensive surveys to study <Hyperlink to="https://www.pewforum.org/2015/05/12/americas-changing-religious-landscape/">"America's Changing Religious Landscape."</Hyperlink> They surveyed <Hyperlink to="https://www.pewforum.org/religious-landscape-study/">more than 35,000 Americans from all 50 states about their religious affiliations, beliefs and practices, and social and political views.</Hyperlink> During the same time, they also conducted regular yearly surveys of American political and religious affiliation. Both survey methods found the same result: <Hyperlink to="https://www.pewforum.org/2019/10/17/in-u-s-decline-of-christianity-continues-at-rapid-pace/pf_10-17-19_rdd_update-00-020/">American Christianity is declining fast.</Hyperlink> Americans are increasingly leaving religion behind.
        <br /><br />
        <Hyperlink to="https://www.pewforum.org/2019/10/17/in-u-s-decline-of-christianity-continues-at-rapid-pace/pf_10-17-19_rdd_update-00-020/" archived="hide">
          <img width="494" height="1024" src="https://www.pewforum.org/wp-content/uploads/sites/7/2019/10/PF_10.17.19_rdd_update-00-020.png?w=494" class="attachment-large size-large" alt="In U.S., smaller share of adults identify as Christians, while religious 'nones' have grown" srcset="https://www.pewforum.org/wp-content/uploads/sites/7/2019/10/PF_10.17.19_rdd_update-00-020.png 624w, https://www.pewforum.org/wp-content/uploads/sites/7/2019/10/PF_10.17.19_rdd_update-00-020.png?resize=145,300 145w, https://www.pewforum.org/wp-content/uploads/sites/7/2019/10/PF_10.17.19_rdd_update-00-020.png?resize=494,1024 494w, https://www.pewforum.org/wp-content/uploads/sites/7/2019/10/PF_10.17.19_rdd_update-00-020.png?resize=154,320 154w, https://www.pewforum.org/wp-content/uploads/sites/7/2019/10/PF_10.17.19_rdd_update-00-020.png?resize=195,405 195w, https://www.pewforum.org/wp-content/uploads/sites/7/2019/10/PF_10.17.19_rdd_update-00-020.png?resize=200,415 200w, https://www.pewforum.org/wp-content/uploads/sites/7/2019/10/PF_10.17.19_rdd_update-00-020.png?resize=260,539 260w, https://www.pewforum.org/wp-content/uploads/sites/7/2019/10/PF_10.17.19_rdd_update-00-020.png?resize=310,643 310w, https://www.pewforum.org/wp-content/uploads/sites/7/2019/10/PF_10.17.19_rdd_update-00-020.png?resize=420,871 420w" sizes="(max-width: 494px) 100vw, 494px" /></Hyperlink>
        Christian identification is shrinking, and nonreligion is rising, not only as a percentage of the American population but in raw numbers:
        <br /><br />
        <img src = {pewReligiousLandscape} />
        Contrast an old Pew report which found that <Hyperlink to="https://www.people-press.org/2001/04/10/section-v-religious-beliefs/">82% of Americans identified as Christian in 2001</Hyperlink><Note num={++notes}>I chose 2001 because this was the earliest Pew publication I could find about American religious identification demographics.</Note> — down slightly from a whopping 84% in 1996. Only about 11% of Americans were nonreligious back then. These data suggest a trend: the American population has steadily become less Christian.
        <br /><br />
        <Hyperlink to="https://www.pewforum.org/2019/10/17/in-u-s-decline-of-christianity-continues-at-rapid-pace/">Every demographic group's proportion of self-identified Christians is shrinking</Hyperlink>. No matter their age, gender, region, education, political party, or ethnicity, any American is less likely to be Christian — and more likely to be nonreligious — now than a decade ago. Christianity has declined faster in some groups than others. It has declined fastest among Americans who have a college degree, are white, live in the Northeast, are men, were born after 1980, or are Democrats. But even Americans who live in the South, are Republicans, or were born before 1946 are less likely to be Christian — and more likely to be nonreligious — now than 10 years ago. 
        <br /><br />
        <Hyperlink to="https://www.pewforum.org/2019/10/17/in-u-s-decline-of-christianity-continues-at-rapid-pace/pf_10-17-19_rdd_update-00-017/" archived="hide">
          <img width="751" height="1024" src="https://www.pewforum.org/wp-content/uploads/sites/7/2019/10/PF_10.17.19_rdd_update-00-017.png?w=751" class="attachment-large size-large" alt="Broad-based declines in share of Americans who say they are Christian" srcset="https://www.pewforum.org/wp-content/uploads/sites/7/2019/10/PF_10.17.19_rdd_update-00-017.png 838w, https://www.pewforum.org/wp-content/uploads/sites/7/2019/10/PF_10.17.19_rdd_update-00-017.png?resize=220,300 220w, https://www.pewforum.org/wp-content/uploads/sites/7/2019/10/PF_10.17.19_rdd_update-00-017.png?resize=768,1047 768w, https://www.pewforum.org/wp-content/uploads/sites/7/2019/10/PF_10.17.19_rdd_update-00-017.png?resize=751,1024 751w, https://www.pewforum.org/wp-content/uploads/sites/7/2019/10/PF_10.17.19_rdd_update-00-017.png?resize=160,218 160w, https://www.pewforum.org/wp-content/uploads/sites/7/2019/10/PF_10.17.19_rdd_update-00-017.png?resize=297,405 297w, https://www.pewforum.org/wp-content/uploads/sites/7/2019/10/PF_10.17.19_rdd_update-00-017.png?resize=200,273 200w, https://www.pewforum.org/wp-content/uploads/sites/7/2019/10/PF_10.17.19_rdd_update-00-017.png?resize=260,354 260w, https://www.pewforum.org/wp-content/uploads/sites/7/2019/10/PF_10.17.19_rdd_update-00-017.png?resize=310,422 310w, https://www.pewforum.org/wp-content/uploads/sites/7/2019/10/PF_10.17.19_rdd_update-00-017.png?resize=420,572 420w, https://www.pewforum.org/wp-content/uploads/sites/7/2019/10/PF_10.17.19_rdd_update-00-017.png?resize=640,872 640w, https://www.pewforum.org/wp-content/uploads/sites/7/2019/10/PF_10.17.19_rdd_update-00-017.png?resize=740,1008 740w" sizes="(max-width: 751px) 100vw, 751px" />
        </Hyperlink>
        The decline of American Christianity is not a new trend. In 1972, the National Opinion Research Center (NORC) began conducting yearly interviews with nationally representative samples of thousands of Americans: the "<Hyperlink to="https://gss.norc.org/">General Social Survey</Hyperlink>" (GSS). Their interview questions include religious identification. Like Pew's surveys, the GSS found that <Hyperlink to="https://gssdataexplorer.norc.org/variables/287/vshow">Christian identification has fallen while nonreligious identification rose.</Hyperlink>
        <br /><br />
        <Hyperlink to="http://sociology.berkeley.edu/sites/default/files/faculty/fischer/Hout%20et%20al_No%20Relig%20Pref%202012_Release%20Mar%202013.pdf" archived="hide">
          <img src={gssReligion} /></Hyperlink>
        Gallup probably has the most data on the <Hyperlink to="https://news.gallup.com/poll/1690/religion.aspx">long-term decline of American Christianity:
        <br /><br />
        <img src={gallupReligion} /></Hyperlink><br />
      </Section>
      <Section num={++sections} summary="American religious belief and behavior have declined alongside religious identification, as Gallup has consistently shown, so Americans are not simply becoming less fond of Christian organizations. Americans are increasingly abandoning religion entirely.">
        Americans, as Gallup has shown, increasingly see religion as “<Hyperlink to="https://news.gallup.com/poll/128276/Increasing-Number-No-Religious-Identity.aspx">largely old-fashioned and out of date,</Hyperlink>”:
        <br /><br />
        <Hyperlink to="https://news.gallup.com/poll/128276/Increasing-Number-No-Religious-Identity.aspx" archived="hide">
          <img src = "https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/POLL/fo0icpvbpke6wlft2xzeug.gif" /></Hyperlink>
        Yet some Christians are not worried about the their way of life waning. American Vice President Mike Pence <Hyperlink to="http://twitter.com/VP/status/995379097881759744">claimed</Hyperlink> that "Religion in America isn’t receding – just the opposite," because <Hyperlink to="http://twitter.com/VP/status/995378911897845761">supposedly</Hyperlink> the "percentage of Americans who live out their religion on a weekly basis – by praying, going to church, and reading and believing in the Bible – has remained remarkably consistent over the decades." Pence's beliefs about American religious demographics are almost as inaccurate as his religious beliefs. While Gallup lacks long-term year-over-year data on prayer and scripture-reading frequency, what they do have shows the <Hyperlink to="https://news.gallup.com/poll/1690/religion.aspx">decline of American religious behavior</Hyperlink> over the last few decades. According to Gallup, the proportion of Americans who...
        <br /><br /><ul>
          <li>..."attend church or synagogue ... never" almost doubled from 14% in 1992 to 27% in 2017, while the proportion who attended "every week" declined from 34% in 1992 to 23% in 2017.</li>
          <li>..."attend[ed] church or synagogue in the last seven days" declined from 40% in 1992 to 35% in 2017.</li>
          <li>...believe that "the Bible is the actual word of God and is to be taken literally, word for word" declined from 38% in 1976 to 24% in 2017.</li>
          <li>...believe that "the Bible is an ancient book of fables, legends, history, and moral precepts recorded by man" doubled from 13% in 1976 to 26% in 2017.</li>
        </ul><br />
        <Hyperlink to="https://news.gallup.com/poll/248837/church-membership-down-sharply-past-two-decades.aspx" archived="hide">
          <img src = "https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/POLL/nyi9r4mrikq5unkl5g36bg.png" />
        </Hyperlink>
        Some have alleged that the decline in religious behavior and identification does not mean a decline in religious belief. While discussing his book <em>Bad Religion</em> on <em>Real Time with Bill Maher</em>, Ross Douthat of the <em>New York Times</em> contested the claim that American religious belief is declining by presenting what he considered a nuanced view of the demographic shifts in religion. He acknowledged that "organized religion [is] weaker than ever before," but also claimed that "Americans are still as religious as ever" because "more people claim a direct experience of the divine than they did in the 1950s, people are still as likely to say they believe in God, and so on. If you drop below 'Do you go to church on Sunday?' and ask 'What do people actually believe?' [then] religion's as potent as ever."
        <Note num={++notes}>
          Bill Maher, <em>Real Time with Bill Maher</em> Season 10 Episode 13 (2012, April 20). It used to be on YouTube, but after that video was taken down, I have not been able to find the episode in full. I have found summaries of it on <Hyperlink to="https://www.imdb.com/title/tt2353033/">iMDB,</Hyperlink> <Hyperlink to="https://www.real-time-with-bill-maher-blog.com/index/2012/4/20/real-time-guest-list-april-20-2012.html">Maher's blog</Hyperlink>, and <Hyperlink to="https://www.metacritic.com/tv/real-time-with-bill-maher/season-10/episode-13-245">Metacritic</Hyperlink>.
        </Note> Douthat's first example is surprisingly correct, because the <Hyperlink to="http://www.pewresearch.org/?p=1434/multiple-religious-practices-reincarnation-astrology-psychic">proportion of Americans reporting a religious/mystical experience has doubled since 1962</Hyperlink>, but his second example is demonstrably false.
        <br /><br />
        <img src = "https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/POLL/atbudnjfoum5r1qfj_dhdq.png" />
        Gallup found that <Hyperlink to="https://news.gallup.com/poll/193271/americans-believe-god.aspx">American belief in God has declined since the late 1960s</Hyperlink>. It has not declined as quickly or consistently as Christian identification, or as quickly as nonreligious identification has risen, but in every metric it has declined nonetheless. Not only do a smaller percentage of Americans believe in God now than ever, but fewer believers in God are convinced that God exists:
        <Note num={++notes}>
          Confirming Gallup's findings, Pew's Religious Landscape Study also found a slight <Hyperlink to="https://www.pewresearch.org/fact-tank/2015/11/04/americans-faith-in-god-may-be-eroding/">decline of American belief in God</Hyperlink> from 92% in 2007 to 89% in 2014. The decline of "[b]eliev[ing] in God with absolute certainty" over the same period was even faster, from 71% to 63%.
        </Note><br /><br />
        <img src = "https://content.gallup.com/origin/gallupinc/GallupSpaces/Production/Cms/POLL/n4m-_wsdzeookywenuwnbw.png" />
        In 1967, 1% of Americans told Gallup that they do not believe in God. In 2017, <Hyperlink to="https://news.gallup.com/poll/1690/religion.aspx">12% of Americans told Gallup they do not believe in God, the highest known percentage in American history.</Hyperlink>
        <br /><br />
      </Section>
      <Section num={++sections} summary="American churches used to maintain their membership by the 'life cycle effect,' where young adults who left church would return after settling down with a family and career. But the Barna Group has found that this 'life cycle effect' disappeared for Americans born after 1970.">
        The Barna Group, a reliable Christian polling organization, has tried to “<Hyperlink to="https://www.barna.com/young-people/">sound an alarm</Hyperlink>” for <Hyperlink to="https://shop.barna.com/collections/all-products/products/you-lost-me-paperback">years</Hyperlink> that American youth are increasingly abandoning Christianity. From 2011 to 2019, they found that the percentage of American 18-29 year olds raised in church who withdrew from church involvement has increased from 59% to 64%. Only 10% of “twentysomethings” raised Christian are what Barna nicknamed “resilient disciples,” who strongly affirm traditional Christian beliefs and are involved in a Christian community.
        <br /><br />
        Ross Douthat objected again to the narrative of America's youth becoming increasingly secular. He admitted that “<Hyperlink to="https://www.nytimes.com/2019/10/29/opinion/american-christianity.html">the millennial generation is the most secular in modern American history</Hyperlink>.” However, he argued based on a Twitter thread by Barna researcher Ryan Burge that young Americans may eventually return to church:
        <br /><br /><blockquote>
        “[R]eligious attendance ebbs and then flows across the life cycle, falling when you leave home and then increasing with child rearing and with the encroachment of mortality. And when the political scientist Dr. Ryan Burge recently <Hyperlink to="https://twitter.com/ryanburge/status/1186277204709085185">compared</Hyperlink> weekly church attendance among today’s 20-somethings to weekly attendance among 20-somethings in the 1990s, he actually found a tiny increase: Church attendance has been falling among the middle-aged and early-elderly cohorts, but the typical millennial or Gen Z American is slightly more likely to be a weekly churchgoer than a Generation-Xer circa 1995.”
        </blockquote>
        Instead of only citing Burge's Twitter thread, Douthat should have read Burge's full article discussing his findings — because Burge himself strongly disagreed with Douthat's conclusion. Most American apostates, Burge fears, will never return.
        <br /><br />
        “<Hyperlink to="https://www.barna.com/young-people/">Young People Will Come Back to Church, Right?</Hyperlink>” Dr. Burge's article asked. No, the article concluded, they will not. Christian church attendance used to be passed down to each younger generation through what Burge called the “Life Cycle Effect.” He examined GSS data on age and church attendance and showed that church attendance is high for children because their parents take them to church, low for teens and young adults in a time of rebellion and transition, and high again in adulthood as people want their new children to have the same moral teachings — for Americans born before 1970. For most born after, church attendance remained high in childhood and low in young adulthood, but simply never bounced back. Responding to this momentous change, Burge rebutted Douthat's naivety: “No church should assume that this crucial part of the population is going to return to active membership as their parents once did.”
        <br /><br />
        
      </Section>
  </Layout>
);

export default DemographicsUSA
