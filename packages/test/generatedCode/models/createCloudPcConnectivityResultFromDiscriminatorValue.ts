import {CloudPcConnectivityResult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCloudPcConnectivityResultFromDiscriminatorValue(parseNode: ParseNode | undefined) : CloudPcConnectivityResult {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CloudPcConnectivityResult();
}
