import {PersonInterest} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPersonInterestFromDiscriminatorValue(parseNode: ParseNode | undefined) : PersonInterest {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PersonInterest();
}
