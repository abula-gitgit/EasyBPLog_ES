/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { SaltQuestion } from '../types';

export const SALT_QUESTIONS: SaltQuestion[] = [
  {
    id: 1,
    question: '1. ¿Con qué frecuencia consume embutidos, jamón serrano/cocido, chorizo, tocino o salchichas?',
    category: 'Embutidos y Carnes Curadas',
    options: [
      { label: 'Casi a diario (5+ días/semana)', points: 3 },
      { label: '3 a 4 veces por semana', points: 2 },
      { label: '1 a 2 veces por semana', points: 1 },
      { label: 'Rara vez o nunca', points: 0 },
    ],
  },
  {
    id: 2,
    question: '2. ¿Con qué frecuencia consume sopas de sobre, caldos envasados o cubitos de caldo concentrado?',
    category: 'Sopas y Caldos',
    options: [
      { label: 'Casi a diario (5+ días/semana)', points: 3 },
      { label: '3 a 4 veces por semana', points: 2 },
      { label: '1 a 2 veces por semana', points: 1 },
      { label: 'Rara vez (o caldos caseros sin sal)', points: 0 },
    ],
  },
  {
    id: 3,
    question: '3. ¿Con qué frecuencia come pizza, hamburguesas, tacos comerciales o comida rápida?',
    category: 'Comida Rápida y Pizzas',
    options: [
      { label: '3 o más veces por semana', points: 3 },
      { label: '1 a 2 veces por semana', points: 2 },
      { label: 'Algunas veces al mes', points: 1 },
      { label: 'Rara vez o nunca', points: 0 },
    ],
  },
  {
    id: 4,
    question: '4. ¿Cuánto pan comercial, bollería salada o tortillas de harina envasadas consume al día?',
    category: 'Pan y Cereales',
    options: [
      { label: '3 o más raciones cada día', points: 3 },
      { label: '1 a 2 raciones al día', points: 2 },
      { label: 'Algunas veces por semana', points: 1 },
      { label: 'Rara vez o pan sin sal', points: 0 },
    ],
  },
  {
    id: 5,
    question: '5. ¿Con qué frecuencia toma aperitivos salados (papas fritas, aceitunas, frutos secos salados, galletas saladas)?',
    category: 'Aperitivos y Tapas',
    options: [
      { label: 'Casi a diario', points: 3 },
      { label: '3 a 4 veces por semana', points: 2 },
      { label: '1 a 2 veces por semana', points: 1 },
      { label: 'Rara vez (o frutos secos naturales sin sal)', points: 0 },
    ],
  },
  {
    id: 6,
    question: '6. ¿Cómo utiliza las salsas comerciales (salsa de soja, kétchup, mayonesa, aderezos o salsas picantes embotelladas)?',
    category: 'Salsas y Condimentos',
    options: [
      { label: 'Abundantemente en casi todas las comidas', points: 3 },
      { label: 'Uso salsas comerciales con frecuencia', points: 2 },
      { label: 'Solo pequeñas cantidades ocasionalmente', points: 1 },
      { label: 'Uso aceite de oliva, limón, ajo y hierbas aromáticas', points: 0 },
    ],
  },
  {
    id: 7,
    question: '7. ¿Con qué frecuencia consume platos precocinados, congelados o conservas en lata?',
    category: 'Platos Preparados',
    options: [
      { label: 'Casi a diario (4+ veces/semana)', points: 3 },
      { label: '2 a 3 veces por semana', points: 2 },
      { label: 'Una vez por semana o menos', points: 1 },
      { label: 'Rara vez (cocino con ingredientes frescos)', points: 0 },
    ],
  },
  {
    id: 8,
    question: '8. ¿Suele añadir sal con el salero en la mesa cuando el plato ya está servido?',
    category: 'Sal de Mesa',
    options: [
      { label: 'Siempre añado sal antes de probar la comida', points: 3 },
      { label: 'Suelo añadir sal después de probarla', points: 2 },
      { label: 'Solo una pizca ocasionalmente', points: 1 },
      { label: 'Nunca pongo el salero en la mesa', points: 0 },
    ],
  },
  {
    id: 9,
    question: '9. ¿Con qué frecuencia almuerza en restaurantes, bares de menú o pide comida para llevar?',
    category: 'Comidas Fuera de Casa',
    options: [
      { label: 'Casi todos los días (4 a 5+ veces/semana)', points: 3 },
      { label: '2 a 3 veces por semana', points: 2 },
      { label: 'Una vez por semana', points: 1 },
      { label: 'Rara vez (comida casera)', points: 0 },
    ],
  },
  {
    id: 10,
    question: '10. ¿Con qué frecuencia cena en restaurantes o pide comida a domicilio?',
    category: 'Cenas Fuera de Casa',
    options: [
      { label: 'Casi todos los días (4+ veces/semana)', points: 3 },
      { label: '2 a 3 veces por semana', points: 2 },
      { label: 'Una vez por semana', points: 1 },
      { label: 'Rara vez (cenas preparadas en casa)', points: 0 },
    ],
  },
  {
    id: 11,
    question: '11. ¿Con qué frecuencia consume quesos curados o semicurados (manchego, parmesano, queso fresco salado, cheddar)?',
    category: 'Lácteos y Quesos',
    options: [
      { label: 'Varias veces al día', points: 3 },
      { label: 'Una vez al día', points: 2 },
      { label: 'Algunas veces por semana', points: 1 },
      { label: 'Rara vez o solo queso bajo en sal', points: 0 },
    ],
  },
  {
    id: 12,
    question: '12. ¿Qué frase describe mejor su preferencia general de sabor en las comidas?',
    category: 'Preferencia de Sazonado',
    options: [
      { label: 'Prefiero comidas bien saladas y de sabor intenso', points: 3 },
      { label: 'Me gusta el punto de sal habitual', points: 2 },
      { label: 'Prefiero sabores suaves y poca sal', points: 1 },
      { label: 'Cocino específicamente sin sal añadida usando especias', points: 0 },
    ],
  },
];

export function evaluateSaltScore(totalPoints: number): {
  level: 'excellent' | 'good' | 'warning' | 'danger';
  title: string;
  description: string;
  advice: string;
  badgeColor: string;
} {
  if (totalPoints <= 8) {
    return {
      level: 'excellent',
      title: 'Consumo de Sodio Óptimo (Ideal ESC/AHA)',
      description: 'Su ingesta estimada de sal se alinea con el objetivo ideal (< 1.500 mg de sodio o < 4 g de sal al día).',
      advice: 'Mantenga sus excelentes hábitos cocinando con productos frescos, aceite de oliva y especias naturales.',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
    };
  } else if (totalPoints <= 14) {
    return {
      level: 'good',
      title: 'Consumo Moderado de Sodio (< 2.000 mg/día)',
      description: 'Se encuentra cerca del límite recomendado por la OMS y la ESC (< 5 g de sal/día), aunque puede optimizarse.',
      advice: 'Reduzca embutidos y quesos curados, elija pan bajo en sal y evite caldos industriales concentrados.',
      badgeColor: 'bg-blue-100 text-blue-800 border-blue-300',
    };
  } else if (totalPoints <= 21) {
    return {
      level: 'warning',
      title: 'Consumo Elevado de Sal (Riesgo de Hipertensión)',
      description: 'Su consumo de sodio supera las recomendaciones clínicas y puede estar elevando su presión arterial.',
      advice: 'Limite los embutidos, el pan comercial, las pizzas y los aperitivos salados. Retire el salero de la mesa.',
      badgeColor: 'bg-amber-100 text-amber-800 border-amber-300',
    };
  } else {
    return {
      level: 'danger',
      title: 'Consumo Muy Alto de Sodio (Acción Requerida)',
      description: 'Su ingesta de sal es crítica y puede reducir la eficacia de sus medicamentos antihipertensivos.',
      advice: 'Consulte con su médico o nutricionista para adoptar la dieta mediterránea hiposódica o el plan DASH.',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
    };
  }
}

export const BP_MEASUREMENT_RULES = [
  {
    number: '1',
    title: 'Reposo Previo de 5 Minutos',
    desc: 'Siéntese en un ambiente tranquilo durante 5 minutos antes de medir. Evite hablar o mirar el móvil durante la lectura.',
  },
  {
    number: '2',
    title: 'Postura Correcta',
    desc: 'Apoye bien la espalda en el respaldo de la silla. Mantenga ambos pies planos sobre el suelo sin cruzar las piernas.',
  },
  {
    number: '3',
    title: 'Brazo a la Altura del Corazón',
    desc: 'Apoye el brazo sobre una mesa de modo que el manguito quede exactamente a la altura del corazón, con la palma hacia arriba.',
  },
  {
    number: '4',
    title: 'Colocación del Manguito',
    desc: 'Coloque el manguito sobre la piel desnuda, 2 cm por encima del pliegue del codo, ajustado pero permitiendo pasar un dedo.',
  },
  {
    number: '5',
    title: 'Medición por la Mañana',
    desc: 'Mida dentro de la primera hora tras despertar, después de ir al baño (vaciar la vejiga) y antes del desayuno o de tomar su medicación.',
  },
  {
    number: '6',
    title: 'Medición por la Noche',
    desc: 'Mida antes de acostarse. Evite medir justo después de una ducha caliente, haber tomado alcohol o realizar ejercicio físico.',
  },
  {
    number: '7',
    title: 'Dos Lecturas Separadas por 1 Minuto',
    desc: 'Realice 2 mediciones consecutivas con 1 minuto de intervalo. EasyBPLog registra ambas y calcula su promedio clínico automáticamente.',
  },
];
