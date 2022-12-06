import {IosNetworkUsageRule} from './index';
import {serializeAppListItem} from './serializeAppListItem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIosNetworkUsageRule(writer: SerializationWriter, iosNetworkUsageRule: IosNetworkUsageRule | undefined = {}) : void {
            writer.writeBooleanValue("cellularDataBlocked", iosNetworkUsageRule.cellularDataBlocked);
            writer.writeBooleanValue("cellularDataBlockWhenRoaming", iosNetworkUsageRule.cellularDataBlockWhenRoaming);
            writer.writeCollectionOfObjectValuesFromMethod("managedApps", iosNetworkUsageRule.managedApps as any, serializeAppListItem);
            writer.writeStringValue("@odata.type", iosNetworkUsageRule.odataType);
}
