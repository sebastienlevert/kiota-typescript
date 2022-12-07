import {AppCredentialRestrictionType} from './appCredentialRestrictionType';
import {PasswordCredentialConfiguration} from './index';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPasswordCredentialConfiguration(passwordCredentialConfiguration: PasswordCredentialConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "maxLifetime": n => { passwordCredentialConfiguration.maxLifetime = n.getDurationValue() as any ; },
        "restrictForAppsCreatedAfterDateTime": n => { passwordCredentialConfiguration.restrictForAppsCreatedAfterDateTime = n.getDateValue() as any ; },
        "restrictionType": n => { passwordCredentialConfiguration.restrictionType = n.getEnumValue<AppCredentialRestrictionType>(AppCredentialRestrictionType) as any ; },
    }
}
