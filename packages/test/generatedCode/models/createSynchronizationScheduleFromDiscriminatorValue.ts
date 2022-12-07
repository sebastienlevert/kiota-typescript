import {SynchronizationSchedule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSynchronizationScheduleFromDiscriminatorValue(parseNode: ParseNode | undefined) : SynchronizationSchedule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SynchronizationSchedule();
}
