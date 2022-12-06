import {deserializeIntoKeyCredential} from '../../../models/deserializeIntoKeyCredential';
import {deserializeIntoPasswordCredential} from '../../../models/deserializeIntoPasswordCredential';
import {AddKeyPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddKeyPostRequestBody(addKeyPostRequestBody: AddKeyPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "keyCredential": n => { addKeyPostRequestBody.keyCredential = n.getObject(deserializeIntoKeyCredential) as any ; },
        "passwordCredential": n => { addKeyPostRequestBody.passwordCredential = n.getObject(deserializeIntoPasswordCredential) as any ; },
        "proof": n => { addKeyPostRequestBody.proof = n.getStringValue() as any ; },
    }
}
