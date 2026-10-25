/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { DailyRecord, UserSettings } from '../types';
import { DEFAULT_SETTINGS } from './constants';

const RECORDS_STORAGE_KEY = 'easy_bplog_es_records_v1';
const SETTINGS_STORAGE_KEY = 'easy_bplog_es_settings_v1';
const SALT_CHECK_STORAGE_KEY = 'easy_bplog_es_sodium_check_v1';

export const TAG_MIGRATION_MAP: Record<string, string> = {
  'くすり飲んだ': 'meds_taken',
  '飲酒': 'alcohol',
  '旅行・外出': 'travel',
  '寝不足・ストレス': 'stress_sleep',
  '体調不良': 'unwell',
  'くすり開始・変更': 'meds_changed',
};

export const NOTE_MIGRATION_MAP: Record<string, string> = {};

export function loadStoredRecords(): DailyRecord[] {
  try {
    const raw = localStorage.getItem(RECORDS_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error('Failed to load records from localStorage', err);
    return [];
  }
}

export function saveStoredRecords(records: DailyRecord[]): void {
  try {
    localStorage.setItem(RECORDS_STORAGE_KEY, JSON.stringify(records));
  } catch (err) {
    console.error('Failed to save records to localStorage', err);
  }
}

export function loadStoredSettings(): UserSettings {
  try {
    const raw = localStorage.getItem(SETTINGS_STORAGE_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    const parsed = JSON.parse(raw);
    return {
      targetSystolic: parsed.targetSystolic ?? DEFAULT_SETTINGS.targetSystolic,
      targetDiastolic: parsed.targetDiastolic ?? DEFAULT_SETTINGS.targetDiastolic,
      hospitalName: parsed.hospitalName ?? '',
      patientName: parsed.patientName ?? '',
      weightUnit: parsed.weightUnit ?? 'kg',
    };
  } catch (err) {
    console.error('Failed to load settings from localStorage', err);
    return DEFAULT_SETTINGS;
  }
}

export function saveStoredSettings(settings: UserSettings): void {
  try {
    localStorage.setItem(SETTINGS_STORAGE_KEY, JSON.stringify(settings));
  } catch (err) {
    console.error('Failed to save settings to localStorage', err);
  }
}

export function loadStoredSaltCheck(): Record<number, number> {
  try {
    const raw = localStorage.getItem(SALT_CHECK_STORAGE_KEY);
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

export function saveStoredSaltCheck(answers: Record<number, number>): void {
  try {
    localStorage.setItem(SALT_CHECK_STORAGE_KEY, JSON.stringify(answers));
  } catch (err) {
    console.error('Failed to save salt check', err);
  }
}

export function exportBackupJSON(records: DailyRecord[], settings: UserSettings): void {
  const data = {
    app: 'EasyBPLog ES',
    version: '2.0-ESC-AHA',
    exportDate: new Date().toISOString(),
    settings,
    records,
  };
  const jsonStr = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const patientSlug = settings.patientName?.trim()
    ? `${settings.patientName.trim().replace(/[/\\?%*:|"<>]/g, '')}_`
    : '';
  a.download = `EasyBPLog_ES_Respaldo_${patientSlug}${new Date().toISOString().slice(0, 10)}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

export function exportRecordsCSV(records: DailyRecord[], settings: UserSettings): void {
  const headers = [
    'Fecha',
    'Manana_Sis_1',
    'Manana_Dia_1',
    'Manana_Pulso_1',
    'Manana_Sis_2',
    'Manana_Dia_2',
    'Manana_Pulso_2',
    'Noche_Sis_1',
    'Noche_Dia_1',
    'Noche_Pulso_1',
    'Noche_Sis_2',
    'Noche_Dia_2',
    'Noche_Pulso_2',
    `Peso_${settings.weightUnit || 'kg'}`,
    'Etiquetas',
    'Notas',
  ];

  const rows = records.map((r) => {
    return [
      r.date,
      r.morning.first.systolic ?? '',
      r.morning.first.diastolic ?? '',
      r.morning.first.pulse ?? '',
      r.morning.second.systolic ?? '',
      r.morning.second.diastolic ?? '',
      r.morning.second.pulse ?? '',
      r.evening.first.systolic ?? '',
      r.evening.first.diastolic ?? '',
      r.evening.first.pulse ?? '',
      r.evening.second.systolic ?? '',
      r.evening.second.diastolic ?? '',
      r.evening.second.pulse ?? '',
      r.weight ?? '',
      `"${r.tags.join(';')}"`,
      `"${(r.note || '').replace(/"/g, '""')}"`,
    ].join(',');
  });

  const csvContent = [headers.join(','), ...rows].join('\n');
  const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const patientSlug = settings.patientName?.trim()
    ? `${settings.patientName.trim().replace(/[/\\?%*:|"<>]/g, '')}_`
    : '';
  a.download = `EasyBPLog_ES_Informe_${patientSlug}${new Date().toISOString().slice(0, 10)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
