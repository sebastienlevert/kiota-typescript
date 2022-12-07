import {DataLossPreventionPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDataLossPreventionPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DataLossPreventionPolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DataLossPreventionPolicy();
}
