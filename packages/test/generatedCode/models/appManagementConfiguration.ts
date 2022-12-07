import {KeyCredentialConfiguration, PasswordCredentialConfiguration} from './index';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface AppManagementConfiguration extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Collection of keyCredential restrictions settings to be applied to an application or service principal. */
    keyCredentials?: KeyCredentialConfiguration[];
    /** Collection of password restrictions settings to be applied to an application or service principal. */
    passwordCredentials?: PasswordCredentialConfiguration[];
}
