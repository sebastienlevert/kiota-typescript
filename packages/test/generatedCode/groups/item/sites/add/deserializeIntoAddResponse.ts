import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSite} from '../../../../models/deserializeIntoSite';
import {AddResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAddResponse(addResponse: AddResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(addResponse),
        "value": n => { addResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSite) as any ; },
    }
}
