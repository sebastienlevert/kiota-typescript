import {deserializeIntoAndroidWorkProfileCustomConfiguration} from './deserializeIntoAndroidWorkProfileCustomConfiguration';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AndroidWorkProfileCustomConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidWorkProfileCustomConfigurationCollectionResponse(androidWorkProfileCustomConfigurationCollectionResponse: AndroidWorkProfileCustomConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(androidWorkProfileCustomConfigurationCollectionResponse),
        "value": n => { androidWorkProfileCustomConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAndroidWorkProfileCustomConfiguration) as any ; },
    }
}
