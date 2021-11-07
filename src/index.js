export default function healthStatus(charParam) {
  let { health } = charParam;
  health = Number(health);
  if (Number.isNaN(health)) {
    return 'Некорректный параметр здоровья';
  } if (health >= 50) {
    return 'healthy';
  } if (health < 15) {
    return 'critical';
  } return 'wounded';
}

healthStatus({ name: 'mage', health: 'infinity' });
