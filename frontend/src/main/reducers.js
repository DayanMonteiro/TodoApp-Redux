import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    todo: () => ({
        description: 'Ler Livro',
        list: [{
            _id: 1,
            description: 'Pagar fatura do cartão',
            done: true
        }, {
            _id: 2,
            description: 'Reunião com a equipe às 09:00',
            done: false
        }, {
            _id: 3,
            description: 'Consulta oftamologista na terça as 08:00',
            done: false
        }]
    })
});

export default rootReducer;