'use client'

import { useState } from 'react'

export default function Home() {
  const [selectedPlatform, setSelectedPlatform] = useState('nextjs')

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Platform Selector */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-8 py-4">
            <button
              onClick={() => setSelectedPlatform('nextjs')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedPlatform === 'nextjs'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Next.js Demo
            </button>
            <button
              onClick={() => setSelectedPlatform('wordpress')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedPlatform === 'wordpress'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              WordPress Demo
            </button>
            <button
              onClick={() => setSelectedPlatform('drupal')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedPlatform === 'drupal'
                  ? 'bg-blue-600 text-white'
                  : 'text-gray-600 hover:text-blue-600'
              }`}
            >
              Drupal Demo
            </button>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Second Chance</span>{' '}
                  <span className="block text-indigo-600 xl:inline">Developer Sponsorship</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Support justice-involved developers on their path to redemption and professional success. 
                  Your sponsorship provides mentorship, resources, and opportunities for those rebuilding their lives through code.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="#sponsor"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                    >
                      Sponsor a Developer
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="#learn-more"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
            alt="Developer working on computer"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white" id="learn-more">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Impact</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Transforming Lives Through Technology
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Every sponsorship creates lasting change in someone's life and strengthens our tech community.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Skill Development</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Provide access to coding bootcamps, certifications, and hands-on projects that build real-world skills.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Mentorship Network</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Connect sponsored developers with experienced professionals for guidance and career support.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2V6" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Job Placement</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Partner with employers who value second chances and provide pathways to meaningful employment.
                </dd>
              </div>

              <div className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Community Support</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">
                  Build a supportive community of peers and advocates who understand the journey to redemption.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Widget Demo Section */}
      <div className="bg-gray-50 py-12" id="sponsor">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Embeddable Sponsorship Widget
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Platform: {selectedPlatform === 'nextjs' ? 'Next.js' : selectedPlatform === 'wordpress' ? 'WordPress' : 'Drupal'}
            </p>
          </div>
          
          {/* Widget Container */}
          <div className="mt-8 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 border-2 border-dashed border-gray-300">
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Your Widget Will Appear Here
                </h3>
                <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-lg">
                  <h4 className="text-lg font-bold mb-2">Sponsor a Second Chance Developer</h4>
                  <p className="mb-4">Help someone rebuild their life through code</p>
                  <button className="bg-white text-indigo-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                    Sponsor Now - $50/month
                  </button>
                </div>
                <p className="mt-4 text-sm text-gray-500">
                  This widget can be embedded on any {selectedPlatform === 'nextjs' ? 'Next.js' : selectedPlatform === 'wordpress' ? 'WordPress' : 'Drupal'} site
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Integration Code Section */}
      <div className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-900 rounded-lg p-6 overflow-hidden min-h-0 max-h-96">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-white font-medium">
                {selectedPlatform === 'nextjs' ? 'Next.js Integration' : 
                 selectedPlatform === 'wordpress' ? 'WordPress Integration' : 
                 'Drupal Integration'}
              </h3>
              <span className="text-gray-400 text-sm">
                {selectedPlatform === 'nextjs' ? 'TypeScript + React' : 
                 selectedPlatform === 'wordpress' ? 'PHP + HTML' : 
                 'Twig + YAML'}
              </span>
            </div>
            <div className="text-gray-300 font-mono text-sm space-y-1 max-h-64 overflow-y-auto leading-tight">
              {selectedPlatform === 'nextjs' && (
                <>
                  <div><span className="text-blue-400">import</span> Script <span className="text-blue-400">from</span> <span className="text-green-400">'next/script'</span></div>
                  <div></div>
                  <div><span className="text-blue-400">export default function</span> <span className="text-yellow-400">Layout</span>() {`{`}</div>
                  <div>&nbsp;&nbsp;<span className="text-blue-400">return</span> (</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-gray-500">&lt;Script</span> <span className="text-red-400">src</span>=<span className="text-green-400">"/widget/sponsorship-widget.js"</span> <span className="text-gray-500">/&gt;</span></div>
                  <div>&nbsp;&nbsp;)</div>
                  <div>{`}`}</div>
                  <div></div>
                  <div><span className="text-gray-500">// Use anywhere:</span></div>
                  <div><span className="text-gray-500">&lt;div</span> <span className="text-red-400">data-sc-widget</span>=<span className="text-green-400">"sponsorship"</span> <span className="text-gray-500">/&gt;</span></div>
                </>
              )}
              {selectedPlatform === 'wordpress' && (
                <>
                  <div><span className="text-blue-400">function</span> <span className="text-yellow-400">enqueue_sponsorship_widget</span>() {`{`}</div>
                  <div>&nbsp;&nbsp;<span className="text-yellow-400">wp_enqueue_script</span>(</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">'sponsorship-widget'</span>,</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-yellow-400">get_template_directory_uri</span>() . <span className="text-green-400">'/js/sponsorship-widget.js'</span></div>
                  <div>&nbsp;&nbsp;);</div>
                  <div>{`}`}</div>
                  <div><span className="text-yellow-400">add_action</span>(<span className="text-green-400">'wp_enqueue_scripts'</span>, <span className="text-green-400">'enqueue_sponsorship_widget'</span>);</div>
                  <div></div>
                  <div><span className="text-gray-500">// In templates:</span></div>
                  <div><span className="text-gray-500">&lt;div</span> <span className="text-red-400">data-sc-widget</span>=<span className="text-green-400">"sponsorship"</span><span className="text-gray-500">&gt;&lt;/div&gt;</span></div>
                </>
              )}
              {selectedPlatform === 'drupal' && (
                <>
                  <div><span className="text-gray-500"># In your_theme.libraries.yml</span></div>
                  <div><span className="text-blue-400">sponsorship-widget</span>:</div>
                  <div>&nbsp;&nbsp;<span className="text-blue-400">js</span>:</div>
                  <div>&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-green-400">js/sponsorship-widget.js</span>: {`{}`}</div>
                  <div></div>
                  <div><span className="text-gray-500">// In .theme file:</span></div>
                  <div><span className="text-blue-400">function</span> <span className="text-yellow-400">mytheme_preprocess_page</span>(&amp;$variables) {`{`}</div>
                  <div>&nbsp;&nbsp;$variables[<span className="text-green-400">'#attached'</span>][<span className="text-green-400">'library'</span>][] = <span className="text-green-400">'mytheme/sponsorship-widget'</span>;</div>
                  <div>{`}`}</div>
                  <div></div>
                  <div><span className="text-gray-500">// In templates:</span></div>
                  <div><span className="text-gray-500">&lt;div</span> <span className="text-red-400">data-sc-widget</span>=<span className="text-green-400">"sponsorship"</span><span className="text-gray-500">&gt;&lt;/div&gt;</span></div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <p className="text-gray-400 text-sm">Demo Platform: {selectedPlatform === 'nextjs' ? 'Next.js' : selectedPlatform === 'wordpress' ? 'WordPress' : 'Drupal'}</p>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; 2024 Second Chance Developer Sponsorship. Supporting justice-involved individuals.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}