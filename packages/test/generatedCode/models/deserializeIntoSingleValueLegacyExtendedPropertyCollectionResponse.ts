import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSingleValueLegacyExtendedProperty} from './deserializeIntoSingleValueLegacyExtendedProperty';
import {SingleValueLegacyExtendedPropertyCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSingleValueLegacyExtendedPropertyCollectionResponse(singleValueLegacyExtendedPropertyCollectionResponse: SingleValueLegacyExtendedPropertyCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(singleValueLegacyExtendedPropertyCollectionResponse),
        "value": n => { singleValueLegacyExtendedPropertyCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSingleValueLegacyExtendedProperty) as any ; },
    }
}
