import {CloudPcConnectivityEventResult} from './cloudPcConnectivityEventResult';
import {CloudPcHealthCheckItem} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCloudPcHealthCheckItem(writer: SerializationWriter, cloudPcHealthCheckItem: CloudPcHealthCheckItem | undefined = {}) : void {
            writer.writeStringValue("additionalDetails", cloudPcHealthCheckItem.additionalDetails);
            writer.writeStringValue("displayName", cloudPcHealthCheckItem.displayName);
            writer.writeDateValue("lastHealthCheckDateTime", cloudPcHealthCheckItem.lastHealthCheckDateTime);
            writer.writeEnumValue<CloudPcConnectivityEventResult>("result", cloudPcHealthCheckItem.result);
}
