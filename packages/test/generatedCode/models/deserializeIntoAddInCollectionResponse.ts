import {deserializeIntoAddIn} from './deserializeIntoAddIn';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AddInCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddInCollectionResponse(addInCollectionResponse: AddInCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(addInCollectionResponse),
        "value": n => { addInCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAddIn) as any ; },
    }
}
