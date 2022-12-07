import {Synchronization} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSynchronizationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Synchronization {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Synchronization();
}
