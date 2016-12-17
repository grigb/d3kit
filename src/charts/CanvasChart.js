import AbstractChart from './AbstractChart.js';
import CanvasPlate from '../plates/CanvasPlate.js';
import { deepExtend } from '../helper.js';

class CanvasChart extends AbstractChart {
  constructor(selector, ...options) {
    super(selector, ...options);

    this.canvasPlate = this.addPlate(new CanvasPlate());
    this.canvas = this.canvasPlate.getSelection();
    this.updateDimensionNow();
  }

  getContext2d() {
    return this.canvasPlate.getContext2d();
  }

  clear() {
    this.canvasPlate.clear();
    return this;
  }
}

export default CanvasChart;
