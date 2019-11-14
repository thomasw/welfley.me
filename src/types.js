// @flow
import * as React from 'react';

// TODO: HTMLElement props cannot be extended using flow. There are a number of
// open issues related to this limitation:
//
// https://github.com/facebook/flow/issues/7644
// https://github.com/facebook/flow/pull/7569
// https://stackoverflow.com/questions/43420152/is-it-possible-to-effectively-extend-the-htmlprops-type
//
// If this changes, we can come back around to this, remove these, and update
// the components that use these types so that they override the props
// of the HTML elements they wrap.

export type AOSAttributes = {|
  'data-aos'?: string,
  'data-aos-anchor'?: string,
  'data-aos-duration'?: number,
  'data-aos-once'?: boolean,
  'data-aos-mirror'?: boolean,
  'data-aos-id'?: string
|};

export type HTMLElementProps = {|
  id?: string,
  className?: string,
  children?: React.Node,
  onClick?: (event: SyntheticMouseEvent<HTMLInputElement>) => any,
  name?: string,
  ...AOSAttributes
|};

export type AElementProps = {|
  ...HTMLElementProps,
  href: string,
  download: string,
  rel: string
|};

export type InputElementProps = {|
  ...HTMLElementProps,
  type?: string,
  disabled?: boolean,
  value?: string,
  onChange?: (event: SyntheticInputEvent<HTMLInputElement>) => any,
  autoComplete?: string,
  required?: boolean,
  placeholder?: string
|};

export type TextAreaElementProps = {|
  ...InputElementProps,
  rows?: number,
  cols?: number
|};
