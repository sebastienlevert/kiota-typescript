import {LabelPolicy} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLabelPolicyFromDiscriminatorValue(parseNode: ParseNode | undefined) : LabelPolicy {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LabelPolicy();
}
