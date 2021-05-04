import { isObject } from "lodash";

export function transformErrors(errors, values) {
  let errs = {};
  errors = isObject(errors) ? errors : {};
  
  Object.keys(values).forEach((key) => {
    let msg = errors.hasOwnProperty(key) ? [new Error(errors[key])] : null;
    errs = {...errs, [key]: { value: values[key], errors: msg }}
  });
  return errs;
}

export function getError(errors, key) {
  if(!errors) return null;
  if(!errors.hasOwnProperty(key)) return null;

  return errors[key].pop();
}

export const strRandom = (length = 7) => Math.random().toString(36).substring(length)

export function getOffset(el) {
  const rect = el.getBoundingClientRect();
  return {
    x: rect.x + window.scrollX,
    y: rect.y + window.scrollY
  };
}