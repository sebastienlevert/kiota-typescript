import {RankedEmailAddress} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRankedEmailAddressFromDiscriminatorValue(parseNode: ParseNode | undefined) : RankedEmailAddress {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RankedEmailAddress();
}
