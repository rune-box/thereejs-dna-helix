DNA Helix
===
Forked from DNA part of [sketch-threejs](https://github.com/ykob/sketch-threejs/)
Original Path: https://github.com/ykob/sketch-threejs/tree/main/src/js/sketch/dna

Many thanks to your work ❤ [Yoichi Kobayashi](https://github.com/ykob) ❤

### Updates from the original source
1. The build tool changed to webpack.
2. Upated the logic of color in `DnaHelix.vs`:
```
// refactor
vec3 vecTime = vec3(
      sin(time * 4.0 + delay),
      sin(radian + time * 0.4) * (radius + sin(time * 4.0 + delay)),
      cos(radian + time * 0.4) * (radius + sin(time * 4.0 + delay))
    );
vec3 updatePosition = position + vecTime;

// old color logic
//vColor = vec3(0.8 - delay * 0.1, 0.6, 0.6);
// new color logic
vColor = vecTime;
```