import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactMe() {
  const [status, setStatus] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        setStatus("success");
        form.reset();
        setTimeout(() => setStatus(""), 5000);
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 px-6 bg-transparent text-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold">
          Contact <span className="text-blue-500">Me</span>
        </h2>
        <p className="text-gray-400 mt-2">Let's connect and build something great together!</p>
      </div>

      <form
        data-aos="fade-up"
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto bg-gradient-to-br from-purple-700 to-blue-500 p-8 rounded-xl shadow-lg space-y-6"
      >
        
        <input 
          type="hidden" 
          name="access_key" 
          value="0357ce5b-a88b-42a2-afad-2cc17a906479" 
        />

        <div>
          <label className="block mb-1 font-medium">Name</label>
          <input
            type="text"
            name="name"
            required
            className="w-full px-4 py-2 rounded bg-gray-100 text-black focus:outline-none"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Email</label>
          <input
            type="email"
            name="email"
            required
            className="w-full px-4 py-2 rounded bg-gray-100 text-black focus:outline-none"
          />
        </div>

        <div>
          <label className="block mb-1 font-medium">Message</label>
          <textarea
            name="message"
            rows="4"
            required
            className="w-full px-4 py-2 rounded bg-gray-100 text-black focus:outline-none"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 hover:bg-blue-600 transition-colors text-white font-semibold rounded"
        >
          Send Message
        </button>

        {status === "success" && (
          <p className="text-green-300 text-center font-semibold">✓ Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="text-red-300 text-center font-semibold">✗ Something went wrong. Please try again.</p>
        )}
      </form>
    </section>
  );
}