import {MultiValueLegacyExtendedProperty, MultiValueLegacyExtendedPropertyCollectionResponse} from './index';
import {MultiValueLegacyExtendedProperty} from './multiValueLegacyExtendedProperty';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMultiValueLegacyExtendedPropertyCollectionResponse(writer: SerializationWriter, multiValueLegacyExtendedPropertyCollectionResponse: MultiValueLegacyExtendedPropertyCollectionResponse | undefined = {}) : void {
            writer.writeStringValue("@odata.nextLink", multiValueLegacyExtendedPropertyCollectionResponse.odataNextLink);
            writer.writeCollectionOfObjectValues<MultiValueLegacyExtendedProperty>("value", multiValueLegacyExtendedPropertyCollectionResponse.value);
}
