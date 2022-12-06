import {WindowsInformationProtectionIPRangeCollection} from './index';
import {serializeIpRange} from './serializeIpRange';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWindowsInformationProtectionIPRangeCollection(writer: SerializationWriter, windowsInformationProtectionIPRangeCollection: WindowsInformationProtectionIPRangeCollection | undefined = {}) : void {
            writer.writeStringValue("displayName", windowsInformationProtectionIPRangeCollection.displayName);
            writer.writeStringValue("@odata.type", windowsInformationProtectionIPRangeCollection.odataType);
            writer.writeCollectionOfObjectValuesFromMethod("ranges", windowsInformationProtectionIPRangeCollection.ranges as any, serializeIpRange);
}
