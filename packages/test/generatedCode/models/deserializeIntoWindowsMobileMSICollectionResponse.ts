import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWindowsMobileMSI} from './deserializeIntoWindowsMobileMSI';
import {WindowsMobileMSICollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsMobileMSICollectionResponse(windowsMobileMSICollectionResponse: WindowsMobileMSICollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windowsMobileMSICollectionResponse),
        "value": n => { windowsMobileMSICollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsMobileMSI) as any ; },
    }
}
