import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoSharedPCConfiguration} from './deserializeIntoSharedPCConfiguration';
import {SharedPCConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSharedPCConfigurationCollectionResponse(sharedPCConfigurationCollectionResponse: SharedPCConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(sharedPCConfigurationCollectionResponse),
        "value": n => { sharedPCConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoSharedPCConfiguration) as any ; },
    }
}
