import { TargetType } from '../components/alpacaViewer/AlpacaViewer'

export type BackgroundColor =
    | '2A5CA7'
    | '2B7BF4'
    | '5696F6'
    | '7A8FAF'
    | '9F370B'
    | '9FD966'
    | '9FD967'
    | '74BD28'
    | '01193D'
    | '002966'
    | '5696F6'
    | '333333'
    | '666666'
    | 'CCCCCC'
    | 'CE8E'
    | 'E5B60E'
    | 'E85E22'
    | 'FBD33F'

export type CustomizationOption =
    | 'bang'
    | 'curls'
    | 'default'
    | 'elegant'
    | 'quiff'
    | 'angry'
    | 'naughty'
    | 'panda'
    | 'smart'
    | 'star'
    | 'cookie'
    | 'bubble-tea'
    | 'game-console'
    | 'tilt-backward'
    | 'tilt-forward'
    | 'astonished'
    | 'eating'
    | 'laugh'
    | 'fancy'
    | 'short'
    | '#2A5CA7'
    | '#2B7BF4'
    | '#5696F6'
    | 'tongue'
    | 'bend-backward'
    | 'bend-forward'
    | 'thick'
    | 'earings'
    | 'flower'
    | 'glasses'
    | 'headphone'
    | BackgroundColor

export const TARGET_NAMES: TargetType[] = [
    'hair',
    'eyes',
    'ears',
    'leg',
    'mouth',
    'neck',
    'accessories',
    'backgrounds',
]

export const backgroundColors: BackgroundColor[] = [
    '2A5CA7',
    '2B7BF4',
    '5696F6',
    '7A8FAF',
    '9F370B',
    '9FD966',
    '9FD967',
    '74BD28',
    '01193D',
    '002966',
    '5696F6',
    '333333',
    '666666',
    'CCCCCC',
    'CE8E',
    'E5B60E',
    'E85E22',
    'FBD33F',
]

export const ALPACA_CUSTOMIZATION_OPTIONS: {
    target: TargetType
    customizationOptions: CustomizationOption[] | BackgroundColor[]
}[] = [
    {
        target: 'backgrounds',
        customizationOptions: backgroundColors,
    },
    {
        target: 'hair',
        customizationOptions: [
            'bang',
            'curls',
            'default',
            'elegant',
            'fancy',
            'quiff',
            'short',
        ],
    },
    {
        target: 'eyes',
        customizationOptions: [
            'angry',
            'naughty',
            'default',
            'panda',
            'smart',
            'star',
        ],
    },
    {
        target: 'ears',
        customizationOptions: ['tilt-backward', 'tilt-forward', 'default'],
    },
    {
        target: 'leg',
        customizationOptions: [
            'cookie',
            'bubble-tea',
            'default',
            'game-console',
            'tilt-backward',
            'tilt-forward',
        ],
    },
    {
        target: 'mouth',
        customizationOptions: ['astonished', 'eating', 'default', 'tongue'],
    },
    {
        target: 'neck',
        customizationOptions: [
            'bend-backward',
            'bend-forward',
            'default',
            'thick',
        ],
    },
    {
        target: 'accessories',
        customizationOptions: ['earings', 'flower', 'glasses', 'headphone'],
    },
    {
        target: 'nose',
        customizationOptions: ['default'],
    },
]

export interface AlpacaCustmizationOption {
    target: TargetType
    customizationOptions: CustomizationOption[]
}
