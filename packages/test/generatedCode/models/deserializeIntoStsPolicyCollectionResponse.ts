import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoStsPolicy} from './deserializeIntoStsPolicy';
import {StsPolicyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoStsPolicyCollectionResponse(stsPolicyCollectionResponse: StsPolicyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(stsPolicyCollectionResponse),
        "value": n => { stsPolicyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoStsPolicy) as any ; },
    }
}
