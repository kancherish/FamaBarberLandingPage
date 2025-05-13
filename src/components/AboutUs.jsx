import React from 'react'

function AboutUs() {
  return (
   <section class="py-24 relative xl:mr-0 lg:mr-5 mr-0 bg-gray-900" id='AboutUs'>
    <div class="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
        <div class="w-full justify-start items-center xl:gap-12 gap-10 grid lg:grid-cols-2 grid-cols-1">
            <div class="w-full flex-col justify-center lg:items-start items-center gap-10 inline-flex">
                <div class="w-full flex-col justify-center items-start gap-8 flex">
                    <div class="flex-col justify-start lg:items-start items-center gap-4 flex">
                        <h6 class="text-gray-300 text-base font-normal leading-relaxed">About Us</h6>
                        <div class="w-full flex-col justify-start lg:items-start items-center gap-3 flex">
                            <h2 class="text-indigo-400 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">
                                The Tale of Our Achievement Story
                            </h2>
                            <p class="text-gray-400 text-base font-normal leading-relaxed lg:text-start text-center">
                              Established in 2018, FAMA Barbershop And Beauty Salon has been providing premium grooming services to the men of Denton, TX. Our mission is to deliver exceptional haircuts and grooming services in a welcoming, classic barbershop environment.
                            </p>
                        </div>
                    </div>
                    <div class="w-full flex-col justify-center items-start gap-6 flex">
                        <div class="w-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                            <div class="w-full h-full p-3.5 rounded-xl border border-gray-700 hover:border-gray-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                <h4 class="text-white text-2xl font-bold font-manrope leading-9">5+ Years</h4>
                                <p class="text-gray-400 text-base font-normal leading-relaxed">Tranforming Hairstyles of millions</p>
                            </div>
                            <div class="w-full h-full p-3.5 rounded-xl border border-gray-700 hover:border-gray-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                <h4 class="text-white text-2xl font-bold font-manrope leading-9">100+ Customers</h4>
                                <p class="text-gray-400 text-base font-normal leading-relaxed">Most Satisfied Customer Base</p>
                            </div>
                        </div>
                        <div class="w-full h-full justify-start items-center gap-8 grid md:grid-cols-2 grid-cols-1">
                            <div class="w-full p-3.5 rounded-xl border border-gray-700 hover:border-gray-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                <h4 class="text-white text-2xl font-bold font-manrope leading-9">20+ Fashion week Awards</h4>
                                <p class="text-gray-400 text-base font-normal leading-relaxed">Styled Many Fashion Models</p>
                            </div>
                            <div class="w-full h-full p-3.5 rounded-xl border border-gray-700 hover:border-gray-500 transition-all duration-700 ease-in-out flex-col justify-start items-start gap-2.5 inline-flex">
                                <h4 class="text-white text-2xl font-bold font-manrope leading-9">4.6 Rating</h4>
                                <p class="text-gray-400 text-base font-normal leading-relaxed">116+ Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
               
            </div>
            <div class="w-full lg:justify-start justify-center items-start flex">
                <div class="sm:w-[564px] w-full sm:h-[646px] h-full bg-gray-800 rounded-3xl border border-gray-700 relative">
                    <img class="sm:mt-5 sm:ml-5 w-full h-full rounded-3xl object-cover"
                        src="https://cdn.prod.website-files.com/65e78d77c85e6169e48b2f17/663888afcc31238c9948bf43_5878-shutterstock-2122359614-min.jpeg" 
                        alt="about Us image" />
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default AboutUs