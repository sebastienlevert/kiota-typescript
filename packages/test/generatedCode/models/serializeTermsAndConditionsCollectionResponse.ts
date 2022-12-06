import {TermsAndConditionsCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeTermsAndConditions} from './serializeTermsAndConditions';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTermsAndConditionsCollectionResponse(writer: SerializationWriter, termsAndConditionsCollectionResponse: TermsAndConditionsCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, termsAndConditionsCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", termsAndConditionsCollectionResponse.value as any, serializeTermsAndConditions);
}
