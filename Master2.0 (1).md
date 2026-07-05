## YONO ADOPTION COPILOT 

## The Definitive Master Report - SBI Hackathon @ Global Fintech Fest 2026 

Problem Statement 2: Digital Adoption - Theme: Agentic AI & Emerging Tech 

Single source of truth. This document is the only file the team needs to open from now until the hackathon ends. It absorbs and supersedes the three deep ~~-r~~ esearch reports (Claude, GPT, Gemini), the comparative analysis, and the official SBI documents. Founders, AI coding agents, UI/UX designers, backend/frontend/ML engineers, pitch ~~-~~ deck writers, demo creators, and README/Vvideo- ~~s~~ cript generators should all derive their work from here. 

Classification: Team- ~~i~~ nternal - Status: v2.0 ~~-~~ enterprise ~~-~~ architecture hardening of the locked v1.0 baseline - Date: 27 June 2026 The winning narrative in one line: "We don't acquire more users. We wake up the 9 crore you already have." 

What changed in v2.0 (and what deliberately did not). The thesis is unchanged and non ~~-n~~ egotiable: SBI does not have an acquisition problem; it has an activation problem. v2.0 does not add features, pivot the product, or soften the business case. It hardens the architecture underneath the same product so the solution reads less like "an AI chatbot" and more like what it actually is ~~-~~ an Adaptive Financial Intelligence Operating System: an always ~~-~~ on intelligence layer that understands behaviour, removes friction, personalises the interface, explains every decision, and is held to account by an explicit policy layer, while remaining fully auditable, explainable, regulator ~~-s~~ afe, and deployable inside SBI's enterprise estate. Concretely, v2.0 makes explicit five things v1.0 implied but never specified: (1) a governed retrieval layer so every recommendation is grounded in retrieved enterprise knowledge before any language model is involved; (2) a banking AI safety architecture that contains hallucination by construction; (3) a Policy & Compliance Engine as a firs ~~t-~~ class governance component; (4) a Session Intelligence Engine and an Adaptive Experience Engine that turn behaviour into personalised interfaces without retaining raw conversation logs; and (5) an enterprise observability plane that monitors the AI itself, not only the user. Every addition exists to move one number: activation. 

## 0. How To Use This Document 

This report is organized in eight parts. Read Part I before anything else ~~-~~ it contains the single insight the entire solution is built on. Engineers can jump to Parts V ~~-V~~ ]; pitch writers to Parts I, IV, and VII. 

Part 

Contents 

Primary 

audience 

|~~I- ~~Strategy&|Therevers~~e-~~engineeredproblem,hiddenKPIs,whythis|Therevers~~e-~~engineeredproblem,hiddenKPIs,whythis|Founders,pitch|
|---|---|---|---|
|BusinessCase|hackathonexists,judgepsychology||writers|
|I~~I-I~~ntelligence|SBIdeep~~-d~~ive,Indiancompetitivegapanalysis,global|globalbest|Strategy,pitch|
||practices,marketsizing|||
|III ~~-~~Research|Behavioural science,regulatory/legal, open~~-s~~ource,patents,||Everyone|
|Foundations|researchpapers||(defensibility)|
|IV~~- ~~The|Vision,philosophy,fullfeature list, alluserjourneys, the||Product, design,|
|Product|coreengines (incl. SessionIntelligence,Adaptive||pitch|
||Experience),persona-~~f~~irst personalization, dynamic|||
||interfaces|||
|V~~-Ar~~chitecture|Four~~-l~~ayerstack,ontology,knowledgegraph,agents,the||Engineers|
|&Engineering|governedreasoningspine (retrieva~~l~~-grounding -policy|||
||engine- hallucinationcontainment),datamodel,APIs,|||
||security, observability,governance|||
|V~~I-~~MVP&48~~-~~ _|Exactbuildscope,repolayout,what'smockedvsreal,demo||Engineers,|
|HourExecution|buildplan||demoteam|
|VII ~~- ~~Pitch,|Demo script, slide order, likelyjudgequestions + ideal||Pitch,founders|
|Judges&Risk|answers,riskregister|||
|VII ~~-~~|Sources,glossary, ideascorecards,KPIdictionary||Reference|
|Appendices||||



## Naming convention used throughout: 

- e Product (customer- ~~f~~ acing): YONO Adoption Copilot e Platform (internal/enterprise): Digital Adoption Intelligence Engine (DAIE) e« Architectural sel ~~f-~~ description (what the platform is): Adaptive Financial Intelligence Operating System (AFIOS) ~~-~~ an intelligence layer that understands behaviour, removes friction, personalises interfaces, explains decisions, and is governed by an explicit policy layer. This is the v2.0 framing; it replaces, on stage and in design reviews, any description that reduces the system to a conversational interface. 

- e The moat: Ontology of the Customer's Financial Life 

- ¢ Thenorth ~~-s~~ tar metric: Digital Confidence Score (DCS) > driving activation rate and products-per-customer 

- e Pitch ~~-~~ stage al ~~t~~ -name (if "engine" feels generic): Autonomous Digital Adoption Operating System 

Words we never say on stage: "chatbot," "virtual assistant," "AI assistant," "finance coach bot," "GPT/Claude/Gemini wrapper." We say: decision-intelligence layer, ontology, governed retrieval, next-best-action, policy engine, activation, products-per-customer, explainability, consent-native. 

## PART ~~I-~~ STRATEGY & BUSINESS CASE 

## 1. Executive Summary 

Bottom line. Compete on Problem Statement 2 (Digital Adoption) and build the YONO Adoption Copilot ~~-~~ an agentic, explainable, human- ~~i~~ n ~~-t~~ he ~~-l~~ oop intelligence layer that sits inside the existing YONO ecosystem. Its single job is to wake up SBI's dormant registered users and lift products ~~-~~ per ~~-~~ customer, not to acquire new ones. It is grounded ona Palantir ~~-~~ style Ontology of the Customer's Financial Life, scored by a proprietary Digital Confidence Score, and built from day one to survive an SBI enterprise design review ~~-~~ consent ~~-n~~ ative, auditable, and on the correct side of every regulatory line (DPDP, RBI, SEBI, IRDAI). 

The decisive insight that drives everything. SBI does not have an acquisition problem; it has an activation and depth problem. SBI reports 8.77 crore registered YONO customers and 98.20% of transactions on alternate (digital) channels as of FY2025 ~~-~~ but it reports registered users, not monthly ~~-a~~ ctive users, and has not published a current MAU figure. That silence is the tell. The bank already gets customers onto the app and already moves transactions off the branch counter; what it cannot yet do at scale is convert a balance ~~-~~ checking, UPI ~~-~~ only registered user into someone who holds a mutual ~~-~~ fund SIP, a term ~~-~~ insurance policy, and a pre ~~-~~ approved loan. That is where the money is, and that is what PS2 is really asking for. 

Why PS2 wins. (a) It maps directly to Chairman C.S. Setty's publicly stated KPI of growing YONO from ~10 crore to 20 crore active users in two years and deepening relationships; (b) it is the most defensible against the "hackathon toy" critique because adoption is demonstrable with a measurable funnel; (c) PS1 (Acquisition) and PS3 (Engagement) will be the crowded lanes where most teams cluster around "another onboarding chatbot" or "another spend ~~-a~~ nalysis widget." PS2 lets us absorb the best of both ~~-~~ conversational onboarding (PS1) and behavioural engagement (PS3) ~~-~~ under a single deployable architecture while standing on the cleaner business case. 

What we build (synthesis ofthree research lineages). 

- e Business narrative (from the strategy lineage): activation, not acquisition; products ~~-~~ per ~~-~~ customer as the north star. 

- ¢ Core intelligence (from the technical lineage): Digital Confidence Score, intent/signal detection, ontology + knowledge graph, adaptive UI interventions ~~-~~ instead of a chatbot. 

- e Customer experience (from the consulting lineage): behavioural science (Fogg, Kahneman, Thaler, Hook Model), progressive guidance, gamified financial wellness, and education ~~-~~ so users adopt features rather than being sold to. 

- e« Executive value: a Palantir ~~-~~ style Adoption Barrier Twin dashboard that shows why users abandon features and how adoption is improving ~~-~~ measurable business intelligence, not just another Al interface. 

Why this survives a design review (the v2.0 spine). The reason an SBI CDO can actually deploy this is that the language model is never the thing making the decision. Every recommendation is produced by a governed reasoning spine: consented behaviour is interpreted, validated against an explicit Policy & Compliance Engine (RBI, DPDP, SEBI, IRDAL, internal eligibility, consent), grounded in retrieved enterprise knowledge (product catalogue, KFS, regulations, eligibility rules) before any generation occurs, resolved into a recommendation by deterministic business logic over the ontology, and only then handed to the LLM ~~-~~ whose sole job is to explain a validated recommendation in plain language, never to invent one. The model sits at the end of the pipeline, not the start. That single architectural choice is what converts "a clever demo" into "a regulator ~~-~~ safe intelligence layer," and it is what the rest of this report specifies. 

This combination gives the team something most competitors will not have: a CEO- ~~l~~ evel business story, a CTO- ~~l~~ evel enterprise architecture, a product ~~-d~~ esigner's UX, and a judge ~~-~~ friendly demo that ends on a business KPI moving, not on an AI conversation. 

## 2. Reverse Engineering The Problem Statement (PS2 - Digital Adoption) 

The official wording: "Build contextual and adaptive AI experiences that encourage adoption ofdigital banking services including payments, investments, insurance, and mobile banking." (Theme: Agentic AI & Emerging Tech.) 

Why did SBI write this? Because the easy wins are exhausted. SBI has already digitised transactions (98.20% on alternate channels, FY2025) and already opens roughly 70,000 accounts a day with a target of 90% via the app. The next frontier ~~-~~ the one that moves the P&L ~~-~~ is getting existing digital customers to adopt more digital products along the value ladder: payments > investments > insurance > credit. This is a depth and frequency problem, not a top ~~-~~ of ~~-~~ funnel problem. The exact phrasing ("payments, investments, 

insurance, and mobile banking") is a near ~~-~~ verbatim description of cross ~~-s~~ ell and feature activation. 

Decoding the sub ~~-t~~ ext word by word: 

- e "contextual and adaptive" > not static menus; the interface and the offer must change per user, per moment. This rules out a generic chatbot and rules in intent detection + adaptive UI. 

- e "Al experiences" ~> not "an AI feature." The judges want an experience ~~-~~ a journey ~~-~~ wrapped around AI, with measurable outcomes. 

- e "encourage adoption" > behaviour change, i.e. behavioural science, not pushing offers. 

- e "including payments, investments, insurance, mobile banking" > the four captive cross ~~-s~~ ell verticals (SBI = SBI Funds, SBI Life, SBI General, SBI Card) ~~-~~ the fee ~~-~~ income engine. 

## 3. The Hidden Business Problem SBI Is Actually Solving 

The visible ask is "drive digital adoption." The invisible ask is: "Stop paying to host dormant registered users who generate near ~~-~~ zero incremental revenue, and convert them into multi ~~-~~ product relationships using captive subsidiaries ~~-~~ without breaching trust or regulation." 

Every registered ~~-~~ but ~~-~~ inactive user is paid ~~-f~~ or infrastructure generating near ~~-~~ zero incremental revenue: they completed Re ~~-~~ K YC, made one UPI payment, and never bought a product. SBI's December 2024 nationwide dormant ~~-a~~ ccount reactivation campaign confirms this is a live, board ~~-l~~ evel concern ~~-~~ not a hypothesis. The expensive problem is not customer ~~-a~~ cquisition cost (SBI has 52 crore customers and the cheapest acquisition in India via its branch and government ~~-s~~ alary footprint); the expensive problem is dormant digital users and shallow relationships. 

## 4. Internal KPIs SBI Wants To Move 

In priority order, based on the evidence: 

|#|KPI|Whyitmatters|Currentevidence|
|---|---|---|---|
|1|DigitalMAU/DAU<br>&theregistered~~-~~<br>vs~~-~~activegap|Theunspokenheadline metric. SBI<br>publishes registeredusers (8.77cr) but<br>notMAU; Setty's "10cr>20 cr"target is<br>aboutactiverelationships.|2021figureof54MMAU is<br>dated;nocurrentMAU<br>disclosed.Thegap isthe<br>opportunity.|
|2|Products~~-p~~er~~-~~<br>customer /cross~~-~~<br>sellratio|Therevenue lever. SBI Life,SBI Funds,<br>SBICards,SBI Generalare allcaptive<br>distribution.|Cross~~-s~~ellfeeincome (~*100<br>cr/quarterfromYONO<br>historically).|
|3|Cos~~t-~~t~~o-~~serve /<br>cos~~t-~~t~~o-~~income|Digitaldepth pushes itlower;branch<br>servicingofdigita~~l-~~capableusersispure<br>cost.|Improvedto51.64%in<br>FY2025 (from55.66%<br>FY2024).|
|4|Digitallending<br>share|High~~-m~~argin, scalable, board-~~v~~isible.|Cumulative digitallending<br>crossed¥2lakhcrore (press~~-~~<br>sourced,YONO 2.0<br>coverage).|



Design implication: the product must report against these four numbers. The executive dashboard's headline tiles are activation rate, products ~~-p~~ er ~~-~~ customer, cos ~~t-~~ t ~~o-~~ income contribution, and digita ~~l-~~ lending throughput ~~-~~ SBI's own scorecard mirrored back to the judges. 

## 5. Why This Hackathon Exists 

SBI is mid- ~~f~~ light on YONO 2.0, a full re ~~-~~ platform (with TCS) positioned by the Chairman as a "digital operating system" aligned to Vision 2030 and capable of handling 200 million customers. A re ~~-~~ platform creates a once ~~-i~~ n ~~-a-~~ decade window to embed new intelligence layers before the architecture sets. SBI runs the hackathon at GFF 2026 to (a) source externally ~~-b~~ uilt, deployable intelligence modules that plug into YONO 2.0, (b) scout startups/talent for pilot and collaboration (10 collaboration slots are an explicit prize), and (c) de ~~-r~~ isk its own roadmap by watching which adoption mechanics resonate. The IP stays with teams; SBI explicitly reserves deployment/commercialisation collaboration. Translation: judges are scouting for things they can actually pilot ~~-~~ deployability beats novelty. 

## 6. What Judges Will Actually Look For 

Synthesising the official rubric (original, IP ~~-~~ clean, practical, scalable, rea ~~l-~~ world banking fit, Al/emerging ~~-t~~ ech use, regulatory alignment, on ~~-t~~ ime): 

1. Areal KPI on the first slide (activation %, products ~~-~~ per ~~-~~ customer) ~~-~~ not vanity engagement metrics. 

2. Architecture that "screams enterprise deployment" ~~-~~ not a Streamlit demo bolted to GPT ~~-4~~ . 

3. Respect for trust ~~-~~ the one asset SBI has that fintechs don't. 

4. Evidence the team understands SBI's actual numbers ~~-~~ not generic "AI in banking" platitudes. 

5. Regulatory fluency ~~-~~ DPDP, RBI FREE- ~~A~~ I, SEBI RIA, IRDAI surfaced proactively. 

6. Afunnel that proves the claim ~~-~~ dormant > active, with a number going up. 

## 7. Judge Psychology (Brutal Design Review) 

Reasoning through the lenses of an enterprise ~~-~~ software founder, an SBI CDO, an AI researcher, a regulator, and a YC partner: 

- e Why might we lose? If we look like "GPT + banking FAQ." Mitigation: lead with the ontology and the activation dashboard, never the chat. 

- e What's too generic (avoid): "AI chatbot for onboarding," "spend analyser," "fraud detector." Most teams will build these. 

- e What every other team builds (so we don't): conversational onboarding (PS1) and spend ~~-c~~ ategorisation widgets (PS3). We absorb these under PS2's deployable engine instead of competing head ~~-o~~ n. 

- e What we must never build: autonomous money movement; personalised securities advice without an RIA licence; anything touching contacts/SMS/gallery (RBI breach); dark ~~-~~ pattern nudges. 

- e The ONE insight that wins: SBI's metric is activation, not acquisition - and we are the only team optimising the registered-vs-active gap with an auditable, regulator-safe engine. 

- e Architecture that screams "enterprise": ontology + LangGraph + RAG guardrails + audit log + Account ~~-A~~ ggregator consent. Architecture that screams "toy": single LLM call, no data model, no governance. 

- ¢ KPIs to optimise on stage: activation rate, products ~~-~~ per ~~-~~ customer, cos ~~t-~~ t ~~o-~~ income ~~-~~ SBI's real dashboard. 

- e Narrative that survives 50 pitches: "We wake up your 9 crore sleeping users." 

## 8. Business Opportunity & Unit Economics 

The opportunity is the spread between registered and active-multi-product users. Illustrative uni ~~t-~~ economics logic for the pitch (figures are directional, to be shown as a sensitivity, not a claim): 

- e Ifevenalow- ~~si~~ ngle- ~~d~~ igit percentage of the registered base adopts one additional fee product (SIP, term cover, FD, card), the captive ~~-~~ subsidiary fee pool compounds ~~-~~ because distribution is owned (SBI Funds 15.91% AUM share; SBI Life NBP =35,577 cr; SBI General GWP 314,140 cr; SBI Cards PAT 71,916 cr). 

- e Each digitall ~~y~~ -completed action also avoids a branch ~~-s~~ ervicing cost, contributing to the cos ~~t-~~ t ~~o-~~ income line (51.64% > lower). 

- e The flywheel: more confident user - adopts next product - deeper relationship - higher retention - lower cost-to-serve - funds further personalisation. (Nubank proves the endpoint: users with 4+ products show >90% retention.) 

Framing for judges: we are not asking SBI to spend on acquisition; we are asking SBI to monetise infrastructure it already pays for. That is the highes ~~t-~~ ROI sentence in the pitch. 

## PART IT ~~-~~ INTELLIGENCE 

## 9. SBI Deep Intelligence Report 

The platform estate. YONO (flagship), YONO Lite, YONO Business, YONO Global, SBI Internet Banking (~14 crore registered RINB users per Setty), WhatsApp Banking (7.2 million registered users, six languages), SBI Rewardz / YONO Coins, and the SBI Card ecosystem. YONO 2.0 is a full re ~~-~~ platform ("Yono Net Banking" unifies mobile and internet banking), positioned by Setty as a "digital operating system" aligned to Vision 2030, capable of handling 200 million customers. 

## Hard numbers (FY2025 SBI Integrated Annual Report unless noted): 

Metric 

Value 

Source note 

**==> picture [482 x 504] intentionally omitted <==**

**----- Start of picture text -----**<br>
|||||||||
|---|---|---|---|---|---|---|---|
|Registered YONO customers|8.77 crore|App rating|4.2; 164 feature|
|enhancements|in FY2025|
|Transactions|via alternate|98.20%|Chairman's message|
|channels|
|New savings accounts opened|63%|(Q1FY25)|Flywire press release citing SBI, 22|
|via YONO|Jan 2025|
|Pre|-|approved personalloans|1,399 crore|(Qi FY25)|Flywire|
|via YONO|
|Cumulative|digital lending|> 2 lakh crore|Pres|s-|sourced (YONO 2.0 coverage)|
|Customer|base|52 crore|_-|
|Branches|/ ATMs+ADWMs|22,937|| 63,791|_-|
|Cost|-|t|o-|income|51.64%|(FY2025, from|-|
|55.66% FY2024)|
|Net profit|%70,901 crore|_-|
|SBI Life New Business|%35,577 cr (20.8% private|||Captive cross|-s|ell|
|Premium|share)|
|SBI Funds AUM|10.73 lakh cr|(15.91%|Captive|cross|-s|ell|
|share)|
|SBI General GWP|%14,140|cr|Captive|cross|-s|ell|
|SBI Cards PAT|1,916 cr|Captive|cross|-s|ell|

**----- End of picture text -----**<br>


SBI's stated AI direction ~~-~~ the most important strategic signal in this entire report. Setty's FY2025 letter names Generative AI, Predictive AI/ML and LLMs as deployment priorities and frames the goal as moving "toward an anticipatory customer service approach rather than merely pushing generic offers." SBI is rolling out a unified martech platform across SMS/WhatsApp/email and uses CSAT/NPS/CES feedback loops. Our product should be the literal embodiment of that sentence. When we say on stage "you told the market you want anticipatory engagement; here it is, deployable," we are not pitching against SBI's strategy ~~-~~ we are executing it. 

## What SBI is NOT solving (our white space): 

1. The activation gap. No published mechanism converts dormant registered users into active product ~~-h~~ olders. SBI reports registered users precisely because MAU is the soft underbelly; the 2021 figure of 54M MAU is dated and no current MAU has been disclosed. 

2. Proactive, lif ~~e~~ -even ~~t-~~ driven engagement. SBI's tooling is still campaign/segment ~~-~~ based, not event ~~-~~ driven and per ~~-~~ customer. 

3. Explainable i ~~n-~~ app advisory. No "why am I seeing this" reasoning layer; offers feel like ads. 

4. Reliability as an adoption blocker (see §13) ~~-~~ a critical, underrated drag on adoption. 

## 10. Indian Banking Competitive Landscape - Gap Analysis 

**==> picture [486 x 445] intentionally omitted <==**

**----- Start of picture text -----**<br>
|||||||||||
|---|---|---|---|---|---|---|---|---|---|
|Bank|Alassistant|/ adoption tooling|Posture|Gap vs. our concept|
|HDFC|EVA chatbot|(Senseforth AI Research)|-|Reactive|No proactive adoption|
|"5M-+|queries from ~1M customers, 85%+|FAQ|+|engine; cumulative|
|accuracy," 20,000+ conversations/day; AI|service|not rea|l-|time|
|fraud models on 50+|variables|
|ICICI|iMobile Pay|(4.6*, 50M+ downloads),|iPal|Feature|-|No ontology, no|
|on Alexa/Google/WhatsApp, ML offers|rich,|explainability layer|
|reactive|
|Axis|AHA! virtual assistant, mult|i-|language;can|Reactive|Same|-|product|-|
|execute some transactions|support|centric|
|personalisation, not|
|friction|removal|
|Kotak|Kotak 811|(250+|features), Keya chatbot,|Feature|No agentic|next|-b|est|-|
|spend|-|based nudges|breadth|action, no AA-|n|ative|
|coach|
|Yes|YES ROBOT|(25+ services)|Reactive|Same|
|IDFC First/|Standard mobile banking + chatbots;PSBs|Catch|-|up|Wide white space|
|Federal|/ AU|foundational|
|SFB|/ BoB|/|
|PNB/ Canara|
|/ Bol|

**----- End of picture text -----**<br>


Verdict. Every major Indian bank has a reactive chatbot. None has a proactive, explainable, ontolog ~~y-~~ grounded agentic adoption copilot driven by Account ~~-A~~ ggregator data. This is the white space, and it is wide. The homogenisation is itself the opportunity: when every competitor deploys LLMs as reactive support, the differentiated move is to deploy Alas a proactive agent of behavioural change with an executive intelligence layer behind it. 

## 11. Global Best Practices - Feature Adoption (Not Acquisition) 

These are the proof points that de ~~-r~~ isk the pitch and show judges the model works at scale. 

- e DBS Bank (Singapore) ~~-~~ the gold standard for nudge ~~-d~~ riven adoption. DBS Annual Report 2024: over 1,500 models across 370+ use cases, delivering more than 1.2 billion personalised nudges to over 13 million customers, generating over SGD 750 million of economic value in 2024 (more than double the prior year). Most important for our thesis: DBS reports that customers who engaged with its nudges/NAV Planner "saved 2x more, invested 5x more, and were nearly 3x more insured than non ~~-u~~ sers." That single sentence is our business case, pre-proven. 

- e Bank ofAmerica ~~-~~ Erica (proactive virtual assistant). ~50 million users, 3 billion+ interactions, now 58M+ interactions/month, 1.7 billion proactive personalised insights; The Financial Brand (Dec 2025): 60% of Erica interactions are now proactive and Erica "solves 98% of inquiries without further human interaction." Life Plan: 21.5M plans; engaged clients grew assets by $211B. Lesson: proactivity is the value driver - start reactive, earn trust, then anticipate. 

- e Nubank ~~-~~ cross ~~-s~~ ell depth as a retention moat. Nu Holdings Q4'25: ARPAC reached $15 (up from $11.1 a year earlier), monthly activity rate 83%, cost ~~-~~ t ~~o-~~ serve held at ~$0.8 per active customer per month; users with 4+ products show >90% retention. Lesson: depth (products-per-customer) is what compounds - exactly SBI's gap. 

- e Neobank onboarding & habit design (consulting lineage): Revolut treats onboarding as a lifestyle narrative (16M users added in 2025; 63% of new sign ~~-~~ ups via word ~~-o~~ f ~~-~~ mouth; RevPoints 17M; Vaults); Monzo grows via transparency, passwordless auth, and empathetic microcopy; Nubank uses progressive data disclosure (350k users in 16 months via referrals; ~90% organic referral growth); Kakao Bank reached >13M users in 3 years by piggybacking KakaoTalk's ~90% messaging share; WeBank embeds banking in WeChat/QQ; Starling uses "Spaces" and Bill Manager; Wise drives adoption through everyday multi ~~-~~ currency utility. 

- ¢ UPI gamification (India ~~-~~ native proof): product ~~-l~~ ed gamification ~~-~~ streak bonuses, surprise scratchcards, social triggers (group payments, referrals), and los ~~s-~~ aversion (expiring rewards) ~~-~~ is what made UPI a daily habit. CRED uses the Hook Model (trigger > action > variable reward > investment); SaveSage uses los ~~s-~~ aversion on under ~~-~~ used card rewards. 

Extracted, reusable mechanisms (the playbook): 

1. Tie every nudge to a rea ~~l-~~ time transaction or lif ~~e-~~ event signal (salary credit, large outflow, recurring bill, festival). 

2. Frame adoption as financial wellness, not selling ("you could be earning 6% on this idle 40,000"). 

3. Use anext ~~-b~~ est ~~-a~~ ction engine that ranks across service/ alert / offer / education, not a marketing blast. 

4. Start reactive, evolve to proactive once trust is established (Bank ofAmerica's explicit playbook). 

5. Measure adoption against financia ~~l-~~ behaviour outcomes (save more / invest more / insure more), not clic ~~k-~~ through. 

## 12. Market Intelligence & White-Space Map 

The macro picture: Indian banking has entered an "AI execution decade." The sector is converging on (a) reactive conversational support, (b) backend fraud/risk ML, and (c) campaign ~~-~~ based personalisation. The unoccupied quadrant is proactive + explainable + ontology-grounded + consent-native + adoption-measured. That quadrant is our home. 

## White ~~-~~ space opportunities (ranked): 

1. Dormant- ~~t~~ o ~~-A~~ ctive reactivation ~~-~~ the single largest untapped value pool; nobody targets the registered ~~-~~ but ~~-~~ inactive cohort with a measurable funnel. 

2. Lif ~~e-~~ event ~~-~~ driven proactive engagement ~~-~~ event ~~-t~~ riggered, per ~~-~~ customer, not segment campaigns. 

3. Explainable i ~~n-~~ app advisory ("why this?") ~~-~~ a trust differentiator no Indian bank has. 

4. Vernacular agentic onboarding for the next 100 million ~~-~~ si ~~x-~~ language WhatsApp + voice for Tier ~~-2~~ /3. 

## PART ITI ~~-~~ RESEARCH FOUNDATIONS 

## 13. User & Behavioural Research (Why Adoption Actually Fails) 

The adoption funnel is leaking everywhere. Per Cornerstone Advisors' 2026 Digital Banking Performance Metrics report (commissioned by Alkami), financial institutions lost an average of 3.36 digital checking ~~-~~ account applications for every one successfully completed in 2025 (~8,904 missed accounts per institution). Industry ~~-~~ wide, feature utilisation runs below 30% for anything beyond basic transactions ~~-~~ meaning the average banking app has a feature it built that 70%+ of users never touch. This is the quantified version of SBI's activation gap. 

YONO rea ~~l-~~ world pain clusters (mined from Google Play, MouthShut [1.72/5 across 663 votes], PissedConsumer, JustUseApp, and a formal Ministry grievance DEABD/E/2025/0071605), ranked by frequency: 

1. Reliability / server errors ("Something went wrong," "transaction failed more frequent than successful"). This is the #1 adoption killer - no amount of AI nudging works if the app fails on tap. 

2. Login / OTP / SIM ~~-b~~ inding friction (OTP non ~~-d~~ elivery, NRI failures). 

3. Re ~~-a~~ uthentication fatigue (repeated OTP/MPIN within a session, password resets every few months). 

4. Discoverability (rich features buried; users don't know investments/insurance exist in ~~-~~ app). 

Strategic consequence: our copilot must also reduce faile ~~d-~~ journey friction, and we must acknowledge reliability in the pitch rather than pretend nudging alone fixes adoption. The "Adoption Barrier Twin" (§24, §25.2) is what surfaces these systemic blockers to SBI as actionable intelligence ~~-~~ turning a weakness into our most enterprise ~~-~~ credible feature. 

Friction taxonomy (for the Adoption Barrier ontology): 

Friction 

Observed user pain 

Adoption implication 

category 

|Reliability||Server/timeouterrorsoncoreactions|Highest~~-s~~everity;erodes|
|---|---|---|---|
||||trust in allfeatures|
|Identity||VKYCtimeouts,droppedsessions,noexecutive|Usersreverttobranch>|
|verification||available|operationalcost|
|Security||LockoutwhenAndroidDeveloperOptions /mock~~-~~|Immediateuninstall,|
|overreach||locationenabled;non~~-t~~echnicaluserscan'tself~~-~~|negativereviews|
|||diagnose||
|Cross~~-~~border||NRIloginloops, registration failures,unclearintl~~-~~|Alienateshigh~~-~~net~~-~~worth|
|||numbersupport|demographic|
|Cognitive||ParadoxofchoiceonMF/insuranceselection;low|Complexproducts|
|overload||financial literacy>decisionparalysis|deferredindefinitely|
|Discoverability|||High~~-v~~aluefeaturesburiedinmenus|Cross~~-s~~ellpoolnever|
||||surfaces|



## 14. Behavioural Science > Product Features (Every Concept Made Concrete) 

We do not cite behavioural science to sound clever; each principle maps to a specific, shippable mechanic. Why it works is stated so engineers and designers preserve the mechanism, not just the label. 

**==> picture [484 x 732] intentionally omitted <==**

**----- Start of picture text -----**<br>
||||||||||
|---|---|---|---|---|---|---|---|---|
|Principle|Source|Why it works|Concrete feature|
|Fogg Behaviour Model(B=|__BJ Fogg|Behaviour|fires only|A nudge must arrive when|
|MAP)|when Motivation|x|ability|is highest|(right|
|Ability|x Prompt|after salary credit)|and|
|converge|reduce the task to one tap.|
|Every nudge|is mapped to|
|a Fogg trigger.|
|SystemivsSystem2/loss|Kahneman|Humansdefaulttofast,|Frameidle balances asa|
|aversion|intuitive|(System|1);|loss|("you're losing ~=X/yr|
|banking forces slow,|in|interest"), not a gain|-|
|deliberate|(System 2)>|measurably more|
|fatigue,abandonment.|motivating. Dothe math|
|Losses loom|larger|for the user to keep them|
|than equivalent gains.|inSystem1.|
|Nudge/|choice architecture|Thaler&|Defaults and salient,|Default|-|on,|white-hat opt|-|
|/ defaults|Sunstein|comparable options|lift|ins for round|-|up savings|
|participation|without|and SIP that pass the|
|coercion|(SMaRT auto|-|"reflection|test"|(the user|
|enrolment evidence).|would endorse|it on|
|reflection)|-|never a dark|
|pattern. Present only the|
|next-best action, not the|
|whole|menu.|
|Hook Model|Nir Eyal|Variable rewards drive|Progress bars for KYC/SIP|
|(trigger>action>variable|habit loops and|setup; milestone|
|reward|investment)|dopamine response|celebrations; tasteful|
|("reward of the|hunt").|variable rewards for|
|completing adoption|
|behaviours|(never for|
|spending).|
|Friction|/ cognitive load|Don|Clutterandredundant|Remove redundant|re|-|
|Norman &|steps|kill completion.|auth; highlight one or two|
|Jakob|recommended actions;|
|Nielsen|break tasks into|steps.|
|Social proof / descriptive|Cialdini,|People follow peers like|"Most customers|like you|
|norms|Sutherland|them.|complete this in 2|
|minutes"|/ "peers in your|

**----- End of picture text -----**<br>


Principle 

Source 

Why it works 

Concrete feature 

**==> picture [485 x 129] intentionally omitted <==**

**----- Start of picture text -----**<br>
||||||
|---|---|---|---|---|
|income bracket|are|
|starting|SIPs"|(aggregated,|
|privacy|-s|afe).|
|Perception reframe|Rory|The framing of|value|Reframe "buy insurance"|
|Sutherland|changes the decision|as|"protect your family for|
|more than the value|the price|of a chai a day."|
|itself.|

**----- End of picture text -----**<br>


Guardrail: every nudge must pass the reflection test and be logged for audit. The difference between a nudge and a dark pattern is whether the user would thank you on reflection ~~-~~ and we encode that as a review gate, not a slogan. 

## 15. Regulatory & Legal Assessment (India-Specific) 

This is where most hackathon ideas die in an enterprise design review. Ours is built to survive it. Saying this out loud on stage separates us from every team that ignores it. 

Regime What it demands 

How our design complies 

**==> picture [486 x 607] intentionally omitted <==**

**----- Start of picture text -----**<br>
||||||||||
|---|---|---|---|---|---|---|---|---|
|DPDP Act|Explicit, purpose|-l|imited consent|Consent|-n|ative ontology; per|-|purpose|
|2023|(Section 5); data minimisation;|consent|artifacts; telemetry|
|right to erasure; breach|agegregated/pseudonymised|and processed in|
|notification;|penalties up to %250|volatile memory|-|only the barrier|
|crore|classification code|is persisted, never raw|
|keystrokes/dwell times; full audit|trail|
|RBI Digital|Regulated Entity|(SBI)|is 100%|Any credit nudge routes through|SBI's RE|-|
|Lending|accountable;|data localisation;|controlled|lending engine; KFS|surfaced|
|Directions|mandatory Key Fact Statement|before action; firs|t-|party telemetry only|
|2025/2026|(KFS); no access to contacts|/|
|SMS/|gallery|
|RBIFREE|-A|I|"Understandable by Design"(no|§Knowledge|-|graph reasoning path|is the|
|Framework|opaque blac|k-|box routing of|explanation;|Palantir|-|style|governed action|
|(Aug 2025),7|financial decisions);|layer keeps humans in the loop|
|Sutras|"Accountability"|(institution|
|liable|for agent actions)|
|SEBI RIA|Hard line between investment|The copilot educates and distributes|("you|
|rules|-|the|advice|(requires RIA licence)|and|can invest|in SBI mutual funds; here are|
|critical|distribution/education|options suited to goals you|set")|and never|
|boundary|issues personalised buy/sell advice on|
|specific|securities. Goal|-|based suitability +|
|execution, not advice|
|IRDAI|Insurance recommendations as|Framed as distribution; suitability|
|distribution;|documented, non|-|documented; non|-d|iscriminatory by design|
|discriminatory|
|Account|Consented data only; AAis"data|-|AA integration|for consented cross|-|
|Aggregator|/|blind"|institution|data; graceful PDF fallback|
|DEPA|
|ITAct/CERT|-|Secure coding, logging,|Full audit logging of every recommendation,|
|In|monitoring|its inputs, and its reasoning|

**----- End of picture text -----**<br>


The concrete legal risk to call out in the pitch (shows maturity): nudging toward investments/insurance is the regulatory tightrope. We walk it with (a) education/distribution framing, (b) human- ~~i~~ n ~~-t~~ he ~~-l~~ oop for financial actions, (c) full auditability, and (d) AA ~~-b~~ ased consent. The RBI Ombudsman Report 2024 ~~-~~ 25 (complaints 

up 13.55%; loans and credit cards lead grievances; credi ~~t-~~ card complaints up >20%) underscores why radical transparency must be the default ~~-~~ it pr ~~e-~~ empts the downstream mis ~~-s~~ elling complaint. 

Behavioural telemetry ~~-~~ the consent ~~-n~~ ative boundary (privacy as a competitive advantage). Everything the Adaptive Experience and Session Intelligence engines (§25.5 ~~-~~ §25.6) consume is firs ~~t-~~ party, in ~~-~~ app, purpose ~~-~~ bound, and revocable. We draw the line explicitly so it can be stated on stage and audited in review: 

## We collect (consent ~~-n~~ ative, in ~~-~~ app, purpose ~~-~~ Wenever collect 

|We collectcollect (consent~~-n~~ative, in~~-~~app, purposepurpose~~-~~|Wenever collectcollect|
|---|---|
|bound)||
|FeatureusageandpagevisitswithinYONO|SMS /messages|
|In~~-~~appsearchesandqueryterms|Phonecontacts|
|Time~~-o~~n~~-t~~askanddwelltime|Photos /gallery|
|Drop~~-o~~ffsandabandonmentpoints|Browserhistory|
|Button /control interactions|Cross~~-~~apptrackingidentifiers|
|Taskcompletionandfailedattempts|Microphonerecordingswithout explicit,separate<br>consent|
|Sessionsequences (screen~~-~~t~~o-~~screenpaths)|Socia~~l-~~mediaactivity|
|Goalprogressagainstuser~~-~~declaredgoals|Device~~-~~wide locationbeyondwhatafeature<br>needs|



This is not a constraint we tolerate; it is a differentiator we lead with. RBI's Digital Lending Directions already prohibit access to contacts/SMS/gallery, and DPDP makes over ~~-~~ collection a 250- ~~c~~ rore liability ~~-~~ so a competitor that quietly harvests device signals is building a future enforcement action, while we are building the auditable alternative. Behavioural modelling here is entirely consent ~~-n~~ ative: the model never needs a single prohibited signal to do its job, because i ~~n-~~ app behaviour is both sufficient and lawful. 

## 16. Open Source, Research Papers & Patent Landscape 

Reuse (don't rebuild): LangGraph / CrewAI / AutoGen / LlamaIndex (orchestration), Neo4j (knowledge graph), Haystack (RAG), HuggingFace quantised models, Graphiti (temporal knowledge graph), Pyvis (graph visualisation for the dashboard). Commercial incumbents to be aware of (and position against): Personetics (Engage/Act/Enrich behavioural engine), Pega Next ~~-B~~ est ~~-A~~ ction, Backbase, Adobe Experience Cloud (DBS's martech 

partner). We position as the India-stack-native, ontology-grounded, consent-native alternative ~~-~~ not a r ~~e-~~ implementation of Personetics. 

Research grounding: UTAUT/UTAUT2 studies confirm performance expectancy, 

facilitating conditions, trust, and perceived security are the dominant predictors of digital ~~-~~ banking usage ~~-~~ so our copilot must visibly build trust, not just function. Specific papers that inform the design: 

- e arXiv 2402.09683 ~~-~~ "positive friction" (intentional friction that improves decision quality). 

- e arXiv 2011.03413 ~~-~~ digital nudging with recommender systems. 

- ¢ arXiv 2108.08846 ~~-~~ next ~~-~~ best ~~-~~ action via reinforcement learning (our NBA ranking backbone). 

Patent white space: USPTO patents already cover generic next-best-action recommendation engines (e.g., US 11,210,712) and behavioural savings nudges (US 11,741,531), and Capital One holds adaptive-UI patents (e.g., US20180365025A1). Unclaimed / defensible space: an explainable, ontology ~~-~~ grounded, consent ~~-n~~ ative adoption agent for a regulated bank using India ~~-~~ stack DPI (AA/DEPA) ~~-~~ the combination is novel, and the IP stays with the team per hackathon rules. We do not need to patent now; we win on execution in the white space, and we Say so. 

## PART IV ~~-~~ THE PRODUCT 

## 17. Recommended Product Vision 

The YONO Adoption Copilot is an agentic, explainable, human- ~~i~~ n ~~-t~~ he ~~-l~~ oop system that transforms YONO froma transaction utility into a proactive financial coach. It is grounded on an Ontology ofthe Customer's Financial Life, it optimises explicitly for activation rate and products ~~-~~ per ~~-~~ customer, and it is architected from day one to survive an SBI enterprise design review: consent ~~-n~~ ative, auditable, and on the correct side of every regulatory line. It operationalises Setty's own words ~~-~~ moving SBI "toward an anticipatory customer service approach rather than merely pushing generic offers." 

It is not an application; it is an intelligence layer deployed over the existing YONO infrastructure. It continuously ingests consented telemetry and transaction/lif ~~e-~~ event signals, evaluates them against a deterministic financial knowledge graph, deploys specialised agents to dismantle specific cognitive and technical barriers, and writes governed actions back into YONO ~~-~~ while surfacing systemic friction to executives through the Adoption Barrier Twin. 

The right mental model: an operating system, not a feature. A chatbot waits to be asked and answers one question. What we are building is an Adaptive Financial Intelligence Operating System that runs continuously underneath every YONO surface. It does not merely answer questions; it understands behaviour, removes friction, personalises the interface per user and per moment, explains every decision it surfaces, protects the user through polic ~~y-~~ aware reasoning, and measurably improves digital adoption ~~-~~ all while remaining auditable, explainable, and regulator ~~-s~~ afe. The conversational surface, where it exists at all, is one client of this layer among many (see §27). The intelligence does not live in the chat; it lives in the layer, and the chat is the least important thing it powers. Framing it this way is not cosmetic: it is what tells an SBI CDO that the system co ~~-e~~ xists with YONO 2.0 as infrastructure, rather than competing with it as another app. 

## 18. Product Philosophy (Eight Principles) 

1. Activation over acquisition. Every feature is judged by whether it moves a dormant user toward an active, multi ~~-~~ product relationship. 

2. Reason, don't pattern ~~-~~ match. Recommendations are traversable paths ina knowledge graph, so every "why" is answerable. 

3. Explainable by default. If we can't show why you're seeing this, we don't show it. 

4. Consent- ~~n~~ ative. Data access is per ~~-~~ purpose and revocable; the architecture assumes DPDP, not bolts it on. 

5. Bounded agency. Agents propose; humans approve anything that touches money. Proposing agent # approving agent. 

6. Nudge, never trick. Every intervention passes the reflection test; dark patterns area hard "never." 

7. Measure outcomes, not clicks. Success = save more / invest more / insure more, surfaced on an executive dashboard. 

8. Optimise for financial progress, not product sales. The system is never permitted to optimise for distribution volume. It optimises for the customer's financial progress, and a product recommendation is only ever the last resort after service, education, alert, and goal interventions have been considered (see §26). A bank that demonstrably puts progress before sales is a bank that earns the trust which UTAUT research identifies as the dominant adoption predictor ~~-~~ so this principle is also the commercially optimal one. 

19. The Unified Architecture At A Glance (The One Diagram) 

- e Adoption Barrier Twin ~~-~~ ontological executive dashboard mapping why users abandon features. 

- e Activation Dashboard ~~-~~ dormant > active funnel and projected products ~~-p~~ er ~~-~~ customer lift. 

- e Enterprise AI Observability ~~-~~ dashboards that monitor the system itself: hallucination attempts contained, policy violations prevented, retrieval failures, recommendation acceptance/rejection, and confidence evolution (detailed in §36). 

- e Relationshi ~~p-~~ manager hand ~~-o~~ ff (roadmap) ~~-~~ same DCS and signals surfaced to branch CRM for omni ~~-c~~ hannel. 

## 21. Customer Journey (Persona: "Priya," a dormant UPI-only user) 

sequenceDiagram 

participant P as Priya (user) participant Y as YONO UI 

participant E as Signal/Intent Agent participant O as Ontology (Neo4j) participant N as NBA + Explainer P ~~-~~ >>Y: Opens app after salary credit Y ~~-~~ >>E: Telemetry: %40,000 idle 11 days; lingers on FD screen 45s E ~~-~~ >>0: Emit signal salar ~~y_c~~ redited + surplus ~~_d~~ etected O ~~-~~ >>0: Traverse: surplus ~~-~~ > goal:retirement underfunded ~~-~~ > eligible:SIP O ~~-~~ >>N: Candidate actions (suitability ~~-~~ checked, RIA ~~-~~ safe) N ~~-~~ >>Y: One explainable nudge card + Why ~~-~~ path Y ~~-~~ >>P: "You're losing ~%X/yr in interest. Start a %250/mo SIP?" P ~~-~~ >>Y: One tap ~~-~~ > human ~~-~~ in ~~-~~ loop confirm Y ~~-~~ >>0: Governed Action: RecommendSIP accepted O ~~-~~ >>Y: Activation Dashboard: dormant ~~-~~ >active, products ~~-~~ per ~~-~~ customer +1 

## 22. Agent (Internal AI) Journey 

Each user event flows through a bounded chain with separation of duties: Intent/Signal > Eligibility > Next ~~-B~~ est ~~-~~ Action > Explainer > (human approval) > governed Action. No single agent both proposes and approves a money ~~-t~~ ouching action. Every hop is logged with inputs, outputs, and the graph path used ~~-~~ the audit artifact that satisfies RBI/DPDP "model register" expectations. 

## 23. SBI Officer / Relationship-Manager Journey (Roadmap) 

A branch RM opens the CRM and sees the same Digital Confidence Score and lif ~~e-~~ event signals the AI sees. When a high ~~-~~ value customer's "retirement" goal is flagged underfunded, the RM gets a pre ~~-~~ contextualised talking point and a compliant SBI Funds suitability sheet ~~-~~ the AI and the human share one brain. This is the 1 ~~2-~~ 24 month omni ~~-~~ channel play (DBS's relationshi ~~p~~ -manager augmentation analogue). 

## 24. Admin & Executive Dashboards 

Admin (operations): model health, audit ~~-~~ log search, consent ~~-s~~ tatus monitoring, intervention A/B controls, kil ~~l-~~ switch per nudge type. 

Executive (the Adoption Barrier Twin): headline tiles mirror SBI's scorecard ~~-~~ activation rate, products ~~-~~ per ~~-~~ customer, cos ~~t-~~ t ~~o-~~ income contribution, digita ~~l-~~ lending throughput ~~-~~ with a graph visualisation mapping Users - Friction Nodes (e.g., "30% abandoned VKYC; 20% cognitive overload on MF selection; 18% reliability/timeout"). This converts abstract failure rates into precise, actionable operational intelligence. 

AI Observability (monitoring the system, not only the user). Sitting alongside the user ~~-~~ facing Barrier Twin is a second plane that watches the Al itself ~~-~~ hallucination attempts contained, policy violations prevented, retrieval hit/miss rates, recommendation acceptance vs rejection, and DCS/confidence evolution across cohorts. In a regulated 

deployment this is not optional telemetry; it is the evidence base system live. It is specified in full in §36. 

a CDO needs to Keep the 

## 25. The Core Engines 

The platform runs several always ~~-~~ on engines. The first four are the decision core carried forward from v1.0; v2.0 makes explicit two further engines ~~-~~ Session Intelligence and Adaptive Experience ~~-~~ that were implied by the v1.0 talk of "adaptive experiences" and "behavioural memory" but never specified. Together they are what make the system an operating system rather than a feature. 

## 25.1 Digital Confidence Score (DCS) ~~-~~ the north ~~-s~~ tar metric 

A proprietary model that computes a confidence score per user across Payments, Savings, Investments, Credit, adjusting on tas ~~k-~~ completion rates, error frequency, session patterns, and reliance on physical branches. The entire agentic system is optimised against raising DCS over time. It gives executives a quantifiable metric directly correlated to cross ~~-s~~ ell readiness and gives users a gamified sense of progress. Why it beats "engagement clicks": it measures capability and readiness, which predicts revenue; clicks don't. 

## 25.2 Adoption Barrier Engine / Twin ~~-~~ the executive intelligence 

Maps the exact systemic or behavioural nodes causing friction onto the ontology, so leadership sees why, not just how much. This is the feature that proves enterprise thinking and is inherently DPDP- ~~c~~ ompliant (aggregated, anonymised internal analytics). 

## 25.3 Intent / Signal Detection ~~-~~ the trigger 

The engine does not wait to be asked. It observes consented behaviour and transaction/life ~~-~~ event signals; when a user hesitates (dwell, back ~~-b~~ utton, validation error) or a signal fires (salary credit, large outflow, recurring bill), it hypothesises the root cause and decides whether to intervene. Quantised models run at the edge where possible for low ~~-~~ latency UI adaptation. 

## 25.4 Intervention Engine ~~-~~ the adaptive response 

Ona detected barrier or opportunity, the Intervention Agent selects the optimal response: an ephemeral micro ~~-i~~ ntervention, a structural UI change (highlight the field, show a worked example), or an explainable nudge card ~~-~~ never a heavy ~~-~~ handed pop ~~-u~~ p. Reframing and choice ~~-a~~ rchitecture principles (§14) govern the copy and layout. 

## 25.5 Session Intelligence Engine ~~-~~ behavioural memory without conversation logs 

The single most important privacy ~~-~~ and ~~-p~~ ersonalization decision in the architecture: we do not store conversations. Storing raw interaction logs would be a DPDP liability, a retention burden, and ~~-~~ counter ~~-i~~ ntuitively ~~-~~ worse for personalization, because raw logs are noise 

that every downstream consumer must re ~~-~~ interpret. Instead, after every session the Session Intelligence Engine extracts a small set of structured behavioural insights and persists only those. 

A session is distilled to a compact, semantic record ~~-~~ for example: 

These become semantic behavioural memories: durable, low ~~-~~ dimensional facts about how a user engages, which the Adaptive Experience Engine and the Recommendation Engine read on the next session. The engine captures intent, confidence, friction, drop-off point, task completion, adoption barrier, goal progress, and feature discovery ~~-~~ and nothing else. The benefits compound: privacy improves (no raw telemetry at rest ~~-~~ only a barrier ~~-~~ classificatio ~~n-~~ grade record, consistent with the §15 boundary and the §32 data ~~-~~ minimisation guarantee), storage shrinks, and personalization improves because the next session begins with a clean, interpreted prior rather than a transcript to re ~~-~~ read. This is the architectural answer to "how does it remember me without surveilling me." 

25.6 Adaptive Experience Engine ~~-~~ the interface that personalises itself 

v1.0 repeatedly promised "adaptive experiences" but never specified the engine that produces them. This is it. The Adaptive Experience Engine continuously personalises the information architecture of the app ~~-~~ not its colours. It reshapes navigation, the homepage, widgets, quick actions, cards, recommendations, education, notifications, voice interactions, microcopy, task ordering, and progressive disclosure so that each user sees an interface fitted to who they are and where they are in their financial life. 

It personalises against a blend of signals ~~-~~ Digital Confidence Score, persona (see §27), behaviour, intent, financial maturity, accessibility needs, and session history (from §25.5) ~~-~~ and it is the engine that finally solves a problem the report itself identified as a top ~~-~~ four adoption killer: discoverability (§13). If high ~~-~~ value features are buried, the cross ~~-~~ sell pool never surfaces; the Adaptive Experience Engine surfaces the right feature to the 

right user at the right moment, which is discoverability solved structurally rather than by adding yet another menu. 

Two clarifications keep this honest. First, age is one signal, not the model ~~-~~ the engine is persona ~~-a~~ nd- ~~b~~ ehaviour- ~~fi~~ rst (§27), and personas evolve over time as behaviour changes. Second, this is information ~~-a~~ rchitecture personalization, not cosmetic theming: the same YONO, reorganised per user, is a fundamentally different and more navigable product than a static menu that treats a firs ~~t-~~ job UPI user and a retired pensioner identically. 

## 26. Recommendation / Next-Best-Action Engine 

The NBA engine ranks candidate actions across four classes ~~-~~ service (fix a problem), alert (warn ofa loss), offer (suitabilit ~~y~~ -checked product), education (explain a concept) ~~-~~ using a reinforcement ~~-l~~ earning formulation (arXiv 2108.08846) constrained by the ontology's eligibility and regulatory rules. Crucially, it is not a marketing blast: at any moment it surfaces one next ~~-~~ best action, chosen for the user's goals and DCS, with the Explainer producing the reasoning path. Acceptance/ignore feedback loops back to sharpen ranking (Bank ofAmerica's exact continuous ~~-l~~ earning loop). 

Recommendation philosophy ~~-~~ progress before sales (the ranking is not neutral). The engine is never permitted to optimise for distribution volume. It optimises for the customer's financial progress, and that intent is encoded as an explicit priority order over the action classes: 

I Service > Education > Alert > Goal > Product 

A product recommendation is the last class the engine reaches for, not the first. If a user is struggling, the system first services the friction (fix the failing journey), then educates (explain the concept the user is stuck on), then alerts (surface a loss they are unknowingly taking), then advances a goal (move a declared goal forward), and only then ~~-~~ when service, education, alert, and goal interventions are exhausted or inappropriate ~~-~~ surfaces a suitabilit ~~y~~ -checked product. Wherever a product would be appropriate, an educational intervention is offered first whenever one exists. This ordering is not a soft preference; it is enforced in the ranking so that "the bank is selling to me" can never be the lived experience. It is also why the demo is defensible against the mis ~~-s~~ elling critique: the system is structurally biased toward the user's interest. 

Explainable Recommendation Framework (explainability as a firs ~~t-~~ class output). Every recommendation the engine emits carries its reasoning with it ~~-~~ not as an afterthought rendered by the LLM, but as a structured artifact produced by the deterministic engine and then narrated. The shape of a recommendation is: 

This structure is what the user sees behind "Why you're seeing this," what the auditor sees in the model register (§36), and what the regulator means by "Understandable by Design." Because the reason, confidence, and data ~~-~~ source provenance are produced by the engine ~~-~~ not generated by the model ~~-~~ they are faithful to the actual computation rather than a plausibl ~~e-~~ sounding rationalisation. 

## 27. Persona-First Personalization & Dynamic Banking Interfaces 

27.1 Persona- ~~fi~~ rst, not age ~~-f~~ irst 

The cheapest and most common personalization mistake is to segment by age. We reject it. Age is one signal; behaviour matters more. The Adaptive Experience Engine (§25.6) personalises against a persona ~~-~~ a behaviourally ~~-~~ defined identity that age only partially predicts. The working persona set: 

Persona 

Defining signals (beyond age) 

What the experience emphasises 

**==> picture [487 x 435] intentionally omitted <==**

**----- Start of picture text -----**<br>
||||||||||
|---|---|---|---|---|---|---|---|---|
|Student|small irregular inflows, UPI|-|UPI, budgeting, education loan,|
|dominant,|education|-|loan|starter investments|
|adjacency|
|First Job|first regular salary credit, low|salary insights, emergency fund,|first|
|investment exposure|SIP, tax basics|
|Young Family|joint goals, chil|d-|education|declared|goal centre,|chil|d-|education plan,|
|goal, higher outflows|term|cover, savings automation|
|Business Owner|current account, GST signals, lumpy|GST, cash flow, collections, working|
|cash flow|capital|
|Senior Citizen|pension|inflow, low digital|large buttons, voice|-f|irst interaction,|
|confidence, accessibility needs|FD, pension, health insurance|
|NRI|cros|s-|border signals,|intl number,|NRE/NRO, remittance,|cros|s-|border|
|repatriation|patterns|friction removal|
|Retired|drawdown patterns, fixe|d-|income|income stability, FD laddering,|
|reliance|health|cover, simplicity|
|Financially|high investment DCS, multi|-|depth, comparison|tools, lower hand|-|
|AdvancedInvestor|_ product holdings|holding|
|Financially|low DCS across the board, high|education-|fi|rst, progressive|
|Beginner User|friction|disclosure, one|-t|ap actions|

**----- End of picture text -----**<br>


Personas are not assigned once and frozen. The Adaptive Experience Engine evolves a user's persona over time as behaviour changes ~~-~~ a "First Job" user who declares a child ~~-~~ education goal and a joint account drifts toward "Young Family"; a "Financially Beginner User" whose Investments DCS climbs graduates to less hand ~~-h~~ olding. Persona isa live, behaviour ~~-~~ driven property, exactly like DCS. 

## 27.2 The same app, reorganised per persona 

The point of persona- ~~f~~ irst personalization is that two users open the same YONO and see a genuinely different information architecture: 

e Astudent opens to UPI, budgeting, an education ~~-~~ loan card, and starte ~~r-~~ investment education. 

- e Asalaried employee opens to salary insights, an emergency ~~-~~ fund prompt, an SIP entry point, and tax planning. 

- e Asenior citizen opens to large buttons, voice ~~-f~~ irst interaction, FD, pension, and health insurance. 

- e A business owner opens to GST, cash flow, collections, and working- ~~c~~ apital options. 

The engine is not changing colours; it is changing the entire information architecture ~~-~~ which surfaces appear, in what order, at what density, with what microcopy, behind how many taps. That is the difference between cosmetic personalization and the structural kind that actually moves discoverability and therefore adoption. 

## 27.3 Dynamic banking interfaces ~~-~~ every surface is AI ~~-~~ powered 

In an operatin ~~g-~~ system framing, conversational Al is one interface among many, and not the most important one. The intelligence layer powers the entire application. The adaptive surfaces: 

**==> picture [478 x 371] intentionally omitted <==**

**----- Start of picture text -----**<br>
||||||||||||
|---|---|---|---|---|---|---|---|---|---|---|
|Surface|What the intelligence layer does to|it|
|Adaptive Home|reorders cards and quick actions to the persona, DCS, and live|signals|
|Context Cards|render the next|-b|est|-|action|with|its|"why,"|in place,|at the moment of|
|relevance|
|AI Search|understands|intent, not keywords; routes to the right feature or action|
|Goal Centre|tracks declared goals and surfaces the next step toward each|
|Adaptive Product|foreground the KFS and the suitability fit for|this user; education before|
|Pages|purchase|
|Voice Banking|voice|-f|irst journeys for low|-|confidence|and accessibilit|y-|need personas|
|Notification Centre|prioritised by Fogg|-|timing and value, not by campaign calendar|
|Progressive|discloses complexity only as confidence grows|(progressive disclosure)|
|Onboarding|
|Adaptive Navigation|promotes the features|a persona actually uses; demotes the|rest|
|Financial Timeline|a longitudinal view of lif|e-|events, goals, and progress|

**----- End of picture text -----**<br>


Conversational AI, where present, is simply one more client of the same layer. The intelligence does not live in the chat; it powers everything, and the chat is the least of it. 

This is the concrete, screen ~~-~~ by ~~-~~ screen meaning of "an Adaptive Financial Intelligence Operating System." 

## PART V ~~-~~ ARCHITECTURE & ENGINEERING 

## 28. The Four-Layer Decision-Centric Stack 

The differentiator is the architecture, not the model. We propose a four ~~-l~~ ayer, decision ~~-~~ centric stack explicitly modelled on Palantir's Ontology philosophy. 

€ 

Neo4j knowledge graph nouns = objects : verbs = governed actions 

LangGraph state machine 

> Intent- EligibilityNext ~~-B~~ est ~~-A~~ ction - Explainer separation of duties 

RAG over SBI product T&Cs /KFS vector DB 

Quantised LLM - output schema validation hallucination filter - full audit logging 

Account Aggregator integration consented cross ~~-i~~ nstitution 

**==> picture [119 x 103] intentionally omitted <==**

**----- Start of picture text -----**<br>
graceful PDF fallback<br>Human- i n -t he -l oop<br>approval<br>**----- End of picture text -----**<br>


~~CY~~ Layer 1 ~~-~~ Ontology of the Customer's Financial Life (the moat). A semantic layer where the nouns are rea ~~l-~~ world objects ~~-~~ (customer), (Transaction), (Goal), (LifeEvent), (Product), ~~-~~ and the verbs are governed actions ~~-~~ (Recommends1P), ferTermCover),(Of (ReactivateAccount)}. Modelled in a Neo4j knowledge graph so relationships ("salary credited > surplus detected > goal:retirement underfunded > eligible:SIP") are firs ~~t-~~ class and traversable. This is what lets the agent reason rather than pattern ~~-~~ match, and what makes every recommendation explainable and auditable. Layer 2 ~~-~~ Agentic orchestration. LangGraph (lowest latency, explicit stat ~~e-~~ machine control flow, best for auditable enterprise workflows) coordinating specialised agents: an Intent/Signal agent, an Eligibility agent (checks product + regulatory eligibility), a NextBest-Action agent (ranks across service/alert/offer/education), and an Explainer agent. Separation of duties (proposing agent + approving agent) for governance. 

Layer 3 ~~-~~ Knowledge & guardrails (the governed reasoning surface). RAG over SBI product T&Cs / KFS documents with a vector DB, so the agent never hallucinates product terms. This is the layer that v2.0 specifies in full as the governed reasoning spine (§32):a governed retrieval layer for factual grounding (§32.1) and a Policy & Compliance Engine that can block the system's own output (§32.2), with the language model placed after both so it only ever explains a validated recommendation. Hard guardrails: a quantised/fine ~~-~~ tuned smaller LLM for cost control; outpu ~~t-~~ schema validation; a hallucination filter; and full audit logging of every recommendation, its data inputs, and its reasoning (mirrors RBI/DPDP "model register" expectations). 

Layer 4 ~~-~~ Consent & data. Account ~~-A~~ ggregator integration for consented, cross ~~-~~ institution data (the ecosystem now has 2.61 billion accounts enabled and 223 million users linked, as of Dec 2025) ~~-~~ but with graceful PDF fallback since only ~38% of borrowers are AA ~~-e~~ nabled. Human- ~~in~~ - ~~t~~ he ~~-l~~ oop approval for any financial action. 

Feasibility scorecard: latency manageable (LangGraph + small model + cached ontology); scalability via microservices/APIs into YONO; security via marking ~~-~~ based access control on the ontology; explainability native (graph paths = explanation); hallucination contained via RAG + guardrails. 48 ~~-~~ hour buildable because the ontology can be seeded on synthetic SBI ~~-~~ scale data. 

## 29. Palantir Analysis > Banking Architecture 

Palantir's products (Foundry, Gotham, AIP) "feel different" for one architectural reason articulated in Palantir's own blog: the Ontology models decisions, not just data, unifying data + logic + action + security into a single decision ~~-~~ centric substrate. Traditional data lakes capture the "what" but not the "why" or "what was done"; the ontology captures all three, with end ~~-~~ t ~~o-~~ end lineage that both humans and agents can reason over and act through. Objects are the nouns, actions are the verbs, and security markings govern both. 

## Translation to a YONO adoption product: 

- ¢ Ontology ofthe customer's financial life = the semantic backbone: (Customer), (Account), (Goal), (LifeEvent), defined once, inherited by every agent and workflow. 

- e Logic = eligibility + suitability + regulatory rules encoded as ontology ~~-~~ governed functions. 

- ¢ Action = governed ((RecommendSIP}, (ReactivateAccount)) that write back to YONO with the same access controls as the data ~~-~~ staged, human- ~~a~~ pproved, audited. 

- e Continuous learning /human- ~~i~~ n ~~-t~~ he ~~-l~~ oop = every accepted/ignored nudge feeds back, sharpening the NBA model. 

- ¢ Decision lineage = the "Why you're seeing this" explanation is the ontology path ~~-~~ satisfying both the user (trust) and the regulator (auditability). 

This is the intellectual core that makes our solution legible to an Al ~~-~~ researcher judge and credible to an SBI CDO judge simultaneously. The moat is reproducible only by someone who understands both Palantir's decision ~~-c~~ entric philosophy and India's regulatory stack. 

## 30. Ontology & Knowledge-Graph Schema (Engineer-Ready) 

## Core object types (nodes): 

Object 

Key attributes 

Notes 

**==> picture [390 x 519] intentionally omitted <==**

**----- Start of picture text -----**<br>
||||||||||||
|---|---|---|---|---|---|---|---|---|---|---|
|customer|_i|d, age|_b|and, segment, DCS, consent|_s|tate|DCS|isa live computed|
|property|
|account|_i|d,|type|(SA/CA/FD/loan), balance|_|band,|balance stored as band,|
|kyc|_l|evel|not raw, for|
|minimisation|
|txn|_i|d,|type, amount|_b|and, timestamp, channel|ephemeral signals|
|derived,|not|all|
|persisted|
|goal|_i|d, type|(retirement/education/emergency),|user|-|declared; drives|
|target, funded|_p|ct|suitability|
|event|_i|d, type|trigger source|
|(salar|y_|credit/larg|e_|outflow/festival/jo|b_|change)|
|product|_i|d, family|(MF/insurance/FD/card), KFS_|r|ef,|RAG-|l|inked to T&C|
|eligibilit|y_|rules|docs|
|holding|_i|d, product|_i|d,|status|products|-|pe|r-|customer|
|derived from count|
|node|_i|d, type,|screen, severity|powers the Adoption|
|Barrier Twin|
|persona|_i|d, type,|confidence,|derive|d_|from|behaviour|-d|erived,|
|evolves over time|(§27)|
|memory_|id|,|intent, confidence,|friction, outcome,|structured behavioural|
|goal|_|progress|memory only|-|never|
|raw logs|(§25.5)|

**----- End of picture text -----**<br>


preconditions (graph query), required consent purpose, regulatory class (advice ~~-~~ prohibited vs distribution ~~-~~ allowed), policy verdict (the §32.2 gate must pass), retrieva ~~l~~ -grounding requirement (the facts it must stand on), and approval level (auto /human- ~~i~~ n ~~-l~~ oop). 

Signature reasoning path (the demo's spine): 

## 31. Multi-Agent Architecture (Detailed) 

Separation of duties is the governance keystone: the agent that proposes an action is never the agent that approves it, and money ~~-t~~ ouching actions always pass a human gate. This is what lets us claim "bounded, auditable agency" rather than "autonomous agent" ~~-~~ the difference between deployable ~~-~~ i ~~n-a-~~ bank and disqualified ~~-~~ in ~~-~~ review. In v2.0 the governance cross ~~-~~ cut is made explicit as the Policy & Compliance Engine (§32.2): it wraps the whole chain, gates the request before the Eligibility/NBA agents run, and can block the chain's output. The Explainer is, by design, an explanation-only role ~~-~~ it narrates a recommendation the deterministic engine already authored, consistent with the §32 placement of the model at the end of the spine. 

## 32. The Governed Reasoning Spine (Why the Language Model Is Last) 

This section specifies the part of the architecture that turns "a clever AI demo" into "a system an SBI design review can approve." Banking AI cannot tolerate hallucination: a single fabricated interest rate, eligibility claim, or product term is a mis ~~-s~~ elling event, a compliance breach, and a headline. We therefore do not mitigate hallucination after the fact; we make it structurally impossible for the model to be the source of a recommendation. The mechanism is a governed reasoning spine through which every recommendation passes, with the language model deliberately placed at the end. 

## The role of each component: 

- e Intent Detection ~~-~~ interprets consented behaviour and signals into a structured intent ("the user is exploring investments"). Edge ~~-q~~ uantised where possible for latency. 

- e Policy & Compliance Engine ~~-~~ the governance gate. Before anything is retrieved or recommended, it answers "is this even permitted for this user, right now?" (detailed in §32.2). A blocked request never proceeds; it short ~~-c~~ ircuits to a safe response. 

- e Retriever (Governed Retrieval Layer) ~~-~~ fetches the enterprise facts the recommendation must stand on (detailed in §32.1). If retrieval returns nothing relevant, the pipeline does not fall back to the model's parametric memory ~~-~~ it declines or escalates, because an ungrounded answer is worse than no answer. 

- e Knowledge Graph / Ontology ~~-~~ supplies the traversable relationships ("salary credited > surplus > underfunded goal > eligible product") that make the reasoning explainable rather than statistical. 

- e Business Rules ~~-~~ apply eligibility, suitability, and regulatory ~~-c~~ lass constraints as deterministic, ontology ~~-~~ governed functions. 

- e Recommendation Engine ~~-~~ produces the actual recommendation, ranked under the progress ~~-b~~ efore ~~-s~~ ales hierarchy (§26). This is the component that decides. It is deterministic, inspectable, and testable. 

- e LLMExplanation Layer ~~-~~ receives a recommendation that is already validated, grounded, eligible, and compliant, and renders its reasoning into natural language. It explains; it does not originate. 

- e Final Response ~~-~~ what the user sees, and simultaneously what the audit log records, with the full lineage attached. 

Why this satisfies RBI expectations for explainability and accountability. RBI's FREE ~~-A~~ I framework demands "Understandable by Design" and institutional "Accountability." Both fall out of this ordering for free: the explanation is the literal reasoning path the deterministic engine took (not a post ~~-~~ hoc story), and accountability is unambiguous because the bank's governed logic ~~-~~ not a model's weights ~~-~~ made the decision. The model cannot be the accountable party for a recommendation it did not make. 

32.1 Retrieva ~~l-~~ grounded enterprise reasoning (the Governed Retrieval Layer) 

Every recommendation is grounded in retrieved enterprise knowledge before it reaches the language model. This is not conversational memory and it is not "the model knows banking." It is a governed retrieval layer whose job is factual grounding: when the system is about to recommend or explain anything, it first retrieves the authoritative enterprise facts that the statement must be consistent with, and constrains the output to them. 

Retrieval sources include, as governed corpora: 

- e SBI product catalogue 

- e RBI regulations 

- e SEBI regulations 

- e IRDAI policies 

- e official interest rates 

- e loan eligibility rules 

- e FDschemes 

- e mutual ~~-~~ fund documentation 

- e insurance documents 

- e FAQs 

- e terms & conditions 

- e Key Fact Statement (KFS) documents 

- e internal policy documents 

Two distinctions matter. First, retrieval is for factual grounding, not conversational memory ~~-~~ behavioural continuity across sessions is handled separately and privately by the Session Intelligence Engine (§25.5), which stores interpreted insights, not transcripts. Conflating the two is the common design error that turns a grounding layer intoa surveillance log; we keep them strictly separate. Second, the language model never generates a recommendation from its internal weights alone. If the grounding facts are not retrieved, the recommendation does not get made. The model's parametric knowledge of "banking in general" is treated as unsafe for a regulated recommendation and is never the source of a product term, a rate, or an eligibility claim. (Note: we describe this as 

> retrieval-grounded enterprise reasoning| a governed retrieval layer rather than "we use RAG," because the discipline is the governance around retrieval, not the technique itself.) 

## 32.2 The Policy & Compliance Engine (the governance layer) 

The Policy & Compliance Engine is a firs ~~t-~~ class architectural component, not a checkbox. It sits before recommendation and around every action, and it validates every recommendation against: 

- e RBlIdirections (incl. Digital Lending Directions; accountability of the Regulated Entity) 

- e DPDP Act 2023 (purpos ~~e-~~ bound consent, minimisation) 

- e SEBI rules (the advice ~~-v~~ s ~~-d~~ istribution boundary) 

- e IRDAT rules (insurance as documented, non ~~-d~~ iscriminatory distribution) 

- e internal SBI eligibility rules 

- e product constraints 

- e customer consent state 

Encoded as hard, testable policies, this means in practice: 

- ¢ Never recommend a product the customer is ineligible for ~~-~~ eligibility is checked before the recommendation is even formed, not after. 

- e Never generate personalised investment advice ~~-~~ the engine enforces the SEBI distribution/education boundary; advice ~~-c~~ lass outputs are blocked by construction. 

- e Never bypassa regulatory disclosure ~~-~~ disclosures are mandatory preconditions of the action, not optional copy. 

- ¢ Always surface the KFS where applicable ~~-~~ is a precondition of any lending or eligible product action. 

- e Every recommendation is auditable ~~-~~ the policy verdict (allowed/blocked, with the rule that fired) is part of the recommendation's permanent lineage. 

This is one of the strongest enterprise differentiators in the entire solution. Most teams treat compliance as something the demo gestures at; here it is a runtime component that can block the system's own output, and that is exactly what a CDO and a regulator need to see. The Policy Engine is also where the §15 regulatory matrix becomes executable: each row in that matrix corresponds to policies the engine enforces. 

## 32.3 Hallucination containment as an architectural property 

Putting §32.1 and §32.2 together: a hallucination would require the system to state a fact that was not retrieved, recommend a product that policy did not permit, or make a decision the model rather than the engine authored ~~-~~ and each of those paths is closed. The 

remaining residual risk (the LLM mis ~~-~~ phrasing a grounded explanation) is contained by outpu ~~t-~~ schema validation and a hallucination filter in Layer 3 (§28), and is caught and counted by the observability plane (§36). The result is not "a model we hope won't hallucinate"; it is a pipeline in which an ungrounded or non ~~-c~~ ompliant recommendation has nowhere to come from. 

## 33. Technical Stack (Recommended) 

**==> picture [487 x 600] intentionally omitted <==**

**----- Start of picture text -----**<br>
||||||||||||
|---|---|---|---|---|---|---|---|---|---|---|
|Concern|Choice|Rationale|
|Orchestration|LangGraph (CrewAI/AutoGen|as|Explicit state machine = auditable,|
|alternates)|low|-l|atency, enterprise|-l|egible|
|Knowledge|Neo4j|(Graphiti for temporal context)|First|-|class relationships;|
|graph|GraphRAG; explanation|=|
|traversal|
|Governed|Haystack or LlamaIndex|+ avectorDBover|Factual grounding before|
|retrieval|the §32.1 corpora|generation; no hallucinated|
|terms/rates|
|Policy engine|Declarative|rules|(e.g., OPA/Rego-|s|tyle ora|Runtime compliance gate that can|
|rules service)|over ontology functions|block output; testable per §15 row|
|Session|Structured behavioura|l|-memory|store|Personalization|without raw logs;|
|intelligence|(compact records, not transcripts)|DPDP|-m|inimal|
|Adaptive|Server|-|driven UI/ layout service keyedon|Information|-a|rchitecture|
|experience|persona: DCS|- session memory|personalization, not theming|
|LLM|Quantised open model|(HuggingFace)|for|Cost control; edge|-|deployable|
|routing;|cloud LLM only for complex|intent detection;|explanation|-|only|
|generation|role|
|Backend|Python/FastAPI microservices|(Javawhere|Integrates into YONO; OAuth2;|
|SBI|-n|ative)|event|-|driven|(Kafka/pub|-|sub)|
|Frontend|React YONO-|s|tyled UI + dashboard|Adaptive UI; "Why|-p|ath"|
|(demo)|rendering; Pyvis/D3 graph viz|
|Data plane|Account Aggregator +|firs|t-|party telemetry;|Consent-|n|ative,|India|-|stack|
|PDF|fallback|
|Observability|Metrics/eventing into the §36 AI|-|Monitors the Al itself, not only|
|observability plane|users|

**----- End of picture text -----**<br>


Concern 

Choice 

Rationale 

Deployment Microservices on SBI ~~-~~ controlled cloud; K8s 60OM+ users; data localisation; no autoscale public ~~-~~ cloud leakage 

## 34. Complete Data Model & Event Flow 

Event ~~-~~ driven core: a salary ~~-~~ credit event (or a hesitation event) publishes to a topic; the Signal Agent consumes, derives a barrier/opportunity classification, and only the classification code (not raw telemetry) is persisted. The Policy Engine gates the request; the governed retrieval layer grounds it; the ontology is queried/updated; the NBA + Explainer produce a candidate; the intervention renders; the outcome writes a governed action, a dashboard delta, and a compact sessio ~~n~~ -memory record. Two persistence guarantees hold throughout: raw telemetry and raw conversation are never stored ~~-~~ only the barrier ~~-~~ classification code (§32) and the structured session insight (§25.5) survive a session. 

## 35. API Architecture (Indicative Endpoints) 

- ° ~~-~~ ingest a consented telemetry/lif ~~e-~~ event signal (returns barrier/opportunity classification). 

- ° ~~-~~ current Digital Confidence Score and component breakdown. 

- ° ~~-~~ submit a candidate action/context; returns allow/block with the rule(s) that fired (the §32.2 gate). 

- ° ~~-~~ fetch grounding facts for a context from the §32.1 corpora (returns sources + provenance). 

- ° ~~-~~ request next ~~-~~ best ~~-~~ action for a context (returns action + reasoning path + confidence + data sources + reg ~~_c~~ lass). 

- ° ~~-~~ human- ~~i~~ n ~~-t~~ he ~~-l~~ oop approval gate (money ~~-~~ touching actions). 

- ° ~~-~~ resolved adaptive layout for the user (persona, surface order, density) from the Adaptive Experience Engine. 

- ° ~~-~~ current behaviour ~~-~~ derived persona and its confidence. 

- ° ~~-~~ structured behavioural memories (no raw logs) from the Session Intelligence Engine. 

- ° ~~-~~ aggregated friction map for the Adoption Barrier Twin. ° ~~-~~ Al ~~-~~ health metrics: hallucinations contained, policy blocks, retrieval hit/miss, acceptance/rejection (§36). 

- ° ~~-~~ full lineage: inputs, policy verdict, retrieval sources, graph path, model version, consent artifact. 

All endpoints: OAuth2, per ~~-~~ purpose consent validation middleware, structured audit emission. 

36. Security, Explainability, Auditability, Human-in-the-Loop, AI Governance 

   - e Security: marking ~~-~~ based access control inherited from the ontology (data and actions share controls); India ~~-~~ only processing; tokenisation/pseudonymisation of sensitive fields; secrets never in client. 

   - e Explainability: the graph path is the explanation; the Explainer agent renders it into one sentence and a "see why" expansion. Satisfies FREE ~~-A~~ I "Understandable by Design." 

   - e Auditability: every recommendation logs data inputs, ontology path, model version, guardrail verdicts, consent artifact, and human decision. This is the RBI/DPDP "model register" artifact. 

   - e Human- ~~in~~ - ~~t~~ he- ~~l~~ oop: mandatory for any money ~~-t~~ ouching action; configurable for UI ~~-~~ only interventions. 

   - e Algovernance: kil ~~l~~ -switch per nudge type; bias isolation ~~-~~ the engine optimises strictly for adoption mechanics and is deliberately isolated from credit ~~-~~ underwriting/eligibility models, so it only facilitates access to products for which the core banking system has already approved the user. This directly answers the FREE ~~-~~ Al fairness/equity mandate. 

   - e Policy as runtime governance: the Policy & Compliance Engine (§32.2) is the enforcement point for everything above ~~-~~ it can block the system's own output, it makes the §15 regulatory matrix executable, and its verdict is part of every action's lineage. 

36.1 Enterprise Observability ~~-~~ monitoring the AI, not just the user 

Enterprise AI requires continuous governance, which requires continuous observation of 

the system itself ~~-~~ a discipline distinct from the user ~~-~~ facing Adoption Barrier Twin. The v1.0 Barrier Twin monitors users; v2.0 adds a sibling plane that monitors the AI. The dashboards: 

**==> picture [482 x 377] intentionally omitted <==**

**----- Start of picture text -----**<br>
||||||||||||
|---|---|---|---|---|---|---|---|---|---|---|
|Observability dashboard|What|it answers|
|Hallucination attempts|how often a non|-|grounded statement was caught and blocked|
|contained|before reaching a user|
|Policy violations prevented|how many ineligible/advic|e-|class/disclosur|e|-bypassing|actions the|
|Policy Engine blocked|
|Retrieval failures|retrieval hit/miss rate; where grounding was unavailable and the|
|system correctly declined|
|Recommendation|acceptance|rate by class, persona, and surface|
|acceptance|
|Recommendation rejection|what users dismiss, and the friction|it reveals|
|Feature adoption|which features move from discovered > used > habitual|
|Journey completion|end|-|t|o-|end completion rates per journey|
|Confidence evolution|DCS and recommendation|-c|onfidence trajectories|across cohorts|
|Executive KPIs|activation rate, products|-p|er|-|customer,|cos|t-|t|o-|income|
|contribution,|digita|l-|lending throughput|

**----- End of picture text -----**<br>


The point is accountability: in a regulated deployment, "we believe the AI is behaving" is not an answer ~~-~~ "here is the live evidence that it is, and here is what it blocked last week" is. This plane is what keeps the system deployable over time, not just approvable once. 

## 37. Deployment, Cloud & Production Architecture 

Microservices into the YONO/YONO 2.0 ecosystem via APIs; Kubernetes autoscaling for peak concurrent load across a 60M+ user base; event streaming (Kafka) for signals; edge ~~-~~ quantised intent models on ~~-~~ device for latency; cloud LLM reserved for complex personalised generation to optimise compute spend. All within SBI's controlled environment to honour data localisation. Observability: model ~~-h~~ ealth metrics, drift detection, consent ~~-s~~ tate dashboards, and the audit ~~-~~ log search plane. 

## 38. Cost Analysis (Directional) 

The dominant cost lever is inference. We control it by: (a) retrieval ~~-f~~ irst / smal ~~l-~~ model 

routing for the common case, escalating to a cloud LLM only for complex generation; (b) edge ~~-~~ deployed quantised intent detection (no cloud round ~~-t~~ rip for the trigger); (c) cached ontology reads. The result is a system whose marginal cost per nudge is low enough that the DBS economics (SGD 750M value from 1.2bn nudges) are directionally reproducible at SBI scale. Open ~~-s~~ ource components (LangGraph, Neo4j, Haystack, HuggingFace) avoid per ~~-~~ seat licensing of Personetics/Pega. 

## PART V ~~I-~~ MVP & 48-HOUR EXECUTION 

## 39. MVP Scope - Build Exactly Three Things, Omit Everything Else 

Scope discipline is itself a signal to judges. We do not build a working bank. We build the three artifacts that prove the core innovation and the dual value proposition (adaptive customer UI + actionable executive intelligence). 

## Component 1 ~~-~~ Ontology + Next ~~-B~~ est ~~-~~ Action Engine (on synthetic SBI ~~-s~~ cale data) 

- e Purpose: prove the system reasons overa financial graph rather than pattern ~~-~~ matching. 

- e Implementation: Neo4j graph of ~10,000 synthetic customers with accounts, transactions, goals, and life events; LangGraph orchestration; asmall open LLM + RAG over real, publicly available SBI product T&Cs/KFS. 

- e Mocked: the customer data (synthetic, clearly labelled). Real: the graph reasoning, the agent chain, the RAG grounding, the audit log. 

- e Demonstrated: a live query traverses the graph and returns an eligible, suitability ~~-~~ checked action with its reasoning path. 

- e Value proven: enterprise architecture, explainability, regulatory ~~-s~~ afety. 

## Component 2 ~~-~~ Explainable Proactive Nudge Card (YONO- ~~s~~ tyled UI) 

- e Purpose: prove the adaptive, anticipatory experience (not a chatbot). 

- e Implementation: a React YONO- ~~s~~ tyled screen; a real, lif ~~e~~ -even ~~t-~~ triggered recommendation with a visible "Why you're seeing this" reasoning path drawn from the ontology graph, plus a one ~~-t~~ ap action with human- ~~i~~ n ~~-t~~ he ~~-l~~ oop confirmation. 

- ¢ Mocked: the underlying account; the money movement (stubbed confirm). Real: the trigger logic, the reasoning path, the nudge rendering, the HITL gate. 

- e Demonstrated: user lingers/idles > nudge appears with explanation > one ~~-~~ tap > confirm. 

- e Value proven: behavioural science + explainability + bounded agency in one screen. 

Component 3 ~~-~~ Activation Dashboard (the slide that maps to SBI's KPI) 

- e Purpose: prove executive value and the number going up. 

- e Implementation: a React dashboard showing the dormant > active funnel and projected products ~~-~~ pe ~~r-~~ customer lift for a simulated cohort, plus a Pyvis/D3 graph mapping Users > Friction Nodes (the Adoption Barrier Twin). 

- e Mocked: the cohort aggregates. Real: the funnel logic, the frictio ~~n-~~ node mapping, the KPI tiles. 

- e Demonstrated: completing the nudge in Component 2 ticks the dashboard (dormant~active, products ~~-~~ pe ~~r-~~ customer +1). 

- e Value proven: Palantir ~~-~~ style operational intelligence that maps to SBI's real scorecard. 

Intentionally omitted in the MVP (state these as roadmap to show discipline): live AA integration (show a consent stub), real money movement, production auth, multi ~~-~~ language/voice. 

## 40. Repository Layout (GitHub-Ready) 

## 41. 48-Hour Development Plan (Hour-by-Hour Blocks) 

**==> picture [483 x 382] intentionally omitted <==**

**----- Start of picture text -----**<br>
|||||||||||||||
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|Block|Hours|Ownerroles|Deliverable|
|Kickoff|& freeze scope|0|-|2|All|Lock the three components;|assign|
|owners|
|Ontology schema+|synthetic|2|-|10|ML+|Neo4j populated, signature paths query|
|seed|backend|correctly|
|Agent chain|+ guardrails|8|-2|0.|ML|LangGraph|returns action|+ reasoning|
|path|+|reg|_c|lass|
|RAG over|SBI KFS|10|-|18|ML|Grounded product terms; no hallucinated|
|T&Cs|
|API layer|1|4-|24|Backend|Endpoints from §35|live; audit log|
|emitting|
|YONO-|s|tyled nudge UI|+|1|6-|30|Frontend|Component|2 working end|-|t|o-|end|
|HITL|
|Activation Dashboard +|22|-|36|Frontend|+|Component|3 ticks on nudge acceptance|
|Barrier Twin|data|
|Integration|+ demo wiring|34|-|42|All|The 90|-|second flow runs continuously|

**----- End of picture text -----**<br>


Block 

Hours 

Ownerroles 

Deliverable 

Demo rehearsal + screen 

42 ~~-~~ 46 Pitch+demo _ 

## Recorded fallback; slides finalised 

recording 

Buffer / polish 

46 ~~-~~ 48 All README, repo cleanup, contingency 

## 42. Mock Dataset Strategy, UI Screens, Backend APIs, AI Components, Testing 

- e Mock dataset: ~10k synthetic customers generated programmatically with realistic distributions (age bands, balance bands, goals, life events). Clearly labelled everywhere to avoid any impression of using real SBI data (rules + DPDP). 

- e Ulscreens required: (1) YONO home with adaptive nudge card; (2) "Why you're seeing this" expansion; (3) one ~~-t~~ ap action + HITL confirm; (4) executive Activation Dashboard; (5) Adoption Barrier Twin graph view. 

   - (Toarriers),(Jaudit) (Part V §35). 

- e AlIcomponents required: Signal/Intent classifier, Eligibility checker (ontology functions), NBA ranker, Explainer (graph>language), RAG retriever, guardrail validator. 

- e Testing strategy: unit tests for graph reasoning correctness; guardrail tests asserting no advice ~~-c~~ lass output ever escapes (SEBI safety) and all outputs pass schema; consent middleware tests; an end ~~-~~ to ~~-~~ end test that runs the 90 ~~-~~ second demo path headless. 

## PART VII ~~-~~ PITCH, JUDGES & RISK 

## 43. Pitch Strategy & Demo Narrative 

First ~~-~~ slide metrics (only these four): 

1. 8.77 crore registered YONO users ~~-~~ but MAU undisclosed (the gap). 

2. Target: 10 crore > 20 crore active (Setty, Dec 2025). 

3. Feature utilisation <30% beyond basic transactions (industry); 3.36 applications lost per 1 completed (Cornerstone 2026). 

4. Products ~~-~~ pe ~~r-~~ customer lift = our north ~~-s~~ tar outcome. 

The hook (don't open with tech): "Institutions spend billions acquiring customers, only to watch them use the platform as a digital wallet while abandoning high-margin products. 

The failure isn't the product offering; it's the unaddressed cognitive and technical friction of adoption." 

The pivot (differentiate instantly): "Every other team today will show you an AI chatbot that waits for the user to ask a question. We show you an autonomous intelligence layer that identifies friction and adapts the interface - eliminating the need to ask in the first place." 

Demo flow (90 seconds, one continuous story): Dormant user "Priya" > salary credit + idle =40,000 detected (signal) > ontology traverses the graph, finds an underfunded goal > copilot fires one explainable nudge ("You're losing ~*X/yr in interest; start a 250 SIP?") with a visible reasoning path > one ~~-t~~ ap adoption with human- ~~i~~ n ~~-t~~ he ~~-l~~ oop confirm > Activation Dashboard ticks: dormant~active, products ~~-~~ pe ~~r-~~ customer +1. End on the dashboard, not the chat. 

The closing argument: the architecture is explicitly designed for the regulatory reality of Indian banking ~~-~~ DPDP consent validation, RBI FREE ~~-A~~ I ontology ~~-~~ driven explainability (zero hallucinated product terms), SEBI/IRDAI distributio ~~n-~~ not ~~-~~ advice framing. "We operationalise SBI's own stated goal: anticipatory engagement, not generic offers." 

## 44. Suggested Slide Order (10-12 slides) 

1. The gap (four firs ~~t-~~ slide metrics). 2. The one ~~-l~~ ine insight ("Wake up your 9 crore"). 3. Why PS2/ what SBI actually wants. 4. The product in one diagram (§19). 5. Live demo (90s). 6. The ontology / Palantir analysis (the moat). 7. Behavioural science made concrete. 8. Regulatory survival (DPDP/RBI/SEBI/IRDAI). 9. Global proof (DBS/BofA/Nubank numbers). 10. Activation Dashboard / executive value. 11. Roadmap 6/12/24. 12. Ask (pilot collaboration). 

## 45."No Other Team Will Think Of This" - Idea Scorecards 

Scores ~~1-~~ 10 across Business Value (BV), User Value (UV), Technical Feasibility (TF), Regulatory Feasibility (RF), Implementation simplicity (IC, higher = simpler), Competitive Differentiation (CD), Hackathon Impact (HI). 

|Idea||BV|UV|TF|RF|IC|CD|HI|Verdict|Verdict||
|---|---|---|---|---|---|---|---|---|---|---|---|
|A ~~- ~~Adoption||9|8|7|7|6|9|9|Build.Themoat.|||
|Ontology+Copilot||||||||||||
|(recommended core)||||||||||||
|B~~- ~~Dormant-~~t~~o~~-~~||9|7|8|8|7|#8|8|Build.Thedemothatwins ~~- ~~pair|||
|ActiveReactivation|||||||||withA|Aastheengine.||
|Agent||||||||||||
|C~~-Co~~nsent-~~n~~ative||8|9|6|6|5|8|8|Roadmap/Phase 2 ~~-~~highestuser|||
|AAFinancial~~-~~|||||||||value&bestIndia~~-~~stackstory,but|||
|WellnessCoach|||||||||AA +advisoryboundarymakefull|||
||||||||||48hbuildrisky;demoaconsent~~-~~flow|||
||||||||||stub.|||
|DigitalConfidence||9|8|8|9|4|10|10.|Coremetric;lowbuildcost,huge|||
|Scoreengine|||||||||pitchvalue.|||
|Adoption Barrier||10|7|7|10|6|9|9|Build ~~- ~~enterprisecredibility+|||
|Twin (executive|||||||||DPDP-~~c~~lean.|||
|dashboard)||||||||||||
|Ephemeraljust~~-~~in~~-~~||9|9|6|68|8|10|9|Build ~~-t~~he "wow"moment.|||
|timemicro~~-~~||||||||||||
|interventions||||||||||||



Rejected ideas (deliberately, to show discipline): standalone GenAI chatbot (toy, undifferentiated); autonomous money ~~-~~ movement agent (regulatory death); deepfake/voice ~~-~~ clone onboarding (trust hazard); crypto/tokenisation (out of scope, regulatory minefield). Stating what we refused to build signals enterprise judgment. 

## 46. What Other Teams Will Build - And Why It Fails 

|Likelycompetitorbuild|Whyitfailsagainstus|
|---|---|
|GenAIonboardingchatbot<br>(PS1)|Reactive;nomeasurableadoptionfunnel;commoditised;we<br>absorbonboardingunderourengine|
|Spend~~-a~~nalyser /categorisation<br>widget(PS3)|Vanityengagement;nocross~~-s~~ell story;manyfintechsalready<br>haveit|



Likely competitor build 

Why it fails against us 

Voice/financ ~~e-~~ coach bot "Al assistant" framing the judges have seen 50 times; no enterprise architecture 

Generic recommender pushing Opaque ("ad" feel); fails FREE ~~-A~~ I explainability; mis ~~-s~~ elling risk offers 

Pretty Streamlit + GPT demo "Hackathon toy"; no data model, no governance, no audit trail 

Why our architecture wins: ontology (reasoning + explanation) + bounded agentic orchestration + RAG guardrails + audit log + AA consent + an executive dashboard that maps to SBI's real KPIs. We are the only team optimising the registered-vs-active gap with an auditable, regulator ~~-~~ safe engine. 

## 47. Likely Judge Questions - With Ideal Answers 

1. "Isn't this just a chatbot with extra steps?" ~~-~~ No. There is no chat at the centre; the core is an ontology that reasons over the customer's financial graph and a next ~~-b~~ est ~~-~~ action engine. The chat, if any, is the least important layer. We lead with the activation dashboard for exactly this reason. 

2. “Howis this not investment advice (SEBI)?" ~~-~~ We educate and distribute, never advise on specific securities. The copilot maps user ~~-~~ declared goals to suitability and surfaces SBI products with a KFS; it never issues personalised buy/sell calls. Money ~~-~~ touching actions pass a human gate. 

3. "DPDP ~~-~~ how do you use behavioural data legally?" ~~-~~ Per ~~-~~ purpose, revocable consent; data minimisation (we persist only a barrier ~~-c~~ lassification code, never raw keystrokes/dwell); India ~~-~~ only processing; AA for consented cross ~~-i~~ nstitution data; full audit trail. Penalty exposure (up to 250 cr) is exactly why we designed consent ~~-~~ native. 

- 4, "Willit hallucinate product terms?" ~~-~~ It structurally cannot originate a recommendation. The language model sits at the end of a governed reasoning spine (§32): the Policy Engine gates the request, the governed retrieval layer grounds every fact, the ontology and business rules form the recommendation deterministically, and only then does the model explain it. RAG over SBI KFS/T&Cs + outpu ~~t-~~ schema validation + a hallucination filter + audit logging contain residual phrasing risk, and the observability plane (§36) counts every attempt caught. An ungrounded or non ~~-~~ compliant recommendation has nowhere to come from. 

5. "Can SBl actually deploy this?" ~~-~~ It's a microservice intelligence layer over YONO 2.0, not a replacement app. Bounded agency, human- ~~in~~ - ~~t~~ he- ~~l~~ oop, marking ~~-~~ based access control. We built it to pass your design review. 

6. "What's the business case?" ~~-~~ DBS proved it: nudge ~~-~~ engaged customers saved 2x, invested 5x, insured 3x more. We move products ~~-~~ pe ~~r-~~ customer and cos ~~t-~~ t ~~o-~~ income ~~-~~ your own scorecard. 

7. “What if the real problem is app reliability, not nudging?" ~~-~~ It partly is, and we say so. Our Adoption Barrier Twin surfaces reliability/timeout friction as the #1 node, so SBI gets actionable intelligence; our copilot also reduces faile ~~d-~~ journey friction. We don't pretend nudging alone fixes adoption. 

8. "Why will users trust an AI suggestion?" ~~-~~ Because every suggestion shows its reasoning ("why you're seeing this"). UTAUT research shows trust and perceived security are the dominant adoption predictors; explainability is the trust mechanism. 

## 48. Enterprise Roadmap (6 / 12/24 Months) 

- e 6months ~~-~~ Incubation & ontology mapping/ pilot. Pilot in a YONO sandbox; 1 ~~-~~ 2 nudge types (idl ~~e-~~ balance > SIP; salary ~~-~~ credit > goal top ~~-u~~ p); A/B test against control; instrument the activation funnel; establish baseline DCS on a closed beta cohort. Threshold to proceed: statistically significant lift in cohort activation vs control. 

- e 12months ~~-~~ Pilot interventions & CMP integration. Full next ~~-~~ best ~~-~~ action across MF / insurance / pre ~~-~~ approved loans; live Account ~~-A~~ ggregator integration with PDF fallback; integrate with SBI's already ~~-r~~ olling ~~-~~ out martech platform (SMS/WhatsApp/email orchestration); human- ~~i~~ n ~~-t~~ he ~~-l~~ oop review for all generative UI. Threshold: measurable products ~~-~~ pe ~~r-~~ customer lift + neutral ~~-~~ or ~~-~~ better complaint rate. 

- e 24months ~~-~~ Enterprise scaling & omni ~~-c~~ hannel. Bounded autonomous agentic workflows with human approval; si ~~x-~~ language vernacular + voice for Tier ~~-2~~ /3; expansion to YONO Business SME coaching (DBS Quick Finance analogue); surface the same DCS/signals to branch RM CRM for omni ~~-c~~ hannel. Threshold: contribution to cos ~~t-~~ t ~~o~~ -income reduction. 

## 49. Business Impact, ROI & KPI Dictionary 

North ~~-s~~ tar: products ~~-~~ per ~~-~~ customer (and the activation rate that drives it). 

**==> picture [486 x 255] intentionally omitted <==**

**----- Start of picture text -----**<br>
||||||||||
|---|---|---|---|---|---|---|---|---|
|KPI|Definition|How the copilot moves it|
|Activation rate|active multi|-|product|users|/ registered users|dormant~active|
|reactivation funnel|
|Products|-p|er|-|holdings count|/ customer|NBA-|d|riven suitability|
|customer|adoption|
|Digital|composite capability score|every intervention|
|Confidence|Score|(Payments/Savings/Investments/Credit)|optimises|it|
|Cost|-|t|o-|income|branch|-s|ervicing avoided + digital throughput|digital completion of|
|contribution|would|-|be branch tasks|
|Complaint|rate|grievances|/ active users|explainability|+|suitability|
|reduce mis|-s|elling|

**----- End of picture text -----**<br>


ROI logic: captive ~~-~~ subsidiary distribution means each adopted product carries high incremental margin; each digital completion avoids branch cost; retention compounds with depth (Nubank: 4+ products > >90% retention). The DBS economic ~~-v~~ alue figure (SGD 750M from 1.2bn nudges) is the directional proof that the nudge ~~-t~~ o ~~-v~~ alue conversion is real at scale. 

## 50. Risks, Assumptions & Mitigations 

**==> picture [484 x 254] intentionally omitted <==**

**----- Start of picture text -----**<br>
||||||||||||
|---|---|---|---|---|---|---|---|---|---|---|
|Risk|Likelihood|Mitigation|
|Crosses SEBI advisory|High|if|Education/distribution framing; goal|-|based|
|boundary|careless|suitability; human-|in|-|l|oop;|no security|-s|pecific|advice|
|LLM hallucination on|Medium|RAG over KFS/T&Cs; outpu|t-|schema validation;|
|product terms|guardrail|filter;|audit log|
|Reads|as a "hackathon|Medium|Lead with ontology|+|activation dashboard; show|
|toy"|enterprise architecture diagram|
|DPDP|/ data|-l|ocalisation|Medium|Consent|-n|ative|design; AA artifacts; data|
|breach|minimisation; India|-|only processing|
|Demo over|-|promises|Medium|Bound agency; show the human approval step|
|autonomy|explicitly|

**----- End of picture text -----**<br>


|Risk|Likelihood|Mitigation|
|---|---|---|
|App-~~re~~liability|High (realSBI|__Position copilottoalsoreducefaile~~d-~~journey friction;|
|undermines real|issue)|acknowledgeinpitch;surfacevia BarrierTwin|
|adoption|||



Key assumptions: (1) SBI values activation/depth over raw acquisition ~~-~~ strongly supported by Setty's statements and the dormant ~~-a~~ ccount campaign. (2) Judges reward deployability over novelty ~~-~~ explicitly stated in the brief. (3) AA and martech rails will be available for deployment ~~-~~ supported by SBI's own rollout. What would change the recommendation: if the brief or a judge signal indicates SBI specifically wants greenfield acquisition in unbanked segments, pivot the same ontology engine toward PS1 vernacular onboarding ~~-~~ the architecture is reusable; only the funnel changes. 

## 51. Video Submission Script (=90 seconds) 

[Open on the four-metric slide] "SBI has 8.77 crore registered YONO users ~~-~~ but it doesn't publish how many are active. That silence is the opportunity. SBI doesn't have an acquisition problem; it has an activation problem." 

[Cut to YONO UI] "Meet Priya. Salary just hit; 40,000 sits idle. Our copilot detects the signal, traverses her financial graph, and finds an underfunded retirement goal." [Nudge card appears with Why-path] "It surfaces one explainable nudge ~~-~~ and shows exactly why. One tap, human- ~~c~~ onfirmed." 

[Cut to dashboard ticking] "And here's what SBI sees: a dormant user became active; products ~~-~~ pe ~~r-~~ customer went up by one. Multiply that across 9 crore sleeping users." [Close on architecture] "Ontology ~~-~~ grounded, consent ~~-n~~ ative, regulator ~~-~~ safe ~~-~~ built to pass an SBI design review. We don't acquire more users. We wake up the ones you already have." 

## PART VIII ~~-~~ APPENDICES 

## A. Reconciliation Log - How The Three Reports Were Merged 

This master report is not a merge; it is a synthesis with verification. The reconciliation: 

Source contribution 

Kept Why 

|Strategylineage(Claude): "activationnotacquisition,"|Corespine|Corespine|Strongestbusiness|
|---|---|---|---|
|theregistered~~-~~vs~~-~~activegap,Palantirontology,judge|||framingandthemost|
|psychology, scope discipline,MVP= exactly3things,the|||defensiblehackathon~~-~~|
|SEBIadvisoryboundary|||winningnarrative;|
||||verifiedagainstSBI|
||||FY2025figures|
|Technicallineage(Gemini): DigitalConfidence Score,|Coreengine||Mostunique,|
|Adoption BarrierTwin,intent detection,ephemeral|||measurableAI|
|micro~~-i~~nterventions,FREE~~-A~~I7 Sutras,edge/GraphRAG|||mechanisms;DCS|
|specifics|||becomesthenorth~~-~~|
||||starmetric|
|Consultinglineage(GPT):globalbenchmarks|Customer||De~~-r~~isksthepitch|
|(Nubank/Revolut/Monzo/Kakao/DBS/BofA),behavioural|experience||- withproof~~-a~~t~~-s~~cale;|
|science depth,gamification,UPI/Octalysis, 6/12/24|+proof||makestheAI|
|roadmapshape,persona~~-~~drivendemo|||enjoyable,notjust|
||||technical|



Weak/duplicated ideas removed: generic "AI chatbot/voice assistant/finance coach" framings (all three drifted toward this ~~-~~ cut); model ~~-~~ name name ~~-d~~ ropping (GPT/Gemini/Claude) on stage (cut ~~-~~ judges care about outcomes); over ~~-r~~ epetition of "Palantir/ontology" as a tic (Kept the substance, removed the mantra); vague recommendations ("add gamification") rewritten into specific mechanics tied toa behavioural principle and a screen. 

v2.0 hardening (what the enterprise ~~-~~ architecture revision added, and why). v2.0 did not change the thesis, the funnel, the MVP scope, or the demo. It made explicit five things v1.0 implied but never specified, each to close a gap a design review would have found: a governed retrieval layer for factual grounding (v1.0 mentioned RAG once but never defined where grounding happens); a banking AI safety architecture that places the language model last so hallucination has no source; a firs ~~t-~~ class Policy & Compliance Engine that can block the system's own output; a Session Intelligence Engine that stores structured behavioural memory instead of conversations; and an Adaptive Experience Engine with persona- ~~f~~ irst personalization, dynamic interfaces, and an enterprise observability plane. The framing shifted from "an AI copilot" to "an Adaptive Financial Intelligence Operating System" ~~-~~ the same product, specified to enterprise depth. Everything added reinforces the one thesis: activation, not acquisition. 

Claims verified / flagged: SBI FY2025 hard numbers (8.77 cr registered, 98.20% alternate ~~-~~ channel, 51.64% cos ~~t-~~ t ~~o-~~ income, =70,901 cr net profit, subsidiary figures) are from the Integrated Annual Report. Figures attributed to PTI/YONO 2.0 launch coverage (1020 cr target, >%2 lakh cr cumulative digital lending, 93% digital payments) are press ~~-~~ sourced secondary reports of a December 2025 interview, not yet in an audited annual report ~~-~~ flagged as such. No current official YONO MAU has been published ~~-~~ the registered ~~-v~~ s ~~-~~ active gap is inferred, not disclosed, and that inference is central to this strategy. Global benchmarks (DBS, BofA Erica, Nubank) are from the respective companies' 2024 ~~-~~ 2026 reports/releases. 

## B. Official Hackathon Facts (Quick Reference) 

- e Event: SBI Hackathon 2026, part of Global Fintech Fest (GFF) 2026. 

- e Chosen problem statement: PS2 ~~-~~ Digital Adoption (Theme: Agentic AI & Emerging Tech). "Build contextual and adaptive AI experiences that encourage adoption ofdigital banking services including payments, investments, insurance, and mobile banking." 

- e Other statements (not chosen): PS1 Customer Acquisition; PS3 Digital Engagement. 

- e Prize pool %4.8L+: Winner =2,50,000; 1st Runner ~~-~~ Up 71,50,000; 2nd Runner ~~-~~ Up $75,000; 10 collaboration/pilot slots with SBI; participation certificates for all. Payouts in milestone ~~-~~ based phases. 

- e Key rules: original + IP ~~-~~ clean; IP stays with the team (SBI may explore deployment/commercialisation collaboration); data privacy/security/confidentiality compliance; practical, scalable, rea ~~l-~~ world banking fit; Al/emerging ~~-t~~ ech encouraged; regulatory alignment required; on ~~-~~ time submission; jury decision final; ide ~~a-~~ deck template is free choice. 

- e Strategic read of the prizes: the 10 collaboration slots matter more than the cash for a serious team ~~-~~ they are the deployment on ~~-~~ ramp. Optimise the pitch for "pilotable," because that is what those slots reward. 

## C. Glossary 

|Term|Meaning|
|---|---|
|DAIE|DigitalAdoptionIntelligenceEngine (theplatform)|
|AFIOS|AdaptiveFinancial IntelligenceOperatingSystem ~~- ~~thev2.0architectural<br>sel~~f-~~description|
|DCS|DigitalConfidence Score ~~-~~compositeper~~-~~usercapabilitymetricandnorth~~-~~<br>star|



Term 

Meaning 

**==> picture [485 x 558] intentionally omitted <==**

**----- Start of picture text -----**<br>
||||||||||
|---|---|---|---|---|---|---|---|---|
|Ontology|Decision|-c|entric semantic layer: objects|(nouns)|+ governed actions|(verbs)|
|+|security|
|NBA|Next|-B|est|-|Action|-|ranked recommendation|across|
|service/education/alert/goal/product|
|Governed retrieval|Retrieva|l-|grounded|enterprise|reasoning:|factual grounding before|
|generation|(§32.1)|
|Policy Engine|Policy|& Compliance Engine|-|runtime governance gate that can block|
|output|(§32.2)|
|Session|Engine that stores|structured behavioural memory, never raw conversation|
|Intelligence|logs|(§25.5)|
|Adaptive|Engine that personalises the information architecture per|
|Experience|persona/DCS/behaviour|(§25.6)|
|Adoption Barrier|Executive dashboard mapping friction nodes onto the ontology|
|Twin|
|AA/DEPA|Account Aggregator|/ Data Empowerment & Protection Architecture|(India|-|
|stack consent)|
|FREE|-A|I|RBI's Framework for Responsible & Ethical Enablement ofAI|(7|Sutras, Aug|
|2025)|
|KFS|Key Fact Statement|(mandatory disclosure|for lending)|
|RIA|Registered Investment Adviser|(SEBI)|-|the advice|-v|s|-d|istribution|
|boundary|
|HITL|Human-|in|-|t|he|-l|oop|approval gate|
|MAU|/ DAU|Monthly|/ Daily Active Users|-|the gap SBI doesn't disclose|

**----- End of picture text -----**<br>


## D. Consolidated Source List 

SBI / official: SBI Integrated Annual Report FY2025 (registered users 8.77 cr; 98.20% alternat ~~e-~~ channel share; 52 cr customers; 22,937 branches; cos ~~t-~~ t ~~o-~~ income 51.64%; net profit =70,901 cr; subsidiary metrics); Chairman C.S. Setty FY2025 letter & Global Finance interview; Flywire press release citing SBI Q1 FY25 (63% new SA via YONO; 31,399 cr pre ~~-~~ approved loans); LiveMint/PTI YONO 2.0 coverage (Dec 2025, "10 crore > 20 crore" target, 

>¥2 lakh cr cumulative digital lending); IBM/SBI YONO case study; SBI Card YONO page; SBI WhatsApp Banking page. Global benchmarks: DBS Annual Report 2024 (1,500+ models, 1.2bn nudges, SGD 750M value, save 2x/invest 5x/insure 3x); Bank ofAmerica newsroom/PRNewswire (20 Aug 2025: ~50M Erica users, 3bn interactions, 583M/month, 1.7bn proactive insights) & The Financial Brand (8 Dec 2025: 60% proactive, 98% resolution); Nu Holdings Q4'25 results (25 Feb 2026: ARPAC $15, 83% activity, ~$0.8 cost ~~-~~ to ~~-~~ serve); Cornerstone Advisors 2026 Digital Banking Performance Metrics (Alkami) ~~-~~ 3.36 lost per 1 completed; neobank onboarding analyses (Revolut/Monzo/Nubank/Kakao/WeBank/Starling/Wise). Competitors: HDFC EVA (Senseforth AI; SM+ queries, ~1M customers, 85% accuracy, 20k convos/day; 2.7M queries/6mo); ICICI iMobile Pay/iPal; Axis AHA!; Kotak 811/Keya; Yes ROBOT. Regulatory: RBI Digital Lending Directions 2025/2026; DPDP Act 2023 (%250 cr penalties); RBI FREE ~~-A~~ I Framework (7 Sutras, Aug 2025); SEBI RIA rules; IRDAI AI/distribution guidance; Account Aggregator / Sahamati & PIB (2.61bn accounts, 223M users, Dec 2025); RBI Ombudsman Report 2024 ~~-~~ 25 (complaints +13.55%); MuleHunter.AI. Architecture / research: Palantir blog "Connecting AI to Decisions with the Palantir Ontology" & Foundry docs "Why create an Ontology?"; LangGraph / CrewAI/ AutoGen / LlamaIndex docs; Neo4j / Graphiti; arXiv 2108.08846 (NBA RL), 2011.03413 (digital nudging w/ receommenders), 2402.09683 (positive friction); UTAUT/UTAUT2 digita ~~l~~ -banking adoption studies. Behavioural science: Thaler & Sunstein Nudge (choice architecture, defaults, SMaRT); BJ Fogg (B=MAP); Kahneman (System 1/2, loss aversion); Nir Eyal (Hook Model); Norman & Nielsen (friction); Rory Sutherland (perception); USPTO US 11,210,712 (NBA engine), US 11,741,531 (behavioural savings nudges), US20180365025A1 (adaptive UI). User pain: Google Play YONO reviews; MouthShut (1.72/5, 663 votes); PissedConsumer; JustUseApp; Ministry grievance DEABD/E/2025/0071605. 

Sourcing note: press-sourced YONO 2.0 figures are secondary reports of a December 2025 interview, not yet audited; no official YONO MAU has been published - the registered-vsactive gap is inferred and is the strategic crux. 

## E. Final Conclusion 

The winning move is not a cleverer chatbot; it is a reframe of the problem backed by an enterprise ~~-~~ grade, regulator ~~-~~ safe architecture and a demo that ends on a business KPI moving. SBI told the market it wants to move "toward an anticipatory customer service approach rather than merely pushing generic offers." The YONO Adoption Copilot is the literal embodiment of that sentence: an Adaptive Financial Intelligence Operating System ~~-~~ ontology ~~-~~ grounded, retrieva ~~l~~ -grounded, polic ~~y-~~ governed, consent ~~-n~~ ative, and explainable ~~-~~ whose only job is to convert dormant registered users into confident, multi ~~-~~ product customers ~~-~~ lifting activation, products ~~-p~~ er ~~-~~ customer, and cos ~~t-~~ t ~~o-~~ income, the three numbers SBI actually reports to its board. It does not merely answer questions; it understands behaviour, removes friction, personalises interfaces, explains its decisions, 

and is held to account by an explicit policy layer and a live observability plane ~~-~~ which is exactly why it can be deployed, and not merely demonstrated. 

Build exactly three things, refuse to build the things that get teams disqualified, lead with the ontology and the activation dashboard, and tell one story across the whole pitch: 

| "We don't acquire more users. We wake up the 9 crore you already have." 

End ofmaster report - v1.0 locked baseline. 

