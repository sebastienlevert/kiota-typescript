import {LocationConstraintItem} from './index';
import {serializeLocation} from './serializeLocation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeLocationConstraintItem(writer: SerializationWriter, locationConstraintItem: LocationConstraintItem | undefined = {}) : void {
        serializeLocation(writer, locationConstraintItem)
            writer.writeBooleanValue("resolveAvailability", locationConstraintItem.resolveAvailability);
}
