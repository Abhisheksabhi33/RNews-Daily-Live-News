import React, { Component } from 'react'
import NewsItem from './NewsItem'
// import Spinner from './Spinner';
// import InfiniteScroll from 'react-infinite-scroll-component';

export default class News extends Component {
    
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
       articles = [

        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Austin Ramzy",
            "title": "Live Updates: Ukraine-Russia War - The New York Times",
            "description": "Residents emerged from shelters as Ukrainian troops entered the capital’s suburbs. Battlefield debris littered the streets, and Ukraine alleged that Russian forces executed civilians.",
            "url": "https://www.nytimes.com/live/2022/04/03/world/ukraine-russia-war",
            "urlToImage": "https://static01.nyt.com/images/2022/04/03/world/03ukraine-blog-5am-est-promo/03ukraine-blog-5am-est-promo-facebookJumbo.jpg",
            "publishedAt": "2022-04-03T08:06:23Z",
            "content": "The accounts of resistance in the small garrison town of Vasylkiv have already taken on the sheen of legend. There are reports of Russian transport planes shot down, paratroopers hunted in the woods … [+3532 chars]"
        },
        {
            "source": {
                "id": "al-jazeera-english",
                "name": "Al Jazeera English"
            },
            "author": "Al Jazeera",
            "title": "Pakistan Parliament dismisses no-confidence motion against Khan - Al Jazeera English",
            "description": "PM Khan says he advised the president to dissolve Parliament and call for fresh elections.",
            "url": "https://www.aljazeera.com/news/2022/4/3/pakistan-parliament-dismisses-no-confidence-motion-against-khan",
            "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2022/04/AP22093144413464.jpg?resize=1200%2C630",
            "publishedAt": "2022-04-03T07:41:17Z",
            "content": "Imran Khan has survived a move to oust him as Pakistans prime minister, getting a reprieve when the deputy speaker of Parliament blocked a no-confidence motion as unconstitutional.\r\nKhan, whose fate … [+1898 chars]"
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": "Scott Gleeson, USA TODAY",
            "title": "Final Four: North Carolina downs Duke, ends Coach K's career to reach national championship - USA TODAY",
            "description": "In a thriller, Caleb Love and the Tar Heels win, 81-77, to earn a date with Kansas for the national title. Coach K is denied a shot at a sixth title.",
            "url": "https://www.usatoday.com/story/sports/ncaab/2022/04/02/coach-k-career-ends-duke-north-carolina/7257997001/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2022/04/03/USAT/c9a414ab-a693-4a49-8ae9-301038e49cd6-USP_NCAA_Basketball__Final_Four-Semifinals-North_C.jpg?auto=webp&crop=3806,2141,x0,y194&format=pjpg&width=1200",
            "publishedAt": "2022-04-03T07:30:00Z",
            "content": "NEW ORLEANS — Coach K's storied career is over. \r\nNorth Carolina played the ultimate villain again, stunning archrival and No. 2 seed Duke, 81-77, in the Final Four on Saturday at Caesars Superdome b… [+3728 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Full WrestleMania Saturday 2022 highlights (WWE Network Exclusive) - WWE",
            "description": "Watch highlights from WrestleMania 38, featuring \"Stone Cold\" Steve Austin, Ronda Rousey, Cody Rhodes and more. Catch WWE action on Peacock, WWE Network, FOX...",
            "url": "https://www.youtube.com/watch?v=hFFIc0bJal4",
            "urlToImage": "https://i.ytimg.com/vi/hFFIc0bJal4/maxresdefault.jpg",
            "publishedAt": "2022-04-03T06:04:48Z",
            "content": null
        },
        {
            "source": {
                "id": null,
                "name": "Deadline"
            },
            "author": "Matt Grobar",
            "title": "'SNL's Weekend Update Lampoons Will Smith, Film Academy & Chris Rock – Deadline - Deadline",
            "description": "Tonight on SNL, Weekend Update‘s anchors Colin Jost and Michael Che made every Will Smith joke they’d been holding onto over the course of the past week, following the Oscar winner’s slap of Chris Rock at the 94th Academy Awards. “Intelligence officials are s…",
            "url": "https://deadline.com/2022/04/snls-weekend-update-lampoons-will-smith-film-academy-chris-rock-1234993074/",
            "urlToImage": "https://deadline.com/wp-content/uploads/2022/04/Screen-Shot-2022-04-02-at-9.36.12-PM-e1648962987666.png?w=891",
            "publishedAt": "2022-04-03T05:15:00Z",
            "content": "Tonight on SNL, Weekend Update‘s anchors Colin Jost and Michael Che made every Will Smith joke they’d been holding onto over the course of the past week, following the Oscar winner’s slap of Chris Ro… [+4943 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "2022 NCAA basketball championship game: UNC vs. Kansas set for national title as March Madness concludes - CBS Sports",
            "description": "The Jayhawks and Tar Heels previously faced off for the national championship back in 1957",
            "url": "https://www.cbssports.com/college-basketball/news/2022-ncaa-basketball-championship-game-unc-vs-kansas-set-for-national-title-as-march-madness-concludes/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/04/03/c4c04265-2764-41c3-a544-5a6cba694709/thumbnail/1200x675/fd985346f655ce28fe811ab4711cbf88/heels.jpg",
            "publishedAt": "2022-04-03T04:00:30Z",
            "content": "An epic night on Saturday in the Final Four has given us an all-time national championship game with No. 1 seed Kansas facing No. 8 seed North Carolina in the final game of the 2022 NCAA Tournament o… [+9718 chars]"
        },
        {
            "source": {
                "id": "the-hill",
                "name": "The Hill"
            },
            "author": "Brad Dress",
            "title": "Ukrainian civilians executed, people buried in mass graves in city of Bucha, officials say - The Hill",
            "description": "Ukrainian civilians were executed and left lying in the streets of Bucha, Ukraine, and hundreds of people were buried in mass graves in the city, which lies just outside of the capital of Kyiv, according to Ukrainian officials. Ukraine presidential adviser My…",
            "url": "https://thehill.com/policy/international/3257490-ukrainian-civilians-executed-buried-in-mass-graves-in-city-of-bucha-officials-say/",
            "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2022/03/ukrainiansoldiers.jpg?w=1280",
            "publishedAt": "2022-04-03T03:24:00Z",
            "content": "Ukrainian civilians were executed and left lying in the streets of Bucha, Ukraine, and hundreds of people were buried in mass graves in the city, which lies just outside of the capital of Kyiv, accor… [+2475 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": null,
            "title": "Tushar Atre murder: Surveillance video captures the brutal kidnapping of a tech executive — but what happened off camera? - CBS News",
            "description": "After neighborhood security cameras show Tushar Atre fighting for his life during a vicious attack near his Santa Cruz, California, home, he is later found shot to death at his cannabis farm 14 miles away.",
            "url": "https://www.cbsnews.com/news/tushar-atre-tech-executive-kidnapping-murder-surveillance-video-48-hours/",
            "urlToImage": "https://cbsnews3.cbsistatic.com/hub/i/r/2022/04/02/24e52592-8ce0-4929-86b4-33b8bdded58a/thumbnail/1200x630/ebc54d17725e77ba81ad6a55d97c8005/atre-running.jpg",
            "publishedAt": "2022-04-03T03:01:00Z",
            "content": "Tushar Atre, a successful tech-executive-turned-cannabis-entrepreneur had a multimillion-dollar home on the California coast, where he spent his free time surfing.  His dream house turned into a crim… [+37916 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Mail"
            },
            "author": "James Gordon",
            "title": "Santa Barbara EMS 'overwhelmed' by 'Deltopia' Spring Break mayhem as thousands pack the streets - Daily Mail",
            "description": "Police in Santa Barbara declared a 'multi casualty incident' in Isla Vista where a raucous college Spring Break party Deltopia is underway. Santa Barbara County Sheriff's office made three arrests Friday.",
            "url": "https://www.dailymail.co.uk/news/article-10680399/Santa-Barbara-EMS-overwhelmed-Deltopia-Spring-Break-mayhem-thousands-pack-streets.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2022/04/03/03/56146207-0-image-a-28_1648954195079.jpg",
            "publishedAt": "2022-04-03T02:59:36Z",
            "content": "The West Coast is getting its own taste of some Spring Break mayhem.  \r\nPolice in Santa Barbara, California, are said to have become 'overwhelmed with medical calls' on Saturday evening after Deltopi… [+4104 chars]"
        },
        {
            "source": {
                "id": "bloomberg",
                "name": "Bloomberg"
            },
            "author": null,
            "title": "China Finds New Virus Subtype as Daily Cases Exceed 13000 - Bloomberg",
            "description": null,
            "url": "https://www.bloomberg.com/tosv2.html?vid=&uuid=dcfc275f-b32b-11ec-8138-676365716648&url=L25ld3MvYXJ0aWNsZXMvMjAyMi0wNC0wMy9jaGluYS1hZGRzLW92ZXItMTMtMDAwLWNvdmlkLWNhc2VzLWFzLXNoYW5naGFpLW91dGJyZWFrLXdpZGVucw==",
            "urlToImage": null,
            "publishedAt": "2022-04-03T02:46:00Z",
            "content": "To continue, please click the box below to let us know you're not a robot."
        },
        {
            "source": {
                "id": null,
                "name": "The Detroit News"
            },
            "author": "Beth LeBlanc and James David Dickson, The Detroit News",
            "title": "Trump uses Macomb County rally to push influence in Michigan GOP nominations - Detroit News",
            "description": "Former President Donald Trump tried Saturday to boost select Michigan candidates running for secretary of state, attorney general and the Legislature.",
            "url": "https://www.detroitnews.com/story/news/politics/2022/04/02/macomb-co-crowds-await-trump-ahead-first-visit-since-2020-election/7120925001/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2022/04/03/PDTN/07550e8d-5348-4810-a6e9-e078131e0b76-220402_SaveAmericaRally_44.JPG?auto=webp&crop=3299,1856,x0,y167&format=pjpg&width=1200",
            "publishedAt": "2022-04-03T02:26:15Z",
            "content": "Washington Township — Former President Donald Trump tried to boost select Michigan candidates running for secretary of state, attorney general and the Legislature in a nearly two-hour Saturday addres… [+13325 chars]"
        },
         
        {
            "source": {
            "id": null,
            "name": "CNBC"
            },
            "author": "Kevin Stankiewicz",
            "title": "5 things to know before the stock market opens Tuesday - CNBC",
            "description": "Wall Street was bracing for the March consumer price index report, which is expected to show the hottest annual inflation since 1981.",
            "url": "https://www.cnbc.com/2022/04/12/5-things-to-know-before-the-stock-market-opens-tuesday.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107042747-1649259187770-mcd.jpg?v=1649259221&w=1920&h=1080",
            "publishedAt": "2022-04-12T11:54:37Z",
            "content": "Here are the most important news, trends and analysis that investors need to start their trading day:\r\n1. Stock futures flat as investors await key inflation report\r\nTraders work on the floor of the … [+4848 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Fox Business"
            },
            "author": "Breck Dumas",
            "title": "Inflation overtakes labor shortage as top problem for small businesses - Fox Business",
            "description": "The latest survey conducted by the National Federation of Independent Business found that the biggest problem facing small businesses is no longer a shortage in labor, but inflation.",
            "url": "https://www.foxbusiness.com/economy/inflation-overtakes-labor-shortage-top-problem-small-businesses",
            "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/04/0/0/inflation.jpg?ve=1&tl=1",
            "publishedAt": "2022-04-12T11:52:56Z",
            "content": "The U.S. continues to struggle with labor and supply chain woes brought on by the COVID-19 pandemic, but the latest data show the top problem cited by small business owners is now high prices.\r\nThe N… [+2884 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "CNBC"
            },
            "author": "Peter Schacknow",
            "title": "Stocks making the biggest moves in the premarket: PG&E, Hewlett Packard Enterprise, CarMax and more - CNBC",
            "description": "The stocks making the biggest moves in premarket trading include PG&E, Hewlett Packard Enterprise, CarMax, and more.",
            "url": "https://www.cnbc.com/2022/04/12/stocks-making-the-biggest-moves-in-the-premarket-pge-hewlett-packard-enterprise-carmax-and-more.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107006843-1643222679810-gettyimages-1367011643-0j5a1071_b0096968-29e4-4cab-b3af-36ae06d9da2d.jpeg?v=1643222718&w=1920&h=1080",
            "publishedAt": "2022-04-12T11:47:36Z",
            "content": "Take a look at some of the biggest movers in the premarket:\r\nPG&amp;E (PCG) The California utility's shares jumped 2.3% in the premarket after it reached legal settlements over two fires in Northern … [+2098 chars]"
            },
            {
            "source": {
            "id": "cnn",
            "name": "CNN"
            },
            "author": "Anneken Tappe, CNN Business",
            "title": "Did US inflation peak in March? Americans are concerned - CNN",
            "description": "Americans have been living with soaring prices for months, and March promises to have marked yet another fresh multi-decade high.",
            "url": "https://www.cnn.com/2022/04/12/investing/premarket-stocks-trading/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220411144625-us-inflation-0310-super-tease.jpg",
            "publishedAt": "2022-04-12T11:23:00Z",
            "content": null
            },
            {
            "source": {
            "id": null,
            "name": "CNBC"
            },
            "author": "Sam Shead",
            "title": "Mark Zuckerberg says Meta will test selling virtual goods in the metaverse - CNBC",
            "description": "Meta CEO Mark Zuckerberg wants to make it easier for people to spend and make money on virtual reality platform Horizon Worlds.",
            "url": "https://www.cnbc.com/2022/04/12/mark-zuckerberg-says-meta-will-test-horizon-worlds-virtual-sales.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106967430-16354585992021-10-28t214512z_952531076_rc29jq9u8x7d_rtrmadp_0_facebook-connect.jpeg?v=1649767072&w=1920&h=1080",
            "publishedAt": "2022-04-12T10:58:10Z",
            "content": "Meta CEO Mark Zuckerberg wants to make it easier for people to spend and make money on virtual reality platform Horizon Worlds, which is an an integral part of Meta's plan for creating a so-called \"m… [+3597 chars]"
            },
            {
            "source": {
            "id": "cnn",
            "name": "CNN"
            },
            "author": "Michelle Toh, CNN Business",
            "title": "Honda joins electric car race with $40 billion investment - CNN",
            "description": "Honda is joining the flurry of global automakers spending tens of billions of dollars to go electric.",
            "url": "https://www.cnn.com/2022/04/12/business/honda-electric-cars-intl-hnk/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220412034648-honda-ev-04122022-restricted-super-tease.jpg",
            "publishedAt": "2022-04-12T09:40:00Z",
            "content": null
            },
            {
            "source": {
            "id": null,
            "name": "CNBC"
            },
            "author": "Vicky McKeever",
            "title": "10-year Treasury yield pulls back from 3-year high after core CPI comes in lighter than expected - CNBC",
            "description": "The 10-year U.S. Treasury yield retreated from a three-year high as investors digested the latest inflation report.",
            "url": "https://www.cnbc.com/2022/04/12/us-bonds-treasury-yields-rise-ahead-of-key-inflation-report.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107026472-NYSE-Traders-OB-Photo-220307-CC-PRESS-4.jpg?v=1646679672&w=1920&h=1080",
            "publishedAt": "2022-04-12T08:48:51Z",
            "content": "The 10-year U.S. Treasury yield retreated from a three-year high on Tuesday as investors digested the latest inflation report.\r\nThe yield on the benchmark 10-year Treasury note dropped 6 basis points… [+1667 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "MarketWatch"
            },
            "author": "Steve Goldstein",
            "title": "It's inflation day. Wall Street futures edge higher ahead of CPI release. - MarketWatch",
            "description": "U.S. stock index futures accelerated Tuesday as investors focused on a report showing so-called core inflation slowing even as consumer prices rose by the...",
            "url": "https://www.marketwatch.com/story/its-inflation-day-wall-street-futures-pointing-lower-ahead-of-cpi-release-11649749076",
            "urlToImage": "https://images.mktw.net/im-522871/social",
            "publishedAt": "2022-04-12T07:37:00Z",
            "content": "U.S. stock index futures rose Tuesday as investors focused on a report showing so-called core inflation slowing even as consumer prices rose by the fastest rate in 40 years.\r\nWhats happening\r\n<ul><li… [+1088 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "CoinDesk"
            },
            "author": "Shaurya Malwa",
            "title": "Long Crypto Traders Feel Pain as Bitcoin's Slide Leads to $430M in Liquidations - CoinDesk",
            "description": "Nearly 90% of all liquidations in the past 24 hours came from traders betting on the upside.",
            "url": "https://www.coindesk.com/markets/2022/04/12/long-crypto-traders-feel-pain-as-bitcoins-slide-leads-to-430m-in-liquidations/",
            "urlToImage": "https://www.coindesk.com/resizer/r5BZ6eDvx4bSAiVZhGHOl0jBUvo=/1200x628/center/middle/cloudfront-us-east-1.images.arcpublishing.com/coindesk/4KTH5FF52BG6VPS4DQOWUGHJTE.jpeg",
            "publishedAt": "2022-04-12T06:17:00Z",
            "content": "Futures traders betting on the continued recovery of crypto prices were caught in the crosshairs after bitcoin (BTC) dropped to under $40,000 in the past 24 hours. Traders racked up over $430 million… [+2619 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "CNBC"
            },
            "author": "Natasha Turak",
            "title": "Shares of Dubai utility DEWA surge in Middle East's largest IPO since Aramco - CNBC",
            "description": "Shares of Dewa surged more than 20% as the giant utility company began trading on the public market Tuesday.",
            "url": "https://www.cnbc.com/2022/04/12/shares-in-dubai-utility-dewa-surge-in-middle-easts-largest-ipo-since-aramco.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106986471-16389819412021-12-08t163406z_314817727_rc2far9kzjm6_rtrmadp_0_emirates-economy-weekends.jpeg?v=1638981964&w=1920&h=1080",
            "publishedAt": "2022-04-12T06:12:14Z",
            "content": "DUBAI, United Arab Emirates Shares of Dewa, the Dubai Water and Electricity Authority, surged more than 20% Tuesday as the giant utility company began trading on the public market, marking the first … [+3446 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "CNBC"
            },
            "author": "Evelyn Cheng",
            "title": "In the U.S., consumers are paying more for everything. In China, the inflation problem is very different - CNBC",
            "description": "Persistent inflation in China narrows the window for when the People's Bank of China can cut rates and support growth, economists said.",
            "url": "https://www.cnbc.com/2022/04/12/china-inflation-makes-it-harder-for-pboc-to-cut-interest-rates-us-fed.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107044623-1649664150393-gettyimages-1385869214-vcg111373614401.jpeg?v=1649737016&w=1920&h=1080",
            "publishedAt": "2022-04-12T05:53:20Z",
            "content": "Transportation fuel prices rose by 24.1% in China in March 2022 from a year ago, the largest increase within the country's consumer price index.\r\nBEIJING Persistent inflation in China narrows the win… [+4175 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Daily Mail"
            },
            "author": "Matt Mcnulty",
            "title": "USPS halts service in California city overrun by homeless after repeated attacks on mail carriers - Daily Mail",
            "description": "The USPS suspended services in a Santa Monica neighborhood after a series of assaults on mail carriers in recent months, all of which occurred in the wake of widespread homeless encampments.",
            "url": "https://www.dailymail.co.uk/news/article-10709913/USPS-halts-service-California-city-overrun-homeless-repeated-attacks-mail-carriers.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2022/04/12/06/56502769-0-image-a-43_1649742127339.jpg",
            "publishedAt": "2022-04-12T05:45:43Z",
            "content": "The United States Postal Service has suspended mail service in a California beach town plagued by homeless encampments after the agency claimed its mail carriers have been attacked in recent months. … [+4710 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "CNBC"
            },
            "author": "Matt Clinch",
            "title": "European stocks slide 1.2% after undisclosed investor sells stakes in German banks; Deutsche Bank tanks 9.5% - CNBC",
            "description": "European markets sank as traders monitored heavy selling in the banking sector, and looked ahead to key central bank meetings and U.S. inflation prints.",
            "url": "https://www.cnbc.com/2022/04/12/european-markets-set-to-drop-as-investors-watch-inflation-central-banks.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107029763-1647251704145-gettyimages-1236040258-SINGAPORE_DEUTSCHE.jpeg?v=1649164709&w=1920&h=1080",
            "publishedAt": "2022-04-12T05:28:54Z",
            "content": "LONDON European markets sank Tuesday morning as traders monitored heavy selling in the banking sector, and looked ahead to key central bank meetings and U.S. inflation prints.\r\nThe pan-European Euro … [+2593 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "CNBC"
            },
            "author": "Anmar Frangoul",
            "title": "Giant undersea cables set to give the UK and Germany their first direct energy link - CNBC",
            "description": "The news marks the latest progression for a project that's been in the works for some time.",
            "url": "https://www.cnbc.com/2022/04/12/huge-undersea-cables-to-give-uk-germany-first-ever-energy-link.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107044802-1649684865701-gettyimages-559105737-99bfed5e-cbe4-49f2-8e57-5cf5ad2ac7d7.jpeg?v=1649684965&w=1920&h=1080",
            "publishedAt": "2022-04-12T05:12:02Z",
            "content": "Key contracts totaling more than £1.5 billion ($1.95 billion) have been awarded for a major interconnector project that will link Germany and the U.K., as countries around the world attempt to shore … [+2983 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "HuffPost"
            },
            "author": "Daniel Marans",
            "title": "Amazon Union Vote Becomes Flashpoint In Staten Island Congressional Race - HuffPost",
            "description": "Republican Rep. Nicole Malliotakis is under fire for her mild response to the Amazon union drive.",
            "url": "https://www.huffpost.com/entry/nicole-malliotakis-staten-island-amazon-union-vote_n_6254bde9e4b066ecde0a8949",
            "urlToImage": "https://img.huffingtonpost.com/asset/6254c0821e0000f6781b2670.jpeg?cache=ByuDpXJ0Co&ops=1778_1000",
            "publishedAt": "2022-04-12T00:58:39Z",
            "content": "Rep. Nicole Malliotakis (R-N.Y.) said she respected the outcome of the Amazon union vote but did not speak up beforehand and hasn't offered additional words of support for the workers.\r\nWhen workers … [+7457 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "Snopes.com"
            },
            "author": "https://www.snopes.com/author/jordan/",
            "title": "Ferrero's Kinder Recall Leads to Misleading Rumors of Maggots and Worms - Snopes.com",
            "description": "Just days away from Easter Sunday, we contacted Ferrero about its recent Kinder chocolate recall to find the truth behind a viral Facebook post that mentions maggots and salmonella.",
            "url": "https://www.snopes.com/news/2022/04/11/ferrero-kinder-maggots-worms/",
            "urlToImage": "https://www.snopes.com/tachyon/2022/04/ferrero-kinder-facebook-post.jpg",
            "publishedAt": "2022-04-12T00:33:45Z",
            "content": null
            },
            {
            "source": {
            "id": null,
            "name": "Gizmodo.com"
            },
            "author": "Lucas Ropek",
            "title": "Google Sues a Guy, Alleging 'Puppy Fraud' - Gizmodo",
            "description": "The search engine giant has accused a Cameroonian man of perpetrating a vast and nefarious fake dog conspiracy with its online advertising tools.",
            "url": "https://gizmodo.com/google-sues-for-puppy-fraud-1848779997",
            "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/56d826b701537ae7e03b5a91a4e36114.jpg",
            "publishedAt": "2022-04-12T00:30:00Z",
            "content": "Google has sued a man for allegedly abusing its services to trick droves of would-be pet owners into forking over money for non-existent basset hound puppies. \r\nOn Monday, the great and mighty search… [+2546 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "YouTube"
            },
            "author": null,
            "title": "Jim Cramer explains why big tech stocks aren't currently investable - CNBC Television",
            "description": "CNBC's Jim Cramer gave his take on why investors should avoid investing in big tech stocks for now in Monday's episode of \"Mad Money.\"",
            "url": "https://www.youtube.com/watch?v=0oZmnhm1B6o",
            "urlToImage": "https://i.ytimg.com/vi/0oZmnhm1B6o/hqdefault.jpg",
            "publishedAt": "2022-04-11T23:48:52Z",
            "content": null
            },
            {
            "source": {
            "id": null,
            "name": "CNBC"
            },
            "author": "Eustance Huang",
            "title": "China stocks bounce from Monday's losses as investors watch Covid situation, yen weakening - CNBC",
            "description": "Chinese markets recovered partially from Monday's heavy losses, swinging between positive and negative territory before closing higher on Tuesday.",
            "url": "https://www.cnbc.com/2022/04/12/asia-markets-covid-in-china-us-inflation-data-currencies-oil.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/106667340-1597722404535-gettyimages-1255905948-vcg111291355331.jpeg?v=1649748336&w=1920&h=1080",
            "publishedAt": "2022-04-11T23:38:55Z",
            "content": "SINGAPORE Shares in Asia-Pacific were mixed on Tuesday, as investors continued monitoring developments surrounding the Covid situation in mainland China as well as movements in the Japanese yen.\r\nU.S… [+4076 chars]"
            },
            {
            "source": {
            "id": null,
            "name": "The Points Guy"
            },
            "author": "Ben Mutzabaugh",
            "title": "Atlanta reclaims ‘world’s busiest’ title as US airports dominate new top 10 rankings - The Points Guy",
            "description": "Atlanta is officially the world’s busiest airport again, reclaiming the crown after a pandemic-related shakeup upended the rankings in 2020.",
            "url": "http://thepointsguy.com/news/atlanta-worlds-busiest-airport-2021/",
            "urlToImage": "https://thepointsguy.global.ssl.fastly.net/us/originals/2022/04/ATL-scaled.jpg",
            "publishedAt": "2022-04-11T23:29:38Z",
            "content": "Atlanta is officially the world’s busiest airport again, reclaiming the crown after a pandemic-related shakeup upended the rankings in 2020.\r\nHartsfield-Jackson Atlanta International Airport (ATL) cl… [+4921 chars]"
            },

        {
            "source": {
                "id": null,
                "name": "KOAT New Mexico"
            },
            "author": "Angel Salcedo",
            "title": "'The demand is huge': The recreational cannabis craze continues in New Mexico - KOAT New Mexico",
            "description": "New Mexico is seeing historic sales numbers as recreational marijuana is legalized and local dispensaries are enjoying every bit of it.",
            "url": "https://www.koat.com/article/recreational-cannabis-demand-new-mexico/39617625",
            "urlToImage": "https://kubrick.htvapps.com/vidthumb/1b7c38f7-6cf1-4341-8c3a-caf1228e5346/1b7c38f7-6cf1-4341-8c3a-caf1228e5346_image.jpg?crop=0.647xw:0.647xh;0,0.142xh&resize=1200:*",
            "publishedAt": "2022-04-03T01:55:00Z",
            "content": "Dispensaries in New Mexico have seen a jump in business since April 1, and it hasn't just been in recreational sales. Our state has also reported more than a million dollars in medical marijuana sale… [+1328 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "KTLA Los Angeles"
            },
            "author": "Associated Press",
            "title": "Missing hiker’s body found in Griffith Park with dog by his side - KTLA Los Angeles",
            "description": "A hiker who went missing two weeks ago was found dead in Griffith Park with his dog by his side, authorities said. Oscar Alejandro Hernandez, 29, was reported missing on March 16. His body was found Thursday night in a remote area of the sprawling urban park.…",
            "url": "https://ktla.com/news/local-news/missing-hikers-body-found-in-griffith-park-with-dog-by-his-side/",
            "urlToImage": "https://ktla.com/wp-content/uploads/sites/4/2022/04/GriffithPark.MissingHiker.jpg?w=1280",
            "publishedAt": "2022-04-03T01:28:54Z",
            "content": "A hiker who went missing two weeks ago was found dead in Griffith Park with his dog by his side, authorities said.\r\nOscar Alejandro Hernandez, 29, was reported missing on March 16. His body was found… [+596 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fox Business"
            },
            "author": "Kyle Morris",
            "title": "Energy groups target Biden administration over unwillingness to expand domestic oil production - Fox Business",
            "description": "Two prominent American energy groups are targeting the Biden administration over its dismissal of domestic oil and gas production, one with a five figure ad purchase and another whose president will offer testimony before the Senate next week.",
            "url": "https://www.foxbusiness.com/politics/energy-groups-target-biden-administration-over-unwillingness-to-expand-domestic-oil-production",
            "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2021/10/0/0/joe-biden-oil-field-1-AP-istock.jpg?ve=1&tl=1",
            "publishedAt": "2022-04-03T01:25:31Z",
            "content": "Two American energy groups are targeting the Biden administration over its dismissal of domestic oil and gas production, one with a five figure ad purchase and another whose president will offer test… [+4111 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Mail"
            },
            "author": "James Gordon",
            "title": "Southwest Airlines apologizes delays and cancellations of 2,000 flights blaming 'technology issues' - Daily Mail",
            "description": "Southwest Airlines flights were delayed and canceled throughout Saturday. The airline cited 'intermittent performance issues following routine overnight maintenance of some of its IT system.",
            "url": "https://www.dailymail.co.uk/news/article-10680257/Southwest-Airlines-apologizes-delays-cancellations-2-000-flights-blaming-technology-issues.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2022/04/03/01/56143921-0-image-a-2_1648947343876.jpg",
            "publishedAt": "2022-04-03T01:14:50Z",
            "content": "Flights with Southwest Airlines were subject to nearly 2,000 delays or cancellations throughout Saturday, with the company blaming it on a failure of its IT systems.\r\nAs of 9 p.m., FlightAware.com sh… [+5480 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Times of Israel"
            },
            "author": null,
            "title": "Vote for Orban or party with neo-Nazi record? Hungary’s Jews torn on Sunday election - The Times of Israel",
            "description": "Right-wing populist government is in tight race for power with alliance of opposition parties whose largest contingent comes from far-right Jobbik party",
            "url": "https://www.timesofisrael.com/vote-for-orban-or-party-with-neo-nazi-record-hungarys-jews-torn-on-sunday-election/",
            "urlToImage": "https://static.timesofisrael.com/www/uploads/2022/04/AP22091486688565-1024x640.jpg",
            "publishedAt": "2022-04-03T00:28:16Z",
            "content": "JTA Hungary is holding one of the most dramatic general elections in its history, so Peter Pretz has given some serious consideration to how hes going to vote on April 3.\r\nThe 64-year-old Jewish fath… [+8380 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Daily Mail"
            },
            "author": "Alesia Stanford",
            "title": "Rumer Willis continues to honor dad Bruce Willis by sharing sweet father-daughter snap - Daily Mail",
            "description": "Rumer Willis continued to honor her famous father, Bruce Willis, with a tender throwback post in the wake of the action star's heartbreaking aphasia diagnosis.",
            "url": "https://www.dailymail.co.uk/tvshowbiz/article-10680267/Rumer-Willis-continues-honor-dad-Bruce-Willis-sharing-sweet-father-daughter-snap.html",
            "urlToImage": "https://i.dailymail.co.uk/1s/2022/04/03/01/56143389-0-image-a-5_1648944666092.jpg",
            "publishedAt": "2022-04-03T00:27:43Z",
            "content": "Rumer Willis continued to honor her famous father, Bruce Willis, with a tender throwback post in the wake of the action star's heartbreaking aphasia diagnosis.\r\nThe latest family photo showed the Blo… [+3850 chars]"
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Liz Sly",
            "title": "Russia's Ukraine war shifts to the east - The Washington Post",
            "description": "The invasion is at an inflection point that few would have predicted.",
            "url": "https://www.washingtonpost.com/world/2022/04/02/russia-ukraine-east/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/4W4CC6FSYII6ZHN5BVDATVCMDQ.jpg&w=1440",
            "publishedAt": "2022-04-02T23:30:40Z",
            "content": "The move represents a new and substantially different phase of the war as Russia withdraws its troops from battered northern and western areas to focus eastward, where it has already wreaked massive … [+12075 chars]"
        },
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": null,
            "title": "Former Alaska Governor Sarah Palin announces run for Congress - CBS News",
            "description": "Alaska will hold a special election this summer to replace the House seat left vacant when Rep. Don Young died earlier this month.",
            "url": "https://www.cbsnews.com/news/sarah-palin-is-running-for-congress-former-alaska-governor/",
            "urlToImage": "https://cbsnews1.cbsistatic.com/hub/i/r/2021/04/01/a4618eff-640b-4d74-b05a-5032a525cb23/thumbnail/1200x630/92fa0b0b529d2c1460270af4d8eea095/ap21090861143154.jpg",
            "publishedAt": "2022-04-02T23:12:00Z",
            "content": "Sarah Palin, the former governor of Alaska and vice presidential candidate under Senator John McCain, is running for Congress, shaking up an already unpredictable race for Alaska's lone U.S. House se… [+2943 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "New York Post"
            },
            "author": "The Sun",
            "title": "'Convoy' singer C.W. McCall dead at 93 after cancer battle, son says - New York Post ",
            "description": "Country singer C.W. McCall, known for his 1976 truck driver smash hit “Convoy,” has died at the age of 93.",
            "url": "https://nypost.com/2022/04/02/convoy-singer-c-w-mccall-dead-at-93-after-cancer-battle-son-says/",
            "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2022/04/CWMcCall.jpg?quality=75&strip=all&w=1024",
            "publishedAt": "2022-04-02T22:56:00Z",
            "content": "“Convoy” singer C.W. McCall has died at 93.\r\nHe had been battling cancer and was in hospital care in his Colorado home when he died on Friday, April 1.\r\nThe death has been confirmed by his son, Bill … [+1437 chars]"
        }
         
       ]

    constructor(props) {
        super(props)

        this.state = {
            articles:this.articles,
            loading: true,
            page: 1,
            totalResults:0

        }

        document.title = `${this.capitalizeFirstLetter(this.props.category)} - RNews`;
    }

    render() {
        return (
            <>
          <h1 className="text-center" style={{ margin: '10px , 0px' }}>RNews - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                

               <div className="container">

                    <div className="row">
                        {this.state.articles.map((element) => {

                            return <div className="col-md-4" key={element.url}>
                                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>

                        })}
                </div>
                </div>

            </>
        )
    }
}
