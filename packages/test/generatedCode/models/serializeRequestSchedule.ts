import {RequestSchedule} from './index';
import {serializeExpirationPattern} from './serializeExpirationPattern';
import {serializePatternedRecurrence} from './serializePatternedRecurrence';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRequestSchedule(writer: SerializationWriter, requestSchedule: RequestSchedule | undefined = {}) : void {
            writer.writeObjectValueFromMethod("expiration", requestSchedule.expiration as any, serializeExpirationPattern);
            writer.writeStringValue("@odata.type", requestSchedule.odataType);
            writer.writeObjectValueFromMethod("recurrence", requestSchedule.recurrence as any, serializePatternedRecurrence);
            writer.writeDateValue("startDateTime", requestSchedule.startDateTime);
}
