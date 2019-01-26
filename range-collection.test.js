const RangeCollection = require('./rangeCollection');

const rc = new RangeCollection();

test('adds [1, 5] should return [1, 5)', () => {
    rc.add([1, 5]);
    expect(rc.print()).toBe('[1, 5)');
});

test('adds [10, 20] should return [1, 5) [10, 20)', () => {
    rc.add([10, 20]);
    expect(rc.print()).toBe('[1, 5) [10, 20)');
});

test('adds [20, 20] should return [1, 5) [10, 20)', () => {
    rc.add([20, 20]);
    expect(rc.print()).toBe('[1, 5) [10, 20)');
});

test('adds [20, 21] should return [1, 5) [10, 21)', () => {
    rc.add([20, 21]);
    expect(rc.print()).toBe('[1, 5) [10, 21)');
});

test('adds [2, 4] should return [1, 5) [10, 21)', () => {
    rc.add([2, 4]);
    expect(rc.print()).toBe('[1, 5) [10, 21)');
});

test('adds [3, 8] should return [1, 8) [10, 21)', () => {
    rc.add([3, 8]);
    expect(rc.print()).toBe('[1, 8) [10, 21)');
});

test('remove [10, 10] should return [1, 8) [10, 21)', () => {
    rc.remove([10, 10]);
    expect(rc.print()).toBe('[1, 8) [10, 21)');
});

test('remove [10, 11] should return [1, 8) [11, 21)', () => {
    rc.remove([10, 11]);
    expect(rc.print()).toBe('[1, 8) [11, 21)');
});

test('remove [15, 17] should return [1, 8) [11, 15) [17, 21)', () => {
    rc.remove([15, 17]);
    expect(rc.print()).toBe('[1, 8) [11, 15) [17, 21)');
});

test('remove [3, 19] should return [1, 3) [19, 21)', () => {
    rc.remove([3, 19]);
    expect(rc.print()).toBe('[1, 3) [19, 21)');
});

test('add [5, 10] should return [1, 3) [5, 10) [19, 21)', () => {
    rc.add([5, 10]);
    expect(rc.print()).toBe('[1, 3) [5, 10) [19, 21)');
});

test('remove [1, 10] should return [10, 21)', () => {
    rc.remove([1, 10]);
    expect(rc.print()).toBe('[19, 21)');
});


test('add [1, 3] should return [1, 3) [19, 21)', () => {
    rc.add([1, 3]);
    expect(rc.print()).toBe('[1, 3) [19, 21)');
});

