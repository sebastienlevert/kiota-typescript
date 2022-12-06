import {EntitlementManagementSchedule} from './index';
import {serializeExpirationPattern} from './serializeExpirationPattern';
import {serializePatternedRecurrence} from './serializePatternedRecurrence';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeEntitlementManagementSchedule(writer: SerializationWriter, entitlementManagementSchedule: EntitlementManagementSchedule | undefined = {}) : void {
            writer.writeObjectValueFromMethod("expiration", entitlementManagementSchedule.expiration as any, serializeExpirationPattern);
            writer.writeStringValue("@odata.type", entitlementManagementSchedule.odataType);
            writer.writeObjectValueFromMethod("recurrence", entitlementManagementSchedule.recurrence as any, serializePatternedRecurrence);
            writer.writeDateValue("startDateTime", entitlementManagementSchedule.startDateTime);
}
