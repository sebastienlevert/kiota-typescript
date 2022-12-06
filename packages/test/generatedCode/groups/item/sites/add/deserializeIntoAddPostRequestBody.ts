import {deserializeIntoSite} from '../../../../models/deserializeIntoSite';
import {AddPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddPostRequestBody(addPostRequestBody: AddPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { addPostRequestBody.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSite) as any ; },
    }
}
