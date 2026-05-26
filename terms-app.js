function TermsPage() {
  return (
    <div className="relative w-full">
      <Navbar />
      
      <main className="pt-32 pb-24 min-h-screen">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Terms and <span className="text-gradient">Conditions</span></h1>
            <p className="text-gray-400">Last updated: May 26, 2026</p>
          </div>

          <div className="glass-card p-8 md:p-12 space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Agreement to Terms</h2>
              <p>By accessing and using this portfolio website or engaging my freelance services, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not use my services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. Intellectual Property</h2>
              <p>The content, designs, and code displayed on this website are the intellectual property of Kishore Ravi unless otherwise stated. You may not reproduce, distribute, or create derivative works from this content without explicit permission.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Freelance Services</h2>
              <p>When engaging in a freelance contract:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Project timelines and deliverables will be clearly outlined in a separate contract.</li>
                <li>A deposit may be required before work commences.</li>
                <li>Client feedback and revisions will be limited to the agreed-upon scope in the proposal.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Limitation of Liability</h2>
              <p>Kishore Ravi shall not be held liable for any indirect, incidental, or consequential damages arising from the use of this website or the implementation of provided services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Contact Information</h2>
              <p>If you have any questions about these Terms and Conditions, please contact me at hello@kishoreravi.com or call +1 (234) 567-890.</p>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<TermsPage />);