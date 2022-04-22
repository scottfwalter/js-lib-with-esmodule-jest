import { hello } from './main';

test('say hello', () => {
  expect(hello()).toEqual('hello world');
});