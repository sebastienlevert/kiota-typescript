import {TermsAndConditionsAcceptanceStatusCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTermsAndConditionsAcceptanceStatus} from './serializeTermsAndConditionsAcceptanceStatus';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTermsAndConditionsAcceptanceStatusCollectionResponse(writer: SerializationWriter, termsAndConditionsAcceptanceStatusCollectionResponse: TermsAndConditionsAcceptanceStatusCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, termsAndConditionsAcceptanceStatusCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", termsAndConditionsAcceptanceStatusCollectionResponse.value as any, serializeTermsAndConditionsAcceptanceStatus);
}
