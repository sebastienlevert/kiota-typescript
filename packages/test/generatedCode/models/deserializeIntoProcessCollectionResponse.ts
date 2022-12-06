import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoProcess} from './deserializeIntoProcess';
import {ProcessCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoProcessCollectionResponse(processCollectionResponse: ProcessCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(processCollectionResponse),
        "value": n => { processCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoProcess) as any ; },
    }
}
