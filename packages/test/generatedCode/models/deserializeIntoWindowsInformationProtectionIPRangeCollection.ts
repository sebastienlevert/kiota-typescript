import {deserializeIntoIpRange} from './deserializeIntoIpRange';
import {WindowsInformationProtectionIPRangeCollection} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWindowsInformationProtectionIPRangeCollection(windowsInformationProtectionIPRangeCollection: WindowsInformationProtectionIPRangeCollection | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { windowsInformationProtectionIPRangeCollection.displayName = n.getStringValue() as any ; },
        "@odata.type": n => { windowsInformationProtectionIPRangeCollection.odataType = n.getStringValue() as any ; },
        "ranges": n => { windowsInformationProtectionIPRangeCollection.ranges = n.getCollectionOfObjectValuesFromMethod(deserializeIntoIpRange) as any ; },
    }
}
