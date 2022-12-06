import {MultiValueLegacyExtendedPropertyCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeMultiValueLegacyExtendedProperty} from './serializeMultiValueLegacyExtendedProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMultiValueLegacyExtendedPropertyCollectionResponse(writer: SerializationWriter, multiValueLegacyExtendedPropertyCollectionResponse: MultiValueLegacyExtendedPropertyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, multiValueLegacyExtendedPropertyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", multiValueLegacyExtendedPropertyCollectionResponse.value as any, serializeMultiValueLegacyExtendedProperty);
}
