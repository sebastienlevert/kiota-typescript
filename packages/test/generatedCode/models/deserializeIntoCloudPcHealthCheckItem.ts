import {CloudPcConnectivityEventResult} from './cloudPcConnectivityEventResult';
import {CloudPcHealthCheckItem} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCloudPcHealthCheckItem(cloudPcHealthCheckItem: CloudPcHealthCheckItem | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "additionalDetails": n => { cloudPcHealthCheckItem.additionalDetails = n.getStringValue() as any ; },
        "displayName": n => { cloudPcHealthCheckItem.displayName = n.getStringValue() as any ; },
        "lastHealthCheckDateTime": n => { cloudPcHealthCheckItem.lastHealthCheckDateTime = n.getDateValue() as any ; },
        "result": n => { cloudPcHealthCheckItem.result = n.getEnumValue<CloudPcConnectivityEventResult>(CloudPcConnectivityEventResult) as any ; },
    }
}
