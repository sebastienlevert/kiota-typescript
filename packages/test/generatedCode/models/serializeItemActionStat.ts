import {ItemActionStat} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeItemActionStat(writer: SerializationWriter, itemActionStat: ItemActionStat | undefined = {}) : void {
            writer.writeNumberValue("actionCount", itemActionStat.actionCount);
            writer.writeNumberValue("actorCount", itemActionStat.actorCount);
}
