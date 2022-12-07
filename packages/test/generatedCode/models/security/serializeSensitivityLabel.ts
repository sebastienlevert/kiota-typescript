import {serializeEntity} from '../serializeEntity';
import {SensitivityLabel} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSensitivityLabel(writer: SerializationWriter, sensitivityLabel: SensitivityLabel | undefined = {}) : void {
        serializeEntity(writer, sensitivityLabel)
            writer.writeStringValue("color", sensitivityLabel.color);
            writer.writeCollectionOfPrimitiveValues<string>("contentFormats", sensitivityLabel.contentFormats);
            writer.writeStringValue("description", sensitivityLabel.description);
            writer.writeBooleanValue("hasProtection", sensitivityLabel.hasProtection);
            writer.writeBooleanValue("isActive", sensitivityLabel.isActive);
            writer.writeBooleanValue("isAppliable", sensitivityLabel.isAppliable);
            writer.writeStringValue("name", sensitivityLabel.name);
            writer.writeObjectValueFromMethod("parent", sensitivityLabel.parent as any, serializeSensitivityLabel);
            writer.writeNumberValue("sensitivity", sensitivityLabel.sensitivity);
            writer.writeStringValue("tooltip", sensitivityLabel.tooltip);
}
