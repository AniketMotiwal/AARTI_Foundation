"use client"

const Workwithus = () => {
  const handleViewPDF = (pdfPath) => {
    window.open(pdfPath, "_blank")
  }

  return (
    <div className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-6 text-center">
          <h2 className="text-gray-800 text-xl font-bold tracking-wide">Current Job Openings</h2>
          <div className="w-16 h-0.5 bg-blue-600 mx-auto mt-2"></div>
        </div>
        
        {/* New Job Posting - ISVC Project Officer */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6 pb-6 border-b border-gray-100">
          <div className="flex-1">
            <p className="text-gray-800 text-base">
              <span className="font-semibold text-gray-900">Advertisement:</span>
            </p>
            <p className="text-gray-700 text-base mt-1">
              Advertisement for the post of{' '}
              <span className="font-semibold text-gray-900">Project Officer – ISVC Project</span>
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Interested candidates may appear for the walk-in interview on{' '}
              <span className="font-semibold text-gray-900">17th February 2026 at 2:00 PM</span>
            </p>
          </div>
          <div className="flex-shrink-0 mt-2 sm:mt-0">
            <button
              onClick={() => handleViewPDF("/Advertisement-ISVC.pdf")}
              className="px-8 py-2.5 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm"
            >
              View Advertisement
            </button>
          </div>
        </div>

        {/* Existing Job Posting - CEO/COO/CTO */}
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
          <div className="flex-1">
            <p className="text-gray-800 text-base">
              <span className="font-semibold text-gray-900">Advertisement dated July 08, 2025:</span>
            </p>
            <p className="text-gray-700 text-base mt-1">
              Advertisement for the position(s) of{' '}
              <span className="font-semibold text-gray-900">Chief Executive Officer (CEO)</span> /{' '}
              <span className="font-semibold text-gray-900">Chief Operating Officer (COO)</span> /{' '}
              <span className="font-semibold text-gray-900">Chief Technical Officer (CTO)</span>{' '}
              in <span className="font-semibold text-gray-900">AARTI</span>
            </p>
            <p className="text-gray-600 text-sm mt-2">
              Last date to apply: <span className="font-semibold text-gray-900">July 20, 2025 by 05:00 PM</span>
            </p>
          </div>
          <div className="flex-shrink-0 mt-2 sm:mt-0">
            <button
              onClick={() => handleViewPDF("/adv09072025.pdf")}
              className="px-8 py-2.5 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm"
            >
              View Advertisement
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Workwithus