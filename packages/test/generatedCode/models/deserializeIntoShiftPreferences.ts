import {deserializeIntoChangeTrackedEntity} from './deserializeIntoChangeTrackedEntity';
import {deserializeIntoShiftAvailability} from './deserializeIntoShiftAvailability';
import {ShiftPreferences} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoShiftPreferences(shiftPreferences: ShiftPreferences | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoChangeTrackedEntity(shiftPreferences),
        "availability": n => { shiftPreferences.availability = n.getCollectionOfObjectValuesFromMethod(deserializeIntoShiftAvailability) as any ; },
    }
}
