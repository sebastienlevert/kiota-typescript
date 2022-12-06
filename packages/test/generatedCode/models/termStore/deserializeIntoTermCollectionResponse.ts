import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoTerm} from './deserializeIntoTerm';
import {TermCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTermCollectionResponse(termCollectionResponse: TermCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(termCollectionResponse),
        "value": n => { termCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoTerm) as any ; },
    }
}
