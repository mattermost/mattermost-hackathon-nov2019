import {getPost} from 'mattermost-redux/selectors/entities/posts';

import {OPEN_ROOT_MODAL, CLOSE_ROOT_MODAL, SELECTED_POST} from './action_types';

export const openRootModal = (postId) => (dispatch, getState) => {
    const post = getPost(getState(), postId);
    dispatch({
        type: SELECTED_POST,
        payload: post,
    });

    dispatch({
        type: OPEN_ROOT_MODAL,
    });
};

export const closeRootModal = () => (dispatch) => {
    dispatch({
        type: CLOSE_ROOT_MODAL,
    });
};

export const postDropdownMenuAction = openRootModal;
