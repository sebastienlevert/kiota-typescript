import {TimeCardEvent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeCardEventFromDiscriminatorValue(parseNode: ParseNode | undefined) : TimeCardEvent {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TimeCardEvent();
}
