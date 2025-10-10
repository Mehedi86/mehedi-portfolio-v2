import { certificates } from "@/constants";
import { Link } from "react-router";

export default function Certificates() {
    return (
        <div>
            <div className="lg:max-w-5/6 mx-auto pt-20 lg:pt-30 px-4 lg:px-0">
                <div className="overflow-x-auto rounded-box border border-gray-200 shadow rounded">
                    <table className="table-auto w-full text-left border-collapse">
                        {/* head */}
                        <thead className="bg-neutral-400 dark:bg-neutral-950 text-white">
                            <tr>
                                <th className="px-4 py-2">Serial</th>
                                <th className="px-4 py-2">Certificate Name</th>
                                <th className="px-4 py-2">Covering Technologies</th>
                                <th className="px-4 py-2">Institute</th>
                                <th className="px-4 py-2">Duration</th>
                                <th className="px-4 py-2">Published</th>
                                <th className="px-4 py-2">Certificate Link</th>
                            </tr>
                        </thead>
                        <tbody className="dark:bg-neutral-950">
                            {certificates.map((certificate, idx) => <tr key={certificate.id} className="dark:odd:bg-neutral-600 dark:even:bg-neutral-950">
                                <td className="px-4 py-2">{idx+1}</td>
                                <td className="px-4 py-2">{certificate.certificateName}</td>
                                <td className="px-4 py-2 w-[450px]">{certificate.technologies}</td>
                                <td className="px-4 py-2">{certificate.institute}</td>
                                <td className="px-4 py-2">{certificate.duration}</td>
                                <td className="px-4 py-2">{certificate.published}</td>
                                <td className="px-4 py-2 text-blue-400 font-semibold"><Link to={certificate.certificate_link} target= 'blank'>View</Link></td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
