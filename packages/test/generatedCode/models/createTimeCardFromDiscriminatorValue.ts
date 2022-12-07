import {TimeCard} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeCardFromDiscriminatorValue(parseNode: ParseNode | undefined) : TimeCard {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TimeCard();
}
