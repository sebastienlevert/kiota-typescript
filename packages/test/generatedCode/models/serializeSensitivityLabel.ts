import {ApplicationMode} from './applicationMode';
import {SensitivityLabel} from './index';
import {SensitivityLabelTarget} from './sensitivityLabelTarget';
import {serializeAutoLabeling} from './serializeAutoLabeling';
import {serializeEntity} from './serializeEntity';
import {serializeLabelActionBase} from './serializeLabelActionBase';
import {serializeLabelPolicy} from './serializeLabelPolicy';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSensitivityLabel(writer: SerializationWriter, sensitivityLabel: SensitivityLabel | undefined = {}) : void {
        serializeEntity(writer, sensitivityLabel)
            writer.writeEnumValue<SensitivityLabelTarget>("applicableTo", sensitivityLabel.applicableTo);
            writer.writeEnumValue<ApplicationMode>("applicationMode", sensitivityLabel.applicationMode);
            writer.writeCollectionOfObjectValuesFromMethod("assignedPolicies", sensitivityLabel.assignedPolicies as any, serializeLabelPolicy);
            writer.writeObjectValueFromMethod("autoLabeling", sensitivityLabel.autoLabeling as any, serializeAutoLabeling);
            writer.writeStringValue("description", sensitivityLabel.description);
            writer.writeStringValue("displayName", sensitivityLabel.displayName);
            writer.writeBooleanValue("isDefault", sensitivityLabel.isDefault);
            writer.writeBooleanValue("isEndpointProtectionEnabled", sensitivityLabel.isEndpointProtectionEnabled);
            writer.writeCollectionOfObjectValuesFromMethod("labelActions", sensitivityLabel.labelActions as any, serializeLabelActionBase);
            writer.writeStringValue("name", sensitivityLabel.name);
            writer.writeNumberValue("priority", sensitivityLabel.priority);
            writer.writeCollectionOfObjectValuesFromMethod("sublabels", sensitivityLabel.sublabels as any, serializeSensitivityLabel);
            writer.writeStringValue("toolTip", sensitivityLabel.toolTip);
}
