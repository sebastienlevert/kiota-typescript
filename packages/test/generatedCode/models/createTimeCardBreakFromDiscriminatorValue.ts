import {TimeCardBreak} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createTimeCardBreakFromDiscriminatorValue(parseNode: ParseNode | undefined) : TimeCardBreak {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new TimeCardBreak();
}
