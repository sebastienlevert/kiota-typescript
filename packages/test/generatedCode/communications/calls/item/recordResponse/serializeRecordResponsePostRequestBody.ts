import {serializePrompt} from '../../../../models/serializePrompt';
import {RecordResponsePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRecordResponsePostRequestBody(writer: SerializationWriter, recordResponsePostRequestBody: RecordResponsePostRequestBody | undefined = {}) : void {
            writer.writeBooleanValue("bargeInAllowed", recordResponsePostRequestBody.bargeInAllowed);
            writer.writeStringValue("clientContext", recordResponsePostRequestBody.clientContext);
            writer.writeNumberValue("initialSilenceTimeoutInSeconds", recordResponsePostRequestBody.initialSilenceTimeoutInSeconds);
            writer.writeNumberValue("maxRecordDurationInSeconds", recordResponsePostRequestBody.maxRecordDurationInSeconds);
            writer.writeNumberValue("maxSilenceTimeoutInSeconds", recordResponsePostRequestBody.maxSilenceTimeoutInSeconds);
            writer.writeBooleanValue("playBeep", recordResponsePostRequestBody.playBeep);
            writer.writeCollectionOfObjectValuesFromMethod("prompts", recordResponsePostRequestBody.prompts as any, serializePrompt);
            writer.writeCollectionOfPrimitiveValues<string>("stopTones", recordResponsePostRequestBody.stopTones);
}
