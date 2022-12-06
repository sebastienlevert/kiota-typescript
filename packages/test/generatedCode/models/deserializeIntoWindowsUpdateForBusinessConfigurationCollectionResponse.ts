import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWindowsUpdateForBusinessConfiguration} from './deserializeIntoWindowsUpdateForBusinessConfiguration';
import {WindowsUpdateForBusinessConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsUpdateForBusinessConfigurationCollectionResponse(windowsUpdateForBusinessConfigurationCollectionResponse: WindowsUpdateForBusinessConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windowsUpdateForBusinessConfigurationCollectionResponse),
        "value": n => { windowsUpdateForBusinessConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsUpdateForBusinessConfiguration) as any ; },
    }
}
