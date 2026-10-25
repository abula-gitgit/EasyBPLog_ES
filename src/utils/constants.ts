/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { UserSettings } from '../types';

export const DEFAULT_SETTINGS: UserSettings = {
  targetSystolic: 130,
  targetDiastolic: 80,
  hospitalName: '',
  patientName: '',
  weightUnit: 'kg',
};

// ESC/ESH & AHA Clinical Target Thresholds (Home BP target)
export const AHA_TARGET_SYSTOLIC = 130;
export const AHA_TARGET_DIASTOLIC = 80;

export const LIFESTYLE_TAGS = [
  { id: 'meds_taken', label: '💊 Medicación tomada', category: 'medication' },
  { id: 'alcohol', label: '🍺 Alcohol', category: 'lifestyle' },
  { id: 'travel', label: '✈️ Viaje / Salida', category: 'lifestyle' },
  { id: 'stress_sleep', label: '😰 Estrés / Mal sueño', category: 'condition' },
  { id: 'unwell', label: '🤒 Malestar', category: 'condition' },
  { id: 'meds_changed', label: '🆕 Cambio de dosis', category: 'medication' },
] as const;

export const EMPTY_MEASUREMENT = {
  systolic: null,
  diastolic: null,
  pulse: null,
};
