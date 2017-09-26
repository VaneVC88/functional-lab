const lowercaser = require('../lowercaser')

test('lowercaser deberia retornar un string en lowercase', 
	() => {
		const actual = 'LOREM IPSUM'
		const expected = 'lorem ipsum'

		expect(lowercaser(actual)).toBe(expected)	
	})

test(
	'deberia fallar cuando se ingresa un numero',
	() => {
		const actual = 1

		expect(() => {
			lowercaser(actual)
		}).toThrow()
	}
)