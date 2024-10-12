'use client'
import Image from 'next/image';
import Step from './components/Step';
import { useState } from 'react';

export default function Home() {
  const [isSubmitted, setSubmitted] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <>
      {isSubmitted ? (
        <main className='flex flex-col justify-center items-center min-h-svh bg-customVeryDarkBlue'>
          <section className='bg-customDarkBlue mobile:w-1/4 mobile:h-1/4 px-6 py-7 rounded-3xl flex flex-col items-center justify-center'>
            <Image src='illustration-thank-you.svg' className='flex items-center justify-center' width={200} height={200} alt='' />
            <h2 className='px-7 py-2 bg-slate-600 text-customOrange text-bold rounded-3xl mt-3'>You selected {currentStep} out of 5</h2>
            <h1 className='text-white text-3xl font-semibold mt-5'>Thank you!</h1>
            <h2 className='text-customGrey text-xl font-medium mt-5'>
              We appreciate you taking the time to give a rating. If you ever need more support don&apos;t hesitate to get in touch!
            </h2>
          </section>
        </main>
      ) : (
        <main className='flex flex-col justify-center items-center min-h-svh bg-customVeryDarkBlue'>
          <section className='bg-customDarkBlue mobile:w-1/4 mobile:h-1/4 px-6 py-7 rounded-3xl'>
            <Image src='icon-star.svg' className='px-2 py-3 bg-slate-600 rounded-full' width={50} height={50} alt='' />
            <h1 className='text-white text-3xl font-semibold mt-5'>How did we do?</h1>
            <h2 className='text-customGrey text-xl font-medium mt-5'>
              Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
            </h2>
            <div className='mt-7'>
              <Step currentStep={currentStep} setCurrentStep={setCurrentStep} isSubmitted={isSubmitted} setSubmitted={setSubmitted} />
            </div>
          </section>
        </main>
      )}
    </>
  );
}
