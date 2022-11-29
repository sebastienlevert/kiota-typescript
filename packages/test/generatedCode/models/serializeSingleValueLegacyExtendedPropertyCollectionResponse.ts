import {SingleValueLegacyExtendedProperty, SingleValueLegacyExtendedPropertyCollectionResponse} from './index';
import {SingleValueLegacyExtendedProperty} from './singleValueLegacyExtendedProperty';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSingleValueLegacyExtendedPropertyCollectionResponse(writer: SerializationWriter, singleValueLegacyExtendedPropertyCollectionResponse: SingleValueLegacyExtendedPropertyCollectionResponse | undefined = {}) : void {
            writer.writeStringValue("@odata.nextLink", singleValueLegacyExtendedPropertyCollectionResponse.odataNextLink);
            writer.writeCollectionOfObjectValues<SingleValueLegacyExtendedProperty>("value", singleValueLegacyExtendedPropertyCollectionResponse.value);
}
