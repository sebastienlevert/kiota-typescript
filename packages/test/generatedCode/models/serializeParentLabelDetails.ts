import {ParentLabelDetails} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeParentLabelDetails(writer: SerializationWriter, parentLabelDetails: ParentLabelDetails | undefined = {}) : void {
            writer.writeStringValue("color", parentLabelDetails.color);
            writer.writeStringValue("description", parentLabelDetails.description);
            writer.writeStringValue("id", parentLabelDetails.id);
            writer.writeBooleanValue("isActive", parentLabelDetails.isActive);
            writer.writeStringValue("name", parentLabelDetails.name);
            writer.writeObjectValueFromMethod("parent", parentLabelDetails.parent as any, serializeParentLabelDetails);
            writer.writeNumberValue("sensitivity", parentLabelDetails.sensitivity);
            writer.writeStringValue("tooltip", parentLabelDetails.tooltip);
}
