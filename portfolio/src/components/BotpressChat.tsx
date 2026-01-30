'use client';

import { useEffect } from 'react';

export default function BotpressChat() {
  useEffect(() => {
    // Vérifier si les scripts sont déjà chargés
    const existingScript1 = document.querySelector('script[src="https://cdn.botpress.cloud/webchat/v3.5/inject.js"]');
    const existingScript2 = document.querySelector('script[src="https://files.bpcontent.cloud/2026/01/26/01/20260126013149-L3DTFTYD.js"]');

    if (existingScript1 && existingScript2) {
      return; // Les scripts sont déjà chargés
    }

    // Charger le script principal de Botpress
    const script1 = document.createElement('script');
    script1.src = 'https://cdn.botpress.cloud/webchat/v3.5/inject.js';
    script1.async = true;
    script1.id = 'botpress-inject-script';
    document.body.appendChild(script1);

    // Charger le script de configuration personnalisé
    const script2 = document.createElement('script');
    script2.src = 'https://files.bpcontent.cloud/2026/01/26/01/20260126013149-L3DTFTYD.js';
    script2.defer = true;
    script2.id = 'botpress-config-script';
    document.body.appendChild(script2);

    // Nettoyage lors du démontage du composant (optionnel, car les scripts peuvent rester)
    return () => {
      const script1ToRemove = document.getElementById('botpress-inject-script');
      const script2ToRemove = document.getElementById('botpress-config-script');
      
      if (script1ToRemove && script1ToRemove.parentNode) {
        script1ToRemove.parentNode.removeChild(script1ToRemove);
      }
      if (script2ToRemove && script2ToRemove.parentNode) {
        script2ToRemove.parentNode.removeChild(script2ToRemove);
      }
    };
  }, []);

  return null; // Ce composant ne rend rien visuellement
}

