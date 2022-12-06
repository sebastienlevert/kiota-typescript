import {deserializeIntoRecipient} from '../../../../../../../models/deserializeIntoRecipient';
import {ForwardPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoForwardPostRequestBody(forwardPostRequestBody: ForwardPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "comment": n => { forwardPostRequestBody.comment = n.getStringValue() as any ; },
        "toRecipients": n => { forwardPostRequestBody.toRecipients = n.getCollectionOfObjectValuesFromMethod(deserializeIntoRecipient) as any ; },
    }
}
