import {WebAccount} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWebAccountFromDiscriminatorValue(parseNode: ParseNode | undefined) : WebAccount {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new WebAccount();
}
