import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWindowsPhone81CustomConfiguration} from './deserializeIntoWindowsPhone81CustomConfiguration';
import {WindowsPhone81CustomConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsPhone81CustomConfigurationCollectionResponse(windowsPhone81CustomConfigurationCollectionResponse: WindowsPhone81CustomConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windowsPhone81CustomConfigurationCollectionResponse),
        "value": n => { windowsPhone81CustomConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsPhone81CustomConfiguration) as any ; },
    }
}
