import isArray from './is-array';
import isNumber from './is-number';
import isNil from './is-nil';

type Padding = [number, number, number, number];

/**
 * 解析 padding 值，规则同 CSS 盒模型
 * @param padding 内边距配置
 */
export default function parsePadding(padding: number[] | number = 0): Padding {
  let top = 0;
  let left = 0;
  let right = 0;
  let bottom = 0;

  if (isNumber(padding)) {
    top = left = right = bottom = padding;
  } else if (isArray(padding)) {
    top = padding[0];
    right = !isNil(padding[1]) ? padding[1] : padding[0];
    bottom = !isNil(padding[2]) ? padding[2] : padding[0];
    left = !isNil(padding[3]) ? padding[3] : right;
  }

  return [ top, right, bottom, left ];
}
