import {deserializeIntoPrintUsage} from './deserializeIntoPrintUsage';
import {PrintUsageByUser} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintUsageByUser(printUsageByUser: PrintUsageByUser | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoPrintUsage(printUsageByUser),
        "userPrincipalName": n => { printUsageByUser.userPrincipalName = n.getStringValue() as any ; },
    }
}
