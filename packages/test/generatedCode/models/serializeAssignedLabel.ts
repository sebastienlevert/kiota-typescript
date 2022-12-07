import {AssignedLabel} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAssignedLabel(writer: SerializationWriter, assignedLabel: AssignedLabel | undefined = {}) : void {
            writer.writeStringValue("displayName", assignedLabel.displayName);
            writer.writeStringValue("labelId", assignedLabel.labelId);
}
