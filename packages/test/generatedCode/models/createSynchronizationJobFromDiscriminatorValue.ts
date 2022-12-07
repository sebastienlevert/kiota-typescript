import {SynchronizationJob} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSynchronizationJobFromDiscriminatorValue(parseNode: ParseNode | undefined) : SynchronizationJob {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SynchronizationJob();
}
