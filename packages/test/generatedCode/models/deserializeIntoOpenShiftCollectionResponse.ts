import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoOpenShift} from './deserializeIntoOpenShift';
import {OpenShiftCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOpenShiftCollectionResponse(openShiftCollectionResponse: OpenShiftCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(openShiftCollectionResponse),
        "value": n => { openShiftCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOpenShift) as any ; },
    }
}
