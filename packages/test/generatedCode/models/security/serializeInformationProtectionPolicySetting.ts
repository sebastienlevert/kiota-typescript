import {serializeEntity} from '../serializeEntity';
import {InformationProtectionPolicySetting} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInformationProtectionPolicySetting(writer: SerializationWriter, informationProtectionPolicySetting: InformationProtectionPolicySetting | undefined = {}) : void {
        serializeEntity(writer, informationProtectionPolicySetting)
            writer.writeStringValue("defaultLabelId", informationProtectionPolicySetting.defaultLabelId);
            writer.writeBooleanValue("isDowngradeJustificationRequired", informationProtectionPolicySetting.isDowngradeJustificationRequired);
            writer.writeBooleanValue("isMandatory", informationProtectionPolicySetting.isMandatory);
            writer.writeStringValue("moreInfoUrl", informationProtectionPolicySetting.moreInfoUrl);
}
