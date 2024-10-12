export default function Step({ isSubmitted, setSubmitted, currentStep, setCurrentStep }) {
  
  function handleStepAdder() {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1);
    }
  }

  function handleSubmitted() {
    setSubmitted(!isSubmitted);
  }
  
  return (
    <>
      <section className="flex justify-between items-center">
        <div className={`px-6 py-3 ${currentStep === 1 ? "bg-customOrange" : (currentStep - 1 === 1 ? "bg-white text-black" : "bg-slate-600 text-white")} rounded-full flex justify-center items-center text-semibold`}>
          1
        </div>
        <div className={`px-6 py-3 ${currentStep === 2 ? "bg-customOrange" : (currentStep - 1 === 2 ? "bg-white text-black" : "bg-slate-600 text-white")} rounded-full flex justify-center items-center text-semibold`}>
          2
        </div>
        <div className={`px-6 py-3 ${currentStep === 3 ? "bg-customOrange" : (currentStep - 1 === 3 ? "bg-white text-black" : "bg-slate-600 text-white")} rounded-full flex justify-center items-center text-semibold`}>
          3
        </div>
        <div className={`px-6 py-3 ${currentStep === 4 ? "bg-customOrange" : (currentStep - 1 === 4 ? "bg-white text-black" : "bg-slate-600 text-white")} rounded-full flex justify-center items-center text-semibold`}>
          4
        </div>
        <div className={`px-6 py-3 ${currentStep === 5 ? "bg-customOrange" : (currentStep - 1 === 5 ? "bg-white text-black" : "bg-slate-600 text-white")} rounded-full flex justify-center items-center text-semibold`}>
          5
        </div>
    </section>
      <div className="flex items-center justify-center mt-8">
        <button onClick={handleStepAdder} className="bg-white text-bold text-2xl px-14 rounded-3xl mr-3 hover:bg-customGrey hover:text-white">
          NEXT
        </button>
        <button onClick={handleSubmitted} className="bg-customOrange text-bold text-2xl px-12 rounded-3xl hover:bg-yellow-500">
          SUBMIT
        </button>
      </div>
    </>
  );
}


