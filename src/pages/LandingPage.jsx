
function LandingPage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-600 text-white py-24 px-6">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">
            Welcome to AdenoCare
          </h1>
          <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto">
            A comprehensive platform dedicated to empowering patients and caregivers with advanced adenocarcinoma care.
          </p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition duration-300">
            Get Started
          </button>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-6">About Us</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            AdenoCare is a comprehensive platform designed to provide
            cutting-edge solutions for adenocarcinoma patients. Our mission is
            to empower patients, caregivers, and healthcare providers with
            reliable information, modern tools, and a supportive community.
          </p>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-700 mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Offer 1 */}
            <div className="bg-white shadow-xl rounded-lg p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-blue-600 text-5xl mb-4">
                <i className="material-icons">medical_services</i>
              </div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Advanced Diagnosis</h3>
              <p className="text-gray-600 text-lg">
                Utilize our AI-driven diagnosis tools for accurate
                adenocarcinoma detection and analysis, improving early
                detection and treatment planning.
              </p>
            </div>
            {/* Offer 2 */}
            <div className="bg-white shadow-xl rounded-lg p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-blue-600 text-5xl mb-4">
                <i className="material-icons">chat</i>
              </div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Medical Chatbot</h3>
              <p className="text-gray-600 text-lg">
                Get real-time support and guidance on treatments, recovery,
                lifestyle changes, and more from our AI-powered medical chatbot.
              </p>
            </div>
            {/* Offer 3 */}
            <div className="bg-white shadow-xl rounded-lg p-8 hover:shadow-2xl transition-all duration-300">
              <div className="text-blue-600 text-5xl mb-4">
                <i className="material-icons">group</i>
              </div>
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">Community Support</h3>
              <p className="text-gray-600 text-lg">
                Join our community to connect with other patients, caregivers,
                and healthcare professionals to share experiences and find support.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
