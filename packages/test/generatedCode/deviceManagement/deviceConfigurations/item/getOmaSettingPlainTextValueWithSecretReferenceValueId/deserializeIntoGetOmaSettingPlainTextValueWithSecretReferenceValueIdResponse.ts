import {GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse(getOmaSettingPlainTextValueWithSecretReferenceValueIdResponse: GetOmaSettingPlainTextValueWithSecretReferenceValueIdResponse | undefined = {}) : Record<string, (node: ParseNode) => void> {
    return {
        "value": n => { getOmaSettingPlainTextValueWithSecretReferenceValueIdResponse.value = n.getStringValue() as any ; },
    }
}
