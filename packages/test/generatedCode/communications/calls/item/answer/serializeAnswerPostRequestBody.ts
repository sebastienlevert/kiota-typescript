import {Modality} from '../../../../models/modality';
import {serializeIncomingCallOptions} from '../../../../models/serializeIncomingCallOptions';
import {serializeMediaConfig} from '../../../../models/serializeMediaConfig';
import {AnswerPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAnswerPostRequestBody(writer: SerializationWriter, answerPostRequestBody: AnswerPostRequestBody | undefined = {}) : void {
            writer.writeEnumValue<Modality>("acceptedModalities", answerPostRequestBody.acceptedModalities);
            writer.writeStringValue("callbackUri", answerPostRequestBody.callbackUri);
            writer.writeObjectValueFromMethod("callOptions", answerPostRequestBody.callOptions as any, serializeIncomingCallOptions);
            writer.writeObjectValueFromMethod("mediaConfig", answerPostRequestBody.mediaConfig as any, serializeMediaConfig);
            writer.writeNumberValue("participantCapacity", answerPostRequestBody.participantCapacity);
}
