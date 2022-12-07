import {AppKeyCredentialRestrictionType} from './appKeyCredentialRestrictionType';
import {KeyCredentialConfiguration} from './index';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoKeyCredentialConfiguration(keyCredentialConfiguration: KeyCredentialConfiguration | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "maxLifetime": n => { keyCredentialConfiguration.maxLifetime = n.getDurationValue() as any ; },
        "restrictForAppsCreatedAfterDateTime": n => { keyCredentialConfiguration.restrictForAppsCreatedAfterDateTime = n.getDateValue() as any ; },
        "restrictionType": n => { keyCredentialConfiguration.restrictionType = n.getEnumValue<AppKeyCredentialRestrictionType>(AppKeyCredentialRestrictionType) as any ; },
    }
}
