import {ParentLabelDetails} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createParentLabelDetailsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ParentLabelDetails {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ParentLabelDetails();
}
