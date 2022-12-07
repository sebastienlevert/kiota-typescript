import {serializeEntity} from '../serializeEntity';
import {InformationProtection} from './index';
import {serializeInformationProtectionPolicySetting} from './serializeInformationProtectionPolicySetting';
import {serializeSensitivityLabel} from './serializeSensitivityLabel';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInformationProtection(writer: SerializationWriter, informationProtection: InformationProtection | undefined = {}) : void {
        serializeEntity(writer, informationProtection)
            writer.writeObjectValueFromMethod("labelPolicySettings", informationProtection.labelPolicySettings as any, serializeInformationProtectionPolicySetting);
            writer.writeCollectionOfObjectValuesFromMethod("sensitivityLabels", informationProtection.sensitivityLabels as any, serializeSensitivityLabel);
}
