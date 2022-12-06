import {EndpointType} from './endpointType';
import {ParticipantInfo} from './index';
import {serializeIdentitySet} from './serializeIdentitySet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeParticipantInfo(writer: SerializationWriter, participantInfo: ParticipantInfo | undefined = {}) : void {
            writer.writeStringValue("countryCode", participantInfo.countryCode);
            writer.writeEnumValue<EndpointType>("endpointType", participantInfo.endpointType);
            writer.writeObjectValueFromMethod("identity", participantInfo.identity as any, serializeIdentitySet);
            writer.writeStringValue("languageId", participantInfo.languageId);
            writer.writeStringValue("@odata.type", participantInfo.odataType);
            writer.writeStringValue("participantId", participantInfo.participantId);
            writer.writeStringValue("region", participantInfo.region);
}
