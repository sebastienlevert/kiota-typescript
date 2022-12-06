import {SingleValueLegacyExtendedPropertyCollectionResponse} from './index';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeSingleValueLegacyExtendedProperty} from './serializeSingleValueLegacyExtendedProperty';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSingleValueLegacyExtendedPropertyCollectionResponse(writer: SerializationWriter, singleValueLegacyExtendedPropertyCollectionResponse: SingleValueLegacyExtendedPropertyCollectionResponse | undefined = {}) : void {
        serializeBaseCollectionPaginationCountResponse(writer, singleValueLegacyExtendedPropertyCollectionResponse)
            writer.writeCollectionOfObjectValuesFromMethod("value", singleValueLegacyExtendedPropertyCollectionResponse.value as any, serializeSingleValueLegacyExtendedProperty);
}
