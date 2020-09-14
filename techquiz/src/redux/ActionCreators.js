import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';

export const fetchQuestions = () => (dispatch) => {
    
    dispatch(questionsLoading());

    return fetch(baseUrl + 'questions')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(questions => dispatch(addQuestions(questions)))
    .catch(error => dispatch(questionsFailed(error.message)));
}

export const questionsLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const questionsFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addQuestions = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});