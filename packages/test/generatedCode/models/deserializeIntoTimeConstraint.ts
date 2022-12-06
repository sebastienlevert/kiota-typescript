import {ActivityDomain} from './activityDomain';
import {deserializeIntoTimeSlot} from './deserializeIntoTimeSlot';
import {TimeConstraint} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTimeConstraint(timeConstraint: TimeConstraint | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "activityDomain": n => { timeConstraint.activityDomain = n.getEnumValue<ActivityDomain>(ActivityDomain) as any ; },
        "@odata.type": n => { timeConstraint.odataType = n.getStringValue() as any ; },
        "timeSlots": n => { timeConstraint.timeSlots = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTimeSlot) as any ; },
    }
}
