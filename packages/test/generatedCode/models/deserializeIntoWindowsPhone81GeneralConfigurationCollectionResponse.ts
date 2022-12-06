import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWindowsPhone81GeneralConfiguration} from './deserializeIntoWindowsPhone81GeneralConfiguration';
import {WindowsPhone81GeneralConfigurationCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsPhone81GeneralConfigurationCollectionResponse(windowsPhone81GeneralConfigurationCollectionResponse: WindowsPhone81GeneralConfigurationCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windowsPhone81GeneralConfigurationCollectionResponse),
        "value": n => { windowsPhone81GeneralConfigurationCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsPhone81GeneralConfiguration) as any ; },
    }
}
