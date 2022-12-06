import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWindows10EndpointProtectionConfiguration} from './deserializeIntoWindows10EndpointProtectionConfiguration';
import {Windows10EndpointProtectionConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindows10EndpointProtectionConfigurationCollectionResponse(windows10EndpointProtectionConfigurationCollectionResponse: Windows10EndpointProtectionConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windows10EndpointProtectionConfigurationCollectionResponse),
        "value": n => { windows10EndpointProtectionConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindows10EndpointProtectionConfiguration) as any ; },
    }
}
