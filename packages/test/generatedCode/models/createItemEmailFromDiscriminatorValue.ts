import {ItemEmail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createItemEmailFromDiscriminatorValue(parseNode: ParseNode | undefined) : ItemEmail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ItemEmail();
}
