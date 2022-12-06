import {BaseCollectionPaginationCountResponse, MicrosoftAuthenticatorAuthenticationMethodTarget} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface MicrosoftAuthenticatorAuthenticationMethodTargetCollectionResponse extends BaseCollectionPaginationCountResponse, Partial<Parsable> {
    /** The value property */
    value?: MicrosoftAuthenticatorAuthenticationMethodTarget[];
}
