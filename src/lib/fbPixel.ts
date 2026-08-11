declare global {
  interface Window {
    fbq?: (
      action: string,
      eventName: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

export const FB_PIXEL_ID = '1973735293326543';
export const HOTMART_CHECKOUT_URL = 'https://pay.hotmart.com/H107106126D?bid=1786491843666';

// Helper safely calling fbq
const safeFbq = (
  action: 'track' | 'trackCustom',
  eventName: string,
  params?: Record<string, unknown>
) => {
  if (typeof window !== 'undefined' && window.fbq) {
    if (params) {
      window.fbq(action, eventName, params);
    } else {
      window.fbq(action, eventName);
    }
    console.log(`[Meta Pixel] Event: ${eventName}`, params || '');
  }
};

/**
 * Standard PageView event
 */
export const trackPageView = () => {
  safeFbq('track', 'PageView');
};

/**
 * Track ViewContent event (e.g. section view, digital portal access)
 */
export const trackViewContent = (contentName: string, category: string = 'Skincare Protocol', value: number = 9.90) => {
  safeFbq('track', 'ViewContent', {
    content_name: contentName,
    content_category: category,
    value: value,
    currency: 'EUR',
  });
};

/**
 * Track InitiateCheckout event with attribution source
 */
export const trackInitiateCheckout = (
  source: string = 'CTA Button',
  value: number = 9.90,
  currency: string = 'EUR'
) => {
  safeFbq('track', 'InitiateCheckout', {
    value,
    currency,
    content_name: 'Rituel Amazônia - Protocole Skincare',
    content_category: 'Digital Product',
    checkout_source: source,
  });
};

/**
 * Track AddPaymentInfo event when entering payment step
 */
export const trackAddPaymentInfo = (paymentType: string = 'Credit Card', value: number = 9.90) => {
  safeFbq('track', 'AddPaymentInfo', {
    value,
    currency: 'EUR',
    content_name: 'Rituel Amazônia - Protocole Skincare',
    payment_type: paymentType,
  });
};

/**
 * Track Purchase event on order completion
 */
export const trackPurchase = (
  value: number = 9.90,
  currency: string = 'EUR',
  transactionId?: string
) => {
  safeFbq('track', 'Purchase', {
    value,
    currency,
    content_name: 'Rituel Amazônia - Protocole Skincare',
    content_type: 'product',
    num_items: 1,
    transaction_id: transactionId || `AMZ-${Date.now()}`,
  });
};

/**
 * Track Lead / CompleteRegistration event (e.g. completing diagnostic skin quiz)
 */
export const trackLead = (skinType?: string, score?: number) => {
  safeFbq('track', 'Lead', {
    content_name: 'Diagnostic Peau Amazonienne',
    skin_type: skinType || 'Standard',
    score: score || 0,
    value: 0,
    currency: 'EUR',
  });
};

/**
 * Track Custom Event (e.g. Quiz Start, Audio Ambience Play, Module View)
 */
export const trackCustomEvent = (eventName: string, params?: Record<string, unknown>) => {
  safeFbq('trackCustom', eventName, params);
};
