import {deserializeIntoMessage} from '../../../../../../../../../models/deserializeIntoMessage';
import {deserializeIntoRecipient} from '../../../../../../../../../models/deserializeIntoRecipient';
import {CreateForwardPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCreateForwardPostRequestBody(createForwardPostRequestBody: CreateForwardPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "comment": n => { createForwardPostRequestBody.comment = n.getStringValue() as any ; },
        "message": n => { createForwardPostRequestBody.message = n.getObject(deserializeIntoMessage) as any ; },
        "toRecipients": n => { createForwardPostRequestBody.toRecipients = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRecipient) as any ; },
    }
}
