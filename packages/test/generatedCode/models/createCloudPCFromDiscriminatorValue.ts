import {CloudPC} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCloudPCFromDiscriminatorValue(parseNode: ParseNode | undefined) : CloudPC {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CloudPC();
}
