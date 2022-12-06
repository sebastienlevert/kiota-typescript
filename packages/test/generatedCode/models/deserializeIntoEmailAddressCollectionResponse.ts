import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoEmailAddress} from './deserializeIntoEmailAddress';
import {EmailAddressCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoEmailAddressCollectionResponse(emailAddressCollectionResponse: EmailAddressCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(emailAddressCollectionResponse),
        "value": n => { emailAddressCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoEmailAddress) as any ; },
    }
}
