import {OutlookTask} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOutlookTaskFromDiscriminatorValue(parseNode: ParseNode | undefined) : OutlookTask {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OutlookTask();
}
