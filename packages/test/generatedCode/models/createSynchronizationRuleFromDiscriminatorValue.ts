import {SynchronizationRule} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSynchronizationRuleFromDiscriminatorValue(parseNode: ParseNode | undefined) : SynchronizationRule {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SynchronizationRule();
}
