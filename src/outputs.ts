import {DOMWidgetView, StyleModel} from '@jupyter-widgets/base';

import {WidgetModel} from '@jupyter-widgets/base';

import * as _ from 'underscore';

/**
 * Widget Model for an Output widget.
 */
export class OutputModel extends WidgetModel {
  defaults() {
    return _.extend(super.defaults(), {
      outputs: [],
      _view_name: 'OutputView',
      _model_name: 'OutputModel',
      _view_module: '@jupyter-widgets/outputs',
      _model_module: '@jupyter-widgets/outputs',
    });
  }
}

/**
 * Widget View for an Output widget.
 */
export class OutputView extends DOMWidgetView {
  /**
   * Called when view is rendered.
   */
  render() {
    super.render();
    this.listenTo(this.model, 'change:outputs', this.updateOutputs);
  }

  private updateOutputs() {
    // Remove all previous items.
    this.el.textContent = '';
    const outputs = this.model.attributes.outputs;
    for (const output of outputs) {
      const div = document.createElement('div');
      this.el.appendChild(div);
      (this.model.widget_manager as {})['render_output'](output).then(
          (rendered) => {
            if (rendered) {
              div.appendChild(rendered);
            }
          });
    }
  }

  /**
   * The default tag name.
   */
  get tagName() {
    return 'div';
  }

  el: HTMLDivElement;
}
