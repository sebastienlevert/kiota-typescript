import {deserializeIntoApplication} from './deserializeIntoApplication';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {ApplicationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoApplicationCollectionResponse(applicationCollectionResponse: ApplicationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(applicationCollectionResponse),
        "value": n => { applicationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoApplication) as any ; },
    }
}
