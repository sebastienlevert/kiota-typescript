import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoIosVppEBookAssignment} from './deserializeIntoIosVppEBookAssignment';
import {IosVppEBookAssignmentCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosVppEBookAssignmentCollectionResponse(iosVppEBookAssignmentCollectionResponse: IosVppEBookAssignmentCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(iosVppEBookAssignmentCollectionResponse),
        "value": n => { iosVppEBookAssignmentCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIosVppEBookAssignment) as any ; },
    }
}
