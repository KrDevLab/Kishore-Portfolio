function PaymentPage() {
  const [isProcessing, setIsProcessing] = React.useState(false);
  const [isSuccess, setIsSuccess] = React.useState(false);

  const handlePayment = (e) => {
    e.preventDefault();
    setIsProcessing(true);

    const emailInput = e.target.querySelector('input[type="email"]').value;
    const nameInput = e.target.querySelector('input[type="text"]').value;

    /* ADD YOUR RAZORPAY CONFIGURATION HERE */
    const options = {
      key: 'YOUR_RAZORPAY_KEY_ID', // ADD YOUR ACTUAL RAZORPAY KEY ID HERE
      amount: 50000, // Amount in paise (500.00 * 100)
      currency: 'USD', // Change to 'INR' if you are collecting in Rupees
      name: 'Kishore Ravi',
      description: 'Freelance Service Deposit',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      handler: function (response) {
        // Payment successful
        setIsProcessing(false);
        setIsSuccess(true);
        console.log('Payment ID:', response.razorpay_payment_id);
      },
      prefill: {
        name: nameInput,
        email: emailInput,
        contact: ''
      },
      theme: {
        color: '#F43F5E' // Matches var(--accent-start)
      },
      modal: {
        ondismiss: function() {
          setIsProcessing(false);
        }
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.on('payment.failed', function (response){
        alert('Payment failed. Reason: ' + response.error.description);
        setIsProcessing(false);
    });
    rzp.open();
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 relative overflow-hidden flex items-center justify-center">
        {/* Background Blurs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent-start)] opacity-10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-end)] opacity-10 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10">
          
          {isSuccess ? (
            <div className="glass-card p-12 text-center max-w-lg mx-auto transform transition-all duration-500 scale-100 opacity-100">
              <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
                <div className="icon-check text-4xl text-green-400"></div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Payment Successful!</h2>
              <p className="text-gray-400 mb-8">
                Thank you for your payment. A confirmation email has been sent to you. I will be in touch shortly to start our project.
              </p>
              <a href="index.html" className="btn-primary">
                Return to Home
              </a>
            </div>
          ) : (
            <div className="grid lg:grid-cols-12 gap-8 items-start">
              
              {/* Order Summary */}
              <div className="lg:col-span-5 glass-card p-8 order-2 lg:order-1">
                <h2 className="text-2xl font-bold text-white mb-6">Order Summary</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4 pb-6 border-b border-white/10">
                    <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                      <div className="icon-briefcase text-2xl text-[var(--accent-start)]"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">Freelance Service Deposit</h3>
                      <p className="text-sm text-gray-400 mt-1">Initial deposit to commence UI/UX design and frontend development project.</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between text-gray-400">
                      <span>Subtotal</span>
                      <span>$500.00</span>
                    </div>
                    <div className="flex justify-between text-gray-400">
                      <span>Tax (0%)</span>
                      <span>$0.00</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold text-white pt-4 border-t border-white/10">
                      <span>Total Due</span>
                      <span>$500.00</span>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10 flex items-center gap-3">
                    <div className="icon-shield-check text-green-400 text-xl shrink-0"></div>
                    <p className="text-xs text-gray-400">Payments are secure and encrypted. We do not store your full credit card information.</p>
                  </div>
                </div>
              </div>

              {/* Checkout Form */}
              <div className="lg:col-span-7 glass-card p-8 order-1 lg:order-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent-start)] opacity-10 rounded-bl-full pointer-events-none"></div>
                
                <h2 className="text-2xl font-bold text-white mb-6">Complete Payment</h2>
                
                <div className="mb-8 p-6 bg-white/5 border border-white/10 rounded-xl">
                  <p className="text-gray-300 leading-relaxed mb-4">
                    We use Razorpay to securely process all payments. You will be able to choose from Cards, UPI, Netbanking, or Mobile Wallets on the next screen.
                  </p>
                  <div className="flex gap-4 opacity-70">
                    <div className="icon-credit-card text-2xl text-gray-400"></div>
                    <div className="icon-smartphone text-2xl text-gray-400"></div>
                    <div className="icon-landmark text-2xl text-gray-400"></div>
                  </div>
                </div>

                <form onSubmit={handlePayment} className="space-y-6">
                  
                  <div className="space-y-4">
                    <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Contact Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <input 
                          type="text" 
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--accent-start)] focus:bg-white/10 transition-all"
                          placeholder="Full Name"
                        />
                      </div>
                      <div className="space-y-2">
                        <input 
                          type="email" 
                          required
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--accent-start)] focus:bg-white/10 transition-all"
                          placeholder="Email Address"
                        />
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    type="submit" 
                    disabled={isProcessing}
                    className="w-full btn-primary py-4 text-lg mt-8 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isProcessing ? (
                      <React.Fragment>
                        <div className="icon-loader animate-spin"></div>
                        Connecting securely...
                      </React.Fragment>
                    ) : (
                      <React.Fragment>
                        <div className="icon-lock"></div>
                        Pay Securely with Razorpay
                      </React.Fragment>
                    )}
                  </button>
                  
                </form>
              </div>

            </div>
          )}

        </div>
      </main>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <Footer />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<PaymentPage />);