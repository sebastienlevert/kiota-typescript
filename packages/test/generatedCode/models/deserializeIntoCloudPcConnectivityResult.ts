import {CloudPcConnectivityStatus} from './cloudPcConnectivityStatus';
import {deserializeIntoCloudPcHealthCheckItem} from './deserializeIntoCloudPcHealthCheckItem';
import {CloudPcConnectivityResult} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCloudPcConnectivityResult(cloudPcConnectivityResult: CloudPcConnectivityResult | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "failedHealthCheckItems": n => { cloudPcConnectivityResult.failedHealthCheckItems = n.getCollectionOfObjectValuesFromMethod(deserializeIntoCloudPcHealthCheckItem) as any ; },
        "status": n => { cloudPcConnectivityResult.status = n.getEnumValue<CloudPcConnectivityStatus>(CloudPcConnectivityStatus) as any ; },
        "updatedDateTime": n => { cloudPcConnectivityResult.updatedDateTime = n.getDateValue() as any ; },
    }
}
