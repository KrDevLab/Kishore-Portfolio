function SecurePaymentPage() {
  return (
    <div className="relative w-full">
      <Navbar />
      
      <main className="pt-32 pb-24 min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          
          <div className="glass-card p-8 md:p-12 border-white/10 shadow-lg relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[var(--accent-start)] opacity-10 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[var(--accent-end)] opacity-10 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--accent-start)] to-[var(--accent-end)] flex items-center justify-center mb-8 text-white shadow-lg relative z-10">
              <div className="icon-shield-check text-3xl"></div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">Secure <span className="text-gradient">Payment Process</span></h1>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-2xl relative z-10">
              Payment links will be shared only after project details are finalized to ensure complete clarity and satisfaction.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 relative z-10">
              <div>
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Prerequisites</h4>
                <ul className="space-y-5 text-lg">
                  <li className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <div className="icon-circle-check text-[var(--accent-start)] text-xl"></div>
                    </div>
                    <span className="text-gray-300">Project discussion</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <div className="icon-circle-check text-[var(--accent-start)] text-xl"></div>
                    </div>
                    <span className="text-gray-300">Requirement confirmation</span>
                  </li>
                  <li className="flex items-center gap-4">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                      <div className="icon-circle-check text-[var(--accent-start)] text-xl"></div>
                    </div>
                    <span className="text-gray-300">Mutual agreement</span>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-6">Accepted Methods</h4>
                <div className="flex flex-col gap-4">
                  {/* ADD YOUR RAZORPAY PAYMENT LINK HERE */}
                  <a href="#" target="_blank" rel="noopener noreferrer" className="block bg-[#0F172A] border border-white/10 rounded-xl px-6 py-4 flex items-center gap-4 shadow-inner hover:border-white/20 transition-colors">
                    <div className="icon-credit-card text-blue-400 text-2xl"></div>
                    <span className="font-semibold text-white">Razorpay</span>
                  </a>
                  {/* ADD YOUR PAYONEER PAYMENT LINK HERE */}
                  <a href="#" target="_blank" rel="noopener noreferrer" className="block bg-[#0F172A] border border-white/10 rounded-xl px-6 py-4 flex items-center gap-4 shadow-inner hover:border-white/20 transition-colors">
                    <div className="icon-globe text-orange-400 text-2xl"></div>
                    <span className="font-semibold text-white">Payoneer</span>
                  </a>
                  <div className="grid grid-cols-2 gap-4">
                    {/* ADD YOUR UPI PAYMENT LINK HERE */}
                    <a href="#" target="_blank" rel="noopener noreferrer" className="block bg-[#0F172A] border border-white/10 rounded-xl px-6 py-4 flex items-center justify-center gap-3 shadow-inner hover:border-white/20 transition-colors">
                      <div className="icon-smartphone text-green-400 text-xl"></div>
                      <span className="font-semibold text-white text-sm">UPI</span>
                    </a>
                    {/* ADD YOUR BANK ACCOUNT DETAILS/LINK HERE */}
                    <a href="#" target="_blank" rel="noopener noreferrer" className="block bg-[#0F172A] border border-white/10 rounded-xl px-6 py-4 flex items-center justify-center gap-3 shadow-inner hover:border-white/20 transition-colors">
                      <div className="icon-landmark text-gray-400 text-xl"></div>
                      <span className="font-semibold text-white text-sm">Bank</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-10 mt-10 border-t border-white/10 relative z-10">
              {/* THIS LINKS TO YOUR CUSTOM PAYMENT GATEWAY IF YOU WISH TO USE IT */}
              <a href="payment.html" className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-white/10 text-white font-medium hover:bg-white/20 transition-all border border-white/10 group text-lg">
                Proceed with Gateway <div className="icon-arrow-right group-hover:translate-x-1 transition-transform"></div>
              </a>
              <a href="mailto:hello@kishoreravi.com" className="flex-1 flex items-center justify-center gap-2 py-4 px-6 rounded-xl border border-white/5 text-gray-300 font-medium hover:text-white hover:border-white/20 transition-all hover:bg-white/5 text-lg">
                Contact for Payment Access
              </a>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SecurePaymentPage />);