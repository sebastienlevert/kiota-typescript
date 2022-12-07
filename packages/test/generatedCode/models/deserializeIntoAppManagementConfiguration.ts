import {deserializeIntoKeyCredentialConfiguration} from './deserializeIntoKeyCredentialConfiguration';
import {deserializeIntoPasswordCredentialConfiguration} from './deserializeIntoPasswordCredentialConfiguration';
import {AppManagementConfiguration} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAppManagementConfiguration(appManagementConfiguration: AppManagementConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "keyCredentials": n => { appManagementConfiguration.keyCredentials = n.getCollectionOfObjectValuesFromMethod(deserializeIntoKeyCredentialConfiguration) as any ; },
        "passwordCredentials": n => { appManagementConfiguration.passwordCredentials = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPasswordCredentialConfiguration) as any ; },
    }
}
