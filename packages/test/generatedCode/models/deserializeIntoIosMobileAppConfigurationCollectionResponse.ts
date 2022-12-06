import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoIosMobileAppConfiguration} from './deserializeIntoIosMobileAppConfiguration';
import {IosMobileAppConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosMobileAppConfigurationCollectionResponse(iosMobileAppConfigurationCollectionResponse: IosMobileAppConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(iosMobileAppConfigurationCollectionResponse),
        "value": n => { iosMobileAppConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIosMobileAppConfiguration) as any ; },
    }
}
