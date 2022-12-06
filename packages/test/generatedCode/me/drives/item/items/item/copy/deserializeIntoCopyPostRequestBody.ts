import {deserializeIntoItemReference} from '../../../../../../models/deserializeIntoItemReference';
import {CopyPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCopyPostRequestBody(copyPostRequestBody: CopyPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "name": n => { copyPostRequestBody.name = n.getStringValue() as any ; },
        "parentReference": n => { copyPostRequestBody.parentReference = n.getObject(deserializeIntoItemReference) as any ; },
    }
}
