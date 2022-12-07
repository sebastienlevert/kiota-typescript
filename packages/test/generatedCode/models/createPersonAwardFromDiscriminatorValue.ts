import {PersonAward} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPersonAwardFromDiscriminatorValue(parseNode: ParseNode | undefined) : PersonAward {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PersonAward();
}
