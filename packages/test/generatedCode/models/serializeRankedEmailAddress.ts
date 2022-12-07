import {RankedEmailAddress} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRankedEmailAddress(writer: SerializationWriter, rankedEmailAddress: RankedEmailAddress | undefined = {}) : void {
            writer.writeStringValue("address", rankedEmailAddress.address);
            writer.writeNumberValue("rank", rankedEmailAddress.rank);
}
