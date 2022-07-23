import { createElement } from 'react';

function addClassName(className, name) {
  return className ? `${className} ${name}` : name;
}

export function Panel({ type, className, children, ...rest }) {
  className = addClassName(className, 'panel');
  return createElement(type || 'div', { className, ...rest }, children);
}

export function PanelHeading({ type, className, children, ...rest }) {
  className = addClassName(className, 'panel-heading');
  return createElement(type || 'div', { className, ...rest }, children);
}

export function PanelTabs({ type, className, children, ...rest }) {
  className = addClassName(className, 'panel-tabs');
  return createElement(type || 'div', { className, ...rest }, children);
}

export function PanelBlock({ type, className, children, ...rest }) {
  className = addClassName(className, 'panel-block');
  return createElement(type || 'div', { className, ...rest }, children);
}

export function PanelIcon({ type, className, children, ...rest }) {
  className = addClassName(className, 'panel-icon');
  return createElement(type || 'span', { className, ...rest }, children);
}

export function Content({ type, className, children, ...rest }) {
  className = addClassName(className, 'content');
  return createElement(type || 'div', { className, ...rest }, children);
}

export function Table({ className, children, ...rest }) {
  className = addClassName(className, 'table');
  return createElement('table', { className, ...rest }, children);
}

export function Section({ type, className, children, ...rest }) {
  className = addClassName(className, 'content');
  return createElement(type || 'section', { className, ...rest }, children);
}

export function Footer({ type, className, children, ...rest }) {
  className = addClassName(className, 'footer');
  return createElement(type || 'footer', { className, ...rest }, children);
}
