import {InformationProtectionLabel} from './index';
import {serializeEntity} from './serializeEntity';
import {serializeParentLabelDetails} from './serializeParentLabelDetails';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInformationProtectionLabel(writer: SerializationWriter, informationProtectionLabel: InformationProtectionLabel | undefined = {}) : void {
        serializeEntity(writer, informationProtectionLabel)
            writer.writeStringValue("color", informationProtectionLabel.color);
            writer.writeStringValue("description", informationProtectionLabel.description);
            writer.writeBooleanValue("isActive", informationProtectionLabel.isActive);
            writer.writeStringValue("name", informationProtectionLabel.name);
            writer.writeObjectValueFromMethod("parent", informationProtectionLabel.parent as any, serializeParentLabelDetails);
            writer.writeNumberValue("sensitivity", informationProtectionLabel.sensitivity);
            writer.writeStringValue("tooltip", informationProtectionLabel.tooltip);
}
