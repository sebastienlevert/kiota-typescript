import {PositionDetail} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPositionDetailFromDiscriminatorValue(parseNode: ParseNode | undefined) : PositionDetail {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PositionDetail();
}
