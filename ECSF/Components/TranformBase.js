/**
 * @Eternal01
 */

/**
 * @summary Base transform component containing position, size, velocity, rotation, and scale data.
 */
export const TranformBase = {
  x: 0,
  y: 0,
  width: 6,
  height: 6,
  velocity: { x: 0, y: 0 },
  rotation: 0,
  scale: {
    x: 1,
    y: 1,
    set(value) {
      this.x = value;
      this.y = value;
    }
  }
};