import {CloudPcRemoteActionResult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCloudPcRemoteActionResultFromDiscriminatorValue(parseNode: ParseNode | undefined) : CloudPcRemoteActionResult {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CloudPcRemoteActionResult();
}
