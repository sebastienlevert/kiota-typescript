import {deserializeIntoSearchRequest} from '../../models/deserializeIntoSearchRequest';
import {QueryPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoQueryPostRequestBody(queryPostRequestBody: QueryPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "requests": n => { queryPostRequestBody.requests = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSearchRequest) as any ; },
    }
}
