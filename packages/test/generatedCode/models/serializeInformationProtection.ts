import {InformationProtection} from './index';
import {serializeBitlocker} from './serializeBitlocker';
import {serializeEntity} from './serializeEntity';
import {serializeThreatAssessmentRequest} from './serializeThreatAssessmentRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeInformationProtection(writer: SerializationWriter, informationProtection: InformationProtection | undefined = {}) : void {
        serializeEntity(writer, informationProtection)
            writer.writeObjectValueFromMethod("bitlocker", informationProtection.bitlocker as any, serializeBitlocker);
            writer.writeCollectionOfObjectValuesFromMethod("threatAssessmentRequests", informationProtection.threatAssessmentRequests as any, serializeThreatAssessmentRequest);
}
