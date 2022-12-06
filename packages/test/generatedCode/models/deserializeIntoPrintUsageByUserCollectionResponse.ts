import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPrintUsageByUser} from './deserializeIntoPrintUsageByUser';
import {PrintUsageByUserCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintUsageByUserCollectionResponse(printUsageByUserCollectionResponse: PrintUsageByUserCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(printUsageByUserCollectionResponse),
        "value": n => { printUsageByUserCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrintUsageByUser) as any ; },
    }
}
