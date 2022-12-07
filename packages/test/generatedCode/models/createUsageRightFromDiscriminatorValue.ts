import {UsageRight} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUsageRightFromDiscriminatorValue(parseNode: ParseNode | undefined) : UsageRight {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UsageRight();
}
