import { AfterViewInit, Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[BgColor]'
})
export class BgColorDirective implements AfterViewInit {

  @Input('dohcBgColor') bgColor: string;
  @Input() public colorShade: number;

  /* tslint:disable:no-bitwise */

  public static getContrastColor(hexcolor) {
    const color = hexcolor.length > 6 ? hexcolor.substr(1) : hexcolor;
    const r = parseInt(color.substr(0, 2), 16);
    const g = parseInt(color.substr(2, 2), 16);
    const b = parseInt(color.substr(4, 2), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
    return (yiq >= 128) ? '#222222' : '#ffffff';
  }
  // valid range for percent is -1.0 to 1.0.

  public static shadeHexColor (hex, percent) {
    const color = hex.length === 6 ? '#' + hex : hex;
    const f = parseInt(color.slice(1), 16),
      t = percent < 0 ? 0 : 255,
      p = percent < 0 ? percent * -1 : percent,
      R = f >> 16,
      G = f >> 8 & 0x00FF,
      B = f & 0x0000FF;

    return '#' + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 +
      (Math.round((t - G) * p) + G) * 0x100 +
      (Math.round((t - B) * p) + B)).toString(16).slice(1);
  }

  public static blendHexColors (c0, c1, p) {
    const f = parseInt(c0.slice(1), 16),
      t = parseInt(c1.slice(1), 16),
      R1 = f >> 16,
      G1 = f >> 8 & 0x00FF,
      B1 = f & 0x0000FF,
      R2 = t >> 16,
      G2 = t >> 8 & 0x00FF,
      B2 = t & 0x0000FF;
    return '#' + (0x1000000 + (Math.round((R2 - R1) * p) + R1) * 0x10000 +
      (Math.round((G2 - G1) * p) + G1) * 0x100 +
      (Math.round((B2 - B1) * p) + B1)).toString(16).slice(1);
  }
  public static shadeRGBColor (color, percent) {
    const f = color.split(','),
      t = percent < 0 ? 0 : 255,
      p = percent < 0 ? percent * -1 : percent,
      R = parseInt(f[0].slice(4), 10),
      G = parseInt(f[1], 10),
      B = parseInt(f[2], 10);
    return 'rgb(' + (Math.round((t - R) * p) + R) + ',' +
      (Math.round((t - G) * p) + G) + ',' +
      (Math.round((t - B) * p) + B) + ')';
  }
  public static blendRGBColors (c0, c1, p) {
    const f = c0.split(','),
      t = c1.split(','),
      R = parseInt(f[0].slice(4), 10),
      G = parseInt(f[1], 10),
      B = parseInt(f[2], 10);
    return 'rgb(' + (Math.round((parseInt(t[0].slice(4), 10) - R) * p) + R) + ',' +
      (Math.round((parseInt(t[1], 10) - G) * p) + G) + ',' +
      (Math.round((parseInt(t[2], 10) - B) * p) + B) + ')';
  }

  constructor (private el: ElementRef) {

  }

  ngAfterViewInit () {
    const shade = (this.colorShade && this.colorShade <= 1 && this.colorShade >= -1) ? this.colorShade : 0;
    const color = BgColorDirective.shadeHexColor(this.bgColor, shade);
    this.el.nativeElement.style.backgroundColor = color;
    this.el.nativeElement.style.borderLeftColor = BgColorDirective.shadeHexColor(color, 0.5);
    this.el.nativeElement.style.borderTopColor = BgColorDirective.shadeHexColor(color, 0.5);
    this.el.nativeElement.style.borderRightColor = BgColorDirective.shadeHexColor(color, 0.3);
    this.el.nativeElement.style.borderBottomColor = BgColorDirective.shadeHexColor(color, 0.3);
    this.el.nativeElement.style.color = BgColorDirective.getContrastColor(color);
  }

}
