import {SynchronizationTaskExecution} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSynchronizationTaskExecutionFromDiscriminatorValue(parseNode: ParseNode | undefined) : SynchronizationTaskExecution {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SynchronizationTaskExecution();
}
