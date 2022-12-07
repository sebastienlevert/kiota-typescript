import {InformationProtectionLabel} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createInformationProtectionLabelFromDiscriminatorValue(parseNode: ParseNode | undefined) : InformationProtectionLabel {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new InformationProtectionLabel();
}
