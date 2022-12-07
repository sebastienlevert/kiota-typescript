import {OutlookTaskFolder} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOutlookTaskFolderFromDiscriminatorValue(parseNode: ParseNode | undefined) : OutlookTaskFolder {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OutlookTaskFolder();
}
