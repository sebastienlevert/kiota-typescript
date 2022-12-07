import {AppManagementConfiguration} from './index';
import {serializeKeyCredentialConfiguration} from './serializeKeyCredentialConfiguration';
import {serializePasswordCredentialConfiguration} from './serializePasswordCredentialConfiguration';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppManagementConfiguration(writer: SerializationWriter, appManagementConfiguration: AppManagementConfiguration | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("keyCredentials", appManagementConfiguration.keyCredentials as any, serializeKeyCredentialConfiguration);
            writer.writeCollectionOfObjectValuesFromMethod("passwordCredentials", appManagementConfiguration.passwordCredentials as any, serializePasswordCredentialConfiguration);
}
