import {deserializeIntoItemReference} from '../../../../../../models/deserializeIntoItemReference';
import {CopyToDefaultContentLocationPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCopyToDefaultContentLocationPostRequestBody(copyToDefaultContentLocationPostRequestBody: CopyToDefaultContentLocationPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "destinationFileName": n => { copyToDefaultContentLocationPostRequestBody.destinationFileName = n.getStringValue() as any ; },
        "sourceFile": n => { copyToDefaultContentLocationPostRequestBody.sourceFile = n.getObject(deserializeIntoItemReference) as any ; },
    }
}
