// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-students",
          title: "students",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/students/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "teaching",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "nav-news",
          title: "news",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/news/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "news-part-of-steam-talk-series-on-wnij",
          title: 'Part of STEAM talk series on WNIJ.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2022_02_11-SoundScience/";
            },},{id: "news-attends-nsf-funded-sage-all-hands-meeting",
          title: 'Attends NSF funded Sage All-hands Meeting.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2022_05_24-SageAllHands/";
            },},{id: "news-join-university-of-illinois-chicago-department-of-computer-science-and-the-electronic-visualization-laboratory",
          title: 'Join University of Illinois Chicago department of Computer Science and the Electronic Visualization...',
          description: "",
          section: "News",},{id: "news-awarded-new-nsf-grant-to-develop-courselets-for-data-systems",
          title: 'Awarded new NSF grant to develop courselets for data systems.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2022_08_25-FOUNT/";
            },},{id: "news-awarded-2022-argonne-board-of-governors-pinnacle-of-education-award",
          title: '🏆 Awarded 2022 Argonne Board of Governors’ Pinnacle of Education Award.',
          description: "",
          section: "News",},{id: "news-part-of-winning-team-for-the-2022-gordon-bell-special-prize-using-language-models-to-track-virus-variants",
          title: '🏆 Part of winning team for the 2022 Gordon Bell Special Prize -...',
          description: "",
          section: "News",},{id: "news-teaching-a-new-course-this-semester-on-introduction-to-high-performance-computing-cs494",
          title: 'Teaching a new course this semester on Introduction to High Performance Computing (CS494)....',
          description: "",
          section: "News",},{id: "news-recent-northern-illinois-university-graduate-and-long-time-ddilab-research-assistant-hal-brynteson-joins-uic-as-m-s-student-and-research-assistant-at-evl",
          title: 'Recent Northern Illinois University graduate and long-time ddiLab research assistant Hal Brynteson joins...',
          description: "",
          section: "News",},{id: "news-member-of-team-awarded-2-6m-grant-from-the-u-s-department-of-energy",
          title: 'Member of team awarded $2.6M grant from the U.S. Department of Energy.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023_01_15-c2thep2/";
            },},{id: "news-argonne-s-next-supercomputer-aurora-is-featured-in-chicago-magazine-the-computer-that-will-change-everything",
          title: 'Argonne’s next supercomputer Aurora is featured in Chicago Magazine - The Computer That...',
          description: "",
          section: "News",},{id: "news-ieee-computing-in-science-and-engineering-article-hands-on-computer-science-the-array-of-things-experimental-urban-instrument-reprinted-in-the-february-issue-of-computing-edge",
          title: 'IEEE Computing in Science and Engineering article Hands-On Computer Science: The Array of...',
          description: "",
          section: "News",},{id: "news-article-leveraging-national-laboratories-to-increase-black-representation-in-stem-recommendations-within-the-department-of-energy-published-in-the-international-journal-of-stem-education",
          title: 'Article Leveraging National Laboratories to increase Black representation in STEM: recommendations within the...',
          description: "",
          section: "News",},{id: "news-story-on-the-integration-of-aps-and-alcf-bright-lights-big-data-how-argonne-is-bringing-supercomputing-and-x-rays-together-for-scientific-breakthroughs-discusses-how-experimental-science-and-high-performance-computing-are-joining-forces",
          title: 'Story on the integration of APS and ALCF; Bright lights, big data: how...',
          description: "",
          section: "News",},{id: "news-our-paper-chemograph-interactive-visual-exploration-of-the-chemical-space-by-bharat-kale-austin-clyde-maoyuan-sun-arvind-ramanathan-rick-stevens-and-michael-e-papka-has-been-accepted-to-eurovis2023-and-won-honorable-mention-in-best-paper-category",
          title: '🏆 Our paper ChemoGraph: Interactive Visual Exploration of the Chemical Space by Bharat...',
          description: "",
          section: "News",},{id: "news-invited-talk-at-10th-greater-chicago-area-system-research-workshop-gcasr-2023",
          title: 'Invited talk at 10th Greater Chicago Area System Research Workshop (GCASR 2023).',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023_04_24-GCASR/";
            },},{id: "news-our-star-paper-the-state-of-the-art-in-visualizing-dynamic-multivariate-networks-by-bharat-kale-maoyuan-sun-and-michael-e-papka-has-been-accepted-to-eurovis2023",
          title: 'Our STAR paper The State of the Art in Visualizing Dynamic Multivariate Networks...',
          description: "",
          section: "News",},{id: "news-congratulations-to-bharat-kale-northern-illinois-university-s-first-ph-d-in-computer-science-co-advised-with-maoyuan-sun",
          title: 'Congratulations to Bharat Kale, Northern Illinois University’s first Ph.D. in Computer Science, co-advised...',
          description: "",
          section: "News",},{id: "news-congratulations-to-boyang-li-on-the-completion-of-his-ph-d-in-computer-science-from-illinois-institute-of-technology-co-advised-with-zhiling-lan",
          title: 'Congratulations to Boyang Li, on the completion of his Ph.D. in Computer Science...',
          description: "",
          section: "News",},{id: "news-zhiling-lan-and-sidharth-kumar-join-the-department-of-computer-science-at-the-university-of-illinois-chicago-growing-the-high-performance-computing-group",
          title: 'Zhiling Lan and Sidharth Kumar join the Department of Computer Science at the...',
          description: "",
          section: "News",},{id: "news-awarded-new-nsf-grant-to-design-and-build-a-new-national-scale-testbed-that-supports-computer-scientists-developing-and-exploring-novel-distributed-ai-computing-systems",
          title: 'Awarded new NSF grant to design and build a new national-scale testbed that...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023_09_12-NAIRR/";
            },},{id: "news-awarded-2023-argonne-board-of-governors-distinguished-performance-award",
          title: '🏆 Awarded 2023 Argonne Board of Governors’ Distinguished Performance Award.',
          description: "",
          section: "News",},{id: "news-chicagoland-universities-partner-with-intel-on-oneapi-workshop",
          title: 'Chicagoland universities partner with Intel on OneAPI Workshop.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023_10_01-OneAPI/";
            },},{id: "news-part-of-2023-ieee-scivis-contest-winning-team-with-evl-alumnus-and-st-thomas-university-students",
          title: 'Part of 2023 IEEE SciVis Contest winning team with EVL alumnus and St....',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023_10_23-VisContest/";
            },},{id: "news-university-of-illinois-chicago-is-a-founding-partner-in-the-trillion-parameter-consortium-a-global-consortium-of-scientists-from-federal-laboratories-research-institutes-academia-and-industry-has-formed-to-address-the-challenges-of-building-large-scale-artificial-intelligence-ai-systems-and-advancing-trustworthy-and-reliable-ai-for-scientific-discovery",
          title: 'University of Illinois Chicago is a founding partner in the Trillion Parameter Consortium,...',
          description: "",
          section: "News",},{id: "news-along-with-rick-stevens-recorded-podcast-for-hpcpodcast-aurora-the-top500-a-national-research-infrastructure-and-other-hpc-thoughts",
          title: 'Along with Rick Stevens recorded podcast for @HPCpodcast Aurora, the TOP500, a National...',
          description: "",
          section: "News",},{id: "news-part-of-best-paper-at-2023-ieee-acm-international-workshop-on-in-situ-infrastructures-for-enabling-extreme-scale-analysis-and-visualization-winning-team",
          title: 'Part of best paper at 2023 IEEE/ACM International Workshop on In Situ Infrastructures...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2023_11_13-ISAV-Award/";
            },},{id: "news-argonne-s-aurora-supercomputer-debuts-at-2-on-the-top500-list-at-sc-23",
          title: 'Argonne’s Aurora Supercomputer debuts at #2 on the Top500 list at SC’23.',
          description: "",
          section: "News",},{id: "news-member-of-argonne-commercialization-excellence-award-team",
          title: '🏆 Member of Argonne Commercialization Excellence Award team.',
          description: "",
          section: "News",},{id: "news-discussed-with-ross-kaminsky-of-koa-radio-colorado-the-department-of-energy-s-newest-supercomputer-aurora-deployed-at-argonne-national-laboratory-interview",
          title: 'Discussed with Ross Kaminsky of KOA Radio (Colorado) the Department of Energy’s newest...',
          description: "",
          section: "News",},{id: "news-teaching-introduction-to-high-performance-computing-cs494-in-spring-2024",
          title: 'Teaching Introduction to High Performance Computing(CS494) in Spring 2024.',
          description: "",
          section: "News",},{id: "news-named-a-distinguished-member-of-the-association-for-computing-machinery-this-distinction-underscores-the-value-of-the-enduring-partnerships-and-collaborations-i-ve-been-privileged-to-have-throughout-my-career",
          title: 'Named a Distinguished Member of the Association for Computing Machinery. This distinction underscores...',
          description: "",
          section: "News",},{id: "news-invited-to-give-sparktalk-a-3-minute-talk-on-something-that-i-m-interested-in-or-research-that-i-m-doing",
          title: 'Invited to give SparkTalk; a 3-minute talk on something that I’m interested in...',
          description: "",
          section: "News",},{id: "news-hanging-out-in-australia-with-the-trillion-parameter-consortium-team-learning-about-large-language-models-for-science",
          title: 'Hanging out in Australia with the Trillion Parameter Consortium team learning about Large...',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024_02_19-TPC/";
            },},{id: "news-the-greater-chicago-area-systems-research-workshop-gcasr-will-be-held-at-uic-thursday-may-2-2024-call-for-posters-open",
          title: 'The Greater Chicago Area Systems Research Workshop (GCASR) will be held at UIC...',
          description: "",
          section: "News",},{id: "news-talked-about-aurora-on-chicago-abc-7-news-with-mark-rivera",
          title: 'Talked about Aurora on Chicago ABC 7 News with Mark Rivera.',
          description: "",
          section: "News",},{id: "news-lisa-dent-invited-me-speak-on-wgn-radio-about-argonne-and-aurora",
          title: 'Lisa Dent invited me speak on WGN Radio about Argonne and Aurora.',
          description: "",
          section: "News",},{id: "news-invited-back-to-regive-my-sparktalk-1-000-000-000-000-000-000-possibility-of-a-quintillion-calculations-from-earlier-in-the-semester",
          title: 'Invited back to regive my SparkTalk - 1,000,000,000,000,000,000: Possibility of a Quintillion Calculations...',
          description: "",
          section: "News",},{id: "news-spear-lab-and-evl-are-well-represented-at-gcasr-workshop-2024-a-systematic-approach-to-advance-the-understanding-of-digital-twin-technologies-hal-brynteson-athena-angara-fatima-jassim-victor-mateevitsi-silvio-rizzi-nicola-ferrier-michael-e-papka-digital-twin-for-smart-resource-management-in-hpc-yash-kurkure-micheal-e-papka-zhilling-lan-more-for-less-the-integration-of-capability-and-capacity-computing-zhong-zheng-zhiling-lan-michael-e-papka-performance-and-power-evaluation-of-multi-gpu-nccl-communication-with-unified-memory-riccardo-strina-ian-di-dio-lavore-marco-domenico-santambrogio-michael-e-papka-zhiling-lan",
          title: 'SPEAR lab and EVL are well represented at GCASR Workshop 2024: A Systematic...',
          description: "",
          section: "News",},{id: "news-mit-presence-virtual-and-augmented-reality-publishes-electronic-visualization-laboratory-39-s-50th-anniversary-retrospective-look-to-the-future-build-on-the-past-a-look-at-evl-over-the-years-and-the-many-things-the-laboratory-has-accomplished",
          title: 'MIT PRESENCE: Virtual and Augmented Reality publishes Electronic Visualization Laboratory&amp;#39;s 50th Anniversary Retrospective...',
          description: "",
          section: "News",},{id: "news-aurora-the-department-of-energy-s-newest-exascale-system-at-the-argonne-leadership-computing-facility-is-announced-as-the-fastest-ai-supercomputer-in-the-world",
          title: 'Aurora; the Department of Energy’s newest exascale system at the Argonne Leadership Computing...',
          description: "",
          section: "News",},{id: "news-rolling-stones-bassist-darryl-jones-visits-argonne-national-laboratory",
          title: 'Rolling Stones bassist Darryl Jones visits Argonne National Laboratory.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024_06_28-DarrylJones/";
            },},{id: "news-presenting-at-tedx-chicago-september-27-2024",
          title: 'Presenting at TEDx Chicago - September 27, 2024.',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024_07_23-TEDx/";
            },},{id: "news-excited-for-the-arrival-of-seven-new-students-this-year",
          title: 'Excited for the arrival of seven new students this year!',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2024_07_27-NewStudents/";
            },},{id: "news-i-m-thrilled-to-announce-that-i-m-now-the-co-chair-of-the-cs-des-program-at-uic-where-i-ll-be-representing-computer-science-alongside-daria-tsoupikova-on-the-design-side",
          title: 'I’m thrilled to announce that I’m now the co-Chair of the CS+DES program...',
          description: "",
          section: "News",},{id: "news-i-will-be-presenting-at-niu-s-stem-café-on-october-09-2024-on-how-advances-in-supercomputing-are-reshaping-the-future-science-and-technology",
          title: 'I will be presenting at NIU’s STEM Café on October 09, 2024 on...',
          description: "",
          section: "News",},{id: "news-interview-with-innovation-news-network-on-aurora-achieving-exascale-status",
          title: 'Interview with Innovation News Network on Aurora achieving exascale status.',
          description: "",
          section: "News",},{id: "news-co-pi-on-new-nsf-funding-with-professor-zhiling-lan-on-ai-guided-resource-management-for-advanced-cyberinfrastructure",
          title: 'Co-PI on new NSF funding with Professor Zhiling Lan on AI-Guided Resource Management...',
          description: "",
          section: "News",},{id: "news-presented-the-keynote-talk-intersection-of-ai-and-hpc-at-the-uic-college-of-engineering-s-ai-ecosystem-symposium",
          title: 'Presented the keynote talk: Intersection of AI and HPC at the UIC College...',
          description: "",
          section: "News",},{id: "news-featured-on-the-hpcpodcast-aurora-exascale-update-and-other-hpc-ai-topics-with-argonne-s-rick-stevens",
          title: 'Featured on the @HPCpodcast: Aurora Exascale Update and Other HPC-AI Topics with Argonne’s...',
          description: "",
          section: "News",},{id: "news-the-uic-college-of-engineering-has-honored-me-as-an-inaugural-warren-s-mcculloch-professorship-along-with-fellow-computer-science-professor-barbara-di-eugenio",
          title: 'The UIC College of Engineering has honored me as an inaugural Warren S....',
          description: "",
          section: "News",},{id: "news-appointed-as-the-fifth-director-of-the-electronic-visualization-laboratory-at-the-university-of-illinois-chicago",
          title: 'Appointed as the fifth Director of the Electronic Visualization Laboratory at the University...',
          description: "",
          section: "News",},{id: "news-presented-keynote-from-data-to-discovery-integration-of-hpc-and-experimental-science-at-the-ieee-chicago-130th-annual-fair-and-expo-highlighting-the-role-of-high-performance-computing-in-driving-scientific-breakthroughs",
          title: 'Presented Keynote; From Data to Discovery: Integration of HPC and Experimental Science, at...',
          description: "",
          section: "News",},{id: "news-athena-angara-hal-brynteson-fatima-jassim-and-hemalatha-ningappa-kondakundi-participated-in-a-nvidia-omniverse-livestream-youtube-highlighting-our-digital-twin-efforts",
          title: 'Athena Angara, Hal Brynteson, Fatima Jassim, and Hemalatha Ningappa Kondakundi; participated in a...',
          description: "",
          section: "News",},{id: "news-presented-an-ideas-talk-environmental-impact-of-large-language-models-at-the-las-faculty-research-symposium-ai-impact",
          title: 'Presented an Ideas Talk: Environmental Impact of Large Language Models at the LAS...',
          description: "",
          section: "News",},{id: "news-undergraduate-students-abdullah-ali-ricky-massa-and-aaqel-shaik-showcased-their-work-on-two-innovative-apple-vision-pro-applications-during-the-las-faculty-research-symposium-ai-impact",
          title: 'Undergraduate students Abdullah Ali, Ricky Massa, and Aaqel Shaik showcased their work on...',
          description: "",
          section: "News",},{id: "news-received-the-2024-distinguished-alumni-award-from-northern-illinois-university-s-college-of-liberal-arts-and-sciences",
          title: '🏆 Received the 2024 Distinguished Alumni Award from Northern Illinois University’s College of...',
          description: "",
          section: "News",},{id: "news-interviewed-for-a-wgn-story-on-aurora-by-mike-lowe-highlighting-aurora-and-the-advanced-photon-source-aps-at-argonne-national-laboratory",
          title: 'Interviewed for a WGN story on Aurora by Mike Lowe, highlighting Aurora and...',
          description: "",
          section: "News",},{id: "news-best-paper-bridging-gaps-in-simulation-analysis-through-a-general-purpose-bidirectional-steering-interface-with-ascent-2024-ieee-acm-international-workshop-on-in-situ-infrastructures-for-enabling-extreme-scale-analysis-and-visualization-isav",
          title: '🏆 Best Paper – Bridging Gaps in Simulation Analysis through a General Purpose,...',
          description: "",
          section: "News",},{id: "news-i-will-be-teaching-introduction-to-high-performance-computing-cs455-and-creative-coding-with-daria-tsoupikova-cs427-in-spring-2025",
          title: 'I will be teaching Introduction to High Performance Computing (CS455) and Creative Coding...',
          description: "",
          section: "News",},{id: "news-honored-with-ieee-chicago-section-distinguished-senior-research-and-development-award",
          title: '🏆 Honored with IEEE Chicago Section - Distinguished Senior Research and Development Award....',
          description: "",
          section: "News",},{id: "news-department-of-energy-s-aurora-supercomputer-goes-into-production-at-the-argonne-leadership-computing-facility-let-the-science-begin",
          title: 'Department of Energy’s Aurora Supercomputer goes into production at the Argonne Leadership Computing...',
          description: "",
          section: "News",},{id: "news-university-of-chicago-highlights-the-power-of-aurora-supercomputer",
          title: 'University of Chicago highlights the power of Aurora supercomputer.',
          description: "",
          section: "News",},{id: "news-honored-to-be-named-an-argonne-distinguished-fellow-a-recognition-given-to-laboratory-researchers-for-sustained-scientific-excellence-and-leadership-grateful-to-be-included-among-colleagues-who-have-made-lasting-contributions-to-argonne-s-mission",
          title: 'Honored to be named an Argonne Distinguished Fellow, a recognition given to laboratory...',
          description: "",
          section: "News",},{id: "news-excited-to-be-part-of-the-newly-funded-nsf-project-sage-grande-an-open-artificial-intelligence-testbed-for-edge-computing-and-intelligent-sensing-this-initiative-aims-to-advance-ai-research-by-developing-a-national-scale-testbed-that-integrates-edge-computing-with-intelligent-sensing-technologies-facilitating-real-time-data-analysis-and-decision-making-in-diverse-environments",
          title: 'Excited to be part of the newly funded NSF project, Sage Grande: An...',
          description: "",
          section: "News",},{id: "news-co-pi-on-new-nsf-project-with-professor-zhiling-lan-titled-satc-core-small-towards-secure-and-reliable-hpc-systems-via-intelligent-vulnerability-detection-focused-on-improving-security-and-resilience-in-high-performance-computing-through-ai-driven-analysis",
          title: 'Co-PI on new NSF project with Professor Zhiling Lan titled SaTC: Core: Small:...',
          description: "",
          section: "News",},{id: "news-excited-to-deliver-the-keynote-address-at-flexscience25-rethinking-specialization-and-thinking-about-the-evolution-of-hpc-facilities",
          title: 'Excited to deliver the keynote address at FlexScience25, Rethinking Specialization and Thinking about...',
          description: "",
          section: "News",},{id: "news-honored-to-be-part-of-the-team-recognized-with-the-best-visualization-award-at-the-2025-pearc-conference-for-our-paper-real-time-scientific-visualization-and-interactive-steering-for-high-performance-computing-simulations",
          title: 'Honored to be part of the team recognized with the Best Visualization Award...',
          description: "",
          section: "News",},{id: "news-participated-in-the-monterey-data-conference-panel-future-hpc-systems-and-challenges-in-the-changing-landscape-with-jim-lujan-lanl-hai-ah-nam-lbnl-nersc-and-matt-sieger-ornl",
          title: 'Participated in the Monterey Data Conference panel Future HPC Systems and Challenges in...',
          description: "",
          section: "News",},{id: "news-uic-students-highlight-research-at-escience-2025",
          title: 'UIC Students Highlight Research at eScience 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025_09_18-eSciencePosters/";
            },},{id: "news-participated-in-the-escience-2025-panel-future-of-ai-in-escience-with-daniel-s-katz-ncsa-and-university-of-illinois-urbana-champaign-carl-kesselman-university-of-southern-california-tanu-malik-university-of-missouri-and-kyle-chard-moderator-university-of-chicago-and-argonne-national-laboratory",
          title: 'Participated in the eScience 2025 panel Future of AI in eScience with Daniel...',
          description: "",
          section: "News",},{id: "news-our-paper-intuitive-computational-steering-using-ascent-and-trame-thomas-marrinan-andres-sewell-victor-mateevitsi-steve-petruzza-jifu-tan-dimitrios-fytanidis-and-michael-e-papka-was-selected-as-a-best-paper-finalist-at-escience-2025",
          title: 'Our paper Intuitive Computational Steering Using Ascent and Trame (Thomas Marrinan, Andres Sewell,...',
          description: "",
          section: "News",},{id: "news-excited-to-deliver-an-invited-talk-at-the-3rd-digital-twins-workshop-for-high-performance-computing-a-director-s-perspective-on-digital-twin-use-at-leadership-facilities",
          title: 'Excited to deliver an invited talk at the 3rd Digital Twins Workshop for...',
          description: "",
          section: "News",},{id: "news-best-paper-award-at-ieee-hipc-2025",
          title: 'Best Paper Award at IEEE HiPC 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025_12_17-HiPC-BestPaper/";
            },},{id: "projects-hq-visualization",
          title: 'HQ Visualization',
          description: "The project focuses on elevating scientific data visualization by merging traditional scientific visualization tools with advanced 3D modeling and animation techniques from the film industry.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/advrend/";
            },},{id: "projects-array-of-things",
          title: 'Array of Things',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aot/";
            },},{id: "projects-c2thep2",
          title: 'c2thep2',
          description: "A education focused program to train physics and computer science students in the computational tools necessary to advance the particle physics field.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/c2thep2/";
            },},{id: "projects-daimsl",
          title: 'daimsl',
          description: "Digital twins and AI-enabled  &amp; IMmmersive Environments for Automated Scientific Laboratories",
          section: "Projects",handler: () => {
              window.location.href = "/projects/daimsl/";
            },},{id: "projects-fount",
          title: 'FOUNT',
          description: "Provides hands-on educational modules in data systems, enhancing data proficiency across students and professionals through practical exercises and cloud integration, aiming to bolster innovation leadership.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/fount/";
            },},{id: "projects-sage-grande",
          title: 'Sage Grande',
          description: "An open artificial intelligence testbed integrating edge computing and intelligent sensing to advance AI-enabled scientific research and broaden participation in AI discovery.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/grande/";
            },},{id: "projects-digital-twin",
          title: 'digital twin',
          description: "Utilizing tele-robotic and eventually tele-autonomous operations with digital twins, to enhance virtual interaction and control.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/isotope/";
            },},{id: "projects-sage-ndc-c",
          title: 'Sage NDC-C',
          description: "This project creates a national-scale testbed for artificial intelligence research, connecting AI-enabled devices and environmental sensors across the U.S. to study Earth&#39;s climate and biosphere while training a diverse AI-skilled scientific workforce.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nairr/";
            },},{id: "projects-sage",
          title: 'Sage',
          description: "Sage is reusable cyberinfrastructure providing climate, traffic, and ecosystem scientists new data for building models to study coupled systems. The software and hardware components developed in Sage will be open-source and provide an open architecture to enable scientists from a range of fields to build their own intelligent sensor networks.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sage/";
            },},{id: "projects-seer",
          title: 'SEEr',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/projects/seer/";
            },},{id: "teachings-cs-340-data-structures-and-algorithm-analysis-niu",
          title: 'CS 340: Data Structures and Algorithm Analysis [NIU]',
          description: "Application of analysis and design techniques to non-numeric algorithms on data structures. Utilization of algorithmic analysis and design criteria in the selection of methods for data manipulation.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/cs340-data-structures/";
            },},{id: "teachings-cs-427-creative-coding",
          title: 'CS 427: Creative Coding',
          description: "Advanced topics in interactive media and virtual reality (VR) through the lens of creative coding. Students design and develop interactive VR projects using the Unity game engine, exploring the intersection of art, design, and computation.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/cs427-creative-coding/";
            },},{id: "teachings-cs-455-introduction-to-high-performance-computing",
          title: 'CS 455: Introduction to High Performance Computing',
          description: "Introduction to high performance computing covering fundamental HPC architecture concepts, parallel computing systems software techniques, and hands-on experience with supercomputers.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/cs455-hpc/";
            },},{id: "teachings-cs-494-edge-computing-systems",
          title: 'CS 494: Edge Computing Systems',
          description: "Edge computing brings computation out of the cloud and onto small, distributed devices physically located where data is generated. Students will design and implement complete edge pipelines that integrate embedded processors, sensors, communication protocols, and on-device machine learning.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/cs494-edge-computing/";
            },},{id: "teachings-cs-559-introduction-to-virtual-reality-niu",
          title: 'CS 559: Introduction to Virtual Reality [NIU]',
          description: "Introduction to Virtual and Augmented Reality covering immersion, presence, technology, perception, and health effects. Students work on content creation, interaction, and iterative design projects.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/cs559-virtual-reality/";
            },},{id: "teachings-cs-600-big-ideas-in-computer-science-niu",
          title: 'CS 600: Big Ideas in Computer Science [NIU]',
          description: "Lectures and discussions of current research and technical developments in computer science for beginning graduate research students. Topics emphasize open problems and recent scientific advances.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/cs600-big-ideas/";
            },},{id: "teachings-cs-627-data-visualization-niu",
          title: 'CS 627: Data Visualization [NIU]',
          description: "Introduction to data visualization with a focus on computer-based design approaches and techniques for manipulating and visualizing data from scientific, social science, financial, and medical domains.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/cs627-data-visualization/";
            },},{id: "teachings-cs-628-information-visualization-niu",
          title: 'CS 628: Information Visualization [NIU]',
          description: "Advanced theory and methods for manipulating and visualizing data of non-physical systems, focusing on transformation of multiple data sources and the latest information visualization techniques.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/cs628-information-visualization/";
            },},{
        id: 'social-cv',
        title: 'CV',
        section: 'Socials',
        handler: () => {
          window.open("/assets/pdf/mepcv.pdf", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%70%61%70%6B%61@%75%69%63.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mpapka", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=pQwfBFwAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/michaelpapka", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-6418-5767", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Michael-Papka/", "_blank");
        },
      },{
        id: 'social-spotify',
        title: 'Spotify',
        section: 'Socials',
        handler: () => {
          window.open("https://open.spotify.com/user/mrpizza1967", "_blank");
        },
      },];
