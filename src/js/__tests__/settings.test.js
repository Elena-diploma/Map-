import Settings from '../settings';

test('Проверка корректного ключа', () => {
    const settings = new Settings();
    expect(settings.setParam('404', 'fsdfds')).toBe(false);
});

test('Проверка корректного ключа', () => {
    const settings = new Settings();
    expect(settings.setParam('theme', 'dark')).toBe(true);
});

test('Проверка установки theme', () => {
    const settings = new Settings();
    expect(settings.setParam('theme', 'gray')).toBe(true);
});

test('Проверка установки неправильной theme', () => {
    const settings = new Settings();
    expect(settings.setParam('theme', 'blue')).toBe(false);
});

test('Проверка установки music', () => {
    const settings = new Settings();
    expect(settings.setParam('music', 'rock')).toBe(true);
});

test('Проверка установки неправильной music', () => {
    const settings = new Settings();
    expect(settings.setParam('music', 'classic')).toBe(false);
});

test('Проверка установки difficulty', () => {
    const settings = new Settings();
    expect(settings.setParam('difficulty', 'hard')).toBe(true);
});

test('Проверка установки неправильной difficulty', () => {
    const settings = new Settings();
    expect(settings.setParam('difficulty', 'simple')).toBe(false);
});

test('Проверка установки и получения свойств', () => {
    const settings = new Settings();
    settings.setParam('theme', 'gray');
    settings.setParam('music', 'off');
    const expected = new Map([
        ['theme', 'gray'],
        ['music', 'off'],
        ['difficulty', 'easy']
    ]);
    expect(expected).toEqual(settings.getSettings());
});

