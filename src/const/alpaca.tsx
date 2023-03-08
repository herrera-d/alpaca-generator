import {
    AlpacaConfiguration,
    AlpacaState,
    CustomizationOption,
    TargetType,
} from '../types'
import { backgroundColors } from './buttons'

export type caca = {
    selectedTarget: TargetType
    selectedCustomization: CustomizationOption
    isBackground?: boolean
}

export const ALPACA_DEFAULT_STATE: AlpacaState = [
    {
        selectedTarget: 'hair',
        selectedCustomization: 'default',
    },
    {
        selectedTarget: 'eyes',
        selectedCustomization: 'default',
    },
    {
        selectedTarget: 'ears',
        selectedCustomization: 'tilt-backward',
    },
    {
        selectedTarget: 'leg',
        selectedCustomization: 'default',
    },
    {
        selectedTarget: 'mouth',
        selectedCustomization: 'default',
    },
    {
        selectedTarget: 'neck',
        selectedCustomization: 'default',
    },
    {
        selectedTarget: 'accessories',
        selectedCustomization: 'default',
    },
    {
        selectedTarget: 'backgrounds',
        selectedCustomization: 'default',
    },
    {
        selectedTarget: 'nose',
        selectedCustomization: 'default',
    },
]

export const ALPACA_CUSTOMIZATION_OPTIONS: AlpacaConfiguration[] = [
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
        customizationOptions: [
            'astonished',
            'eating',
            'default',
            'eating',
            'tongue',
        ],
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
        target: 'backgrounds',
        customizationOptions: [
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
            'CB4B15',
            'FBD33F',
        ],
    },
    {
        target: 'nose',
        customizationOptions: ['nose'],
    },
]
