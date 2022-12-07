import {SynchronizationProgress} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSynchronizationProgressFromDiscriminatorValue(parseNode: ParseNode | undefined) : SynchronizationProgress {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SynchronizationProgress();
}
