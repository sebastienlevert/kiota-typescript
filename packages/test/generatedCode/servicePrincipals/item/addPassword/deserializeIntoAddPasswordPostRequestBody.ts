import {deserializeIntoPasswordCredential} from '../../../models/deserializeIntoPasswordCredential';
import {AddPasswordPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddPasswordPostRequestBody(addPasswordPostRequestBody: AddPasswordPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "passwordCredential": n => { addPasswordPostRequestBody.passwordCredential = n.getObject(deserializeIntoPasswordCredential) as any ; },
    }
}
