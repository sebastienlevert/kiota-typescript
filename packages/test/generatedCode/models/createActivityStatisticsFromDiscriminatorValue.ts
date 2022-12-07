import {ActivityStatistics} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createActivityStatisticsFromDiscriminatorValue(parseNode: ParseNode | undefined) : ActivityStatistics {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ActivityStatistics();
}
