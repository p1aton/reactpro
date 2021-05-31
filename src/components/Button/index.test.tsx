/**
 * @jest-environment jsdom
 */

/* eslint-disable no-console */
import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import Button from '.';

describe('Button', () => {
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

  it('render with props', () => {
    act(() => {
      render(<Button color="green" size="large" onClick={() => {}} />, container);
    });

    // console.log(container?.innerHTML);
    expect(container?.innerHTML).toBeDefined();
  });
});
