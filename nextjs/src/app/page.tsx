export default function Page() {
    return (
      <main className="bg-violet-100">
        <HeroSection />
        <Aspirations />
        <SocialProof />
        <WhatWeDo />
        <TopRatedOnUpwork />
        <CTA3Tier />
      </main>
    )
}

function CTASqueeze() {
    return (<>
        <section className="bg-violet-100 text-neutral-950 p-3 isolate pb-72">
          <div className="m-auto max-w-7xl p-10 text-center">
            <form className="w-96 m-auto p-4 rounded-xl" action="/book-now" method="GET">
              <input name="name" required placeholder="Name" className="bg-neutral-50 rounded-xl p-4 mt-4 shadow-md"/>
              <input name="email" required type="email" placeholder="Email" className="bg-neutral-50 rounded-xl p-4 mt-4 shadow-md"/>
              <button className="cta-button bg-neutral-50 tracking-wider text-3xl font-semibold p-4 mt-10 max-w-xs text-neutral-900">
                Book a Call
              </button>
            </form>
          </div>
        </section>
    </>)
}

function CTA3Tier() {
    return (
        <section className="bg-violet-100 text-neutral-950 p-3 isolate pb-72">
          <div className="m-auto max-w-7xl p-10 text-center">
            <h3 className="m-10 text-center text-4xl font-semibold tracking-wide">How can we help you?</h3>
            <div className="w-full grid grid-cols-3 text-left gap-4">
                <div className="m-auto bg-white p-10 rounded-xl shadow-md h-full flex flex-col gap-6 justify-between">
                  <div>
                    <h4 className="text-left text-lg font-semibold tracking-wide">
                      Project planning consultation
                    </h4>
                    <p className="mt-4">
                      Need help creating a game plan? Is your idea so crazy
                      you're not sure it's possible? Are you struggling to
                      estimate costs?
                    </p>
                    <p className="mt-4">
                      We'll go over you project, I'll take notes all your
                      questions and project requirements. After that meeting
                      I'll do the necessary research and comeback with a
                      gameplan tailor made for you.
                    </p>
                  </div>
                  <div>
                    <p className="text-center text-4xl font-semibold">
                      $479
                    </p>
                    <a href="/project-planning-and-consultation">
                      <div className="bg-violet-700 text-white font-semibold p-4 rounded-lg mt-4 text-center" >
                        Book now
                      </div>
                    </a>
                  </div>
                </div>
                <div className="m-auto bg-white p-10 rounded-xl shadow-md h-full flex flex-col gap-6 justify-between">
                  <div>
                    <h4 className="text-left text-lg font-semibold tracking-wide">
                      Software Development
                    </h4>
                    <p className="mt-4">
                      Are you ready to start building your application? Do you
                      know exactly what you need?
                    </p>
                    <p className="mt-4">
                      Let's set up some milestones and get building!
                    </p>
                  </div>
                  <div>
                    <p className="text-center text-4xl font-semibold">
                      Starting at $5000
                    </p>
                    <div className="bg-violet-700 text-white font-semibold p-4 rounded-lg mt-4 text-center" >
                      Start building
                    </div>
                  </div>
                </div>
                <div className="m-auto bg-white p-10 rounded-xl shadow-md h-full flex flex-col gap-6 justify-between">
                  <div>
                    <h4 className="text-left text-lg font-semibold tracking-wide">
                      Fractional CTO
                    </h4>
                    <p className="mt-4">
                      Do you need a CTO but are not ready to pay their full-time +250k Salary?
                    </p>
                    <p className="mt-4">
                      Are you looking for key players to help manage and scale
                      your IT infrastructure? 
                    </p>
                    <p className="mt-4">
                      Do you need someone with technical experience on your
                      team to help make sound business decisions? 
                    </p>
                  </div>
                  <div>
                    <div className="bg-violet-700 text-white font-semibold p-4 rounded-lg mt-4 text-center" >
                      Interview
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </section>
    )
}


function HeroSection() {
    return (
      <section className="isolate z-0 bg-neutral-50 text-neutral-50">
        <a href="/blog" className="text-white z-10 float-end p-10 underline underline-offset-2 mix-blend-difference">Blog</a>
        <div className="h-screen w-screen absolute rotate-45 hidden">
          <div className="h-screen w-1/2 right-0 absolute bg-neutral-900" />
        </div>
        <div className="liquid overflow-hidden" />
        <div className="h-screen flex items-center justify-center">
          <div className="max-w-xl m-3">
            <h1 className="text-6xl md:text-8xl font-semibold mix-blend-difference text-white">Launch&nbsp;Big. Lead&nbsp;Bold.</h1>
            <h2 className="mt-4 text-2xl font-semibold text-violet-100 tracking-widest">Helping early entrepreneurs turn ambitious ideas into reality.</h2>
            <a href="#CTA" className="cta-button tracking-wider text-3xl font-semibold p-4 mt-4 max-w-xs text-neutral-900">
              Let's Start Building
            </a>
          </div>
        </div>
      </section>
    )
}

function SocialProof() {
    return (<>
        <section className="img-bg bg-violet-100 text-neutral-950 p-3 md:p-20 mt-24 isolate shadow-xl">
          <h3 className="text-7xl font-semibold text-center m-24 text-neutral-50">We help people like you</h3>
          <div className="flex gap-5 justify-center items-center flex-wrap max-w-5xl mx-auto m-24">
            <div className="w-96 shadow-md rounded-xl p-10 bg-neutral-50">
              <p className="">
              <i>
              "Justin is a highly skilled developer who has been coding since his teen age. His work on React Native projects is of top quality. He has used built in components as much as possible so the app feels very much like a native app. He has made sure that the RN app has least re-renders so it works fast. He was also able to take the feedback well on making the UI implementation pixel perfect. His availability and communication has been great too. Would highly recommend him any day!"
                  </i>
              </p>
            </div>
            <div className="w-72 shadow-md rounded-xl p-10 bg-neutral-50">
              <p className="">
              <i>
              "This was the second time I worked with Justin and the feedback is same as before. Justin is a great developer to work with and I'll be starting a new project with him soon."
                  </i>
              </p>
            </div>
            <div className="w-72 shadow-md rounded-xl p-10 bg-neutral-50">
              <p className="">
              <i>
              "Justin is super responsive and solved our issue with Stripe quickly. This is my 2nd time using his services, and will continue to do so for any future Stripe integrations."
                  </i>
              </p>
            </div>
            <div className="w-96 shadow-md rounded-xl p-10 bg-neutral-50">
              <p className="">
              <i>
              "It was a pleasure working with Justin, his understanding of React Native apps and GraphQL APIs is great! He even suggested me changes to the GraphQL contract according to the best practices. He will continue to consult me on this project."
                  </i>
              </p>
            </div>
            <div className="w-72 shadow-md rounded-xl p-10 bg-neutral-50">
              <p className="">
              <i>
              "Justin was attentive and helped resolve our issue in a timely fashion. He was easy to work with and helpful at explaining our options. Will definitely use him again."
                  </i>
              </p>
            </div>
          </div>
        </section>
    </>)
}

function TopRatedOnUpwork() {
    return (
        <section>
          <div>
            <h3 className="text-5xl font-semibold text-center mb-14"  id="CTA">Top rated on upwork</h3>
            <div className="p-4">
              <img src="/upwork.png" className="m-auto bg-white p-10 rounded-xl shadow-md" />
            </div>
          </div>
        </section>
    )
}

function Aspirations() {
    return (<>
        <section className="bg-violet-100 text-neutral-950 p-3 md:p-10 isolate">
          <div className="m-auto max-w-7xl p-10 text-center">
              <h3 className="m-10 text-left text-4xl font-semibold tracking-wide">Do you aspire to build a product users love?</h3>
              <h3 className="m-10 text-left text-4xl font-semibold tracking-wide">Are you driven to make your mark on the world?</h3>
              <h3 className="m-10 text-left text-4xl font-semibold tracking-wide">Are you ready to take the leap and build?</h3>
              <p className="m-10 text-lg max-w-3xl text-left">
                You have a bold vision, and you’re not here to play small.
                Whether it’s disrupting an industry, creating something
                entirely new, or simply improving lives, your drive to make a
                difference is what sets you apart
              </p>
          </div>
        </section>
    </>)
}

function WhatWeDo() {
    return (<>
        <section className="bg-violet-100 text-neutral-950 p-3 md:p-10 isolate">
          <div className="m-auto max-w-7xl p-10 text-center">
              <h3 className="m-10 text-left text-4xl font-semibold tracking-wide">We Offer Development, Consulting & Fractional CTO services</h3>
              <p className="m-10 mt-4 text-lg max-w-3xl text-left">
                Building Software and IT infrastructure is complicated
                business. It's made even worse when you're trying to do
                something new. 
              </p>
              <p className="m-10 mt-4 text-lg max-w-3xl text-left">
                When building something new we've found that companies need to
                fill their team with people who understand their goals
                throughly. Someone who understands technology at a deep level,
                but who also understands how to asses how you business can
                benifit from technology.
              </p>
              <h3 className="m-10 text-left text-4xl font-semibold tracking-wide">Our service can take some or all of these forms</h3>
              <ol className="m-10 mt-4 pl-10 text-md max-w-3xl text-left list-disc">
                <li>
                  Managing IT operations in an efficient and secure maner.
                </li>
                <li>
                  Overseeing product development.
                </li>
                <li>
                  Evaluating and implementing new technologies.
                </li>
                <li>
                  Develop and supervise the onboarding and offboarding process.
                </li>
                <li>
                  Discovering reliable and recurring revenu streams by
                  determining product market fit.
                </li>
                <li>
                  Enabling scaling of operations and future development.
                </li>
              </ol>
          </div>
        </section>
    </>)
}
