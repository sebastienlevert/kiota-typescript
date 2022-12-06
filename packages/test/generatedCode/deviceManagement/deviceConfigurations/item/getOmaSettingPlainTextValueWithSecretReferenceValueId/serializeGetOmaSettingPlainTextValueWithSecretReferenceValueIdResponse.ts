import {GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse(writer: SerializationWriter, getOmaSettingPlainTextValueWithSecretReferenceValueIdResponse: GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse | undefined = {}) : void {
            writer.writeStringValue("value", getOmaSettingPlainTextValueWithSecretReferenceValueIdResponse.value);
}
