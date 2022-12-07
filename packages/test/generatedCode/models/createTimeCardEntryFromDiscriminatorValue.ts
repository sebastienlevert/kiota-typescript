import {TimeCardEntry} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeCardEntryFromDiscriminatorValue(parseNode: ParseNode | undefined) : TimeCardEntry {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TimeCardEntry();
}
