import {CloudPcConnectivityStatus} from './cloudPcConnectivityStatus';
import {CloudPcConnectivityResult} from './index';
import {serializeCloudPcHealthCheckItem} from './serializeCloudPcHealthCheckItem';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCloudPcConnectivityResult(writer: SerializationWriter, cloudPcConnectivityResult: CloudPcConnectivityResult | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("failedHealthCheckItems", cloudPcConnectivityResult.failedHealthCheckItems as any, serializeCloudPcHealthCheckItem);
            writer.writeEnumValue<CloudPcConnectivityStatus>("status", cloudPcConnectivityResult.status);
            writer.writeDateValue("updatedDateTime", cloudPcConnectivityResult.updatedDateTime);
}
