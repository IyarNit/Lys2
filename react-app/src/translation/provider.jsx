import React, { Fragment } from 'react';
import { IntlProvider } from 'react-intl';
import messages from './massages';

const Provider = ({ children, locale }) => (
    <IntlProvider
        locale={locale}
        textComponent={Fragment}
        messages={messages[locale]}
    >
        {children}
    </IntlProvider>
);

export default Provider;