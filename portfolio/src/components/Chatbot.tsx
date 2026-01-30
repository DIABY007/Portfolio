'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Bonjour ! Je suis votre assistant virtuel. Comment puis-je vous aider ? Vous pouvez me poser des questions sur mes compétences, mes projets, ou me contacter.',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('compétence') || lowerMessage.includes('skill') || lowerMessage.includes('technologie')) {
      return 'Mes compétences incluent : Frontend (React, Next.js, Tailwind), Backend (PHP, Laravel, Python), Bases de données (MySQL, PostgreSQL, Supabase), Outils (Git, GitHub, Cursor), et Solutions IA (automatisation, bots WhatsApp).';
    }

    if (lowerMessage.includes('projet') || lowerMessage.includes('portfolio') || lowerMessage.includes('réalis')) {
      return 'Mes projets principaux sont : NeoSchool (SaaS de gestion scolaire), NeoShop (E-commerce), NeoScholar (Plateforme étudiante avec IA), NeoCodex (Site d\'agence), et des Bots WhatsApp. Vous pouvez voir plus de détails dans la section Portfolio !';
    }

    if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('téléphone') || lowerMessage.includes('coordonnée')) {
      return 'Vous pouvez me contacter par : Email : kassambasouleymane@gmail.com, Téléphone : +226 56 63 60 39, ou via WhatsApp. Je suis basé à Bobo-Dioulasso, Burkina Faso.';
    }

    if (lowerMessage.includes('service') || lowerMessage.includes('offre')) {
      return 'J\'offre trois types de services : 1) Développement Web & SaaS (sites vitrines, e-commerce, applications), 2) Automatisation & Chatbots (Bots WhatsApp, workflows), 3) Solutions IA & Contenu (IA générative, visuels publicitaires).';
    }

    if (lowerMessage.includes('bonjour') || lowerMessage.includes('salut') || lowerMessage.includes('hello')) {
      return 'Bonjour ! Ravi de vous rencontrer. Comment puis-je vous aider aujourd\'hui ?';
    }

    if (lowerMessage.includes('à propos') || lowerMessage.includes('qui') || lowerMessage.includes('présentation')) {
      return 'Je suis Diaby Souleymane KASSAMBA, étudiant en Licence Génie Logiciel, spécialisé en développement fullstack, IA et automatisation. Mon approche est orientée solutions et résultats business.';
    }

    return 'Merci pour votre message ! Pour plus d\'informations, vous pouvez explorer les sections de mon portfolio ou me contacter directement. Comment puis-je vous aider autrement ?';
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');

    // Simuler un délai de réponse du bot
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Bouton flottant */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[var(--color-neon-blue)] rounded-full shadow-lg shadow-[var(--color-neon-blue)]/50 flex items-center justify-center text-2xl hover:bg-[var(--color-neon-purple)] transition-colors"
        aria-label="Ouvrir le chatbot"
      >
        {isOpen ? '✕' : '💬'}
      </motion.button>

      {/* Fenêtre de chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-96 h-[500px] bg-[var(--color-dark-gray)] rounded-lg border border-[var(--color-neon-blue)] shadow-2xl flex flex-col overflow-hidden"
          >
            {/* En-tête */}
            <div className="bg-[var(--color-neon-blue)] p-4 flex items-center justify-between">
              <h3 className="text-lg font-bold text-[var(--color-background)]">
                Assistant Virtuel
              </h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[var(--color-background)] hover:text-[var(--color-darker-gray)] transition-colors"
                aria-label="Fermer le chatbot"
              >
                ✕
              </button>
            </div>

            {/* Zone de messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-[var(--color-neon-blue)] text-[var(--color-background)]'
                        : 'bg-[var(--color-darker-gray)] text-[var(--color-foreground)] border border-[var(--color-neon-purple)]/30'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t border-[var(--color-neon-blue)]/30">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Tapez votre message..."
                  className="flex-1 px-4 py-2 bg-[var(--color-darker-gray)] border border-[var(--color-neon-blue)]/30 rounded-lg text-[var(--color-foreground)] focus:outline-none focus:border-[var(--color-neon-blue)] transition-colors"
                />
                <button
                  onClick={handleSendMessage}
                  className="px-6 py-2 bg-[var(--color-neon-blue)] text-[var(--color-background)] rounded-lg font-semibold hover:bg-[var(--color-neon-purple)] transition-colors"
                >
                  Envoyer
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

