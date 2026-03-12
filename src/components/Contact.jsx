import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiFacebook, FiSend } from 'react-icons/fi';

const Contact = () => {
  const contactInfo = [
    { 
      icon: FiMail, 
      label: "Email", 
      value: "kentlloydvillanueva@gmail.com", 
      link: "mailto:kentlloydvillanueva@gmail.com",
      color: "#0ea5e9"
    },
    { 
      icon: FiPhone, 
      label: "Phone", 
      value: "+63 930 061 0038", 
      link: "tel:+639300610038",
      color: "#8b5cf6"
    },
    { 
      icon: FiFacebook, 
      label: "Facebook", 
      value: "Kentlloyd Villanueva", 
      link: "https://www.facebook.com/share/17ucTuG1Gx/",
      color: "#f43f5e"
    },
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto glass p-12 md:p-20 rounded-[3rem] text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-outfit font-extrabold mb-8"
          >
            Let's <span className="gradient-text">Work Together</span>
          </motion.h2>
          
          <p className="text-gray-400 text-lg md:text-xl font-inter mb-16 max-w-2xl mx-auto">
            Ready to bring your vision to life? Whether you have a project in mind or just want to say hi, I'm always open to new opportunities.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-16">
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.link}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="flex flex-col items-center group"
              >
                <div 
                  className="w-16 h-16 rounded-2xl glass flex items-center justify-center text-2xl mb-4 transition-all duration-300 group-hover:scale-110"
                  style={{ color: info.color }}
                >
                  <info.icon />
                </div>
                <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">{info.label}</span>
                <span className="text-gray-200 font-medium group-hover:text-primary transition-colors">{info.value}</span>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <a href="mailto:kentlloydvillanueva@gmail.com?subject=Hello%20Kentlloyd%20-%20Let's%20Work%20Together&body=Hi%20Kentlloyd%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20would%20love%20to%20connect%21%0A%0A">
              <button className="bg-gradient-to-r from-primary to-secondary text-white px-12 py-5 rounded-full font-bold text-xl flex items-center gap-3 transition-all transform hover:scale-105 hover:shadow-[0_10px_30px_rgba(14,165,233,0.3)]">
                Send a Message <FiSend />
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
