import {UserAnalytics} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserAnalyticsFromDiscriminatorValue(parseNode: ParseNode | undefined) : UserAnalytics {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UserAnalytics();
}
