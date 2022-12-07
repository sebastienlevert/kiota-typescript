import {OutlookTaskFolderCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOutlookTaskFolderCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : OutlookTaskFolderCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OutlookTaskFolderCollectionResponse();
}
