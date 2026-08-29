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
        },{id: "nav-people",
          title: "people",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
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
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "post-some-thoughts-on-ai-and-education",
        
          title: "Some thoughts on AI and Education",
        
        description: "On AI as a new tool in the classroom, what it changes for students and for faculty, and what stays true about teaching when one sits on every desk.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2026/ai/";
          
        },
      },{id: "post-the-long-and-winding-road",
        
          title: "The Long and Winding Road",
        
        description: "The Department of Energy&#39;s Aurora supercomputer enters full production at the Argonne Leadership Computing Facility, opening to the broader research community.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/aurora-goes-into-production/";
          
        },
      },{id: "post-coming-home-to-a-special-place",
        
          title: "Coming Home to a Special Place",
        
        description: "The University of Illinois Chicago has named me the fifth Director of the Electronic Visualization Laboratory, the interdisciplinary research lab that produced the original CAVE virtual reality system.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/evl-director-appointment/";
          
        },
      },{id: "post-worlds-colliding-at-the-lab",
        
          title: "Worlds Colliding at the Lab",
        
        description: "On hosting Rolling Stones bassist Darryl Jones at Aurora, a lifetime of shows and festivals, and what happens when the music half of your life and the science half finally share a hallway.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/darryl-jones-aurora-tour/";
          
        },
      },{id: "post-building-an-instrument-other-people-get-to-use",
        
          title: "Building an instrument other people get to use",
        
        description: "On testbeds as research instruments, the Array of Things lineage, and democratizing access to the computing continuum.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/nsf-sage-continuum-testbed-award/";
          
        },
      },{id: "post-why-visualization-still-matters-in-the-age-of-ai",
        
          title: "Why visualization still matters in the age of AI",
        
        description: "On the part of the pipeline a model can&#39;t do for you. Even when AI generates more candidates than any person can read, someone still has to look, share, and decide.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/chemograph-eurovis-honorable-mention/";
          
        },
      },{id: "post-there-is-a-national-lab-twenty-two-miles-from-chicago",
        
          title: "There is a national lab twenty-two miles from Chicago",
        
        description: "On who advanced computing is for, why a city magazine feature mattered more than another trade-press piece, and what it means that most Chicagoans haven&#39;t heard of Argonne.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/aurora-chicago-magazine-feature/";
          
        },
      },{id: "post-a-step-back-into-physics-by-way-of-computing",
        
          title: "A step back into physics, by way of computing",
        
        description: "On interdisciplinary work, the way careers loop back to old interests, and a DOE training grant that lands me close to where I started.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/c2thep2-doe-training-grant/";
          
        },
      },{id: "post-what-science-looks-like-when-the-silos-come-down",
        
          title: "What science looks like when the silos come down",
        
        description: "On the next decade of computational science, where simulation, data, and AI stop living in separate buildings, and what a Gordon Bell prize signals about that direction.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/gordon-bell-special-prize-virus-variants/";
          
        },
      },{id: "post-teaching-the-systems-by-letting-students-touch-them",
        
          title: "Teaching the systems by letting students touch them",
        
        description: "On the limits of pure lecture mode for data systems and advanced computing, and what changes when students can actually run the thing.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/nsf-fount-cybertraining-grant/";
          
        },
      },{id: "post-outreach-art-and-three-minutes-of-radio",
        
          title: "Outreach, art, and three minutes of radio",
        
        description: "On the value of public outreach, the discipline of three-minute formats, and why STEAM&#39;s A is doing real work.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2022/sound-of-science-radio-series/";
          
        },
      },{id: "post-iit-team-competes-surges-in-annual-cluster-challenge",
        
          title: "IIT team competes, surges in annual cluster challenge",
        
        description: "An IIT student team placed fourth in an annual 48-hour competition that challenges young computer scientists to tune and run a series of high-performance computing codes, non-stop, on a small cluster they build from their own design. The team of… Read more ›",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/iit-team-competes-surges-in-annual-cluster-challenge/";
          
        },
      },{id: "post-argonne-coding-campers-class-of-2015",
        
          title: "Argonne coding campers, class of 2015",
        
        description: "In July, I participated in Argonne’s first summer coding camp, a computer science education opportunity attended by 42 local high school students and organized in partnership with the DuPage County chapter of the Afro-Academic, Cultural, Technological and Scientific Olympics (ACT-SO).… Read more ›",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/argonne-coding-campers-class-of-2015/";
          
        },
      },{id: "post-cooley-more-memory-faster-results",
        
          title: "Cooley: more memory, faster results",
        
        description: "Today at ALCF, a powerful new cluster with terabytes of RAM and GPU memory stands ready to meet our user community’s data analysis needs. Cooley, the follow-on system to Tukey, will support more exploration capabilities, including in-situ analysis and unprecedented… Read more ›",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/cooley-more-memory-faster-results/";
          
        },
      },{id: "post-aurora-is-coming-step-one-theta",
        
          title: "Aurora is coming. Step one: Theta",
        
        description: "After much anticipation, the Department of Energy recently announced that industry partners Intel and Cray would be delivering Argonne’s next supercomputer, Aurora. The new system will be a first-of-its-kind product from the market-leading chipmaker and the renowned computer manufacturer, and… Read",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/aurora-is-coming-step-one-theta/";
          
        },
      },{id: "post-summer-training-to-the-extreme",
        
          title: "Summer training to the extreme",
        
        description: "Applications are now being accepted for two noteworthy summer training programs in Chicago aimed at cultivating future computational scientists. Both opportunities offer intensive, hands-on training on multiple topics, and access to leading experts currently working in the extreme-scale computing sp",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/summer-training-to-the-extreme/";
          
        },
      },{id: "post-happy-new-year",
        
          title: "Happy New Year!",
        
        description: "New Frontiers in Leadership Computing, part two of the CiSE Special Issue on Leadership Computing, is out and features four more boundary-pushing examples of research at the high-end of scientific computing: a scalable solver for aerospace industry work, a novel… Read more ›",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2015/happy-new-year/";
          
        },
      },{id: "post-enter-the-parallel-workflow",
        
          title: "Enter the parallel workflow",
        
        description: "Experimentalists from all over the world visit Argonne each year to use the ultra-bright X-ray photon beams produced here to peer inside materials. Research teams with beamline reservations, or ‘beamtime,’ are expected to set up, calibrate the detector, and man… Read more ›",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2014/enter-the-parallel-workflow/";
          
        },
      },{id: "post-cise-publishes-first-issue-dedicated-to-leadership-computing",
        
          title: "CiSE publishes first issue dedicated to Leadership Computing",
        
        description: "Advances in Leadership Computing, the first of a two-part CiSE Special Issue on Leadership Computing, is now available online. In two consecutive publications, this special issue will explore nine projects that are using leadership systems to expand the frontiers of… Read more ›",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2014/cise-publishes-first-issue-dedicated-to-leadership-computing/";
          
        },
      },{id: "post-bug-data-is-big-data",
        
          title: "Bug data is big data",
        
        description: "Digitized museum collections are the next ‘big data’ dataset The Field Museum of Natural History in Chicago holds a massive pinned insect collection of roughly 4.5 million specimens, dating back at least a century and contributed by entomologists and private… Read more ›",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2014/bug-data-is-big-data/";
          
        },
      },{id: "post-improved-cetus-development-system-enables-new-hpc-use-cases",
        
          title: "Improved Cetus development system enables new HPC use cases",
        
        description: "Mira’s testing and development system, a Blue Gene/Q called Cetus, has grown to 4 racks to allow users to debug their project code at an even larger scale before moving to Mira. This upgrade will support new types of HPC… Read more ›",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2014/new-and-improved-cetus-enables-new-hpc-use-cases/";
          
        },
      },{id: "post-ieee-vis-2015-we-have-a-venue",
        
          title: "IEEE VIS 2015 — We have a venue!",
        
        description: "In 2015, IEEE VIS will be held in Chicago for the first time ever. One of my first duties as general chair for VIS 2015 was to help secure the venue — and I’m delighted to announce that we now… Read more ›",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2014/ieee-vis-2015-we-have-a-venue-2/";
          
        },
      },{id: "post-summer-start-to-new-simulation-science-projects",
        
          title: "Summer start to new simulation science projects",
        
        description: "Each year, the DOE’s Advanced Scientific Computing Research program, or ASCR, dedicates roughly 30% of the computing resources at its three supercomputing facilities to projects pursuing DOE mission research. The yearlong ASCR Leadership Computing Challenge (ALCC) awards, which begin July… Read more",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2014/summer-start-to-new-simulation-science-projects/";
          
        },
      },{id: "post-ying-li-alcf-s-first-margaret-butler-postdoctoral-fellow",
        
          title: "Ying Li, ALCF’s first Margaret Butler Postdoctoral Fellow",
        
        description: "University of Southern California doctoral student Ying Li will join ALCF this fall as the 2014 Margaret Butler Postdoctoral Fellow. Li is the first recipient of the ALCF fellowship that was announced during the spring 2013 Celebration of Thirty Years… Read more ›",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2014/ying-li-alcfs-first-margaret-butler-postdoctoral-fellow/";
          
        },
      },{id: "post-how-to-write-a-successful-incite-proposal",
        
          title: "How to write a successful INCITE proposal",
        
        description: "On April 22 and May 15, the INCITE program will host short webinars for anyone who’s interested in applying for 2015 INCITE time on Titan, the 27-petaflops Cray XK7 at Oak Ridge Leadership Computing Facility, or on Mira, the 10-petaflops… Read more ›",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2014/how-to-write-a-successful-incite-proposal/";
          
        },
      },{id: "post-mira-provides-new-insight-into-subatomic-particles",
        
          title: "Mira provides new insight into subatomic particles",
        
        description: "A team of scientists has, for the first time, calculated several fundamental properties of the carbon-12 nucleus using one of the world’s fastest supercomputers, setting the stage for more reliable neutrino detector calibrations and better supernovae explosion simulations. The work,… Read more ›",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2014/mira-provides-new-insight-into-subatomic-particles/";
          
        },
      },{id: "post-a-unique-postdoc-opportunity-in-hpc",
        
          title: "A unique postdoc opportunity in HPC",
        
        description: "February 28 is the deadline to apply for the ALCF’s new computational science postdoctoral fellowship position, named in honor of the late Argonne mathematician and computer science pioneer Margaret Butler. From very early on, Margaret viewed computers as a technology… Read more ›",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2014/a-unique-postdoc-opportunity-in-hpc/";
          
        },
      },{id: "post-new-year-new-incite-and-new-insight",
        
          title: "New Year, New INCITE, and New Insight",
        
        description: "For most of us, New Year’s Day marks the start of new opportunities and renewed potential. Fittingly, January 1 also begins a new cycle of INCITE projects, and 2014 is the year that will see the highest number of awards… Read more ›",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2014/new-year-new-incite-and-new-insight/";
          
        },
      },{id: "post-beyond-the-standard-model",
        
          title: "Beyond the Standard Model",
        
        description: "The discovery last year at CERN of the Higgs boson — a particle that may well be responsible for all the mass in the universe — was momentous to physicists everywhere. The revelation of Higgs is critical to validating a… Read more ›",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2013/beyond-the-standard-model/";
          
        },
      },{id: "post-strong-alcf-showing-at-sc13",
        
          title: "Strong ALCF showing at SC13",
        
        description: "The highly competitive technical program of the annual Supercomputing conference shows broad participation from ALCF researchers this year. Several papers coauthored by ALCF researchers were accepted — one of which is also a finalist for the ACM Gordon Bell Prize… Read more ›",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2013/strong-alcf-showing-at-sc13/";
          
        },
      },{id: "post-secrets-of-the-universe-coming-to-an-imax-screen-near-you-in-2016",
        
          title: "Secrets of the Universe — Coming to an IMAX screen near you in...",
        
        description: "I’m thrilled to be part of a new NSF-funded IMAX and digital 3D documentary film project that will introduce audiences to the major scientific instruments being used to explore the origins of the universe. Chief among these are the Large… Read more ›",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2013/secrets-of-the-universe-coming-to-an-imax-screen-near-you-in-2016/";
          
        },
      },{id: "post-accelerating-the-discovery-of-alternative-fuel-sources",
        
          title: "Accelerating the discovery of alternative fuel sources",
        
        description: "In many ways, biofuel research is like modern day alchemy. The transmutation of biomass materials — which includes anything from kitchen and latrine waste to stalky, non-edible plants — into a sustainable and renewable energy source involves catalysts and chemical… Read more ›",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2013/accelerating-the-discovery-of-alternative-fuel-sources/";
          
        },
      },{id: "post-the-beginning-of-a-change",
        
          title: "The beginning of a change",
        
        description: "After posting a few months back on the exciting STEAM work at RISD, and the push to integrate art into STEM (science, technology, engineering, and mathematics) curricula, I was eager to attend the “The Art of Science Learning” talk at… Read more ›",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2013/the-beginning-of-a-change/";
          
        },
      },{id: "post-spotlight-on-leadership-class-computing",
        
          title: "Spotlight on leadership-class computing",
        
        description: "I’m pleased to announce that Jim Hack and I will be co-editing a special issue of Computing in Science &amp; Engineering magazine on the topic of leadership computing, to be published in fall 2014. The goal of this issue is… Read more ›",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2013/spotlight-on-leadership-class-computing/";
          
        },
      },{id: "post-thanks-reddit-users",
        
          title: "Thanks, Reddit Users",
        
        description: "I had a great time hosting an “Ask Me Anything” subreddit last Monday. I spent over two hours answering questions posted by Reddit users; mostly about the ALCF, how supercomputing is used in research, and where I think computing is… Read more ›",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2013/thanks-reddit-users/";
          
        },
      },{id: "post-extreme-scale-computing-training-course-class-of-2013",
        
          title: "Extreme-Scale Computing Training Course: Class of 2013!",
        
        description: "Today I met with the first class of young scientists and researchers to participate in the Argonne Training Program on Extreme-Scale Computing. The trainees are now into week two of lectures and hands-on sessions aimed at teaching them how to… Read more ›",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2013/extreme-scale-computing-training-course-class-of-2013/";
          
        },
      },{id: "post-from-lego-bricks-to-c-promoting-computational-thinking-skills-in-u-s-schools",
        
          title: "From Lego bricks to C++: promoting computational thinking skills in U.S. schools",
        
        description: "TEALS (Technology Education And Literacy in Schools) is a nonprofit tech-literacy teaching program that grew out of Microsoft engineer Kevin Wang’s desire to teach computer science in his spare time. Microsoft liked it, funded it, and made Wang its chief… Read more ›",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2013/from-lego-bricks-to-c-promoting-computational-thinking-skills-in-u-s-schools/";
          
        },
      },{id: "post-exploring-energy-themes-artistically",
        
          title: "Exploring energy themes artistically",
        
        description: "This summer Argonne is hosting ART ENERGY FUTURE, a collaborative contemporary art exhibit curated in connection with a 2012 United Nations global awareness campaign about the importance of increasing sustainable access to energy, energy efficiency, and renewable energy. The traveling… Read more ›",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2013/exploring-energy-themes-artistically/";
          
        },
      },{id: "post-expanding-the-community-accelerating-mission-critical-research",
        
          title: "Expanding the community, accelerating mission-critical research",
        
        description: "Summertime, specifically July 1, is when the ASCR Leadership Computing Challenge (ALCC) projects get underway at the Leadership Computing Facilities at Argonne and Oak Ridge, and at the National Energy Research Scientific Computing Center (NERSC). The supercomputing centers will support… Read more ›",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2013/expanding-the-community-accelerating-mission-critical-research/";
          
        },
      },{id: "post-parallel-gpgpu-application-takes-aim-at-tumors",
        
          title: "Parallel GPGPU application takes aim at tumors",
        
        description: "Protons, specifically proton beams, are increasingly being used to treat cancer with more precision. To plan for proton treatment, X-ray computed tomography (X-ray CT) is typically used to produce an image of the tumor site — a process that involves… Read more ›",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2013/parallel-gpgpu-application-takes-aim-at-tumors/";
          
        },
      },{id: "post-cracking-the-source-of-crackle-in-supersonic-jet-noise",
        
          title: "Cracking the source of crackle in supersonic jet noise",
        
        description: "The ASCR Leadership Computing Challenge projects that make up roughly 30% of the time awarded on ALCF supercomputers each year go to support “high-risk, high-payoff” simulations of interest to the DOE. Stanford’s Parviz Moin used his 60 million hour award… Read more ›",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2013/cracking-the-source-of-crackle-in-supersonic-jet-noise/";
          
        },
      },{id: "post-renewed-urgency-in-the-race-to-exascale",
        
          title: "Renewed urgency in the race to exascale",
        
        description: "At a special two-day symposium last month, Argonne invited back many of the visionaries who in some way contributed to the lab’s 30 years in advancing parallel computing and computational science. Most if not all of these individuals have made… Read more ›",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2013/renewed-urgency-in-the-race-to-exascale/";
          
        },
      },{id: "post-critical-thinking-skills-what-designers-have-and-u-s-industry-needs",
        
          title: "Critical thinking skills: what designers have and U.S. industry needs",
        
        description: "From the time I was an undergraduate physics major, I’ve also been interested in the creative activities intrinsic to art and design fields. Critique, conceptualization, and iteration are all useful practices for developing new ways of seeing reality. Good artists… Read more ›",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2013/critical-thinking-skills-what-designers-have-and-u-s-industry-needs/";
          
        },
      },{id: "post-mira-science-run-probes-turbulence-physics",
        
          title: "Mira science run probes turbulence physics",
        
        description: "Earlier this month, University of Texas’s Robert Moser initiated the first full-scale production run on Mira, the ALCF’s new 10-petaflops system. Moser is examining the complex physics of a specific region of wall-bounded turbulence, which is central to understanding the… Read more ›",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2013/mira-science-run-probes-turbulence-physics/";
          
        },
      },{id: "post-march-14-argonne-outloud-public-lecture",
        
          title: "March 14 Argonne OutLoud Public Lecture",
        
        description: "Research teams from around the world are preparing to use Mira, Argonne’s new petaflops supercomputer, to tackle the most challenging problems in science and engineering today. What happens when a star explodes? Can we find alternative fuel sources? How hot… Read more ›",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2013/march-14-argonne-outloud-public-lecture/";
          
        },
      },{id: "post-mira-alcf-s-next-generation-supercomputer",
        
          title: "Mira: ALCF’s next-generation supercomputer",
        
        description: "Mira will provide billions more processor-hours per year to the scientists, engineers, and researchers who use it to run complex simulations of everything from nuclear reactors to blood vessels through allocations awarded through INCITE, ALCC and Director’s Discretionary programs. [Photo… Read more",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2013/mira-alcfs-next-generation-supercomputer/";
          
        },
      },{id: "post-alcf-s-early-science-program-science-from-day-one",
        
          title: "ALCF’s Early Science Program – science from day one",
        
        description: "Over the next two months, ALCF’s Early Science Program projects are expected to use approximately 2 billion core-hours on Mira! These select sixteen projects are based on state-of-the-art petascale parallel applications and span a wide range of scientific fields, numerical… Read more ›",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2013/alcfs-early-science-program-science-from-day-one/";
          
        },
      },{id: "post-blood-clots-are-ready-for-their-close-up",
        
          title: "Blood clots are ready for their close-up",
        
        description: "Leopold Grinberg of Brown University and an international team of researchers have used three of the world’s fastest supercomputers to create a detailed and sophisticated model of clot formation in an aneurism — a bulging of a vessel wall as… Read more ›",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/blood-clots-are-ready-for-their-close-up/";
          
        },
      },{id: "post-record-allocation-for-alcf-2-83b-core-hours",
        
          title: "Record allocation for ALCF – 2.83B core-hours",
        
        description: "The DOE’s Leadership Computing Facilities at Argonne and Oak Ridge national laboratories have awarded a combined 4.7 billion supercomputing core hours to 61 science and engineering projects through its 2013 Innovative and Novel Computational Impact on Theory and Experiment program.… Read more ›",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2012/record-allocation-for-alcf-2-83b-core-hours/";
          
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
          section: "News",},{id: "news-congratulations-to-my-phd-student-carla-floricel-on-successfully-defending-her-dissertation-patient-cohort-visual-analytics-for-post-treatment-care",
          title: 'Congratulations to my PhD student Carla Floricel on successfully defending her dissertation, Patient...',
          description: "",
          section: "News",},{id: "news-excited-to-deliver-an-invited-talk-at-the-3rd-digital-twins-workshop-for-high-performance-computing-a-director-s-perspective-on-digital-twin-use-at-leadership-facilities",
          title: 'Excited to deliver an invited talk at the 3rd Digital Twins Workshop for...',
          description: "",
          section: "News",},{id: "news-excited-to-serve-as-the-argonne-pi-for-the-american-science-cloud-bringing-4m-in-new-funding-to-argonne-as-part-of-the-multilab-effort-led-by-oak-ridge-national-laboratory-the-american-science-cloud-will-host-and-distribute-ai-models-and-scientific-data-across-doe-s-national-labs-industry-partners-and-the-research-community-in-support-of-the-genesis-mission",
          title: 'Excited to serve as the Argonne PI for the American Science Cloud, bringing...',
          description: "",
          section: "News",},{id: "news-congratulations-to-kunting-qi-on-best-paper-award-at-ieee-hipc-2025",
          title: 'Congratulations to Kunting Qi on Best Paper Award at IEEE HiPC 2025',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/2025_12_17-HiPC-BestPaper/";
            },},{id: "news-delivered-the-keynote-from-array-of-things-to-sage-grande-a-decade-of-intelligent-edge-computing-for-science-at-cities-in-motion-transportation-data-innovation-challenge-a-joint-uic-and-university-of-toronto-workshop",
          title: 'Delivered the keynote From Array of Things to Sage Grande: A Decade of...',
          description: "",
          section: "News",},{id: "news-presented-from-batch-to-service-at-the-tpc26-bof-ai-frameworks-for-multimodal-data-access-and-use-organized-by-manish-parashar-and-ilkay-altintas",
          title: 'Presented From Batch to Service at the TPC26 BoF AI Frameworks for Multimodal...',
          description: "",
          section: "News",},{id: "news-served-as-a-panelist-on-future-of-hpc-systems-and-infrastructure-at-the-bill-gropp-workshop-chaired-by-daniel-s-katz-alongside-larry-kaplan-bill-kramer-and-irene-qualters",
          title: 'Served as a panelist on Future of HPC Systems and Infrastructure at the...',
          description: "",
          section: "News",},{id: "news-at-hpdc-2026-gave-a-kizashi-talk-the-next-user-never-sleeps-chaired-by-devesh-tiwari-chaired-the-scientific-applications-at-scale-session-and-was-a-panelist-on-barney-maccabe-s-panel-data-centers-information-misinformation-and-the-future-of-large-scale-computing",
          title: 'At HPDC 2026: gave a Kizashi Talk, The Next User Never Sleeps (chaired...',
          description: "",
          section: "News",},{id: "news-participated-in-the-2026-sage-summer-hackathon-at-uic-s-electronic-visualization-laboratory-july-19-28-including-the-hack-a-thon-pi-meeting-and-advisory-meeting",
          title: 'Participated in the 2026 Sage Summer Hackathon at UIC’s Electronic Visualization Laboratory, July...',
          description: "",
          section: "News",},{id: "news-gave-the-alcf-facility-update-current-and-future-hpc-systems-argonne-leadership-computing-facility-in-the-genesis-infrastructure-current-and-future-hpc-systems-plenary-at-the-2026-doe-ascr-computer-science-pi-meeting-in-rockville-md-alongside-facility-updates-from-nersc-olcf-esnet-and-hpdf",
          title: 'Gave the ALCF facility update, Current and Future HPC Systems: Argonne Leadership Computing...',
          description: "",
          section: "News",},{id: "news-teaching-edge-computing-systems-cs494-for-the-second-time-starting-fall-2026-a-repeat-of-the-spring-2026-offering-with-a-number-of-improvements",
          title: 'Teaching Edge Computing Systems (CS494) for the second time, starting Fall 2026, a...',
          description: "",
          section: "News",},{id: "projects-advanced-computing-and-scientific-discovery",
          title: 'Advanced Computing and Scientific Discovery',
          description: "Advanced computing research supporting scientific discovery, spanning high-performance computing systems, AI and large-scale data analysis, scientific visualization, immersive computing, and emerging computing architectures.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/advrend/";
            },},{id: "projects-aimci-ai-guided-resource-management-for-advanced-cyberinfrastructure",
          title: 'AIMCI: AI-Guided Resource Management for Advanced Cyberinfrastructure',
          description: "Applies predictive AI models, reinforcement learning, and human-in-the-loop simulation to coordinate a facility&#39;s heterogeneous computing resources as a unified pool for a broad spectrum of applications.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/aimci/";
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
            },},{id: "projects-ecohpc-energy-conscious-high-performance-computing",
          title: 'EcoHPC: Energy-Conscious High Performance Computing',
          description: "Treats power as a schedulable resource on heterogeneous HPC systems, developing recommendation-driven scheduling, multi-objective optimization, and adaptive runtimes to cut wasted energy without sacrificing performance.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ecohpc/";
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
            },},{id: "projects-nairr-software-workshop",
          title: 'NAIRR Software Workshop',
          description: "A national workshop convening academia, industry, and government to define the software infrastructure needed for an accessible, trustworthy national AI research resource.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/nairr-workshop/";
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
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%70%61%70%6B%61@%75%69%63.%65%64%75", "_blank");
        },
      },{
        id: 'social-github_repo',
        title: 'Github_repo',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/mpapka", "_blank");
        },
      },{
        id: 'social-scholar_profile',
        title: 'Scholar_profile',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=pQwfBFwAAAAJ", "_blank");
        },
      },{
        id: 'social-linkedin_profile',
        title: 'Linkedin_profile',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/michaelpapka", "_blank");
        },
      },{
        id: 'social-orcid_profile',
        title: 'Orcid_profile',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-6418-5767", "_blank");
        },
      },{
        id: 'social-researchgate_profile',
        title: 'Researchgate_profile',
        section: 'Socials',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Michael-Papka/", "_blank");
        },
      },{
        id: 'social-spotify_profile',
        title: 'Spotify_profile',
        section: 'Socials',
        handler: () => {
          window.open("https://open.spotify.com/user/mrpizza1967", "_blank");
        },
      },];
