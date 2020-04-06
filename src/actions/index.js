import * as types from "../constants/actionTypes";

export const listAll = () => {
    return {
        type: types.LIST_ALL
    };
};

export const saveTask = task => {
    return {
        type: types.SAVE_TASK,
        task
    };
};

export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM
    };
};

export const onOpenForm = () => {
    return {
        type: types.OPEN_FORM
    };
};

export const updateOnSingleItem = id => {
    return {
        type: types.UPDATE_SINGLE_STATUS,
        id
    };
};

export const deleteSingleItem = id => {
    return {
        type: types.DELETE_SINGLE_ITEM,
        id
    };
};

export const editItem = task => {
    return {
        type: types.EDIT_ITEM,
        task
    };
};

export const filterTable = filterData => {
    return {
        type: types.TABLE_FILTER,
        filterData
    };
};
export const searchByKeywords = keyword => {
    return {
        type: types.SEARCH_BY_KEYWORD,
        keyword
    };
};
export const sortByName = v => {
    return {
        type: types.SORT_BY_NAME,
        v
    };
};
