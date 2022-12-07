import {CloudPcLoginResult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCloudPcLoginResultFromDiscriminatorValue(parseNode: ParseNode | undefined) : CloudPcLoginResult {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CloudPcLoginResult();
}
