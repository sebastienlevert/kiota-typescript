import {deserializeIntoAppListItem} from './deserializeIntoAppListItem';
import {IosNetworkUsageRule} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoIosNetworkUsageRule(iosNetworkUsageRule: IosNetworkUsageRule | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "cellularDataBlocked": n => { iosNetworkUsageRule.cellularDataBlocked = n.getBooleanValue() as any ; },
        "cellularDataBlockWhenRoaming": n => { iosNetworkUsageRule.cellularDataBlockWhenRoaming = n.getBooleanValue() as any ; },
        "managedApps": n => { iosNetworkUsageRule.managedApps = n.getCollectionOfObjectValuesFromMethod(deserializeIntoAppListItem) as any ; },
        "@odata.type": n => { iosNetworkUsageRule.odataType = n.getStringValue() as any ; },
    }
}
