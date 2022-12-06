import {deserializeIntoExpirationPattern} from './deserializeIntoExpirationPattern';
import {deserializeIntoPatternedRecurrence} from './deserializeIntoPatternedRecurrence';
import {EntitlementManagementSchedule} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEntitlementManagementSchedule(entitlementManagementSchedule: EntitlementManagementSchedule | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "expiration": n => { entitlementManagementSchedule.expiration = n.getObject(deserializeIntoExpirationPattern) as any ; },
        "@odata.type": n => { entitlementManagementSchedule.odataType = n.getStringValue() as any ; },
        "recurrence": n => { entitlementManagementSchedule.recurrence = n.getObject(deserializeIntoPatternedRecurrence) as any ; },
        "startDateTime": n => { entitlementManagementSchedule.startDateTime = n.getDateValue() as any ; },
    }
}
