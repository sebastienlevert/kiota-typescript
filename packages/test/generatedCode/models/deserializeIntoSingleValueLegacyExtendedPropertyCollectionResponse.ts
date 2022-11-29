import {SingleValueLegacyExtendedProperty, SingleValueLegacyExtendedPropertyCollectionResponse} from './index';
import {SingleValueLegacyExtendedProperty} from './singleValueLegacyExtendedProperty';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSingleValueLegacyExtendedPropertyCollectionResponse(singleValueLegacyExtendedPropertyCollectionResponse: SingleValueLegacyExtendedPropertyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.nextLink": n => { SingleValueLegacyExtendedPropertyCollectionResponse.odataNextLink = n.getStringValue(); },
        "value": n => { SingleValueLegacyExtendedPropertyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod<SingleValueLegacyExtendedProperty>(deserializeIntoSingleValueLegacyExtendedProperty); },
    }
}
