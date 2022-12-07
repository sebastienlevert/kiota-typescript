import {TypedEmailAddress} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTypedEmailAddressFromDiscriminatorValue(parseNode: ParseNode | undefined) : TypedEmailAddress {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TypedEmailAddress();
}
