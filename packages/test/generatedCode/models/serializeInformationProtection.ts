import {InformationProtection} from './index';
import {serializeBitlocker} from './serializeBitlocker';
import {serializeDataLossPreventionPolicy} from './serializeDataLossPreventionPolicy';
import {serializeEntity} from './serializeEntity';
import {serializeInformationProtectionPolicy} from './serializeInformationProtectionPolicy';
import {serializeSensitivityLabel} from './serializeSensitivityLabel';
import {serializeSensitivityPolicySettings} from './serializeSensitivityPolicySettings';
import {serializeThreatAssessmentRequest} from './serializeThreatAssessmentRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInformationProtection(writer: SerializationWriter, informationProtection: InformationProtection | undefined = {}) : void {
        serializeEntity(writer, informationProtection)
            writer.writeObjectValueFromMethod("bitlocker", informationProtection.bitlocker as any, serializeBitlocker);
            writer.writeCollectionOfObjectValuesFromMethod("dataLossPreventionPolicies", informationProtection.dataLossPreventionPolicies as any, serializeDataLossPreventionPolicy);
            writer.writeObjectValueFromMethod("policy", informationProtection.policy as any, serializeInformationProtectionPolicy);
            writer.writeCollectionOfObjectValuesFromMethod("sensitivityLabels", informationProtection.sensitivityLabels as any, serializeSensitivityLabel);
            writer.writeObjectValueFromMethod("sensitivityPolicySettings", informationProtection.sensitivityPolicySettings as any, serializeSensitivityPolicySettings);
            writer.writeCollectionOfObjectValuesFromMethod("threatAssessmentRequests", informationProtection.threatAssessmentRequests as any, serializeThreatAssessmentRequest);
}
