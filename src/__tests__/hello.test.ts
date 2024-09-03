import { message } from '../hello';

test('message should be OK', () => {
  expect(message).toBe('Hello, World!');
});
