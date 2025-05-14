const CallForBid = () => {
    return (
        <div className="overflow-x-auto p-4 bg-gray-50 dark:bg-gray-900">
            <table className="hidden sm:table min-w-full divide-y divide-gray-300 dark:divide-gray-700 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg">
                {/* Tender Details Header */}
                <thead>
                    <tr className="bg-black">
                        <th
                            colSpan="6"
                            className="px-6 py-4 text-center text-lg font-semibold text-white uppercase tracking-wide"
                        >
                            Tender Details
                        </th>
                    </tr>
                </thead>

                {/* Column Headers */}
                <thead className="bg-gray-200 dark:bg-gray-800">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider border-b border-gray-300 dark:border-gray-700">
                            Section
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider border-b border-gray-300 dark:border-gray-700">
                            Start Date (DD-MM-YY)
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider border-b border-gray-300 dark:border-gray-700">
                            Description
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider border-b border-gray-300 dark:border-gray-700">
                            Document
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider border-b border-gray-300 dark:border-gray-700">
                            End Date (DD-MM-YY)
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-600 dark:text-gray-300 uppercase tracking-wider border-b border-gray-300 dark:border-gray-700">
                            Award of Contract
                        </th>
                    </tr>
                </thead>

                {/* Table Body */}
                <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-300 dark:divide-gray-700">
                    {/* Row 1 */}
                    <tr>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300 border-b border-gray-300 dark:border-gray-700">
                            Equipments & Purchases
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300 border-b border-gray-300 dark:border-gray-700">
                            23-01-2025
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300 border-b border-gray-300 dark:border-gray-700">
                            AARTI invites online bids for 3D Printing Systems
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300 border-b border-gray-300 dark:border-gray-700">
                            <div>
                                <a
                                    href="https://drive.google.com/file/d/1DDcXDiQG0Tr0sF7Y91aincmHVwXt1pj1/view?usp=sharing"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:underline"
                                >
                                    Tender Notice
                                </a>
                                <br /> {/* Adds space between the links */}
                                <a
                                    href="https://drive.google.com/file/d/1-Lw8SkAfNIe-HwgNpQ-eFhHcpg2SlHN3/view?usp=drive_link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className=" hover:underline text-red-500"
                                >
                                    Corrigendum For Date Extension
                                </a>
                            </div>
                        </td>



                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300 border-b border-gray-300 dark:border-gray-700">
                            02-02-2025  <span className="text-red-500">(Extended)</span>
                        </td>

                        <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 dark:text-red-400 border-b border-gray-300 dark:border-gray-700">
                            <a href="https://drive.google.com/file/d/1xNk5lL75LI0PVQJuvarl62HDAleq60UQ/view?usp=sharing" target="_blank" rel="noopener noreferrer" className=" hover:text-red-800">
                                Cancelled
                            </a>
                        </td>

                    </tr>
                </tbody>
            </table>


            {/* Responsive Card Layout for Mobile Screens */}
            <div className="sm:hidden space-y-4">
                <div className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg shadow-lg p-4">
                    <h3 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                        Section:
                        <span className="block font-normal">Equipments & Purchases</span>
                    </h3>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-2">
                        Start Date:
                        <span className="block font-normal">23-01-2025</span>
                    </p>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-2">
                        Description:
                        <span className="block font-normal">
                            AARTI invites online bids for 3D Printing Systems
                        </span>
                    </p>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-2">
                        Document:
                        <a
                            href="https://drive.google.com/file/d/1DDcXDiQG0Tr0sF7Y91aincmHVwXt1pj1/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-blue-500 hover:underline font-normal"
                        >
                            Tender Notice
                        </a>
                        <br /> {/* Adds space between the links on mobile */}
                        <a
                            href="https://drive.google.com/file/d/1-Lw8SkAfNIe-HwgNpQ-eFhHcpg2SlHN3/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block hover:underline font-normal text-red-500"
                        >
                            Corrigendum For Date Extension
                        </a>
                    </p>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-2">
                        End Date:
                        02-02-2025  <span className="text-red-500">(Extended)</span>
                    </p>
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mt-2">
                        Award of Contract:
                        <a
                            href="https://drive.google.com/file/d/1xNk5lL75LI0PVQJuvarl62HDAleq60UQ/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:underline"
                        >
                            <span className="block font-normal text-red-500">Cancelled</span>
                        </a>


                    </p>
                </div>
            </div>
        </div>
    );
};

export default CallForBid;
