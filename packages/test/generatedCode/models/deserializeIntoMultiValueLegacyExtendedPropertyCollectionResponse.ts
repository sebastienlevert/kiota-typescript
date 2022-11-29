import {MultiValueLegacyExtendedProperty, MultiValueLegacyExtendedPropertyCollectionResponse} from './index';
import {MultiValueLegacyExtendedProperty} from './multiValueLegacyExtendedProperty';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMultiValueLegacyExtendedPropertyCollectionResponse(multiValueLegacyExtendedPropertyCollectionResponse: MultiValueLegacyExtendedPropertyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.nextLink": n => { MultiValueLegacyExtendedPropertyCollectionResponse.odataNextLink = n.getStringValue(); },
        "value": n => { MultiValueLegacyExtendedPropertyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod<MultiValueLegacyExtendedProperty>(deserializeIntoMultiValueLegacyExtendedProperty); },
    }
}
