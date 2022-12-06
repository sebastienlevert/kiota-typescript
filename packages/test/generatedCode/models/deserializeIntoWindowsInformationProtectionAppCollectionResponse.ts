import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWindowsInformationProtectionApp} from './deserializeIntoWindowsInformationProtectionApp';
import {WindowsInformationProtectionAppCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionAppCollectionResponse(windowsInformationProtectionAppCollectionResponse: WindowsInformationProtectionAppCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windowsInformationProtectionAppCollectionResponse),
        "value": n => { windowsInformationProtectionAppCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsInformationProtectionApp) as any ; },
    }
}
