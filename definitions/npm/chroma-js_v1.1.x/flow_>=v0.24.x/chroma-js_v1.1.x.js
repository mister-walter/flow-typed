type npm$chromaJs$Colorspace =
    | "rgb"
    | "cmyk"
    | "hsl"
    | "hcl"
    | "lch"
    | "hsi"
    | "hsv"
    | "lab"
    | "css"
    | "gl"
    | "hex";

type npm$chromaJs$rgbOrHsl = "rgb" | "hsl";

type npm$chromaJs$BlendMode = 
    | "multiply"
    | "darken"
    | "lighten"
    | "screen"
    | "overlay"
    | "burn"
    | "dodge";

type npm$chromaJs$ColorLike = Color | string | number | Array<number>;

interface Color {
    alpha(): number;
    alpha(value:number): Color;
    brighten(amount?:number): Color;
    darken(amount?:number): Color;
    saturate(amount?:number): Color;
    desaturate(amount?:number): Color;

    // Get/set color channels
    // Note: the channel string is <colorspace>.<channel>
    set(channel:string, value:number|string): Color;
    get(channel:string): number;

    luminance(): number;
    
    // Output conversions
    hex(): string;
    name(): string;
    css(colorspace?:npm$chromaJs$rgbOrHsl): string;
    rgb(): Array<number>;
    hsl(): Array<number>;
    hsv(): Array<number>;
    hsi(): Array<number>;
    lab(): Array<number>;
    lch(): Array<number>;
    hcl(): Array<number>;
    gl(): Array<number>;

    temperature(): number;
};

interface Scale {
    (value:number): Color;
    domain(a:number, b:number): Scale;
    domain(values: Array<number>): Scale;
    domain(): Array<number>;
    mode(colorspace: npm$chromaJs$Colorspace): Scale;
    mode(): string;
    correctLightness(): Scale;
    padding(value: number|Array<number>): Scale;
    padding(): Array<number>;
    colors(n:number): Array<string>;
    classes(n:number|Array<number>): Scale;
};

interface BezierInterpolator {
    (value:number): Color;
    scale(): Scale;
};

interface CubeHelix {
    (value:number): Color;
    scale(): Scale;
    // Configuration functions
    start(value:number): CubeHelix;
    rotations(n:number): CubeHelix;
    hue(value:number|Array<number>): CubeHelix;
    gamma(value:number): CubeHelix;
    lightness(range:Array<number>): CubeHelix;
};

declare interface chroma {
    // Factories/constructors
    static (value: npm$chromaJs$ColorLike, colorspace?:npm$chromaJs$Colorspace): Color;
    static (a: number, b:number, c:number, colorspace?:npm$chromaJs$Colorspace): Color;
    static (a: number, b:number, c:number, d:number, colorspace?:npm$chromaJs$Colorspace): Color;
    static cmyk(c:number, m:number, y:number, k:number): Color;
    static cmyk(values: Array<number>): Color;
    static hsl(h:number, s:number, l:number, a?:number): Color;
    static hsl(values: Array<number>): Color;
    static hsv(h:number, s:number, v:number, a?:number): Color;
    static hsv(values: Array<number>): Color;
    static lab(l:number, a:number, b:number): Color;
    static lab(values: Array<number>): Color;
    static lch(l:number, c:number, h:number): Color;
    static lch(values: Array<number>): Color;
    // Just LCH with the order of parameters flipped...
    static hcl(h:number, c:number, l:number): Color;
    static hcl(values: Array<number>): Color;
    static rgb(r:number, g:number, b:number, a?:number): Color;
    static rgb(values: Array<number>): Color;
    // RGB with values in [0,1] instead of [0,255]
    static gl(r:number, g:number, b:number, a?:number): Color;
    static gl(values: Array<number>): Color;
    static random(): Color;
    static temperature(kelvin:number): Color;

    // Combine colors
    static mix(a:npm$chromaJs$ColorLike, b:npm$chromaJs$ColorLike, ratio?:number, colorspace?:npm$chromaJs$Colorspace): Color;
    static blend(a:npm$chromaJs$ColorLike, b:npm$chromaJs$ColorLike, mode:npm$chromaJs$BlendMode): Color;
    static contrast(a:npm$chromaJs$ColorLike, b:npm$chromaJs$ColorLike): number;

    static scale(value?:string|Array<string>): Scale;
    static bezier(value:string|Array<string>): BezierInterpolator;
    static cubehelix(): CubeHelix;
}
