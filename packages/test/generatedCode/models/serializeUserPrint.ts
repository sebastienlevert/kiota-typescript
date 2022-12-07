import {UserPrint} from './index';
import {serializePrinterShare} from './serializePrinterShare';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserPrint(writer: SerializationWriter, userPrint: UserPrint | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("recentPrinterShares", userPrint.recentPrinterShares as any, serializePrinterShare);
}
