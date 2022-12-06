import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoMicrosoftStoreForBusinessApp} from './deserializeIntoMicrosoftStoreForBusinessApp';
import {MicrosoftStoreForBusinessAppCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMicrosoftStoreForBusinessAppCollectionResponse(microsoftStoreForBusinessAppCollectionResponse: MicrosoftStoreForBusinessAppCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(microsoftStoreForBusinessAppCollectionResponse),
        "value": n => { microsoftStoreForBusinessAppCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMicrosoftStoreForBusinessApp) as any ; },
    }
}
