import {OutlookTaskCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOutlookTaskCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : OutlookTaskCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OutlookTaskCollectionResponse();
}
