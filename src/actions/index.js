
export const ADD_ARTICLE = "ADD_ARTICLE";

export const addArticle = (payload) => {
    return async dispatch => { { type: ADD_ARTICLE, payload } };
}