import {OutlookTaskGroup} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOutlookTaskGroupFromDiscriminatorValue(parseNode: ParseNode | undefined) : OutlookTaskGroup {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OutlookTaskGroup();
}
