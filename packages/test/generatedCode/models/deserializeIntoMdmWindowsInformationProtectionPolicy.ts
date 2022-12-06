import {deserializeIntoWindowsInformationProtection} from './deserializeIntoWindowsInformationProtection';
import {MdmWindowsInformationProtectionPolicy} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMdmWindowsInformationProtectionPolicy(mdmWindowsInformationProtectionPolicy: MdmWindowsInformationProtectionPolicy | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoWindowsInformationProtection(mdmWindowsInformationProtectionPolicy),
    }
}
