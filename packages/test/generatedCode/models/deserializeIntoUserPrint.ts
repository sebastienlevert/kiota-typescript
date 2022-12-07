import {deserializeIntoPrinterShare} from './deserializeIntoPrinterShare';
import {UserPrint} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserPrint(userPrint: UserPrint | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "recentPrinterShares": n => { userPrint.recentPrinterShares = n.getCollectionOfObjectValuesFromMethod(deserializeIntoPrinterShare) as any ; },
    }
}
