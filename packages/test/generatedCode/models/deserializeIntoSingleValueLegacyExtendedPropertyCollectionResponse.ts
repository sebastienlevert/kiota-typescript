import {deserializeIntoSingleValueLegacyExtendedProperty} from './deserializeIntoSingleValueLegacyExtendedProperty';
import {SingleValueLegacyExtendedPropertyCollectionResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSingleValueLegacyExtendedPropertyCollectionResponse(singleValueLegacyExtendedPropertyCollectionResponse: SingleValueLegacyExtendedPropertyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.nextLink": n => { singleValueLegacyExtendedPropertyCollectionResponse.odataNextLink = n.getStringValue() as any ; },
        "value": n => { singleValueLegacyExtendedPropertyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSingleValueLegacyExtendedProperty) as any ; },
    }
}
