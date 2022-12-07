import {CreateAction} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateActionFromDiscriminatorValue(parseNode: ParseNode | undefined) : CreateAction {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CreateAction();
}
