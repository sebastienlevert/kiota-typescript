import {deserializeIntoBaseCollectionPaginationCountResponse} from '../../models/deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoExtensionProperty} from '../../models/deserializeIntoExtensionProperty';
import {GetAvailableExtensionPropertiesResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetAvailableExtensionPropertiesResponse(getAvailableExtensionPropertiesResponse: GetAvailableExtensionPropertiesResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(getAvailableExtensionPropertiesResponse),
        "value": n => { getAvailableExtensionPropertiesResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoExtensionProperty) as any ; },
    }
}
