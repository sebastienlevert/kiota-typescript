import {deserializeIntoBitlocker} from './deserializeIntoBitlocker';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {deserializeIntoThreatAssessmentRequest} from './deserializeIntoThreatAssessmentRequest';
import {InformationProtection} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoInformationProtection(informationProtection: InformationProtection | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(informationProtection),
        "bitlocker": n => { informationProtection.bitlocker = n.getObject(deserializeIntoBitlocker) as any ; },
        "threatAssessmentRequests": n => { informationProtection.threatAssessmentRequests = n.getCollectionOfObjectValuesFromMethod(deserializeIntoThreatAssessmentRequest) as any ; },
    }
}
