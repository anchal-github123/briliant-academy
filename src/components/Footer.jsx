
 import { branchAddresses,cbseAndOdishaBoardLinks,scienceAndCommerceLinks,softwareDevelopmentLinks } from "../utils/FooterData";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-3 mb-0">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Branch Addresses */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Branch Addresses</h3>
          <ul className="space-y-3 text-sm">
            {branchAddresses.map((branch, index) => (
              <li key={index}>
                <p className="font-medium">{branch.city}</p>
                <p className="text-gray-400">{branch.address}</p>
              </li>
            ))}
          </ul>
        </div>

        {/* IT Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">CBSE And OdishaBoard</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            {cbseAndOdishaBoardLinks.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>

        {/* Other Services */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Science And Commerce</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            {scienceAndCommerceLinks.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>

         <div>
          <h3 className="text-xl font-semibold mb-4">SoftwareDevelopment</h3>
          <ul className="space-y-3 text-sm text-gray-400">
            {softwareDevelopmentLinks.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>

      </div>
      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} Stackneuro All rights reserved.
      </div>
    </footer>
  );
}

  


