/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { X, Smartphone, Share, PlusSquare, MoreVertical, Download, CheckCircle2 } from 'lucide-react';

interface PWAInstallModalProps {
  isOpen: boolean;
  onClose: () => void;
  isIOS: boolean;
  isInstallable: boolean;
  onNativeInstall: () => Promise<boolean>;
}

export const PWAInstallModal: React.FC<PWAInstallModalProps> = ({
  isOpen,
  onClose,
  isIOS,
  isInstallable,
  onNativeInstall,
}) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-5 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center shrink-0">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-lg font-black leading-tight">
                Instalar EasyBPLog
              </h3>
              <p className="text-xs text-blue-100 mt-0.5">
                Añadir a la pantalla de inicio para acceso rápido
              </p>
            </div>
          </div>
          <button 
            type="button"
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white cursor-pointer transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-6 space-y-5">
          {/* Benefit Badge */}
          <div className="bg-blue-50/80 border border-blue-200/80 rounded-2xl p-3.5 flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div className="text-xs text-blue-950 leading-relaxed font-medium">
              Añade el icono de la app a la pantalla de su móvil. Se abre a pantalla completa como una aplicación nativa. 100% gratis y sin registro.
            </div>
          </div>

          {/* If Native Browser Prompt is available (Chrome / Edge / Android) */}
          {isInstallable ? (
            <div className="space-y-3 text-center">
              <p className="text-sm font-bold text-slate-700">
                Pulse abajo para instalar directamente en su dispositivo.
              </p>
              <button
                type="button"
                onClick={async () => {
                  const success = await onNativeInstall();
                  if (success) onClose();
                }}
                className="w-full py-3.5 px-4 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white font-extrabold text-base shadow-md shadow-blue-600/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <Download className="w-5 h-5" />
                <span>Añadir a pantalla de inicio</span>
              </button>
            </div>
          ) : isIOS ? (
            /* iPhone (Safari) Steps */
            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Cómo instalar en iPhone / iPad (Safari)
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-black text-sm flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div className="text-xs sm:text-sm text-slate-800 font-semibold flex-1">
                    Toque el botón <Share className="w-4 h-4 inline-block text-blue-600 mx-1 align-sub" /> <strong>Compartir</strong> en la barra de Safari
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-black text-sm flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div className="text-xs sm:text-sm text-slate-800 font-semibold flex-1">
                    Deslice hacia abajo y toque <PlusSquare className="w-4 h-4 inline-block text-slate-700 mx-1 align-sub" /> <strong>Añadir a pantalla de inicio</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-black text-sm flex items-center justify-center shrink-0">
                    3
                  </div>
                  <div className="text-xs sm:text-sm text-slate-800 font-semibold flex-1">
                    Toque <strong>Añadir</strong> arriba a la derecha para finalizar
                  </div>
                </div>
              </div>
            </div>
          ) : (
            /* Android / PC (Chrome) Steps */
            <div className="space-y-3">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Cómo instalar en Android / PC (Chrome)
              </div>
              <div className="space-y-2.5">
                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-black text-sm flex items-center justify-center shrink-0">
                    1
                  </div>
                  <div className="text-xs sm:text-sm text-slate-800 font-semibold flex-1">
                    Toque el <MoreVertical className="w-4 h-4 inline-block text-slate-700 mx-1 align-sub" /> <strong>Menú (3 puntos)</strong> arriba a la derecha
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl border border-slate-200/70">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 font-black text-sm flex items-center justify-center shrink-0">
                    2
                  </div>
                  <div className="text-xs sm:text-sm text-slate-800 font-semibold flex-1">
                    Toque <strong>Instalar aplicación</strong> o <strong>Añadir a pantalla de inicio</strong>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Close button */}
          <div className="pt-2">
            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-sm transition-colors cursor-pointer"
            >
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
