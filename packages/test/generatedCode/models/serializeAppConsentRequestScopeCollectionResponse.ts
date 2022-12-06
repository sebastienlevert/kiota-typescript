import {AppConsentRequestScopeCollectionResponse} from './index';
import {serializeAppConsentRequestScope} from './serializeAppConsentRequestScope';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAppConsentRequestScopeCollectionResponse(writer: SerializationWriter, appConsentRequestScopeCollectionResponse: AppConsentRequestScopeCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, appConsentRequestScopeCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", appConsentRequestScopeCollectionResponse.value as any, serializeAppConsentRequestScope);
}
