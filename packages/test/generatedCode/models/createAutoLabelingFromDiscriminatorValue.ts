import {AutoLabeling} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAutoLabelingFromDiscriminatorValue(parseNode: ParseNode | undefined) : AutoLabeling {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AutoLabeling();
}
