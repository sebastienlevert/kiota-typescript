import {ApiAuthenticationConfigurationBase, Entity} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface IdentityApiConnector extends Entity, Partial<Parsable> {
    /** The object which describes the authentication configuration details for calling the API. Basic and PKCS 12 client certificate are supported. */
    authenticationConfiguration?: ApiAuthenticationConfigurationBase;
    /** The name of the API connector. */
    displayName?: string;
    /** The URL of the API endpoint to call. */
    targetUrl?: string;
}
