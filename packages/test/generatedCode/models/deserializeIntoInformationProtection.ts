import {deserializeIntoBitlocker} from './deserializeIntoBitlocker';
import {deserializeIntoDataLossPreventionPolicy} from './deserializeIntoDataLossPreventionPolicy';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoInformationProtectionPolicy} from './deserializeIntoInformationProtectionPolicy';
import {deserializeIntoSensitivityLabel} from './deserializeIntoSensitivityLabel';
import {deserializeIntoSensitivityPolicySettings} from './deserializeIntoSensitivityPolicySettings';
import {deserializeIntoThreatAssessmentRequest} from './deserializeIntoThreatAssessmentRequest';
import {InformationProtection} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInformationProtection(informationProtection: InformationProtection | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(informationProtection),
        "bitlocker": n => { informationProtection.bitlocker = n.getObject(deserializeIntoBitlocker) as any ; },
        "dataLossPreventionPolicies": n => { informationProtection.dataLossPreventionPolicies = n.getCollectionOfObjectValuesFromMethod(deserializeIntoDataLossPreventionPolicy) as any ; },
        "policy": n => { informationProtection.policy = n.getObject(deserializeIntoInformationProtectionPolicy) as any ; },
        "sensitivityLabels": n => { informationProtection.sensitivityLabels = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSensitivityLabel) as any ; },
        "sensitivityPolicySettings": n => { informationProtection.sensitivityPolicySettings = n.getObject(deserializeIntoSensitivityPolicySettings) as any ; },
        "threatAssessmentRequests": n => { informationProtection.threatAssessmentRequests = n.getCollectionOfObjectValuesFromMethod(deserializeIntoThreatAssessmentRequest) as any ; },
    }
}
