import {AppConsentRequestCollectionResponse} from './index';
import {serializeAppConsentRequest} from './serializeAppConsentRequest';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppConsentRequestCollectionResponse(writer: SerializationWriter, appConsentRequestCollectionResponse: AppConsentRequestCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, appConsentRequestCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", appConsentRequestCollectionResponse.value as any, serializeAppConsentRequest);
}
