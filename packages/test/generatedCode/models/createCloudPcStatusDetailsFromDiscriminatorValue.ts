import {CloudPcStatusDetails} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCloudPcStatusDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined) : CloudPcStatusDetails {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CloudPcStatusDetails();
}
