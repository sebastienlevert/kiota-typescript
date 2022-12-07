import {SensitivityPolicySettings} from './index';
import {SensitivityLabelTarget} from './sensitivityLabelTarget';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSensitivityPolicySettings(writer: SerializationWriter, sensitivityPolicySettings: SensitivityPolicySettings | undefined = {}) : void {
        serializeEntity(writer, sensitivityPolicySettings)
            writer.writeEnumValue<SensitivityLabelTarget>("applicableTo", sensitivityPolicySettings.applicableTo);
            writer.writeBooleanValue("downgradeSensitivityRequiresJustification", sensitivityPolicySettings.downgradeSensitivityRequiresJustification);
            writer.writeStringValue("helpWebUrl", sensitivityPolicySettings.helpWebUrl);
            writer.writeBooleanValue("isMandatory", sensitivityPolicySettings.isMandatory);
}
