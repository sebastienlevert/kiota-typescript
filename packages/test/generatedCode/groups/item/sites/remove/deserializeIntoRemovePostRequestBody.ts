import {deserializeIntoSite} from '../../../../models/deserializeIntoSite';
import {RemovePostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRemovePostRequestBody(removePostRequestBody: RemovePostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { removePostRequestBody.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSite) as any ; },
    }
}
