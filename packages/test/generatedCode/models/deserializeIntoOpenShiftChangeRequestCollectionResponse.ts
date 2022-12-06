import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoOpenShiftChangeRequest} from './deserializeIntoOpenShiftChangeRequest';
import {OpenShiftChangeRequestCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOpenShiftChangeRequestCollectionResponse(openShiftChangeRequestCollectionResponse: OpenShiftChangeRequestCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(openShiftChangeRequestCollectionResponse),
        "value": n => { openShiftChangeRequestCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoOpenShiftChangeRequest) as any ; },
    }
}
