import {HardwareInformation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHardwareInformationFromDiscriminatorValue(parseNode: ParseNode | undefined) : HardwareInformation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new HardwareInformation();
}
