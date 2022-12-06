import {ActivityDomain} from './activityDomain';
import {TimeConstraint} from './index';
import {serializeTimeSlot} from './serializeTimeSlot';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTimeConstraint(writer: SerializationWriter, timeConstraint: TimeConstraint | undefined = {}) : void {
            writer.writeEnumValue<ActivityDomain>("activityDomain", timeConstraint.activityDomain);
            writer.writeStringValue("@odata.type", timeConstraint.odataType);
            writer.writeCollectionOfObjectValuesFromMethod("timeSlots", timeConstraint.timeSlots as any, serializeTimeSlot);
}
