import {PasswordSingleSignOnSettings} from './index';
import {serializePasswordSingleSignOnField} from './serializePasswordSingleSignOnField';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializePasswordSingleSignOnSettings(writer: SerializationWriter, passwordSingleSignOnSettings: PasswordSingleSignOnSettings | undefined = {}) : void {
            writer.writeCollectionOfObjectValuesFromMethod("fields", passwordSingleSignOnSettings.fields as any, serializePasswordSingleSignOnField);
}
