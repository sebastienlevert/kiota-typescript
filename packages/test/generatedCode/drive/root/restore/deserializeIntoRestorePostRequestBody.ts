import {deserializeIntoItemReference} from '../../../models/deserializeIntoItemReference';
import {RestorePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRestorePostRequestBody(restorePostRequestBody: RestorePostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "name": n => { restorePostRequestBody.name = n.getStringValue() as any ; },
        "parentReference": n => { restorePostRequestBody.parentReference = n.getObject(deserializeIntoItemReference) as any ; },
    }
}
