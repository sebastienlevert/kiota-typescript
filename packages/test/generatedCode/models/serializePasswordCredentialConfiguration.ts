import {AppCredentialRestrictionType} from './appCredentialRestrictionType';
import {PasswordCredentialConfiguration} from './index';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePasswordCredentialConfiguration(writer: SerializationWriter, passwordCredentialConfiguration: PasswordCredentialConfiguration | undefined = {}) : void {
            writer.writeDurationValue("maxLifetime", passwordCredentialConfiguration.maxLifetime);
            writer.writeDateValue("restrictForAppsCreatedAfterDateTime", passwordCredentialConfiguration.restrictForAppsCreatedAfterDateTime);
            writer.writeEnumValue<AppCredentialRestrictionType>("restrictionType", passwordCredentialConfiguration.restrictionType);
}
