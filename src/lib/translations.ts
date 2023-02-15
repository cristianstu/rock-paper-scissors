import { Item } from '../models';
import type { Locale } from './i18n';

const translations: Record<Locale, Record<string, string>> = {
  en: {
    // 'homepage.welcome': 'Hi <strong>{{name}}</strong>, how are you?',
    'app.title': 'Rock Paper Scissors',
    'app.win.message': 'you win!',
    'app.lose.message': 'you lose',
    'app.lose.tie': "It's a tie!",
    'app.play-again': 'play again',
    'app.mode.classic': 'classic',
    'app.mode.extended': 'extended',
    'app.you-picked': 'you picked',
    'app.oponent-picked': 'the house picked',
    'app.score': 'score',
    'app.items.rock': 'rock',
    'app.items.paper': 'paper',
    'app.items.scissors': 'scissors',
    'app.items.lizard': 'lizard',
    'app.items.spock': 'spock'
  },
  es: {
    'app.title': 'Piedra Papel Tijera',
    'app.win.message': 'ganaste!',
    'app.lose.message': 'perdiste',
    'app.lose.tie': 'es un empate',
    'app.play-again': 'Jugar otra vez',
    'app.mode.classic': 'clásico',
    'app.mode.extended': 'extendido',
    'app.you-picked': 'tu elección',
    'app.oponent-picked': 'la elección de la casa',
    'app.score': 'puntos',
    [`app.items.${Item.ROCK}`]: 'piedra',
    [`app.items.${Item.PAPER}`]: 'papel',
    [`app.items.${Item.SCISSORS}`]: 'tijera',
    [`app.items.${Item.LIZARD}`]: 'lagarto',
    [`app.items.${Item.SPOCK}`]: 'spock'
  }
};

export default translations;
