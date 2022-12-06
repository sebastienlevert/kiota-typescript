import {BaseCollectionPaginationCountResponse, MicrosoftAuthenticatorAuthenticationMethodConfiguration} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MicrosoftAuthenticatorAuthenticationMethodConfigurationCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: MicrosoftAuthenticatorAuthenticationMethodConfiguration[];
}
