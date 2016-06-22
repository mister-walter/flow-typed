// @flow

// Taken from the chroma.js website (http://gka.github.io/chroma.js/)

chroma('pink').darken().saturate(2).hex();
chroma.scale(['white','green','blue']).colors(5);

chroma('hotpink');
chroma('#ff3399');
chroma(0xff3399);
chroma(0xff, 0x33, 0x99);
chroma(255, 51, 153);
chroma([255, 51, 153]);

chroma(330, 1, 0.6, 'hsl');
chroma.hsl(330, 1, 0.6);

chroma(330, 1, 0.6, 'hsv');
chroma.hsv(330, 1, 0.6);

chroma(330, 1, 0.6, 'lab');
chroma.lab(330, 1, 0.6);

chroma(330, 1, 0.6, 'lch');
chroma.lch(330, 1, 0.6);

chroma(330, 1, 0.6, 'hcl');
chroma.hcl(330, 1, 0.6);

chroma(0.2, 0.8, 0, 0, 'cmyk');
chroma.cmyk(0.2, 0.8, 0, 0);

chroma.gl(0.6, 0, 0.8);
chroma.gl(0.6, 0, 0.8, 0.5);
chroma(0.6, 0, 0.8, 'gl');

chroma.temperature(2000); // candle light
chroma.temperature(3500); // sunset
chroma.temperature(6000); // bright sunlight

chroma.mix('red', 'blue');
chroma.mix('red', 'blue', 0.25);

chroma.mix('red', 'blue', 0.5, 'rgb');
chroma.mix('red', 'blue', 0.5, 'hsl');
chroma.mix('red', 'blue', 0.5, 'lab');
chroma.mix('red', 'blue', 0.5, 'lch');

chroma.blend('4CBBFC', 'EEEE22', 'multiply');
chroma.blend('4CBBFC', 'EEEE22', 'darken');
chroma.blend('4CBBFC', 'EEEE22', 'lighten');

chroma.random();

chroma.contrast('pink', 'hotpink');
chroma.contrast('pink', 'purple');

// Color tests

chroma('red').alpha(0.5);
chroma('rgba(255,0,0,0.35)').alpha();

chroma('hotpink').darken();
chroma('hotpink').darken(2);
chroma('hotpink').brighten();

chroma('slategray').saturate(); 
chroma('slategray').saturate(2);

chroma('hotpink').desaturate();
chroma('hotpink').desaturate(2);

chroma('skyblue').set('hsl.h', 0);
chroma('hotpink').set('lch.c', 30);

chroma('orangered').set('lab.l', '*0.5');
chroma('darkseagreen').set('lch.c', '*2');

chroma('orangered').get('lab.l');
chroma('orangered').get('hsl.l');
chroma('orangered').get('rgb.g');

chroma('white').luminance();
chroma('aquamarine').luminance();
chroma('hotpink').luminance();
chroma('darkslateblue').luminance();
chroma('black').luminance();

chroma('white').luminance(0.5);
chroma('aquamarine').luminance(0.5);
chroma('hotpink').luminance(0.5);
chroma('darkslateblue').luminance(0.5);

chroma('aquamarine').luminance(0.5, 'lab');
chroma('aquamarine').luminance(0.5, 'hsl');

chroma('orange').hex();
chroma('#ffa500').name();

chroma('teal').css();
chroma('teal').alpha(0.5).css();
chroma('teal').css('hsl');

chroma('orange').rgb();
chroma('orange').hsl();
chroma('orange').hsv();
chroma('orange').hsi();
chroma('orange').lab();
chroma('orange').lch();
chroma('orange').hcl();
chroma('orange').gl();

chroma('orange').temperature();

// Scale tests

chroma.scale()(0);
chroma.scale(['yellow', '008ae5']).domain([0,100])(0);
chroma.scale(['yellow', 'lightgreen', '008ae5']).domain([0,0.25,1])(0);
chroma.scale(['yellow', 'lightgreen', '008ae5']).domain();
// Setting scale colorspace
chroma.scale(['yellow', 'navy']).mode('lab');
chroma.scale(['yellow', 'navy']).mode('hsl');
chroma.scale(['yellow', 'navy']).mode('lch');

chroma.scale(['yellow', '008ae5']).mode('lch').correctLightness();

// Bezier
chroma.bezier(['yellow', 'red', 'black'])(0.5);
chroma.bezier(['yellow', 'red', 'black']).scale().colors(5);

// CubeHelix
chroma.cubehelix()(0.5);
chroma.cubehelix()
    .start(200)
    .rotations(-0.5)
    .gamma(0.8)
    .lightness([0.3, 0.8]);
chroma.cubehelix()
    .start(200)
    .rotations(-0.35)
    .gamma(0.7)
    .lightness([0.3, 0.8])
    .scale() // convert to chroma.scale
    .correctLightness()
    .colors(5);

chroma.scale('RdYlBu').padding(0.15);
chroma.scale('OrRd').padding([0.2, 0]);

chroma.scale('OrRd').colors(5);
chroma.scale(['white', 'black']).colors(12);

chroma.scale('OrRd').classes(5);
chroma.scale('OrRd').classes(8);

chroma.scale('OrRd').classes([0,0.3,0.55,0.85,1]);
