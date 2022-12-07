import {PublicErrorDetail} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePublicErrorDetail(writer: SerializationWriter, publicErrorDetail: PublicErrorDetail | undefined = {}) : void {
            writer.writeStringValue("code", publicErrorDetail.code);
            writer.writeStringValue("message", publicErrorDetail.message);
            writer.writeStringValue("target", publicErrorDetail.target);
}
