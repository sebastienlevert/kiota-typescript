import {deserializeIntoMessage} from '../../models/deserializeIntoMessage';
import {SendMailPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSendMailPostRequestBody(sendMailPostRequestBody: SendMailPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "message": n => { sendMailPostRequestBody.message = n.getObject(deserializeIntoMessage) as any ; },
        "saveToSentItems": n => { sendMailPostRequestBody.saveToSentItems = n.getBooleanValue() as any ; },
    }
}
