import { main } from './main'

test('Czy to jest prawda', () => {
    expect(main(1, 2)).toBe(3);
});