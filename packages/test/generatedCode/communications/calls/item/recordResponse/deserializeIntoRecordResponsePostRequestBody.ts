import {deserializeIntoPrompt} from '../../../../models/deserializeIntoPrompt';
import {RecordResponsePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRecordResponsePostRequestBody(recordResponsePostRequestBody: RecordResponsePostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "bargeInAllowed": n => { recordResponsePostRequestBody.bargeInAllowed = n.getBooleanValue() as any ; },
        "clientContext": n => { recordResponsePostRequestBody.clientContext = n.getStringValue() as any ; },
        "initialSilenceTimeoutInSeconds": n => { recordResponsePostRequestBody.initialSilenceTimeoutInSeconds = n.getNumberValue() as any ; },
        "maxRecordDurationInSeconds": n => { recordResponsePostRequestBody.maxRecordDurationInSeconds = n.getNumberValue() as any ; },
        "maxSilenceTimeoutInSeconds": n => { recordResponsePostRequestBody.maxSilenceTimeoutInSeconds = n.getNumberValue() as any ; },
        "playBeep": n => { recordResponsePostRequestBody.playBeep = n.getBooleanValue() as any ; },
        "prompts": n => { recordResponsePostRequestBody.prompts = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrompt) as any ; },
        "stopTones": n => { recordResponsePostRequestBody.stopTones = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
