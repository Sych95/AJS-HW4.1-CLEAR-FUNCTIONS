import healthStatus from '../index';

test.each([
  [{ name: 'mage', health: '90' }, 'healthy'],
  [{ name: 'warrior', health: '10' }, 'critical'],
  [{ name: 'archer', health: '30' }, 'wounded'],
  [{ name: 'devil', health: 'infinity' }, 'Некорректный параметр здоровья'],
])(
  ('health color test'),
  (charParam, expected) => {
    const result = healthStatus(charParam);
    expect(result).toBe(expected);
  },
);
