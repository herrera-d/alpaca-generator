export type TargetType =
    | 'hair'
    | 'eyes'
    | 'ears'
    | 'leg'
    | 'mouth'
    | 'neck'
    | 'nose'
    | 'accessories'
    | 'backgrounds'

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
    | 'tongue'
    | 'bend-backward'
    | 'bend-forward'
    | 'thick'
    | 'earings'
    | 'flower'
    | 'glasses'
    | 'nose'
    | 'flower'
    | 'headphone'
    | ('earings' & BackgroundColor)

export type BackgroundColorCSSValue =
    | '#FBD33F'
    | '#E85E22'
    | '#E5B60E'
    | '#CE8E'
    | '#CCCCCC'
    | '#666666'
    | '#333333'
    | '#5696F6'
    | '#002966'
    | '#01193D'
    | '#74BD28'
    | '#9FD967'
    | '#9FD966'
    | '#9F370B'
    | '#7A8FAF'
    | '#2B7BF4'
    | '#2A5CA7'
    | '#2A5CA7'
    | '#CB4B15'

export type AlpacaState = {
    selectedTarget: TargetType
    selectedCustomization: CustomizationOption
}[]

export interface AlpacaStateOption {
    selectedTarget: TargetType
    selectedCustomization: CustomizationOption
}

export type AlpacaConfiguration = {
    target: TargetType
    customizationOptions: CustomizationOption[] | BackgroundColorCSSValue[]
}
