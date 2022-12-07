import {LabelActionBase} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLabelActionBaseFromDiscriminatorValue(parseNode: ParseNode | undefined) : LabelActionBase {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new LabelActionBase();
}
