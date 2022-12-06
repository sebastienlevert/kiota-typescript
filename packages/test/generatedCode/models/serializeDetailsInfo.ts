import {DetailsInfo} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeDetailsInfo(writer: SerializationWriter, detailsInfo: DetailsInfo | undefined = {}) : void {
            writer.writeStringValue("@odata.type", detailsInfo.odataType);
}
