import {PrintUsageByUser} from './index';
import {serializePrintUsage} from './serializePrintUsage';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePrintUsageByUser(writer: SerializationWriter, printUsageByUser: PrintUsageByUser | undefined = {}) : void {
        serializePrintUsage(writer, printUsageByUser)
            writer.writeStringValue("userPrincipalName", printUsageByUser.userPrincipalName);
}
