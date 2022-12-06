import {IdentityProviderBase} from './index';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AppleManagedIdentityProvider extends IdentityProviderBase, Partial<Parsable> {
    /** The certificate data, which is a long string of text from the certificate. Can be null. */
    certificateData?: string;
    /** The Apple developer identifier. Required. */
    developerId?: string;
    /** The Apple key identifier. Required. */
    keyId?: string;
    /** The Apple service identifier. Required. */
    serviceId?: string;
}
