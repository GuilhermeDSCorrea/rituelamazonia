import React, { useState } from 'react';
import { X, Lock, ShieldCheck, Check, Sparkles, CreditCard, ArrowRight, Download, Laptop } from 'lucide-react';
import { PROGRAM_INFO } from '../data/protocolData';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple' | 'paypal'>('card');
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) {
      setError('Veuillez entrer une adresse email valide.');
      return;
    }
    setError('');
    setIsProcessing(true);

    // Simulate instant payment approval
    setTimeout(() => {
      setIsProcessing(false);
      onSuccess();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="bg-[#FDFBF7] rounded-3xl max-w-lg w-full border border-[#E6D5B8] shadow-2xl overflow-hidden relative my-8">
        
        {/* Top Header */}
        <div className="bg-[#1A3323] text-[#FDFBF7] p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-[#E6C875]" />
            <span className="font-serif text-lg font-semibold">Validation de votre accès</span>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#264A35] flex items-center justify-center text-[#FDFBF7] hover:bg-[#325F45] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-6">
          
          {/* Product Summary Box */}
          <div className="bg-[#F8F3EE] p-4 rounded-2xl border border-[#E6D5B8]/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#1A3323] text-[#E6C875] flex items-center justify-center font-bold font-serif text-sm">
                RA
              </div>
              <div>
                <h4 className="font-serif font-bold text-[#1A3323] text-base">
                  {PROGRAM_INFO.name}
                </h4>
                <p className="text-[11px] text-[#2C3531]/70">
                  Protocole Digital + Ebook PDF
                </p>
              </div>
            </div>

            <div className="text-right">
              <span className="text-xs text-[#2C3531]/50 line-through block">47,00 €</span>
              <span className="font-serif font-bold text-xl text-[#264A35]">
                {PROGRAM_INFO.price}
              </span>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            
            {/* Email Field */}
            <div>
              <label className="block text-xs font-bold text-[#1A3323] uppercase tracking-wider mb-1">
                Adresse email (pour recevoir vos accès immédiats) *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre.email@exemple.com"
                className="w-full px-4 py-3 rounded-xl border border-[#E6D5B8] bg-[#FDFBF7] text-xs sm:text-sm text-[#1A3323] focus:outline-none focus:ring-2 focus:ring-[#1A3323]"
              />
            </div>

            {/* First Name Field */}
            <div>
              <label className="block text-xs font-bold text-[#1A3323] uppercase tracking-wider mb-1">
                Prénom *
              </label>
              <input
                type="text"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Votre prénom"
                className="w-full px-4 py-3 rounded-xl border border-[#E6D5B8] bg-[#FDFBF7] text-xs sm:text-sm text-[#1A3323] focus:outline-none focus:ring-2 focus:ring-[#1A3323]"
              />
            </div>

            {/* Payment Options */}
            <div>
              <label className="block text-xs font-bold text-[#1A3323] uppercase tracking-wider mb-2">
                Mode de paiement sécurisé
              </label>

              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod('card')}
                  className={`p-3 rounded-xl border text-xs font-semibold flex flex-col items-center justify-center gap-1 transition-all ${
                    paymentMethod === 'card'
                      ? 'bg-[#1A3323] text-[#FDFBF7] border-[#1A3323]'
                      : 'bg-[#F8F3EE] text-[#1A3323] border-[#E6D5B8]'
                  }`}
                >
                  <CreditCard className="w-4 h-4" />
                  <span>Carte</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('apple')}
                  className={`p-3 rounded-xl border text-xs font-semibold flex flex-col items-center justify-center gap-1 transition-all ${
                    paymentMethod === 'apple'
                      ? 'bg-[#1A3323] text-[#FDFBF7] border-[#1A3323]'
                      : 'bg-[#F8F3EE] text-[#1A3323] border-[#E6D5B8]'
                  }`}
                >
                  <Laptop className="w-4 h-4" />
                  <span>Apple Pay</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod('paypal')}
                  className={`p-3 rounded-xl border text-xs font-semibold flex flex-col items-center justify-center gap-1 transition-all ${
                    paymentMethod === 'paypal'
                      ? 'bg-[#1A3323] text-[#FDFBF7] border-[#1A3323]'
                      : 'bg-[#F8F3EE] text-[#1A3323] border-[#E6D5B8]'
                  }`}
                >
                  <Sparkles className="w-4 h-4 text-[#E6C875]" />
                  <span>PayPal</span>
                </button>
              </div>
            </div>

            {error && (
              <p className="text-xs text-red-600 font-medium">{error}</p>
            )}

            {/* Price Total Reassurance */}
            <div className="pt-2 border-t border-[#E6D5B8]/60 flex items-center justify-between text-xs">
              <span className="text-[#2C3531]/70">Montant total débité :</span>
              <span className="font-serif font-bold text-lg text-[#1A3323]">9,90 € TTC</span>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-[#1A3323] hover:bg-[#264A35] text-[#FDFBF7] py-4 rounded-full font-bold text-sm shadow-lg flex items-center justify-center gap-2 transition-all disabled:opacity-70"
            >
              {isProcessing ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-[#E6C875] border-t-transparent rounded-full animate-spin" />
                  <span>Validation sécurisée...</span>
                </div>
              ) : (
                <>
                  <span>Payer 9,90 € & Accéder immédiatement</span>
                  <ArrowRight className="w-4 h-4 text-[#E6C875]" />
                </>
              )}
            </button>

          </form>

          {/* Guarantees Footer */}
          <div className="flex items-center justify-center gap-4 text-[10px] text-[#2C3531]/70 pt-1">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#264A35]" />
              Garantie 14 Jours
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Download className="w-3.5 h-3.5 text-[#B89753]" />
              Livraison Instantanée par Email
            </span>
          </div>

        </div>

      </div>
    </div>
  );
};
