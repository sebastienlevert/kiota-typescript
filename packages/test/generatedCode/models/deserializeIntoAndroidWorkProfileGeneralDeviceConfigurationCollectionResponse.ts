import {deserializeIntoAndroidWorkProfileGeneralDeviceConfiguration} from './deserializeIntoAndroidWorkProfileGeneralDeviceConfiguration';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {AndroidWorkProfileGeneralDeviceConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAndroidWorkProfileGeneralDeviceConfigurationCollectionResponse(androidWorkProfileGeneralDeviceConfigurationCollectionResponse: AndroidWorkProfileGeneralDeviceConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(androidWorkProfileGeneralDeviceConfigurationCollectionResponse),
        "value": n => { androidWorkProfileGeneralDeviceConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAndroidWorkProfileGeneralDeviceConfiguration) as any ; },
    }
}
