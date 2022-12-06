import {BaseCollectionPaginationCountResponse, MicrosoftAuthenticatorAuthenticationMethod} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MicrosoftAuthenticatorAuthenticationMethodCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: MicrosoftAuthenticatorAuthenticationMethod[];
}
