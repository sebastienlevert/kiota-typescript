import {deserializeIntoIncomingCallOptions} from '../../../../models/deserializeIntoIncomingCallOptions';
import {deserializeIntoMediaConfig} from '../../../../models/deserializeIntoMediaConfig';
import {Modality} from '../../../../models/modality';
import {AnswerPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAnswerPostRequestBody(answerPostRequestBody: AnswerPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "acceptedModalities": n => { answerPostRequestBody.acceptedModalities = n.getEnumValues<Modality>(Modality) as any ; },
        "callbackUri": n => { answerPostRequestBody.callbackUri = n.getStringValue() as any ; },
        "callOptions": n => { answerPostRequestBody.callOptions = n.getObject(deserializeIntoIncomingCallOptions) as any ; },
        "mediaConfig": n => { answerPostRequestBody.mediaConfig = n.getObject(deserializeIntoMediaConfig) as any ; },
        "participantCapacity": n => { answerPostRequestBody.participantCapacity = n.getNumberValue() as any ; },
    }
}
