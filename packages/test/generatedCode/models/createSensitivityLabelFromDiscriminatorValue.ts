import {SensitivityLabel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSensitivityLabelFromDiscriminatorValue(parseNode: ParseNode | undefined) : SensitivityLabel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SensitivityLabel();
}
