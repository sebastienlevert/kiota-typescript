import {AppKeyCredentialRestrictionType} from './appKeyCredentialRestrictionType';
import {KeyCredentialConfiguration} from './index';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeKeyCredentialConfiguration(writer: SerializationWriter, keyCredentialConfiguration: KeyCredentialConfiguration | undefined = {}) : void {
            writer.writeDurationValue("maxLifetime", keyCredentialConfiguration.maxLifetime);
            writer.writeDateValue("restrictForAppsCreatedAfterDateTime", keyCredentialConfiguration.restrictForAppsCreatedAfterDateTime);
            writer.writeEnumValue<AppKeyCredentialRestrictionType>("restrictionType", keyCredentialConfiguration.restrictionType);
}
