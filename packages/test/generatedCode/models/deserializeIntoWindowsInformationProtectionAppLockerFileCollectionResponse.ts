import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {deserializeIntoWindowsInformationProtectionAppLockerFile} from './deserializeIntoWindowsInformationProtectionAppLockerFile';
import {WindowsInformationProtectionAppLockerFileCollectionResponse} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionAppLockerFileCollectionResponse(windowsInformationProtectionAppLockerFileCollectionResponse: WindowsInformationProtectionAppLockerFileCollectionResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(windowsInformationProtectionAppLockerFileCollectionResponse),
        "value": n => { windowsInformationProtectionAppLockerFileCollectionResponse.value = n.getCollectionOfObjectValuesFromMethod(deserializeIntoWindowsInformationProtectionAppLockerFile) as any ; },
    }
}
