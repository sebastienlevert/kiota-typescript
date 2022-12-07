import {PasswordSingleSignOnField} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePasswordSingleSignOnField(writer: SerializationWriter, passwordSingleSignOnField: PasswordSingleSignOnField | undefined = {}) : void {
            writer.writeStringValue("customizedLabel", passwordSingleSignOnField.customizedLabel);
            writer.writeStringValue("defaultLabel", passwordSingleSignOnField.defaultLabel);
            writer.writeStringValue("fieldId", passwordSingleSignOnField.fieldId);
            writer.writeStringValue("type", passwordSingleSignOnField.type);
}
