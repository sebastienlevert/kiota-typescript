import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoPhone} from './deserializeIntoPhone';
import {PhoneCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPhoneCollectionResponse(phoneCollectionResponse: PhoneCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(phoneCollectionResponse),
        "value": n => { phoneCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPhone) as any ; },
    }
}
