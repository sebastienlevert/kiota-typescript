import {MdmWindowsInformationProtectionPolicy} from './index';
import {serializeWindowsInformationProtection} from './serializeWindowsInformationProtection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMdmWindowsInformationProtectionPolicy(writer: SerializationWriter, mdmWindowsInformationProtectionPolicy: MdmWindowsInformationProtectionPolicy | undefined = {}) : void {
        serializeWindowsInformationProtection(writer, mdmWindowsInformationProtectionPolicy)
}
