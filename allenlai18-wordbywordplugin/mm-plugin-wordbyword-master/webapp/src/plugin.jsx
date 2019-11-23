import React from 'react';

import {FormattedMessage} from 'react-intl';

import {id as pluginId} from './manifest';

import Root from './components/root';

import {
    postDropdownMenuAction,
} from './actions';
import reducer from './reducer';

export default class Plugin {
    initialize(registry, store) {
        registry.registerRootComponent(Root);
        registry.registerPostDropdownMenuAction(
            <FormattedMessage
                id='plugin.name'
                defaultMessage='Word by Word'
            />,
            (postId) => store.dispatch(postDropdownMenuAction(postId)),
        );

        registry.registerReducer(reducer);
    }

    uninitialize() {
        //eslint-disable-next-line no-console
        console.log(pluginId + '::uninitialize()');
    }
}
