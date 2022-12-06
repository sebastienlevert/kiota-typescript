import {UserConsentRequestCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUserConsentRequest} from './serializeUserConsentRequest';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserConsentRequestCollectionResponse(writer: SerializationWriter, userConsentRequestCollectionResponse: UserConsentRequestCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userConsentRequestCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", userConsentRequestCollectionResponse.value as any, serializeUserConsentRequest);
}
