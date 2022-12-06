import {deserializeIntoIdentitySet} from './deserializeIntoIdentitySet';
import {EndpointType} from './endpointType';
import {ParticipantInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoParticipantInfo(participantInfo: ParticipantInfo | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "countryCode": n => { participantInfo.countryCode = n.getStringValue() as any ; },
        "endpointType": n => { participantInfo.endpointType = n.getEnumValue<EndpointType>(EndpointType) as any ; },
        "identity": n => { participantInfo.identity = n.getObject(deserializeIntoIdentitySet) as any ; },
        "languageId": n => { participantInfo.languageId = n.getStringValue() as any ; },
        "@odata.type": n => { participantInfo.odataType = n.getStringValue() as any ; },
        "participantId": n => { participantInfo.participantId = n.getStringValue() as any ; },
        "region": n => { participantInfo.region = n.getStringValue() as any ; },
    }
}
