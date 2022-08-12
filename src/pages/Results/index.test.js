import { formatJobList } from './'

test('Ceci est mon premier test', () => {
    const expectedState = 'item2,'
    expect(formatJobList('item2', 3, 1)).toEqual(expectedState)
})
