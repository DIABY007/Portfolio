'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Nettoyer le numéro de téléphone (supprimer les espaces, tirets, etc.)
    const cleanPhone = formData.phone.replace(/\s|-|\(|\)/g, '');
    
    // Créer le message prérempli avec le nom et le message
    const whatsappMessage = `Bonjour, je suis ${formData.name}. ${formData.message}`;
    
    // Encoder le message pour l'URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Créer le lien WhatsApp
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
    
    // Ouvrir WhatsApp dans un nouvel onglet
    window.open(whatsappUrl, '_blank');
    
    setIsSubmitting(false);
    setSubmitStatus('success');
    setFormData({ name: '', phone: '', message: '' });
    
    // Réinitialiser le statut après 3 secondes
    setTimeout(() => setSubmitStatus('idle'), 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-4 bg-[var(--color-background)]"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center bg-gradient-to-r from-[var(--color-neon-blue)] to-[var(--color-neon-purple)] bg-clip-text text-transparent">
            Contact
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block mb-2 text-[var(--color-foreground)] font-medium">
                    Nom
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--color-dark-gray)] border border-[var(--color-neon-blue)]/30 rounded-lg text-[var(--color-foreground)] focus:outline-none focus:border-[var(--color-neon-blue)] transition-colors"
                    placeholder="Votre nom"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block mb-2 text-[var(--color-foreground)] font-medium">
                    Numéro de téléphone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--color-dark-gray)] border border-[var(--color-neon-blue)]/30 rounded-lg text-[var(--color-foreground)] focus:outline-none focus:border-[var(--color-neon-blue)] transition-colors"
                    placeholder="+226 XX XX XX XX (format international)"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block mb-2 text-[var(--color-foreground)] font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[var(--color-dark-gray)] border border-[var(--color-neon-blue)]/30 rounded-lg text-[var(--color-foreground)] focus:outline-none focus:border-[var(--color-neon-blue)] transition-colors resize-none"
                    placeholder="Votre message..."
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-[var(--color-neon-blue)] text-[var(--color-background)] rounded-lg font-semibold hover:bg-[var(--color-neon-purple)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Ouverture de WhatsApp...' : 'Ouvrir WhatsApp'}
                </button>
                
                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-400 text-center"
                  >
                    WhatsApp ouvert ! Vous pouvez maintenant envoyer votre message.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Coordonnées */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="bg-[var(--color-dark-gray)] rounded-lg p-6 border border-[var(--color-neon-blue)]/30">
                <h3 className="text-2xl font-bold mb-6 text-[var(--color-neon-blue)]">
                  Coordonnées
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">📧</span>
                    <a
                      href="mailto:kassambasouleymane@gmail.com"
                      className="text-[var(--color-foreground)] hover:text-[var(--color-neon-blue)] transition-colors underline underline-offset-2 decoration-[var(--color-neon-blue)]/50 hover:decoration-[var(--color-neon-blue)]"
                    >
                      kassambasouleymane@gmail.com
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">📱</span>
                    <a
                      href="tel:+22656636039"
                      className="text-[var(--color-foreground)] hover:text-[var(--color-neon-blue)] transition-colors"
                    >
                      +226 56 63 60 39
                    </a>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">📍</span>
                    <span className="text-[var(--color-foreground)]">
                      Bobo-Dioulasso, Burkina Faso
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <span className="text-2xl">💻</span>
                    <a
                      href="https://github.com/DIABY007"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--color-foreground)] hover:text-[var(--color-neon-blue)] transition-colors"
                    >
                      GitHub (DIABY007)
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

