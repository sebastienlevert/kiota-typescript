import {GetByIdsPostRequestBody} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetByIdsPostRequestBody(getByIdsPostRequestBody: GetByIdsPostRequestBody | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "ids": n => { getByIdsPostRequestBody.ids = n.getCollectionOfPrimitiveValues<string>() as any ; },
        "types": n => { getByIdsPostRequestBody.types = n.getCollectionOfPrimitiveValues<string>() as any ; },
    }
}
