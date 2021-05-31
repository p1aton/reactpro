/**
 * @jest-environment jsdom
 */

/* eslint-disable no-console */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Heading from '.';

describe('Heading', () => {
  let container: Element | null = null;

  beforeEach(() => {
    container = window.document.createElement('div');
    window.document.body.appendChild(container);
  });

  afterEach(() => {
    if (container !== null) {
      unmountComponentAtNode(container);
      container.remove();
      container = null;
    }
  });

  it('render', () => {
    act(() => {
      render(<Heading tag="h3" />, container);
    });

    // console.log(container?.innerHTML);
    expect(container?.innerHTML).toBeDefined();
  });

  it('render with children', () => {
    act(() => {
      render(<Heading tag="h3">Test</Heading>, container);
    });

    // console.log(container?.innerHTML);
    expect(container?.textContent).toBe('Test');
  });

  it('render with props tag ="h2', () => {
    act(() => {
      render(<Heading tag="h2">Test</Heading>, container);
    });

    console.log(container?.querySelector('h2'));
    // expect(container?.textContent).toBe('Test');
  });

  it('render with props tag ="h2', () => {
    act(() => {
      render(<Heading tag="h2">Test</Heading>, container);
    });

    console.log(container?.querySelector('h1'));
    expect(container?.querySelector('h2')).not.toBeNull();
  });
});
