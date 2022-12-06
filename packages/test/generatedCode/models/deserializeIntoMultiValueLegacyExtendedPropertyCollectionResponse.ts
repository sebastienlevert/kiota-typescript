import {deserializeIntoMultiValueLegacyExtendedProperty} from './deserializeIntoMultiValueLegacyExtendedProperty';
import {MultiValueLegacyExtendedPropertyCollectionResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMultiValueLegacyExtendedPropertyCollectionResponse(multiValueLegacyExtendedPropertyCollectionResponse: MultiValueLegacyExtendedPropertyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.nextLink": n => { multiValueLegacyExtendedPropertyCollectionResponse.odataNextLink = n.getStringValue() as any ; },
        "value": n => { multiValueLegacyExtendedPropertyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoMultiValueLegacyExtendedProperty) as any ; },
    }
}
