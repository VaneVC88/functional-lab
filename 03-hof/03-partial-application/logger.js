const { logger } = require('./tu-modulo');

const info = logger('INFO:')
const warn = logger('WARN:')

function callAPI ( response, error) {
	if(!error){
		warn('algo paso mal con el api', 
			'nuestros monos deberian trabajar para solucionar esto')
	}

	info('respuesta recibida')
	console.log(response)
}

callAPI('ahjajahha', null)

//bind reemplaza el objeto que viene por defecto