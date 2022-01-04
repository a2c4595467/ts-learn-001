/* eslint-disable @typescript-eslint/no-unused-vars */

/** TypeScriptの基本のデータ型 */

// boolean
let bool: boolean = true;

// number
let num: number = 0;

// string
let str: string = "ABC";

// Array(number型の配列)
let arr1: Array<number> = [0, 1, 2];
let arr2: number[] = [0, 1, 2];

// tuple
let tuple: [number, string] = [0, "A"];

// any(何でも入る)
let any1: any = false;

// void(関数の戻り値がvoidである事を明示的に指定する)
// ただし、TS側で自動的に推測してくれるので、わざわざ記述するシーンは少ない
let funcA = (): void => {
  const test = "test";
};

// null
let null1: null = null;

// undefined
let undefined1: undefined = undefined;

// object
let obj1: object = {};
//let obj2: {} = 8888; // ←なんでも入ってしまうので、まり使わない
let obj3: { id: number; name: string } = { id: 0, name: "AA" };
