/**
 * EasyBPLog ES Ad Banner Configuration
 */

export const AD_BANNER_ENABLED = true;

export interface CustomAdItem {
  id: string;
  title: string;
  subtitle: string;
  imageUrl?: string;
  linkUrl: string;
  tag: 'PR' | 'Ad' | 'Sponsored';
  ctaText?: string;
}

export interface AdConfig {
  defaultEnabled: boolean;
  adMode: 'placeholder' | 'custom' | 'script';
  allowDismiss: boolean;
  scriptSettings: {
    client?: string;
    slot?: string;
    adFormat?: string;
  };
  customAds: CustomAdItem[];
}

export const DEFAULT_AD_CONFIG: AdConfig = {
  defaultEnabled: AD_BANNER_ENABLED,
  adMode: 'script',
  allowDismiss: false,
  scriptSettings: {
    client: 'ca-pub-5353304887278086',
    slot: '',
    adFormat: 'horizontal',
  },
  customAds: [
    {
      id: 'ad-bp-monitor-es-1',
      title: 'Tensiómetros Digitales de Brazo Validados',
      subtitle: 'Precisión clínica para el control diario en casa según guías ESC/AHA',
      linkUrl: 'https://example.com/blood-pressure-monitors',
      tag: 'PR',
      ctaText: 'Ver más',
    },
    {
      id: 'ad-salt-reduction-es-2',
      title: 'Guía de Alimentación Cardiosaludable Baja en Sal',
      subtitle: 'Recetas mediterráneas y consejos prácticos para cuidar su presión',
      linkUrl: 'https://example.com/low-sodium-foods',
      tag: 'Sponsored',
      ctaText: 'Explorar',
    },
    {
      id: 'ad-clinic-guide-es-3',
      title: 'Preparación para su Consulta de Cardiología',
      subtitle: 'Cómo compartir sus promedios de mañana y noche con su médico',
      linkUrl: 'https://example.com/hypertension-guide',
      tag: 'PR',
      ctaText: 'Ver guía',
    },
  ],
};

const STORAGE_KEY_CREATOR_OVERRIDE = 'easybplog_es_creator_ad_override_v1';
const STORAGE_KEY_MODE = 'easybplog_es_ad_banner_mode_v1';

export function isAdBannerEnabled(): boolean {
  try {
    const override = localStorage.getItem(STORAGE_KEY_CREATOR_OVERRIDE);
    if (override !== null) {
      return override === 'true';
    }
  } catch (e) {
    console.warn('Failed to read creator ad override:', e);
  }
  return AD_BANNER_ENABLED;
}

export function setCreatorAdOverride(enabled: boolean): void {
  try {
    localStorage.setItem(STORAGE_KEY_CREATOR_OVERRIDE, String(enabled));
  } catch (e) {
    console.warn('Failed to set creator ad override:', e);
  }
}

export function resetCreatorAdOverride(): void {
  try {
    localStorage.removeItem(STORAGE_KEY_CREATOR_OVERRIDE);
  } catch (e) {
    console.warn('Failed to reset creator ad override:', e);
  }
}

export function getAdBannerMode(): 'placeholder' | 'custom' | 'script' {
  try {
    const saved = localStorage.getItem(STORAGE_KEY_MODE);
    if (saved === 'placeholder' || saved === 'custom' || saved === 'script') {
      return saved;
    }
  } catch (e) {
    console.warn('Failed to read ad banner mode:', e);
  }
  return DEFAULT_AD_CONFIG.adMode;
}

export function setAdBannerMode(mode: 'placeholder' | 'custom' | 'script'): void {
  try {
    localStorage.setItem(STORAGE_KEY_MODE, mode);
  } catch (e) {
    console.warn('Failed to write ad banner mode:', e);
  }
}
