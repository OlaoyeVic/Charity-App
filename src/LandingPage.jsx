import food from '../src/assets/food.jpg'
import education from '../src/assets/education.jpg'
import relief from '../src/assets/relief.jpg'
import healthcare from '../src/assets/healthcare.jpg'
import furqan from '../src/assets/furqan.jpg'
import work1 from '../src/assets/work1.jpg'
import work2 from '../src/assets/work2.jpg'
import work3 from '../src/assets/work3.jpg'
import work4 from '../src/assets/work4.jpg'
import logo from '../src/assets/logof.jpg'

const LandingPage = () => {
    return (
        <div class="bg-white pb-6 sm:pb-8 lg:pb-12">
            <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                <header class="mb-8 flex items-center justify-between py-4 md:mb-12 md:py-8 xl:mb-16">
                    <a href="/" class="inline-flex items-center gap-2.5 text-2xl font-bold text-black md:text-3xl" aria-label="logo">
                        <img src={logo} alt='The Furqan Channel Logo' className='h-20 w-20' />
                        The Furqan Channel
                    </a>

                    <nav class="hidden gap-12 lg:flex">
                        <a href="#home" class="text-lg font-semibold text-indigo-500">Home</a>
                        <a href="#how" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">How to Help</a>
                        {/* <a href="#" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">Pricing</a> */}
                        <a href="#our-work" class="text-lg font-semibold text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700">About our Work</a>
                    </nav>

                    <a href="https://whatsapp.com/channel/0029Va4xfmG2kNFiIZZOD80k" class="hidden rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:inline-block">Contact Us</a>
                    <button type="button" class="inline-flex items-center gap-2 rounded-lg bg-gray-200 px-2.5 py-2 text-sm font-semibold text-gray-500 ring-indigo-300 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
                    </svg>
                        Menu
                    </button>
                </header>

                <section class="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row" id='home'>
                    <div class="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
                        <p class="mb-4 font-semibold text-indigo-500 md:mb-6 md:text-lg xl:text-xl">Introduce The Furqan Channel</p>

                        <h1 class="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">Strengthening The Deen</h1>

                        <p class="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
                            Fueled by the hope of a brighter future, 
                            Al Farqan Channel empowers communities to take action. 
                            We believe that by working together, we can create lasting change, one inspiring story at a time. 
                            Together, we're building a better tomorrow.
                        </p>

                        <div class="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
                            <a href="https://whatsapp.com/channel/0029Va4xfmG2kNFiIZZOD80k" class="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
                                Start now
                            </a>

                            <a href="https://www.instagram.com/the_furqan_channel?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" class="inline-block rounded-lg bg-gray-200 px-8 py-3 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-300 focus-visible:ring active:text-gray-700 md:text-base">
                                Take tour
                            </a>
                        </div>
                    </div>
                    <div class="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
                        <img src={furqan} loading="lazy" alt="Al Furqan" class="h-full w-full object-cover object-center" />
                    </div>
                </section>

                <div class="bg-white py-6 sm:py-8 lg:py-12" id='how'>
                    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                        <div class="mb-10 md:mb-16">
                            <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">How Can You Help?</h2>

                            <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                                Islamic charity organizations face challenges in securing sustainable funding,
                                maintaining trust and transparency, 
                                navigating legal complexities, 
                                adapting to cultural sensitivities, 
                                and ensuring operational efficiency while addressing humanitarian needs effectively.
                            </p>
                        </div>

                        <div class="grid gap-8 sm:grid-cols-2 md:gap-12 xl:grid-cols-3 xl:gap-16">
                            <div class="flex gap-4 md:gap-6">
                                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                                </div>

                                <div>
                                <h3 class="mb-2 text-lg font-semibold md:text-xl">Donate To Al-Furqan</h3>
                                <p class="mb-2 text-gray-500">Support Our Work</p>
                                <a href="#" class="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</a>
                                </div>
                            </div>

                            <div class="flex gap-4 md:gap-6">
                                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                                </svg>
                                </div>

                                <div>
                                <h3 class="mb-2 text-lg font-semibold md:text-xl">Volunteer With Us</h3>
                                <p class="mb-2 text-gray-500">Volunteer</p>
                                <a href="#" class="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</a>
                                </div>
                            </div>

                            <div class="flex gap-4 md:gap-6">
                                <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-indigo-500 text-white shadow-lg md:h-14 md:w-14 md:rounded-xl">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                </svg>
                                </div>

                                <div>
                                <h3 class="mb-2 text-lg font-semibold md:text-xl">Fundraise With Us</h3>
                                <p class="mb-2 text-gray-500">Raise Money</p>
                                <a href="#" class="font-bold text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700">More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white py-6 sm:py-8 lg:py-12" id='our-work'>
                    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                        <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl xl:mb-12">Some of our Work</h2>

                        <div class="mb-4 grid grid-cols-2 gap-4 sm:grid-cols-3 md:mb-8 md:grid-cols-4 md:gap-6 xl:gap-8">
                            <a href="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                                <img src={work1} loading="lazy" alt="charity work" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                                {/* <span class="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">VR</span> */}
                            </a>
                            <a href="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                                <img src={work2} loading="lazy" alt="charity work" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                                {/* <span class="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">Tech</span> */}
                            </a>
                            <a href="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                                <img src={work3} loading="lazy" alt="charity work" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                                {/* <span class="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">Dev</span> */}
                            </a>
                            <a href="#" class="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
                                <img src={work4} loading="lazy" alt="charity work" class="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />

                                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

                                {/* <span class="relative mb-3 ml-4 inline-block text-sm text-white md:ml-5 md:text-lg">Retro</span> */}
                            </a>
                        </div>

                        <div class="flex items-start justify-between gap-8 sm:items-center">
                        <p class="max-w-screen-sm text-sm text-gray-500 lg:text-base text-left">
                            Join us in our mission to spread hope, kindness, 
                            and empowerment to communities around the globe. 
                            Together, we can make a difference.
                        </p>

                        <a href="#" class="inline-block rounded-lg border bg-white px-4 py-2 text-center text-sm font-semibold text-gray-500 outline-none ring-indigo-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:bg-gray-200 md:px-8 md:py-3 md:text-base">More</a>
                        </div>
                    </div>
                </div>

                {/* <div class="bg-white py-6 sm:py-8 lg:py-12">
                    <div class="mx-auto max-w-screen-xl px-4 md:px-8">
                        <div class="mb-10 md:mb-16">
                        <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Our Impact by the numbers</h2>

                        <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
                        </div>

                        <div class="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x">
                        <div class="flex flex-col items-center md:p-4">
                            <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">200</div>
                            <div class="text-sm font-semibold sm:text-base">People</div>
                        </div>
                        <div class="flex flex-col items-center md:p-4">
                            <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">500+</div>
                            <div class="text-sm font-semibold sm:text-base">People</div>
                        </div>

                        <div class="flex flex-col items-center md:p-4">
                            <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">1000+</div>
                            <div class="text-sm font-semibold sm:text-base">Customers</div>
                        </div>
                        <div class="flex flex-col items-center md:p-4">
                            <div class="text-xl font-bold text-indigo-500 sm:text-2xl md:text-3xl">A couple</div>
                            <div class="text-sm font-semibold sm:text-base">Coffee breaks</div>
                        </div>
                        </div>
                    </div>
                </div> */}

                <div class="bg-white py-6 sm:py-8 lg:py-12">
                    <div class="mx-auto max-w-screen-xl px-4 md:px-8">
                        <div class="mb-10 md:mb-16">
                        <h2 class="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Our Projects</h2>

                        <p class="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
                            Through our collective efforts and unwavering commitment, 
                            we strive to create a world where everyone has access to the support and resources they deserve.<br />
                            GROWING, PROVIDING, TOGETHER CHANGING LIVES FOR GOOD
                        </p>
                        </div>

                        <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
                            <div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
                                <div class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
                                <img src={food} loading="lazy" alt="food & nutrition" class="h-full w-full object-cover object-center" />
                                </div>

                                <div>
                                <div class="text-center font-bold text-indigo-500 md:text-lg">Food & Nutrition</div>
                                <p class="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                                    One in eight people in the world do not have enough to eat
                                </p>
                                </div>
                            </div>
                            <div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
                                <div class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
                                <img src={healthcare} loading="lazy" alt="Healthcare" class="h-full w-full object-cover object-center" />
                                </div>

                                <div>
                                <div class="text-center font-bold text-indigo-500 md:text-lg">Healthcare</div>
                                <p class="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                                    Today nearly 19, 000 children under 5 will die of mostly preventable causes such as diarrhoea, malaria & pneumonia
                                </p>
                                </div>
                            </div>
                        <div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
                            <div class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
                            <img src={relief} loading="lazy" alt="Emergency Relief" class="h-full w-full object-cover object-center" />
                            </div>

                            <div>
                            <div class="text-center font-bold text-indigo-500 md:text-lg">Emergency Relief</div>
                            <p class="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                                More than 90% of natural disaster-related deaths occur in developing countries, where poverty & lack of resources exercebate
                            </p>
                            </div>
                        </div>
                        <div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 lg:p-8">
                            <div class="mb-2 h-24 w-24 overflow-hidden rounded-full bg-gray-200 shadow-lg md:mb-4 md:h-32 md:w-32">
                            <img src={education} loading="lazy" alt="Islamic Education" class="h-full w-full object-cover object-center" />
                            </div>

                            <div>
                            <div class="text-center font-bold text-indigo-500 md:text-lg">Islamic Education</div>
                            <p class="mb-3 text-center text-sm text-gray-500 md:mb-4 md:text-base">
                                Today, 67 million primary-school-age children aren't enrolled in school.
                                These children are at greater risk for exploitation
                            </p>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>

                {/* <div class="bg-white py-6 sm:py-8 lg:py-12">
                    <div class="mx-auto max-w-screen-xl px-4 md:px-8">
                        <h2 class="mb-8 text-center text-2xl font-bold text-gray-800 md:mb-12 lg:text-3xl">What others say about us</h2>

                        <div class="grid gap-y-10 sm:grid-cols-2 sm:gap-y-12 lg:grid-cols-3 lg:divide-x">
                        <div class="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
                            <div class="text-center text-gray-600">“This is a section of some simple filler text, also known as placeholder text.”</div>

                            <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                            <div class="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                                <img src="https://images.unsplash.com/photo-1567515004624-219c11d31f2e??auto=format&q=75&fit=crop&w=112" loading="lazy" alt="Photo by Radu Florin" class="h-full w-full object-cover object-center" />
                            </div>

                            <div>
                                <div class="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">John McCulling</div>
                                <p class="text-center text-sm text-gray-500 sm:text-left md:text-sm">CEO / Datadrift</p>
                            </div>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
                            <div class="text-center text-gray-600">“This is a section of some simple filler text, also known as placeholder text.”</div>

                            <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                            <div class="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                                <img src="https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112" loading="lazy" alt="Photo by christian ferrer" class="h-full w-full object-cover object-center" />
                            </div>

                            <div>
                                <div class="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">Kate Berg</div>
                                <p class="text-center text-sm text-gray-500 sm:text-left md:text-sm">CFO / Dashdash</p>
                            </div>
                            </div>
                        </div>
                        <div class="flex flex-col items-center gap-4 sm:px-4 md:gap-6 lg:px-8">
                            <div class="text-center text-gray-600">“This is a section of some simple filler text, also known as placeholder text.”</div>

                            <div class="flex flex-col items-center gap-2 sm:flex-row md:gap-3">
                            <div class="h-12 w-12 overflow-hidden rounded-full bg-gray-100 shadow-lg md:h-14 md:w-14">
                                <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?auto=format&q=75&fit=crop&w=500" loading="lazy" alt="Photo by Ayo Ogunseinde" class="h-full w-full object-cover object-center" />
                            </div>

                            <div>
                                <div class="text-center text-sm font-bold text-indigo-500 sm:text-left md:text-base">Greg Jackson</div>
                                <p class="text-center text-sm text-gray-500 sm:text-left md:text-sm">CTO / Uptime</p>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div>
                </div> */}

                {/* <div class="bg-white py-6 sm:py-8 lg:py-12">
                    <div class="mx-auto max-w-screen-2xl px-4 md:px-8">
                        <div class="flex flex-col items-center rounded-lg bg-gray-100 p-4 sm:p-8">
                        <div class="mb-4 sm:mb-8">
                            <h2 class="text-center text-xl font-bold text-indigo-500 sm:text-2xl lg:text-3xl">Get the latest updates</h2>
                            <p class="text-center text-gray-500">Sign up for our newsletter</p>
                        </div>

                        <form class="mb-3 flex w-full max-w-md gap-2 sm:mb-5">
                            <input placeholder="Email" class="bg-gray-white w-full flex-1 rounded border border-gray-300 px-3 py-2 text-gray-800 placeholder-gray-400 outline-none ring-indigo-300 transition duration-100 focus:ring" />

                            <button class="inline-block rounded bg-indigo-500 px-8 py-2 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">Send</button>
                        </form>

                        <p class="text-center text-xs text-gray-400">By signing up to our newsletter you agree to our <a href="#" class="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Term of Service</a> and <a href="#" class="underline transition duration-100 hover:text-indigo-500 active:text-indigo-600">Privacy Policy</a>.</p>
                        </div>
                    </div>
                </div> */}
            </div>
            <div class="bg-gray-900">
                    <footer class="mx-auto max-w-screen-2xl px-4 md:px-8">
                        <div class="mb-16 grid grid-cols-2 gap-12 pt-10 md:grid-cols-4 lg:grid-cols-6 lg:gap-8 lg:pt-12">
                        <div class="col-span-full lg:col-span-2">
                            <div class="mb-4 lg:-mt-2">
                            <a href="/" class="inline-flex items-center gap-2 text-xl font-bold text-gray-100 md:text-2xl" aria-label="logo">
                                <img src={logo} alt='The Furqan Channel Logo' className='h-20 w-20'  />
                                The Furqan Channel
                            </a>
                            </div>

                            <div class="flex gap-4">
                                <a href="https://www.instagram.com/the_furqan_channel?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                                    <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>

                                <a href="https://x.com/Thefurqanchanne" target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                                    <svg class="h-5 w-5" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                </a>

                                <a href="mailto: furqanchannel57@gmail.com " target="_blank" class="text-gray-400 transition duration-100 hover:text-gray-500 active:text-gray-600">
                                    <svg class="h-5 w-5" width="24" height="24" fill="currentColor" viewBox="0 0 8 6" xmlns="http://www.w3.org/2000/svg">
                                        <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z"/>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        <div>
                            <div class="mb-4 font-bold uppercase tracking-widest text-gray-100">Our Story</div>
                        </div>
                        <div>
                            <div class="mb-4 font-bold uppercase tracking-widest text-gray-100">Projects</div>
                        </div>
                        <div>
                            <div class="mb-4 font-bold uppercase tracking-widest text-gray-100">Way to Give</div>
                        </div>
                        <div>
                            <div class="mb-4 font-bold uppercase tracking-widest text-gray-100">Why Support Us</div>
                        </div>
                        </div>

                        <div class="border-t border-gray-800 py-8 text-center text-sm text-gray-400">© {(new Date().getFullYear())} - All rights reserved.</div>
                    </footer>
                </div>
        </div>
    )
}
export default LandingPage