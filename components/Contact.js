function Contact() {
  try {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isSubmitted, setIsSubmitted] = React.useState(false);

    // =========================
    // WEB3FORMS SUBMIT FUNCTION
    // =========================
    const handleSubmit = async (e) => {
  e.preventDefault();

  setIsSubmitting(true);

  const formData = new FormData(e.target);

formData.append(
  "access_key",
  "bb239dd7-90cb-4e8a-92aa-96cdeded70ad"
);

formData.append(
  "subject",
  "New Portfolio Inquiry"
);

  // Convert to JSON
  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  try {
    const response = await fetch(
      "https://api.web3forms.com/submit",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }
    );

    const result = await response.json();

    console.log(result);

    if (result.success) {
      setIsSubmitted(true);

      e.target.reset();
    } else {
      alert(result.message);
    }

  } catch (error) {
    console.log(error);

    alert("Network Error");
  }

  setIsSubmitting(false);
};
    return (
      <section
        id="contact"
        className="py-24 relative overflow-hidden"
        data-name="contact"
        data-file="components/Contact.js"
      >

        {/* =========================
            BACKGROUND GRADIENTS
        ========================= */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[var(--accent-start)] opacity-10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--accent-end)] opacity-10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">

          {/* =========================
              HEADING
          ========================= */}
          <div className="mb-16 reveal text-center md:text-left">

            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              Start Your{" "}
              <span className="text-gradient">
                Project
              </span>
            </h2>

            <p className="text-xl text-gray-300 max-w-2xl">
              Let’s discuss your idea and turn it into
              a modern digital experience.
            </p>

          </div>

          <div className="space-y-24">

            {/* =========================
                FORM SECTION
            ========================= */}
            <div className="max-w-4xl mx-auto reveal delay-100">

              <div className="glass-card p-8 md:p-12 relative overflow-hidden shadow-[0_0_40px_rgba(244,63,94,0.05)]">

                <div className="absolute top-0 right-0 w-40 h-40 bg-[var(--accent-start)] opacity-10 rounded-bl-full pointer-events-none"></div>

                {/* =========================
                    SUCCESS MESSAGE
                ========================= */}
                {isSubmitted ? (

                  <div className="flex flex-col items-center justify-center py-16 text-center animate-[fadeIn_0.5s_ease-out]">

                    <div className="w-24 h-24 rounded-full bg-green-500/10 flex items-center justify-center mb-6 border border-green-500/20">
                      <div className="icon-check text-5xl text-green-400"></div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                      Inquiry Sent Successfully!
                    </h3>

                    <p className="text-gray-400 max-w-md">
                      Thank you for reaching out.
                      Project discussion and confirmation
                      will happen before payment processing.
                      I'll get back to you within 24 hours.
                    </p>

                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="mt-8 btn-outline"
                    >
                      Send Another Inquiry
                    </button>

                  </div>

                ) : (

                  <React.Fragment>

                    <p className="text-gray-400 mb-10 leading-relaxed text-lg">
                      Interested in working together?
                      Share your project details,
                      goals, and ideas through the form below.
                    </p>

                    {/* =========================
                        CONTACT FORM
                    ========================= */}
                    <form
                      onSubmit={handleSubmit}
                      className="space-y-6"
                    >

                      {/* Spam Protection */}
                      <input
                        type="checkbox"
                        name="botcheck"
                        className="hidden"
                        style={{ display: "none" }}
                      />

                      {/* =========================
                          NAME + EMAIL
                      ========================= */}
                      <div className="grid md:grid-cols-2 gap-6">

                        {/* FULL NAME */}
                        <div className="space-y-2">

                          <label className="text-sm font-medium text-gray-400">
                            Full Name
                          </label>

                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="John Doe"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--accent-start)] focus:bg-white/10 transition-all"
                          />

                        </div>

                        {/* EMAIL */}
                        <div className="space-y-2">

                          <label className="text-sm font-medium text-gray-400">
                            Email Address
                          </label>

                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="john@example.com"
                            className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--accent-start)] focus:bg-white/10 transition-all"
                          />

                        </div>

                      </div>

                      {/* =========================
                          PROJECT TYPE + BUDGET
                      ========================= */}
                      <div className="grid md:grid-cols-2 gap-6">

                        {/* PROJECT TYPE */}
                        <div className="space-y-2">

                          <label className="text-sm font-medium text-gray-400">
                            Project Type
                          </label>

                          <select
                            name="project_type"
                            required
                            defaultValue=""
                            className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-5 py-4 text-white"
                          >

                            <option value="" disabled>
                              Select a type...
                            </option>

                            <option value="UI/UX Design">
                              UI/UX Design
                            </option>

                            <option value="Landing Page">
                              Landing Page
                            </option>

                            <option value="Frontend Development">
                              Frontend Development
                            </option>

                            <option value="Full Website Creation">
                              Full Website Creation
                            </option>

                            <option value="Other">
                              Other
                            </option>

                          </select>

                        </div>

                        {/* BUDGET */}
                        <div className="space-y-2">

                          <label className="text-sm font-medium text-gray-400">
                            Budget Range
                          </label>

                          <select
                            name="budget"
                            required
                            defaultValue=""
                            className="w-full bg-[#1A1A1A] border border-white/10 rounded-xl px-5 py-4 text-white"
                          >

                            <option value="" disabled>
                              Select a range...
                            </option>

                            <option value="Less than $50">
                              Less than $50
                            </option>

                            <option value="$50 - $200">
                              $50 - $200
                            </option>

                            <option value="$200 - $500">
                              $200 - $500
                            </option>

                            <option value="$500+">
                              $500+
                            </option>

                          </select>

                        </div>

                      </div>

                      {/* =========================
                          PROJECT DESCRIPTION
                      ========================= */}
                      <div className="space-y-2">

                        <label className="text-sm font-medium text-gray-400">
                          Project Description
                        </label>

                        <textarea
                          name="message"
                          required
                          rows="4"
                          placeholder="Tell me about your project goals, timeline, and any specific requirements..."
                          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--accent-start)] focus:bg-white/10 transition-all resize-none"
                        ></textarea>

                      </div>

                      {/* SUBMIT BUTTON */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-primary py-4 text-lg mt-4 flex justify-center items-center gap-2 disabled:opacity-70 disabled:scale-100"
                      >

                        {isSubmitting ? (
                          <React.Fragment>
                            <div className="icon-loader animate-spin text-xl"></div>
                            Sending...
                          </React.Fragment>
                        ) : (
                          <React.Fragment>
                            Send Project Inquiry
                            <div className="icon-arrow-right text-xl"></div>
                          </React.Fragment>
                        )}

                      </button>

                      {/* RESPONSE TIME */}
                      <div className="text-center mt-6 flex items-center justify-center gap-2">

                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>

                        <span className="text-sm text-gray-400">
                          Usually responds within 24 hours.
                        </span>

                      </div>

                    </form>

                  </React.Fragment>
                )}

              </div>
            </div>

            {/* =========================
                QUICK CONNECT SECTION
            ========================= */}
            <div className="reveal max-w-6xl mx-auto">

              <div className="text-center mb-12">

                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Quick Connect
                </h2>

                <p className="text-gray-400 text-lg">
                  Choose your preferred way to discuss your project.
                </p>

              </div>

              <div className="grid md:grid-cols-3 gap-6">

                {/* WHATSAPP */}
<div className="glass-card p-8 flex flex-col">

  <div className="w-14 h-14 rounded-2xl bg-green-500/10 flex items-center justify-center mb-6">
    <div className="icon-message-circle text-3xl text-green-400"></div>
  </div>

  <h3 className="text-xl font-bold text-white mb-3">
    Chat on WhatsApp
  </h3>

  <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
    Quickly discuss your project ideas directly through WhatsApp.
  </p>

  <div className="space-y-3">

    {/* Freelance Inquiry */}
    <a
      href="https://wa.me/917397753765?text=Hi%20Design2Debug,%20I%20saw%20your%20portfolio%20and%20I%20want%20a%20UI/UX%20design%20for%20my%20business."
      target="_blank"
      rel="noopener noreferrer"
      className="w-full py-3 rounded-xl border border-white/10 text-white font-medium hover:bg-green-500 transition-all flex items-center justify-center gap-2"
    >
      UI/UX Design Inquiry
      <div className="icon-arrow-right"></div>
    </a>

    {/* Website Project */}
    <a
      href="https://wa.me/917397753765?text=Hello,%20I%20need%20a%20modern%20portfolio%20website.%20Can%20we%20discuss%20pricing?"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full py-3 rounded-xl border border-white/10 text-white font-medium hover:bg-green-500 transition-all flex items-center justify-center gap-2"
    >
      Website Project
      <div className="icon-arrow-right"></div>
    </a>

    {/* Quick Connect */}
    <a
      href="https://wa.me/917397753765?text=Hi%20Kishore,%20I'm%20interested%20in%20working%20with%20you."
      target="_blank"
      rel="noopener noreferrer"
      className="w-full py-3 rounded-xl border border-white/10 text-white font-medium hover:bg-green-500 transition-all flex items-center justify-center gap-2"
    >
      Quick Connect
      <div className="icon-arrow-right"></div>
    </a>

  </div>

</div>
{/* CALENDLY */}
<div className="glass-card p-8 flex flex-col">

  <div className="w-14 h-14 rounded-2xl bg-blue-500/10 flex items-center justify-center mb-6">
    <div className="icon-calendar text-3xl text-blue-400"></div>
  </div>

  <h3 className="text-xl font-bold text-white mb-3">
    Book a Meeting
  </h3>

  <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
    Schedule a meeting to discuss your project ideas, pricing, and workflow.
  </p>

  <div className="space-y-3">

    {/* FREE CONSULTATION */}
    <a
      href="https://calendly.com/app/scheduled_events/user/me"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full py-3 rounded-xl border border-white/10 text-white font-medium hover:bg-blue-500 transition-all flex items-center justify-center gap-2"
    >
      Free Consultation
      <div className="icon-arrow-right"></div>
    </a>

    {/* PROJECT DISCUSSION */}
    <a
      href="https://calendly.com/YOUR_USERNAME/project-call"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full py-3 rounded-xl border border-white/10 text-white font-medium hover:bg-blue-500 transition-all flex items-center justify-center gap-2"
    >
      Project Discussion
      <div className="icon-arrow-right"></div>
    </a>

    {/* UI/UX REVIEW */}
    <a
      href="https://calendly.com/YOUR_USERNAME/uiux-review"
      target="_blank"
      rel="noopener noreferrer"
      className="w-full py-3 rounded-xl border border-white/10 text-white font-medium hover:bg-blue-500 transition-all flex items-center justify-center gap-2"
    >
      UI/UX Review Call
      <div className="icon-arrow-right"></div>
    </a>

  </div>

</div>


{/* EMAIL */}
<div className="glass-card p-8 flex flex-col">

  <div className="w-14 h-14 rounded-2xl bg-purple-500/10 flex items-center justify-center mb-6">
    <div className="icon-mail text-3xl text-purple-400"></div>
  </div>

  <h3 className="text-xl font-bold text-white mb-3">
    Send an Email
  </h3>

  <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">
    Reach out directly for project inquiries, collaborations, or freelance work.
  </p>

  <div className="space-y-3">

    {/* PROJECT INQUIRY */}
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=kishoresde006@gmail.com&su=Project%20Inquiry&body=Hi%20Kishore,%20I%20want%20to%20discuss%20a%20project."
      target="_blank"
      rel="noopener noreferrer"
      className="w-full py-3 rounded-xl border border-white/10 text-white font-medium hover:bg-purple-500 transition-all flex items-center justify-center gap-2"
    >
      Project Inquiry
      <div className="icon-arrow-right"></div>
    </a>

    {/* FREELANCE WORK */}
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=kishoresde006@gmail.com&su=Freelance%20Work&body=Hello%20Kishore,%20I%20am%20interested%20in%20working%20with%20you."
      target="_blank"
      rel="noopener noreferrer"
      className="w-full py-3 rounded-xl border border-white/10 text-white font-medium hover:bg-purple-500 transition-all flex items-center justify-center gap-2"
    >
      Freelance Work
      <div className="icon-arrow-right"></div>
    </a>

    {/* QUICK CONNECT */}
    <a
      href="https://mail.google.com/mail/?view=cm&fs=1&to=kishoresde006@gmail.com&su=Quick%20Connect&body=Hi%20Kishore,%20I%20would%20like%20to%20connect%20with%20you."
      target="_blank"
      rel="noopener noreferrer"
      className="w-full py-3 rounded-xl border border-white/10 text-white font-medium hover:bg-purple-500 transition-all flex items-center justify-center gap-2"
    >
      Quick Connect
      <div className="icon-arrow-right"></div>
    </a>

  </div>

</div>

              {/* </div> */}

              {/* =========================
                  PAYMENT SECTION
              ========================= */}
              {/* <div className="max-w-3xl mx-auto text-center glass-card p-10 md:p-12 mt-16"> */}

                {/* <div className="w-16 h-16 mx-auto rounded-full bg-white/5 flex items-center justify-center mb-6 text-[var(--accent-start)]">
                  <div className="icon-shield-check text-3xl"></div>
                </div> */}
{/* 
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Ready to Begin?
                </h3>

                <p className="text-gray-400 mb-8 max-w-lg mx-auto text-lg leading-relaxed">
                  If we've already discussed your project
                  and finalized the requirements,
                  you can proceed to the secure payment portal.
                </p> */}

                {/* PAYMENT GATEWAY LINK
                <a
                  href="/secure-payment.html"
                  className="btn-primary py-4 px-8 text-lg inline-flex items-center gap-2"
                >
                  Access Secure Payment
                  <div className="icon-arrow-right"></div>
                </a> */}

              </div>

            </div>

          </div>
        </div>
      </section>
    );

  } catch (error) {
    console.error("Contact component error:", error);
    return null;
  }
}

export default Contact;