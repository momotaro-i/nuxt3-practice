import { VNode } from 'vue';

declare global {
  namespace JSX {
    interface Element extends VNode {}
    interface ElementClass extends ComponentRenderProxy {}
    interface ElementAttributesProperty {
      $props: {}; // specify the property name to use
    }
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}