import {PersonAnnualEvent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPersonAnnualEventFromDiscriminatorValue(parseNode: ParseNode | undefined) : PersonAnnualEvent {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PersonAnnualEvent();
}
